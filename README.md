# Anniversary Edition – Website

Statische Webseite für die Anniversary-Edition-Fanprojekte (Gothic I / Gothic II),
gehostet über GitHub Pages unter <https://crygreg.github.io/>.

## Struktur

- `index.html` – Startseite (Projekte, Über das Projekt, Team, Mitmachen,
  Unterstützen; Discord im Hero und Footer)
- `gothic1.html`, `gothic2.html`, `secret.html` – Projekt-Detailseiten;
  gothic2 enthält die Mediensammlung (Dev-Updates, YouTube-Shorts, Screenshots)
- `404.html` – Fehlerseite für ungültige URLs (`noindex`)
- `style.css` – gemeinsames Stylesheet für alle Seiten
- `site.js` – Übersetzungen (DE/EN/PL/RU), Sprachwahl, mobile Navigation,
  Scroll-Reveal-Animationen, Scrollspy, Lazy-Loading der YouTube-Embeds,
  Bild-Lightbox und Download-Hinweise
- `images/` – Logos, Hintergrundbilder, Favicon
- `fonts/` – Schriftarten (Cormorant für Überschriften, Lora für Fließtext,
  jeweils mit Latin-, Latin-Ext- und Cyrillic-Subsets für DE/EN/PL/RU)
- `fonts.css` – `@font-face`-Regeln mit `unicode-range`, lädt nur benötigte Subsets

## Sprachen

Übersetzte Texte werden in `site.js` gepflegt und im HTML über
`data-i18n="schlüssel"` (Text), `data-i18n-aria="schlüssel"` (Aria-Label) bzw.
`data-i18n-html="schlüssel"` (HTML-Fragmente mit Links, z. B. Dev-Posts)
gebunden. Die gewählte Sprache wird im Browser gespeichert und auf allen Seiten
übernommen. Neue Texte: Schlüssel in allen vier Sprachen in `site.js` anlegen
und das Attribut im HTML setzen. Der Deploy-Workflow bricht ab, wenn ein
verwendeter Schlüssel in einer Sprache fehlt oder die Dicts auseinanderlaufen.

## Mediensammlung (gothic2.html)

Einträge sind `<details class="media-entry media-post">`-Blöcke – neueste zuerst,
standardmäßig eingeklappt. Header: Datum, Typ · Autor, Titel. Inhalt je nach Typ:

- **Shorts/Videos:** `<div class="media-embed media-embed-short|-video"><iframe data-src="…">` –
  `data-src` wird erst beim Aufklappen nach `src` kopiert, damit YouTube vorher
  keine Daten bekommt (youtube-nocookie). Darunter optional ein Fallback-Link.
- **Dev-Post + Galerie:** Text über `data-i18n-html`, danach
  `.media-gallery` mit Links auf `images/G2AE/full/*.jpg` und Thumbs aus
  `images/G2AE/thumbs/*.jpg`. Klick öffnet die Lightbox (Pfeiltasten, Esc,
  ohne JS: neuer Tab).

Original-PNGs in `images/G2AE/` bleiben im Repo als Archiv, werden aber beim
Deploy ausgeschlossen. Neue Rohbilder in `images/G2AE/` ablegen und
`python tools/optimize-screenshots.py` ausführen – das Skript erzeugt fehlende
thumbs/full-Varianten (800/1920 px JPG); danach die `<a>`-Zeilen in der
`.media-gallery` ergänzen.

## Deployment

Der Workflow `.github/workflows/deploy-pages.yml` lädt die Seite bei jedem Push
auf `main` automatisch als statisches Artifact zu GitHub Pages hoch. Voraussetzung:
**Settings → Pages → Source: „GitHub Actions"**.

### Cache-Busting

Der Workflow hängt beim Deploy an alle lokalen Asset-URLs (CSS, JS, Fonts,
Bilder) automatisch `?v=<commit-sha>` an. Dadurch bekommen Besucher nach jedem
Push garantiert die neuen Dateien – GitHub Pages selbst erlaubt keine eigenen
Cache-Header. Zusätzlich wird `<meta name="build" content="<sha>">` in den
`<head>` jeder Seite geschrieben, damit sich die deployte Version im Seitenquelltext
abfragen lässt.

## Bilder austauschen

- Hintergründe: `images/g1-wallpaper.jpg`, `g2-wallpaper.jpg`, `secret-wallpaper.jpg`
- Logos: `G1AE-logo.png`, `G1AE-fulllogo.png` (+ `G1AE-cardlogo.png` als
  kleinere Variante für die Projekt-Karten), analog für `G2AE-*`,
  `gothic-logo.png`, `favicon.png`, `apple-touch-icon.png`
- Karten-Hintergründe werden in `style.css` über `.gothic1`, `.gothic2`, `.secret`
  bzw. `.detail-g1`, `.detail-g2`, `.detail-secret` gesetzt.

## Download-Links

Die Download-Buttons auf den Detailseiten sind mit `aria-disabled="true"`
deaktiviert und zeigen beim Klick einen Hinweis. Sobald ein echter Link existiert:
`href` setzen, `aria-disabled` entfernen und den `<p class="download-msg">`-Block
löschen.
