"""Erzeugt aus Roh-Screenshots die deployten JPG-Varianten.

Legt PNGs (oder JPGs) in images/G2AE/ ab und fuehrt das Skript aus:

    python tools/optimize-screenshots.py

- images/G2AE/thumbs/<name>.webp  (800 px breit, Galerie-Thumbnails)
- images/G2AE/mid/<name>.webp     (1600 px breit, Inline-Bilder in Posts)
- images/G2AE/full/<name>.webp    (native Aufloesung bis 3840 px, Lightbox)

Bereits vorhandene Varianten werden uebersprungen (nur neue Dateien
werden erzeugt). Die Roh-Dateien selbst bleiben als Archiv im Repo,
werden aber nicht deployed (siehe deploy-pages.yml).

Danach die neuen <a>/<img>-Zeilen in der .media-gallery in
gothic2.html eintragen (siehe README, Abschnitt Neuigkeiten).
"""
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow fehlt: pip install Pillow")

SRC = Path(__file__).resolve().parent.parent / "images" / "G2AE"
THUMBS = SRC / "thumbs"
MID = SRC / "mid"
FULL = SRC / "full"
THUMB_W, MID_W, FULL_W, QUALITY = 800, 1600, 3840, 95


def convert(src: Path, dst: Path, max_w: int) -> bool:
    if dst.exists():
        return False
    with Image.open(src) as im:
        im = im.convert("RGB")
        if im.width > max_w:
            h = round(im.height * max_w / im.width)
            im = im.resize((max_w, h), Image.LANCZOS)
        im.save(dst, "WEBP", quality=QUALITY, method=6)
    return True


def main() -> None:
    THUMBS.mkdir(exist_ok=True)
    MID.mkdir(exist_ok=True)
    FULL.mkdir(exist_ok=True)
    made = 0
    for png in sorted(SRC.glob("*")):
        if png.suffix.lower() not in (".png", ".jpg", ".jpeg") or png.parent != SRC:
            continue
        stem = png.stem
        if convert(png, THUMBS / f"{stem}.webp", THUMB_W):
            made += 1
        if convert(png, MID / f"{stem}.webp", MID_W):
            made += 1
        if convert(png, FULL / f"{stem}.webp", FULL_W):
            made += 1
    print(f"Fertig – {made} neue Varianten erzeugt.")


if __name__ == "__main__":
    main()
