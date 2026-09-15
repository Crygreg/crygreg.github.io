# Anniversary Edition – Website

Statische Webseite für die Anniversary-Edition-Fanprojekte (Gothic I / Gothic II),
gehostet über GitHub Pages unter <https://crygreg.github.io/>.

## Struktur

- `index.html` – Startseite (Projekte, Über das Projekt, Team)
- `gothic1.html`, `gothic2.html`, `secret.html` – Projekt-Detailseiten
- `404.html` – Fehlerseite für ungültige URLs
- `style.css` – gemeinsames Stylesheet für alle Seiten
- `i18n.js` – Übersetzungen (DE/EN/PL/RU), Sprachwahl und mobile Navigation
- `images/` – Logos, Hintergrundbilder, Favicon
- `fonts/` – Schriftart „Anniversary"

## Sprachen

Übersetzte Texte werden in `i18n.js` gepflegt und im HTML über
`data-i18n="schlüssel"` (Text) bzw. `data-i18n-aria="schlüssel"` (Aria-Label)
gebunden. Die gewählte Sprache wird im Browser gespeichert und auf allen Seiten
übernommen. Neue Texte: Schlüssel in allen vier Sprachen in `i18n.js` anlegen
und das Attribut im HTML setzen.

## Deployment

Der Workflow `.github/workflows/deploy-pages.yml` lädt die Seite bei jedem Push
auf `main` automatisch als statisches Artifact zu GitHub Pages hoch. Voraussetzung:
**Settings → Pages → Source: „GitHub Actions"**.

## Bilder austauschen

- Hintergründe: `images/g1-wallpaper.jpg`, `g2-wallpaper.jpg`, `secret-wallpaper.jpg`
- Logos: `G1AE-logo.png`, `G1AE-fulllogo.png`, `G2AE-logo.png`, `G2AE-fulllogo.png`, `gothic-logo.png`
- Karten-Hintergründe werden in `style.css` über `.gothic1`, `.gothic2`, `.secret`
  bzw. `.detail-g1`, `.detail-g2`, `.detail-secret` gesetzt.

## Download-Links

Die Download-Buttons auf den Detailseiten sind mit `aria-disabled="true"`
deaktiviert und zeigen beim Klick einen Hinweis. Sobald ein echter Link existiert:
`href` setzen, `aria-disabled` entfernen und den `<p class="download-msg">`-Block
löschen.
