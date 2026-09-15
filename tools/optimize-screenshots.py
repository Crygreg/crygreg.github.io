"""Erzeugt aus Roh-Screenshots die deployten JPG-Varianten.

Legt PNGs (oder JPGs) in images/G2AE/ ab und fuehrt das Skript aus:

    python tools/optimize-screenshots.py

- images/G2AE/thumbs/<name>.jpg  (800 px breit, Galerie-Thumbnails)
- images/G2AE/full/<name>.jpg    (1920 px breit, Lightbox-Vollbild)

Bereits vorhandene Varianten werden uebersprungen (nur neue Dateien
werden erzeugt). Die Roh-Dateien selbst bleiben als Archiv im Repo,
werden aber nicht deployed (siehe deploy-pages.yml).

Danach die neuen <a>/<img>-Zeilen in der .media-gallery in
gothic2.html eintragen (siehe README, Abschnitt Mediensammlung).
"""
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow fehlt: pip install Pillow")

SRC = Path(__file__).resolve().parent.parent / "images" / "G2AE"
THUMBS = SRC / "thumbs"
FULL = SRC / "full"
THUMB_W, FULL_W, QUALITY = 800, 1920, 82


def convert(src: Path, dst: Path, max_w: int) -> bool:
    if dst.exists():
        return False
    with Image.open(src) as im:
        im = im.convert("RGB")
        if im.width > max_w:
            h = round(im.height * max_w / im.width)
            im = im.resize((max_w, h), Image.LANCZOS)
        im.save(dst, "JPEG", quality=QUALITY, optimize=True)
    return True


def main() -> None:
    THUMBS.mkdir(exist_ok=True)
    FULL.mkdir(exist_ok=True)
    made = 0
    for png in sorted(SRC.glob("*")):
        if png.suffix.lower() not in (".png", ".jpg", ".jpeg") or png.parent != SRC:
            continue
        stem = png.stem
        if convert(png, THUMBS / f"{stem}.jpg", THUMB_W):
            made += 1
        if convert(png, FULL / f"{stem}.jpg", FULL_W):
            made += 1
        if (THUMBS / f"{stem}.jpg").exists() or (FULL / f"{stem}.jpg").exists():
            pass
    print(f"Fertig – {made} neue Varianten erzeugt.")


if __name__ == "__main__":
    main()
