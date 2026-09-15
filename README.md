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

- **Shorts/Videos:** `<a class="media-video">`-Karte mit lokalem Thumbnail
  `images/yt/<video-id>.jpg` (vom CDN gezogen + committet – YouTube sieht damit
  bis zum Klick gar nichts) plus `data-embed="…youtube-nocookie…"`. Klick öffnet
  das Video in der Lightbox; ohne JS geht der Link direkt zu YouTube.
  `.media-video-short` = Hochformat-Karte, `.media-videolist` = 3-spaltiges Grid
  für mehrere Videos in einem Eintrag. Fällt ein lokaler Thumb aus, probiert
  `site.js` automatisch die i.ytimg.com-Tiers durch. Neue Thumbs holt
  `python tools/fetch-yt-thumbs.py --all` (liest die verlinkten IDs aus dem
  HTML und lädt den besten verfügbaren Tier).
- **Dev-Post + Galerie:** Text über `data-i18n-html`, danach
  `.media-gallery` mit Links auf `images/G2AE/full/*.webp` und Thumbs aus
  `images/G2AE/thumbs|mid/*.webp`. Einzelbilder als `<a class="media-post-image">`.
- **Lightbox:** alle Medien eines Eintrags (Bilder + Videos gemischt) bilden
  eine Sequenz – Pfeile/←→/Wischen blättern, Zähler unten links, Rad/
  Doppelklick/Pinch zoomen, Ziehen verschiebt, `data-cap`-Captions darunter,
  Nachbarbilder werden vorgeladen. Ohne JS: neue Tabs.

Original-PNGs in `images/G2AE/` bleiben im Repo als Archiv, werden aber beim
Deploy ausgeschlossen. Neue Rohbilder in `images/G2AE/` ablegen und
`python tools/optimize-screenshots.py` ausführen – das Skript erzeugt fehlende
thumbs/mid/full-Varianten (800/1600 px bzw. native Quellauflösung bis 3840 px
WebP, q90); danach die `<a>`-Zeilen in der `.media-gallery` ergänzen.

Hinweis: Inline-Bilder nutzen `srcset` mit allen drei Varianten und einem
`sizes`-Attribut – der Browser lädt selbst die passende Größe (Galerie ~375 px,
Post-Bilder ~1140 px, Retina/Zoom bekommt `full/`). Der `<a href>` bzw. die
Lightbox zeigt immer `full/` in Originalauflösung.

## Deployment

Der Workflow `.github/workflows/deploy-pages.yml` lädt die Seite bei jedem Push
auf `main` automatisch als statisches Artifact zu GitHub Pages hoch. Voraussetzung:
**Settings → Pages → Source: „GitHub Actions"**.

Solange die Quelle noch auf „Deploy from a branch" (legacy) steht, baut GitHub
zusaetzlich einen eigenen `pages-build-deployment`-Lauf, der dieses Artifact
ueberschreiben wuerde, weil er spaeter fertig wird. Der Workflow wartet deshalb
75 s vor dem Deploy (`Wait for legacy branch deploy`), damit der cache-busted
Build immer zuletzt landet und live geht. **Dieser Schritt kann entfernt werden,
sobald die Quelle auf „GitHub Actions" umgestellt ist.**

### Cache-Busting

Der Workflow hängt beim Deploy an alle lokalen Asset-URLs (CSS, JS, Fonts,
Bilder) automatisch `?v=<commit-sha>` an. Dadurch bekommen Besucher nach jedem
Push garantiert die neuen Dateien – GitHub Pages selbst erlaubt keine eigenen
Cache-Header. Zusätzlich wird `<meta name="build" content="<sha>">` in den
`<head>` jeder Seite geschrieben, damit sich die deployte Version im Seitenquelltext
abfragen lässt.

## Team-Avatare (Discord)

Die Profilbilder der Team-Mitglieder werden taeglich vom Workflow
`.github/workflows/update-avatars.yml` ueber `tools/fetch-avatars.py`
synchronisiert (Discord REST API, `GET /users/{id}` — der Bot muss sich auf
keinem Server befinden). Dateien landen in `images/avatars/<user-id>.<webp|gif>`
plus `manifest.json`. Benoetigt das Repository-Secret `DISCORD_BOT_TOKEN`
(Discord Developer Portal → Application → Bot → Reset Token).
Fallback-Kette im Frontend: lokale Datei → Lanyard-API → Initialen.
Neue Mitglieder: User-ID in `USER_IDS` im Skript + `data-discord-id` am
`.member-avatar`-Element in `index.html` ergaenzen.

## Bilder austauschen

- Hintergründe: `images/g1-wallpaper.webp`, `g2-wallpaper.webp`, `secret-wallpaper.webp`
  (die JPG-Versionen existieren weiterhin nur fuer `og:image`-Crawler ohne WebP-Support)
- Logos: `G1AE-fulllogo.webp` (+ `G1AE-cardlogo.webp` als kleinere Variante
  für die Projekt-Karten), analog für `G2AE-*`, `gothic-logo.webp`.
  Die PNG-Originale bleiben als `og:image`-Quellen und Archiv erhalten;
  `favicon.png`/`apple-touch-icon.png` bleiben PNG (Plattform-Anforderung).
- Karten-Hintergründe werden in `style.css` über `.gothic1`, `.gothic2`, `.secret`
  bzw. `.detail-g1`, `.detail-g2`, `.detail-secret` gesetzt.

## Download-Links

Die Download-Buttons auf den Detailseiten sind mit `aria-disabled="true"`
deaktiviert und zeigen beim Klick einen Hinweis. Sobald ein echter Link existiert:
`href` setzen, `aria-disabled` entfernen und den `<p class="download-msg">`-Block
löschen.
