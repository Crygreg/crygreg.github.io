#!/usr/bin/env python3
"""Laedt die Discord-Avatare der Teammitglieder ueber die Discord REST API.

Benötigt die Umgebungsvariable DISCORD_BOT_TOKEN. Der Bot muss sich auf
keinem Server befinden — GET /users/{id} funktioniert mit jedem gueltigen
Bot-Token.

Schreibt jedes Avatar als images/avatars/<user-id>.<ext> plus ein
manifest.json (user-id -> Dateiname), damit die Seite die richtige
Endung (png/gif) kennt. Nur geaenderte Dateien werden neu geschrieben,
damit der Workflow bedingt committen kann.
"""
import json
import os
import sys
import urllib.request

API = "https://discord.com/api/v10"
CDN = "https://cdn.discordapp.com"
OUT = os.path.join("images", "avatars")

USER_IDS = [
    "319521590180184085",   # Crygreg
    "1120503192183119923",  # Alistair
    "810877335300472852",   # Ben
    "413753477110431746",   # Midgard
]


def get(url, token=None):
    req = urllib.request.Request(url, headers={"User-Agent": "ae-avatar-sync"})
    if token:
        req.add_header("Authorization", "Bot " + token)
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()


def write_if_changed(path, data):
    if os.path.exists(path):
        with open(path, "rb") as f:
            if f.read() == data:
                return False
    with open(path, "wb") as f:
        f.write(data)
    return True


def main():
    token = os.environ.get("DISCORD_BOT_TOKEN")
    if not token:
        sys.exit("DISCORD_BOT_TOKEN is not set")

    os.makedirs(OUT, exist_ok=True)

    mpath = os.path.join(OUT, "manifest.json")
    old_manifest = {}
    if os.path.exists(mpath):
        with open(mpath, "r", encoding="utf-8") as f:
            old_manifest = json.load(f)

    manifest = {}
    changed = False

    for uid in USER_IDS:
        user = json.loads(get("{}/users/{}".format(API, uid), token))
        avatar = user.get("avatar")
        if not avatar:
            print("{}: no custom avatar, skipping".format(uid))
            continue
        ext = "gif" if avatar.startswith("a_") else "png"
        fname = "{}.{}".format(uid, ext)
        path = os.path.join(OUT, fname)
        old = old_manifest.get(uid) or {}
        if isinstance(old, str):  # Legacy-Format: {"id": "datei.png"}
            old = {"file": old}
        # Avatar-Hash unveraendert und Datei vorhanden -> Download ueberspringen
        if old.get("avatar") == avatar and old.get("file") == fname \
                and os.path.exists(path):
            print("{}: unchanged (hash match)".format(uid))
        else:
            data = get("{}/avatars/{}/{}.{}?size=256".format(CDN, uid, avatar, ext))
            if write_if_changed(path, data):
                changed = True
                print("{}: updated {} ({} bytes)".format(uid, fname, len(data)))
            else:
                print("{}: unchanged".format(uid))
        manifest[uid] = {"file": fname, "avatar": avatar}

    # Dateien entfernen, die nicht mehr im Manifest stehen (z. B. gif -> png)
    for fname in os.listdir(OUT):
        if fname == "manifest.json":
            continue
        uid = fname.split(".")[0]
        entry = manifest.get(uid) or {}
        if entry.get("file") != fname:
            os.remove(os.path.join(OUT, fname))
            changed = True
            print("removed stale {}".format(fname))

    mdata = json.dumps(manifest, indent=2, sort_keys=True).encode()
    if write_if_changed(mpath, mdata):
        changed = True

    print("changed:", changed)
    gh_out = os.environ.get("GITHUB_OUTPUT")
    if gh_out:
        with open(gh_out, "a") as f:
            f.write("changed={}\n".format("true" if changed else "false"))


if __name__ == "__main__":
    main()
