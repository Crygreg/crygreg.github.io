#!/usr/bin/env python3
"""Holt Posts aus dem Discord-News-Channel und baut Media-Entry-Rohlinge.

Benötigt:
  DISCORD_BOT_TOKEN   – Bot-Token (derselbe wie in fetch-avatars.py)
  DISCORD_CHANNEL_ID  – ID des News-Channels (Env oder --channel)

Der Bot muss auf dem Server sein und im Channel lesen duerfen
(View Channel + Read Message History).

Was das Skript tut:
  - Nachrichten seit dem letzten Lauf (oder --since) lesen
  - Bild-Attachments als PNG-Master nach images/G2AE/<DD-MM-YYYY>-N.png
    speichern (danach tools/optimize-screenshots.py laufen lassen)
  - YouTube-Links erkennen (watch/shorts/youtu.be)
  - Draft-HTML + site.js-Key-Vorschlaege nach tools/posts-out/<ts>.txt

Was es bewusst NICHT tut: Titel vergeben, uebersetzen, gothic2.html/site.js
patchen — das bleibt Review-Arbeit. Die Drafts enthalten den Originaltext.

Aufruf:
  python tools/fetch-posts.py --channel <ID> [--since 2025-11-01] [--all]
  python tools/fetch-posts.py --channel <ID> --author 319521590180184085
"""
import argparse
import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone

API = "https://discord.com/api/v10"
IMG_DIR = os.path.join("images", "G2AE")
OUT_DIR = os.path.join("tools", "posts-out")
STATE = os.path.join(OUT_DIR, "state.json")

YT_RE = re.compile(
    r"https?://(?:www\.)?(?:youtube\.com/(?:watch\?[^\s]*v=|shorts/)|youtu\.be/)"
    r"([A-Za-z0-9_-]{6,})")
IMG_EXT = (".png", ".jpg", ".jpeg", ".webp", ".gif")
DISCORD_EMOJI = re.compile(r"<a?:[A-Za-z0-9_]+:\d+>")   # <:name:id>
TEXT_EMOJI = re.compile(r":[A-Za-z0-9_]+:")             # :milten: etc.


def get(url, token):
    req = urllib.request.Request(url, headers={
        "User-Agent": "ae-post-sync",
        "Authorization": "Bot " + token,
    })
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def fetch_messages(channel_id, token, after_id=None, limit=100):
    """Seitenweise Messages, neueste zuerst. `after` = nur neuere als ID."""
    out = []
    before = None
    while True:
        url = "{}/channels/{}/messages?limit={}".format(API, channel_id, limit)
        if before:
            url += "&before=" + before
        if after_id:
            url += "&after=" + after_id
        batch = json.loads(get(url, token))
        if not batch:
            break
        out.extend(batch)
        before = batch[-1]["id"]
        if len(batch) < limit:
            break
    out.reverse()  # aelteste zuerst
    return out


def clean_text(content):
    """Discord-Markup entfernen: Custom-Emoji, :shortcode:, Mentions-Syntax."""
    text = DISCORD_EMOJI.sub("", content)
    text = TEXT_EMOJI.sub("", text)
    # Zeilen zu Absaetzen buendeln (doppelte Zeilenumbrueche = neuer Absatz)
    paras = [p.strip().replace("\n", "<br>") for p in
             re.split(r"\n\s*\n", text) if p.strip()]
    return "".join("<p>{}</p>".format(p) for p in paras)


def save_attachment(att, date_str, idx):
    """Attachment als PNG-Master speichern. Gibt Basisname zurueck."""
    url = att["url"]
    ctype = att.get("content_type", "")
    if "image" not in ctype and not url.lower().split("?")[0].endswith(IMG_EXT):
        return None
    raw = get(url, None)
    name = "{}-{}.png".format(date_str, idx)
    path = os.path.join(IMG_DIR, name)
    if os.path.exists(path):
        print("  {} exists, skipping download".format(name))
    else:
        with open(path, "wb") as f:
            f.write(raw)
        print("  saved {} ({} KB)".format(name, len(raw) // 1024))
    return name


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--channel", default=os.environ.get("DISCORD_CHANNEL_ID"))
    ap.add_argument("--author", help="nur Posts dieser User-ID (z. B. Crygreg)")
    ap.add_argument("--since", help="YYYY-MM-DD – aeltere Posts ignorieren")
    ap.add_argument("--all", action="store_true",
                    help="State ignorieren, alles im Fenster neu ausgeben")
    args = ap.parse_args()

    token = os.environ.get("DISCORD_BOT_TOKEN")
    if not token:
        sys.exit("DISCORD_BOT_TOKEN is not set")
    if not args.channel:
        sys.exit("DISCORD_CHANNEL_ID env or --channel required")

    os.makedirs(IMG_DIR, exist_ok=True)
    os.makedirs(OUT_DIR, exist_ok=True)

    state = {"seen": []}
    if os.path.exists(STATE) and not args.all:
        with open(STATE, encoding="utf-8") as f:
            state = json.load(f)
    seen = set(state.get("seen", []))

    since_ts = None
    if args.since:
        since_ts = datetime.strptime(args.since, "%Y-%m-%d") \
            .replace(tzinfo=timezone.utc).timestamp()

    if os.environ.get("DEBUG_DUMP"):
        ch = json.loads(get("{}/channels/{}".format(API, args.channel), token))
        print("channel: name={} type={} parent={}".format(
            ch.get("name"), ch.get("type"), ch.get("parent_id")))

    msgs = fetch_messages(args.channel, token)
    print("{} messages fetched".format(len(msgs)))
    if msgs and os.environ.get("DEBUG_DUMP"):
        print(json.dumps(msgs[0], ensure_ascii=False, indent=1)[:4000])

    drafts = []
    for m in msgs:
        if m["id"] in seen:
            continue
        if args.author and m["author"]["id"] != args.author:
            continue
        if m.get("type") not in (0, 19, 21):   # nur normale/reply/channel-pin
            continue
        ts = datetime.fromisoformat(m["timestamp"].replace("Z", "+00:00"))
        if since_ts and ts.timestamp() < since_ts:
            continue
        content = (m.get("content") or "").strip()
        atts = m.get("attachments") or []
        print("  [{}] type={} author={} content={}chars atts={} embeds={}".format(
            m["id"], m.get("type"), m["author"]["username"],
            len(content), len(atts), len(m.get("embeds") or [])))
        if os.environ.get("DEBUG_DUMP"):
            print("    >>> " + content[:300].replace("\n", " | "))
        yt = [m2.group(1) for m2 in YT_RE.finditer(content)]
        # interessant = Text, Bilder oder Links; leere System-Posts raus
        if not content and not atts:
            continue

        date_str = ts.strftime("%d-%m-%Y")
        saved = []
        for i, att in enumerate(atts, 1):
            name = save_attachment(att, date_str, i)
            if name:
                saved.append(name)

        # Links ohne YouTube (z. B. Presse) als outlinks merken
        other_links = [u for u in re.findall(r"https?://\S+", content)
                       if not YT_RE.match(u)]
        # URLs aus dem Text entfernen (sie werden eigene Cards/Links)
        text_only = re.sub(r"https?://\S+", "", content).strip()
        text_only = re.sub(r"\(\s*\)|\[\s*\]", "", text_only)

        drafts.append({
            "id": m["id"],
            "date": date_str,
            "date_de": ts.strftime("%d.%m.%Y"),
            "author": m["author"].get("global_name") or m["author"]["username"],
            "text_html": clean_text(text_only),
            "images": saved,
            "youtube": yt,
            "links": other_links,
        })

    if not drafts:
        print("nothing new")
        return

    report = []
    for d in drafts:
        lines = ["=" * 60,
                 "{}  ({})".format(d["date_de"], d["author"]),
                 "msg-id: " + d["id"],
                 "text: " + (d["text_html"] or "(none)")]
        if d["images"]:
            lines.append("images: " + ", ".join(d["images"]))
        if d["youtube"]:
            lines.append("youtube-ids: " + ", ".join(d["youtube"]))
        if d["links"]:
            lines.append("links: " + ", ".join(d["links"]))
        report.append("\n".join(lines))

    out_path = os.path.join(OUT_DIR, "drafts.txt")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(report))
    print("{} drafts -> {}".format(len(drafts), out_path))

    state["seen"] = sorted(seen | {d["id"] for d in drafts})
    with open(STATE, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)


if __name__ == "__main__":
    main()
