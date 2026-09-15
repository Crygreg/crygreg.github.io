#!/usr/bin/env python3
"""Laedt Video-Card-Thumbnails von i.ytimg.com nach images/yt/<video-id>.jpg.

Lokale Thumbs vermeiden YouTube-Requests beim Seitenaufruf (Privacy) und
umgehen CDN-Eigenheiten (fehlende Tiers, 120x90-Platzhalter mit Status 200).
Nur ausfuehren, wenn ein neues Video hinzukommt oder ein Thumb aktualisiert
werden soll - bestehende Dateien werden nicht ueberschrieben.

Verwendung:  python tools/fetch-yt-thumbs.py <video-id> [<video-id> ...]
             python tools/fetch-yt-thumbs.py --all   (alle im HTML verlinkten)
"""

import os
import re
import struct
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'images', 'yt')
UA = {'User-Agent': 'Mozilla/5.0'}

# Hochformat-Tiers zuerst fuer Shorts (href enthaelt /shorts/).
TIERS_LANDSCAPE = ['maxresdefault.jpg', 'sddefault.jpg', 'hqdefault.jpg', 'mqdefault.jpg']
TIERS_PORTRAIT = ['oar2.jpg'] + TIERS_LANDSCAPE
PLACEHOLDER_W = 120  # i.ytimg liefert Platzhalter als 120x90 mit Status 200


def jpeg_size(data):
    i = 2
    while i < len(data) - 9:
        if data[i] != 0xFF:
            break
        if data[i + 1] in (0xC0, 0xC1, 0xC2):
            h, w = struct.unpack('>HH', data[i + 5:i + 9])
            return w, h
        i += 2 + struct.unpack('>H', data[i + 2:i + 4])[0]
    return 0, 0


def fetch(vid, portrait):
    dest = os.path.join(OUT, vid + '.jpg')
    if os.path.exists(dest):
        print('%s: existiert bereits, uebersprungen' % vid)
        return True
    for name in (TIERS_PORTRAIT if portrait else TIERS_LANDSCAPE):
        url = 'https://i.ytimg.com/vi/%s/%s' % (vid, name)
        try:
            req = urllib.request.Request(url, headers=UA)
            data = urllib.request.urlopen(req, timeout=20).read()
        except Exception:
            continue
        w, h = jpeg_size(data)
        if w <= PLACEHOLDER_W:
            continue  # grauer Platzhalter, kein echtes Thumbnail
        open(dest, 'wb').write(data)
        print('%s: %s (%dx%d, %d KB)' % (vid, name, w, h, len(data) // 1024))
        return True
    print('%s: KEIN brauchbares Thumbnail gefunden' % vid, file=sys.stderr)
    return False


def find_linked():
    ids = []
    for page in ('gothic2.html', 'gothic1.html', 'index.html'):
        path = os.path.join(ROOT, page)
        if not os.path.exists(path):
            continue
        html = open(path, encoding='utf-8').read()
        for cls, href in re.findall(
                r'class="(media-video[^"]*)"[^>]+href="([^"]+)"', html):
            m = re.search(r'(?:v=|shorts/)([A-Za-z0-9_-]+)', href)
            if m:
                ids.append((m.group(1), 'short' in cls))
    return ids


def main():
    os.makedirs(OUT, exist_ok=True)
    args = sys.argv[1:]
    jobs = find_linked() if args == ['--all'] else [(a, False) for a in args]
    if not jobs:
        print(__doc__)
        return 1
    ok = all(fetch(vid, portrait) for vid, portrait in jobs)
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
