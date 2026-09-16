/* Sprachumschaltung, mobile Navigation und Download-Hinweise.
   Texte werden ueber data-i18n / data-i18n-aria Attribute gesetzt. */
(function () {
  'use strict';

  var DEFAULT_LANG = 'de';
  var STORAGE_KEY = 'ae-lang';

  var translations = {
    de: {
      skip: 'Zum Inhalt springen',
      aria_nav: 'Hauptnavigation',
      aria_menu: 'Menü',
      aria_home: 'Zur Startseite',
      aria_lang: 'Sprache wählen',
      nav_projects: 'Projekte',
      nav_about: 'Über das Projekt',
      nav_team: 'Team',
      nav_support: 'Unterstützen',
      nav_back: '← Projekte',
      view_projects: 'PROJEKTE ANSEHEN',
      hero_kicker: 'FAN-MODIFIKATIONEN',
      hero_intro: 'Neue Quests, neue Charaktere, neue Orte – eine vertraute Welt, die weiterwächst.',
      eyebrow_projects: 'UNSERE',
      projects_title: 'Mod-Projekte',
      projects_intro: 'Um mehr zu erfahren, wähle das gewünschte Projekt aus.',
      g1_desc: 'Willkommen in der Kolonie, Baby!',
      g2_desc: 'Ein einzelner Gefangener hatte das Schicksal von Hunderten geändert ...',
      secret_desc: 'Ein geheimes Projekt ist in Arbeit...',
      secret_question: 'Was haben wir denn da?',
      more_info: 'MEHR ERFAHREN',
      eyebrow_about: 'ÜBER DIE ANNIVERSARY EDITION',
      about_title: 'Was ist das Ziel?',
      about_text: 'Die Anniversary Edition ist eine Reihe nichtkommerzieller Fanprojekte, die die Gothic-Welt mit neuen Quests, Charakteren, Geschichten und Ideen erweitern möchte – ohne den ursprünglichen Charakter der Spiele aus den Augen zu verlieren.',
      eyebrow_team: 'UNSER',
      eyebrow_support: 'UNTERSTÜTZT UNS',
      eyebrow_join: 'MITMACHEN',
      join_h: 'Verstärkung gesucht',
      join_text: 'Wir suchen 2D- und 3D-Artists für die Anniversary Edition – Texturen, Concept Art oder Modelle. Interesse? Melde dich auf unserem <a href="https://discord.gg/P5TWh8krmc" target="_blank" rel="noopener noreferrer">Discord</a>.',
      team_title: 'Team',
      team_intro: 'Die kreativen Köpfe hinter den Projekten.',
      role_crygreg: 'Projektersteller, Teamleitung & Lead-Dev',
      role_alistair: 'Ideen & Konzepte · 2D/3D-Art & Animation · Daedalus-Scripting · Engine & GD3D11-Renderer (C++/Union) · Website · QA & Feedback',
      role_ben: 'Ideen & Konzepte · 2D- & 3D-Artist · QA & Feedback',
      role_midgard: 'Ideen & Konzepte · 3D-Artist · QA & Feedback',
      footer1: 'ANNIVERSARY EDITION',
      footer2: 'Nichtkommerzielle Fanprojekte',
      footer_legal: 'Gothic ist eine Marke von THQ Nordic AB – kein offizielles Projekt.',
      footer_back: 'Zurück zur Startseite',
      overview: 'ÜBERSICHT',
      about_mod: 'Über die Modifikation',
      features: 'Features',
      media: 'Neuigkeiten',
      media_short: 'YouTube-Short',
      media_video: 'YouTube-Video',
      media_videos: 'YouTube-Videos',
      media_screenshot: 'Screenshot',
      media_screenshots: 'Screenshots',
      g2_m1_date: '24.08.2026',
      g2_m2_date: '09.08.2026',
      g2_m3_date: '30.07.2026',
      media_open: 'Auf YouTube öffnen',
      media_press: 'Presse',
      media_extvideo: 'Video',
      media_open_gs: 'Auf GameStar ansehen',
      media_open_pat: 'Auf Patreon ansehen',
      g2_m1_title: 'Bigfarm-Vergleich',
      g2_m1_post: 'Die YouTube-Version des neuesten Bigfarm-Showcases!',
      g2_m2_title: 'Lobarts Farm: Original vs. Neu',
      g2_m2_post: 'Fühlte mich süß, hab den ersten Vergleichs-Short gedroppt 💅 👀',
      g2_m3_cap: 'Lobarts Farm – erste Release-Version, Vegetations-Experimente (W.I.P.)',
      media_post: 'Entwicklungsupdate',
      g2_post_author: 'Crygreg',
      g2_m3_title: 'Lobarts Farm & Patreon',
      g2_m3_post: '<p>Die erste Release-Version von Lobarts Farm wird finalisiert. Dazu experimentieren wir mit neuer Vegetation – wie immer W.I.P.: Die Farben des Grases können sich noch leicht ändern.</p><p>Als Inspiration diente <a href="images/artwork-martin-nawaz.webp" target="_blank" rel="noopener noreferrer">dieses fantastische Artwork</a> – mir gefallen besonders das Licht und die Atmosphäre (Credits gehen an Martin Nawaz!).</p><p>Wie kürzlich angekündigt bin ich der Empfehlung gefolgt und habe einen <a href="https://patreon.com/Crygreg/" target="_blank" rel="noopener noreferrer">Patreon</a> eröffnet, auf dem ich ausführlichere Entwicklungs-Updates teile, Umfragen erstelle und Meinungen einhole – oder unterstützt uns über <a href="https://ko-fi.com/crygreg" target="_blank" rel="noopener noreferrer">Ko-Fi</a>!</p><p>Hinweis: Es gibt KEINE weiteren Vorteile dabei. Das Projekt soll nichtkommerziell bleiben – keine „exklusiven“ Pre-Release-Builds o. Ä. Patreon und Ko-Fi sind schlicht Wege, dieses und zukünftige Projekte zu unterstützen; fast alles Geld (und mein eigenes) fließt ohnehin in die Mod. Jede Unterstützung – finanziell oder nicht – wird sehr geschätzt!</p><p>Wir arbeiten weiter an der ersten spielbaren Version – hoffentlich noch dieses Jahr, wenn es klappt.</p>',
      g2_m4_date: '20.06.2026',
      g2_m4_title: 'Am Flüchtlingslager',
      g2_m4_post: '<p>„Du siehst aus wie ein Flüchtling. Alle Flüchtlinge wollen in die Stadt …“</p>',
      g2_m5_date: '03.06.2026',
      g2_m5_title: 'Rast am Wegesrand',
      g2_m5_post: '<p>Ein wenig am Wegesrand relaxen …</p>',
      g2_m6_date: '29.04.2026',
      g2_m6_title: 'Vobbing-Feinschliff',
      g2_m6_post: '<p>Ein weiterer Tag, ein weiteres Update zur laufenden Feinabstimmung des Vobbings der Spielwelt. Alles wie immer W.I.P.</p><p>Riesiger Dank geht an Snowfox für die zusätzlichen, fantastischen Beiträge in Sachen Spacering und Ideen!</p>',
      g2_m7_date: '27.03.2026',
      g2_m7_title: 'Wähle deinen Weg',
      g2_m7_post: '<p>Der 27. März ist da und damit dürft ihr diesmal, wie versprochen, euren eigenen Weg wählen!<br>Außerdem hat das 25th-Anniversary-Video Untertitel erhalten (vorerst auf Deutsch, Englisch, Polnisch und Russisch – die letzten beiden sind maschinell übersetzt, lesen sich aber hoffentlich gut)!</p><p>Geht einfach zurück zum 25th-Anniversary-Video und springt ans Ende, um zu wählen!<br>(Sicherheitshalber und der Einfachheit halber verlinke ich alle Videos trotzdem unten.)</p>',
      g2_m7_v1: '25th-Anniversary-Video',
      g2_m7_v2: 'Akils Dilemma (Der Weg des Soldaten)',
      g2_m7_v3: 'Der Pakt mit Akil (Der Weg des Söldners)',
      g2_m8_date: '14.03.2026',
      g2_m8_title: 'Trailer zum 25. Jubiläum',
      g2_m9_date: '12.03.2026',
      g2_m9_title: 'Showcase zum 25. Jubiläum',
      g2_m9_post: '<p>Schon wieder ist ein Monat rum und das 25. Jubiläum steht kurz bevor. Zeit für ein weiteres kleines Showcase.</p>',
      g2_m8_post: '<p>Morgen, am 15. März um 20:00 Uhr CET / 19:00 Uhr UTC, feiern wir gemeinsam 25 Jahre seit der ersten Veröffentlichung von GOTHIC™. Da der Release wie angekündigt verschoben werden musste, können wir an diesem Tag leider nur einen Trailer zeigen – aber es kommt noch viel mehr: Am 27. März könnt ihr das Video erneut besuchen und zwischen dem Weg des Soldaten des Königs und Onars Söldner wählen – inklusive einer kleinen Quest.</p><p>Die AE erscheint trotz der Verschiebung weiterhin 2026! Wir hoffen, sie gefällt euch!</p>',
      g2_m10_date: '03.02.2026',
      g2_m10_title: 'Gute und schlechte Nachrichten',
      g2_m10_post: '<p>Hallo zusammen, wir haben heute gute und schlechte Nachrichten für euch!</p><p>Die guten Nachrichten: Seit der Veröffentlichung des Trailers haben wir unglaubliche Fortschritte gemacht! Jharkendar hat eine große, beeindruckende Überarbeitung erhalten, die Ästhetiken aus den Alpha-Versionen und aus Gothic 1 vereint, dabei aber die unberührte Tal-Atmosphäre des Originals bewahrt. Irdorath bietet nun viele neue Rätsel, Herausforderungen und Möglichkeiten zur Erkundung sowie mehrere zentrale Story-Momente. Außerdem wurden zahlreiche weitere Features implementiert – einige davon haben wir bereits gezeigt, andere halten wir noch zurück. Dazu gehören unter anderem QoL-Verbesserungen, eine Überarbeitung des Crafting-Systems, neue Schadensberechnungen und vieles mehr. Die deutsche Sprachausgabe macht bereits gute Fortschritte und hält einige Überraschungen für euch bereit! Alle drei Subgilden bieten weitere einzigartige Dialoge und Quests.</p><p>Leider gibt es aber auch schlechte Nachrichten. Viele unerwartete Probleme, die außerhalb unserer Kontrolle lagen, sind aufgetreten und haben mehrere Elemente des Projekts verzögert. Wir befinden uns zwar noch in der Alpha-Phase, sind aber nicht mehr allzu weit von der Beta entfernt – jedoch haben bislang noch keine echten Playtests stattgefunden. Daher ist klar geworden, dass unser ursprünglich geplanter Release höchstwahrscheinlich nicht einzuhalten ist. Aus diesem Grund sehen wir uns gezwungen, den Release zu verschieben auf … 2026. Ja, 2026 bleibt das Release-Jahr. Wann genau, entscheiden wir, wenn die Zeit reif ist, um die Fehler nicht zu wiederholen.</p><p>Der 15. März wäre eine großartige Gelegenheit für den Release des Projekts gewesen. So lässt sich aber Verschiedenes weiter ausbauen. Wir werden es auch schaffen, zum 25-jährigen Jubiläum zu releasen (nur nicht punktgenau).</p><p>Wir sehen uns bald in einem Khorinis, das von den Konsequenzen EURER Taten gezeichnet ist! Bis bald, Reisende und Flüchtlinge gleichermaßen!</p>',
      g2_m11_date: '28.01.2026',
      g2_m11_title: 'GameStar: „Neuer Wind für Gothic 2“',
      g2_m11_v1: 'GameStar: „Neuer Wind für Gothic 2“',
      g2_m11_post: '<p>GameStar hat einen Artikel zur Anniversary herausgebracht, wie ich vorhin gesehen habe! 🥹</p>',
      g2_m12_date: '25.12.2025',
      g2_m12_title: 'Weihnachts-Showcase: neue Wetter',
      g2_m12_cap: 'Neue Wetterzustände – noch W.I.P.',
      g2_m12_post: '<p>Nach einem langen Kampf mit dem hartcodierten Wettersystem und den Himmelszuständen des Spiels gibt es dank @Alistair Afton einige große Durchbrüche! Hier sind einige der neuen Wetter als Weihnachtsgeschenk zum Anschauen – aber denkt daran, sie sind noch W.I.P. (bevor jemand fragt: Das grüne Wetter ähnelt dem aus dem G1-Intro-Cinematic), und nicht alle werden überall auftauchen. Sie sollen eine gesunde Mischung aus der eher Gothic-artigen Natur und den idyllischeren Stimmungen der Außenwelt darstellen, wobei Letztere nicht mehr vorherrschen wird.</p><p>Frohe Weihnachten an alle 🎄, habt eine fantastische Zeit mit euren Liebsten und einen guten Start ins neue Jahr! Bis 2026! ✨</p>',
      g2_m13_date: '15.12.2025',
      g2_m13_title: 'Die Fauna Myrtanas',
      g2_m13_cap: 'Neue Tiere und Monster',
      g2_m13_post: '<p>Die Flora und Fauna des Königreichs Myrtana beherbergen eine Vielzahl von Tieren und Monstern unterschiedlichen Geschlechts und Alters. Doch nimm dich in Acht: Sie alle könnten dich als willkommene Beute betrachten, und manche wurden von finsteren Mächten bis zur Unkenntlichkeit verändert … wodurch sie für den gewöhnlichen Menschen umso gefährlicher geworden sind.</p>',
      g2_m14_date: '27.11.2025',
      g2_m14_title: 'Ankündigung zum 23. Geburtstag',
      g2_m14_v1: 'Ankündigungs-Video',
      g2_m14_post: '<p>Gothic II wird am 29. November 23 Jahre alt. Feiern wir das mit einer besonderen Ankündigung, die an diesem Tag erscheint! 👀</p>',
      g2_m15_date: '23.08.2026',
      g2_m15_title: 'Neuer Short – Patreon-Vorschau',
      g2_m15_post: 'Ein neuer Short ist für Patreon-Mitglieder fertig und wird später heute oder morgen auch auf YouTube hochgeladen:',
      g2_m16_date: '21.07.2026',
      g2_m16_title: 'Patreon gestartet',
      g2_m16_post: '<p>Ich habe auf Anraten hin ein Patreon für Supporter eingerichtet – vor allem wegen der anfallenden Kosten, falls das jemand unterstützen möchte. Ich werde versuchen, regelmäßig zu posten und (exklusive) Updates zu machen.</p><p>Das Ganze wird KEINE Paywall sein, hinter der ich irgendetwas „Handfestes“ verstecke oder den Leuten frühen Zugang o. Ä. gewähre – es ist für die, die gerne mehr Originalstimmen und andere Dinge unterstützen möchten und unter Umständen Stimmrecht haben wollen. :)</p><p>Seht es euch selbst an!</p>',
      g2_m17_date: '27.11.2025',
      g2_m17_title: 'Abenddämmerung auf den Höfen',
      g2_m17_cap: 'Abenddämmerung auf den Höfen',
      g2_m18_date: '05.11.2025',
      g2_m18_title: 'Ein weiterer Tag auf Onars Farm',
      g2_m18_post: 'Ein weiterer Tag auf Onars Farm …',
      g2_m18_cap: 'Ein weiterer Tag auf Onars Farm …',
      g2_m19_date: '04.11.2025',
      g2_m19_title: 'Gamescom-2025-Gameplay',
      g2_m19_post: 'Gamescom-2025-Gameplay:',
      g2_m20_date: '04.11.2025',
      g2_m20_title: 'One Year Later',
      g2_m20_post: '„One Year Later“ – in Anspielung auf diesen alten Testclip:',
      g2_m20_v1: 'One Year Later',
      g2_m20_v2: 'Alter Testclip (Referenz)',
      g2_m21_date: '04.11.2025',
      g2_m21_title: 'Erste Impressionen',
      g2_m21_cap: 'Erste Impressionen',
      support_h: 'Unterstützen',
      support_note: 'Dies sind die persönlichen Seiten von Crygreg und Alistair Afton – freiwillige Wege, die Entwicklung zu unterstützen; das Projekt bleibt nichtkommerziell.',
      screenshot: 'Screenshot',
      download_h: 'Download',
      download_note: 'Hier kann später der finale Download, ein GitHub-Release oder ein externer Download-Link eingetragen werden.',
      download_btn: 'DOWNLOAD',
      download_soon: 'Der Download ist noch nicht verfügbar.',
      lb_label: 'Bildvorschau',
      lb_video_label: 'Videovorschau',
      lb_close: 'Schließen',
      lb_prev: 'Vorheriges Bild',
      lb_next: 'Nächstes Bild',
      g1_overview: 'Eine Erweiterung des ersten Gothic-Abenteuers.',
      g1_f1: 'Neue Quests und Storylines',
      g1_f2: 'Verbesserte Grafik und Texturen',
      g1_f3: 'Erweiterte Charakterentwicklung',
      g1_f4: 'Neue Items und Ausrüstung',
      g2_overview: 'Die Anniversary Edition ist eine umfangreiche Fan-Erweiterung und Overhaul-Mod für Gothic II: Die Nacht des Raben. Sie erweitert und überarbeitet die Hauptgeschichte ebenso wie alte und neue Nebenhandlungen, führt neue Gilden und Wege ein, vergrößert die Welt um neue Areale und Bewohner – und verleiht dem Spiel einen eigenen Artstyle, der auf Gothic I, der Gothic-I-Alpha, dem Gothic Sequel und der Gothic-II-Alpha aufbaut. Auch nach der Veröffentlichung sind weitere Updates geplant, die die Geschichte ausbauen und die Welt weiter überarbeiten.',
      g2_cat_story: 'Geschichte & Welt',
      g2_cat_game: 'Gameplay',
      g2_cat_gear: 'Charakter & Ausrüstung',
      g2_cat_gfx: 'Optik & Feinschliff',
      g2_s1: 'Erweiterte und teilweise sanft überarbeitete Hauptgeschichte (4 neue Quests) – plus rund 50 neue Nebenquests, viele davon an die Fraktionswahl gebunden',
      g2_s2: 'Fraktionsentscheidungen bringen neue Möglichkeiten und bleibende Konsequenzen mit sich',
      g2_s3: 'Mehrere alternative Wege und Lösungen in zahlreichen Originalquests',
      g2_s4: 'Gildenloser Pfad sowie drei neue Untergilden: Wassermagier, Dämonenjäger und Königliche Garde',
      g2_s5: 'Logisch erweiterte Welt – bevölkert von unzähligen neuen NPCs',
      g2_s6: 'Überarbeitete Dialoge, Interaktionen und NPC-Routinen für eine reaktivere Welt',
      g2_s7: 'Versteckte Orte, die ihren Namen verdienen – EP fürs Auffinden',
      g2_s8: 'Weitere Updates nach dem Release, die die Geschichte erweitern und die Welt weiter überarbeiten',
      g2_g1: 'Vier wählbare Schwierigkeitsgrade – keine Bullet-Sponges, dafür tiefere Änderungen am Spielerlebnis',
      g2_g2: 'Neue Schadensberechnung: eine Mischung aus Gothic I und Gothic II – plus ein paar geheime Mechaniken',
      g2_g3: 'Überarbeitete Bosskämpfe und neue Balance – stellenweise „tiefer“ oder schwerer als das Original, an anderen Stellen etwas einfacher',
      g2_g4: 'KI-Überarbeitungen: NPCs reagieren auf den Status des Helden (und anderer NPCs), können Verbrechen ignorieren oder fliehen; Opfer und Zeugen kommentieren beglichene Strafen und grüßen je nach Status und Freundschaft',
      g2_g5: 'Ausdauer und Sprinten (mit kaum Auswirkungen aufs Kampfsystem) sowie Stab- und Schildkampf',
      g2_g6: 'Todesmeldungen – kapitelabhängig und -unabhängig',
      g2_e1: 'Neu geordnetes Statusmenü mit Seitenwechsel',
      g2_e2: 'LP-Kosten beim Lernen steigen mit dem bereits Trainierten – unabhängig von den Charakterwerten',
      g2_e3: 'Erweiterte und neue Handwerke – bekannt aus dem Gothic Sequel',
      g2_e4: 'Viele neue Waffen – darunter aus Gothic I bekannte',
      g2_e5: 'Neue Rüstungen für Gildenlose und Gilden – fehlende Ränge ergänzt, bestehende Progression erweitert',
      g2_v1: 'Neuer Artstyle aus Elementen von Gothic I, der Gothic-I-Alpha, dem Gothic Sequel und der Gothic-II-Alpha – ermöglicht durch unzählige neue und eigens erstellte Assets',
      g2_v2: 'Neue, überarbeitete Benutzeroberfläche',
      g2_v3: 'Unzählige Modell-Überarbeitungen, -Variationen und -Korrekturen (UV-Mapping, Verzerrungen, fehlende Vertices)',
      g2_v4: 'Unzählige Bugfixes und kosmetische Verbesserungen – im Ernst',
      notfound_title: 'Seite nicht gefunden',
      notfound_text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
      notfound_btn: 'ZUR STARTSEITE'
    },
    en: {
      skip: 'Skip to content',
      aria_nav: 'Main navigation',
      aria_menu: 'Menu',
      aria_home: 'Go to homepage',
      aria_lang: 'Select language',
      nav_projects: 'Projects',
      nav_about: 'About the project',
      nav_team: 'Team',
      nav_support: 'Support',
      nav_back: '← Projects',
      view_projects: 'VIEW PROJECTS',
      hero_kicker: 'FAN MODIFICATIONS',
      hero_intro: 'New quests, new characters, new places – a familiar world that keeps growing.',
      eyebrow_projects: 'OUR',
      projects_title: 'Mod Projects',
      projects_intro: 'To learn more, select the desired project.',
      g1_desc: 'Welcome to the colony, baby!',
      g2_desc: 'A single prisoner changed the fate of hundreds...',
      secret_desc: 'A secret project is in progress...',
      secret_question: 'What do we have here?',
      more_info: 'LEARN MORE',
      eyebrow_about: 'ABOUT THE ANNIVERSARY EDITION',
      about_title: 'What is the goal?',
      about_text: 'The Anniversary Edition is a series of non-commercial fan projects that aims to expand the Gothic world with new quests, characters, stories and ideas – without losing sight of the original character of the games.',
      eyebrow_team: 'OUR',
      eyebrow_support: 'SUPPORT US',
      eyebrow_join: 'JOIN US',
      join_h: 'Artists wanted',
      join_text: 'We are looking for 2D and 3D artists for the Anniversary Edition – textures, concept art or models. Interested? Reach out on our <a href="https://discord.gg/P5TWh8krmc" target="_blank" rel="noopener noreferrer">Discord</a>.',
      team_title: 'Team',
      team_intro: 'The creative minds behind the projects.',
      role_crygreg: 'Project Creator, Team Lead & Lead Dev',
      role_alistair: 'Ideas & Concepts · 2D/3D Art & Animation · Daedalus Scripting · Engine & GD3D11 Renderer (C++/Union) · Website · QA & Feedback',
      role_ben: 'Ideas & Concepts · 2D & 3D Artist · QA & Feedback',
      role_midgard: 'Ideas & Concepts · 3D Artist · QA & Feedback',
      footer1: 'ANNIVERSARY EDITION',
      footer2: 'Non-commercial fan projects',
      footer_legal: 'Gothic is a trademark of THQ Nordic AB – not an official project.',
      footer_back: 'Back to homepage',
      overview: 'OVERVIEW',
      about_mod: 'About the mod',
      features: 'Features',
      media: 'News',
      media_short: 'YouTube Short',
      media_video: 'YouTube Video',
      media_videos: 'YouTube Videos',
      media_screenshot: 'Screenshot',
      media_screenshots: 'Screenshots',
      g2_m1_date: 'Aug 24, 2026',
      g2_m2_date: 'Aug 9, 2026',
      g2_m3_date: 'Jul 30, 2026',
      media_open: 'Open on YouTube',
      media_press: 'Press',
      media_extvideo: 'Video',
      media_open_gs: 'Watch on GameStar',
      media_open_pat: 'View on Patreon',
      g2_m1_title: 'Bigfarm Comparison',
      g2_m1_post: 'The YouTube version of the newest Bigfarm showcase!',
      g2_m2_title: "Lobart's Farm: Original vs. New",
      g2_m2_post: 'Felt cute, dropped a first comparison short 💅 👀',
      g2_m3_cap: "Lobart's Farm – first release version, vegetation experiments (W.I.P.)",
      media_post: 'Dev update',
      g2_post_author: 'Crygreg',
      g2_m3_title: 'Lobart’s farm & Patreon',
      g2_m3_post: '<p>Finalizing the first release version of Lobart’s farm. Experimenting with some new vegetation – as always, it’s W.I.P., so we may still alter the colors of the grass slightly.</p><p>We used <a href="images/artwork-martin-nawaz.webp" target="_blank" rel="noopener noreferrer">this fantastic artwork</a> as something of an inspiration – I very much liked the lighting and overall atmosphere in it (credits go to Martin Nawaz!).</p><p>Additionally, as recently announced, I followed the recommendation and opened a <a href="https://patreon.com/Crygreg/" target="_blank" rel="noopener noreferrer">Patreon</a>, where I’ll also be sharing more in-depth development updates, create polls and ask for opinions – or consider supporting us through <a href="https://ko-fi.com/crygreg" target="_blank" rel="noopener noreferrer">Ko-Fi</a>!</p><p>Disclaimer: there will be NO other benefits tied to it. I want this project to remain non-commercial – no “exclusive” pre-release builds or something. Patreon and Ko-Fi are simply ways I offer now to support this and other, future projects. Almost all of the money I receive (and my own) is spent on the mod anyway. Any support, whether financial or not, is deeply appreciated!</p><p>We’re still kicking and working on making the first, playable release of the mod ready – hopefully at the end of this year, if it works out.</p>',
      g2_m4_date: 'Jun 20, 2026',
      g2_m4_title: 'At the refugee camp',
      g2_m4_post: '<p>“You look like a refugee. All refugees want to get into the city …”</p>',
      g2_m5_date: 'Jun 3, 2026',
      g2_m5_title: 'Roadside rest',
      g2_m5_post: '<p>Relaxing a bit on the roadside …</p>',
      g2_m6_date: 'Apr 29, 2026',
      g2_m6_title: 'Vobbing finetuning',
      g2_m6_post: "<p>Another day, another update on the ongoing finetuning of the game world's vobbing. Everything W.I.P. as always.</p><p>Huge thanks go to Snowfox for the additional, fantastic contributions in terms of spacering and ideas!</p>",
      g2_m7_date: 'Mar 27, 2026',
      g2_m7_title: 'Choose your path',
      g2_m7_post: '<p>27th March has arrived and thus, as promised, you get to choose your own path this time!<br>Additionally, the 25th Anniversary video has received subtitles (for now in German, English, Polish and Russian – though the latter two are translated by tools, so hopefully they read well)!</p><p>Simply go back to the 25th Anniversary video and skip to the end to choose!<br>(Just in case and for convenience\'s sake, I\'ll still link all videos down below.)</p>',
      g2_m7_v1: '25th Anniversary video',
      g2_m7_v2: "Akil's Dilemma (Path of the Soldier)",
      g2_m7_v3: 'The Pact with Akil (Path of the Mercenary)',
      g2_m8_date: 'Mar 14, 2026',
      g2_m8_title: '25th Anniversary trailer',
      g2_m9_date: 'Mar 12, 2026',
      g2_m9_title: '25th anniversary showcase',
      g2_m9_post: '<p>Another month has passed and the 25th anniversary is just around the corner. Time for another small showcase.</p>',
      g2_m8_post: '<p>Tomorrow on the 15th March, 20:00 CET / 19:00 UTC, join in celebration of 25 years since the first release of GOTHIC™. Sadly, since the release had to be postponed as we announced before, we can only present a trailer on that day – but there is much more to come: On the 27th March you can revisit the video and choose between the path of the King’s soldier or Onar’s mercenary and visit a small quest.</p><p>AE is still planned to come out in 2026, despite the delay! We hope you’ll enjoy!</p>',
      g2_m10_date: 'Feb 3, 2026',
      g2_m10_title: 'Good news and bad news',
      g2_m10_post: '<p>Hello everyone, we have good and bad news for you today!</p><p>The good news: since the trailer’s release we have made incredible progress! Jharkendar has received a large, impressive overhaul that combines aesthetics from the alpha versions and Gothic 1 while preserving the original’s untouched valley atmosphere. Irdorath now offers many new puzzles, challenges and opportunities for exploration as well as several central story moments. Numerous other features have also been implemented – some we have already shown, others we are still holding back. These include QoL improvements, a rework of the crafting system, new damage calculations and much more. The German voice acting is already making good progress and has some surprises in store for you! All three sub-guilds offer further unique dialogues and quests.</p><p>Unfortunately, there is also bad news. Many unexpected problems beyond our control have occurred and delayed several parts of the project. While we are still in the alpha phase, we are not too far from beta – however, no real playtests have taken place yet. It has therefore become clear that our originally planned release will most likely not be met. For this reason we are forced to postpone the release to … 2026. Yes, 2026 remains the release year. When exactly is something we will decide when the time is right, so as not to repeat mistakes.</p><p>March 15th would have been a great opportunity for the project’s release. As it is, various things can be expanded further. We will still manage to release for the 25th anniversary (just not exactly on the dot).</p><p>See you soon in a Khorinis shaped by the consequences of YOUR deeds! Until then, travellers and refugees alike!</p>',
      g2_m11_date: 'Jan 28, 2026',
      g2_m11_title: 'GameStar: “Neuer Wind für Gothic 2”',
      g2_m11_v1: 'GameStar: “Neuer Wind für Gothic 2”',
      g2_m11_post: '<p>GameStar released an article about the Anniversary Edition, as I just saw! 🥹</p>',
      g2_m12_date: 'Dec 25, 2025',
      g2_m12_title: 'Christmas showcase: new weathers',
      g2_m12_cap: 'New weather states – still W.I.P.',
      g2_m12_post: '<p>After a long battle with the game’s hardcoded weather and sky states, thanks to @Alistair Afton there have been some major breakthroughs! Here are some of the new weathers as a Christmas present to showcase – but keep in mind, they’re still W.I.P. (before someone asks: the green weather resembles the one from the G1 intro cinematic), and not all of them will appear everywhere. They’re meant to represent a healthy mix of the more Gothic-inspired nature and the more idyllic vibes portrayed by the outside world, though the latter will no longer be the predominant one.</p><p>Merry Christmas everyone 🎄, have a fantastic time with your loved ones and a great start into the new year! See you in 2026! ✨</p>',
      g2_m13_date: 'Dec 15, 2025',
      g2_m13_title: 'The fauna of Myrtana',
      g2_m13_cap: 'New animals and monsters',
      g2_m13_post: '<p>The flora and fauna of the Kingdom of Myrtana are home to a wide variety of animals and monsters of different sexes and ages. But beware: all of them might see you as welcome prey, and some have been changed beyond recognition by sinister powers … making them all the more dangerous to ordinary folk.</p>',
      g2_m14_date: 'Nov 27, 2025',
      g2_m14_title: 'Announcement for the 23rd birthday',
      g2_m14_v1: 'Announcement video',
      g2_m14_post: '<p>Gothic II turns 23 years old on the 29th November. Let’s celebrate that with a special announcement, which will be released that day! 👀</p>',
      g2_m15_date: 'Aug 23, 2026',
      g2_m15_title: 'New short – Patreon preview',
      g2_m15_post: 'A new short is ready for Patreon members; it will also be uploaded to YouTube later today or tomorrow:',
      g2_m16_date: 'Jul 21, 2026',
      g2_m16_title: 'Patreon launched',
      g2_m16_post: '<p>Following some advice, I’ve set up a Patreon for supporters – mainly to cover the costs involved, if anyone wants to chip in. I’ll try to post regularly and provide (exclusive) updates.</p><p>This will NOT be a paywall where I hide anything “substantial” or grant people early access or anything like that – it’s for those who’d like to support more original voiceovers and other content and possibly want a bit of a say. :)</p><p>Check it out for yourselves!</p>',
      g2_m17_date: 'Nov 27, 2025',
      g2_m17_title: 'Dusk at the farms',
      g2_m17_cap: 'Dusk at the farms',
      g2_m18_date: 'Nov 5, 2025',
      g2_m18_title: 'Another day on Onar’s farm',
      g2_m18_post: 'Another day on Onar’s farm …',
      g2_m18_cap: 'Another day on Onar’s farm …',
      g2_m19_date: 'Nov 4, 2025',
      g2_m19_title: 'Gamescom 2025 gameplay',
      g2_m19_post: 'Gamescom 2025 gameplay:',
      g2_m20_date: 'Nov 4, 2025',
      g2_m20_title: 'One Year Later',
      g2_m20_post: '“One Year Later” – in reference to this old test clip:',
      g2_m20_v1: 'One Year Later',
      g2_m20_v2: 'Old test clip (reference)',
      g2_m21_date: 'Nov 4, 2025',
      g2_m21_title: 'First impressions',
      g2_m21_cap: 'First impressions',
      support_h: 'Support',
      support_note: 'These are the personal pages of Crygreg and Alistair Afton – voluntary ways to support development; the project stays non-commercial.',
      screenshot: 'Screenshot',
      download_h: 'Download',
      download_note: 'The final download, a GitHub release or an external download link can be added here later.',
      download_btn: 'DOWNLOAD',
      download_soon: 'The download is not available yet.',
      lb_label: 'Image preview',
      lb_video_label: 'Video preview',
      lb_close: 'Close',
      lb_prev: 'Previous image',
      lb_next: 'Next image',
      g1_overview: 'An expansion of the first Gothic adventure.',
      g1_f1: 'New quests and storylines',
      g1_f2: 'Improved graphics and textures',
      g1_f3: 'Expanded character development',
      g1_f4: 'New items and equipment',
      g2_overview: 'The Anniversary Edition is an extensive fan expansion and overhaul mod for Gothic II: Night of the Raven. It expands and gently reworks the main story as well as old and new side quests, introduces new guilds and paths to take, enlarges the world with new areas and inhabitants – and gives the game its own art style built on Gothic I, the Gothic I alpha, the Gothic Sequel and Gothic II alpha material. Further updates after release will keep expanding the story and reworking the world meshes.',
      g2_cat_story: 'Story & World',
      g2_cat_game: 'Gameplay',
      g2_cat_gear: 'Character & Gear',
      g2_cat_gfx: 'Visuals & Polish',
      g2_s1: 'Expanded and partially reworked main story (4 new quests) – plus around 50 new side quests, many of them tied to your faction choice',
      g2_s2: 'Faction choices come with new possibilities and lasting consequences',
      g2_s3: 'Multiple alternative ways to approach and solve numerous original quests',
      g2_s4: 'A guildless path plus three new sub-guilds: Water Mages, Demon Hunters and the Royal Guard',
      g2_s5: 'Logically extended world levels – populated by countless new NPCs',
      g2_s6: 'Reworked dialogues, interactions and NPC routines for a more reactive world',
      g2_s7: 'Hidden places that actually earn the name – EXP for discovering them',
      g2_s8: 'Further updates after release that expand the story and keep reworking the world meshes',
      g2_g1: 'Four selectable difficulty levels – no bullet sponges, but deeper changes to the experience',
      g2_g2: 'New damage calculation – a mix of Gothic I and II, plus a few secret mechanics',
      g2_g3: 'Reworked boss fights and a new balance – in places deeper or harder than the original, elsewhere a little easier',
      g2_g4: 'AI overhauls: NPCs react to the hero’s status (and those of others), can ignore crimes or flee; victims and witnesses comment when a fine is paid and greet you according to status and friendship',
      g2_g5: 'Stamina and sprinting (with little to no impact on combat) plus staff and shield fighting',
      g2_g6: 'Death messages – chapter-dependent and independent',
      g2_e1: 'Reordered status menu with page switching',
      g2_e2: 'LP costs scale with how much you have already trained – independent of your character stats',
      g2_e3: 'Expanded and brand-new crafts – known from the Gothic Sequel',
      g2_e4: 'Many new weapons – including ones known from Gothic I',
      g2_e5: 'New armor for the guildless and the guilds – missing ranks filled in, existing progression expanded',
      g2_v1: 'A new art style built from Gothic I, the Gothic I alpha, the Gothic Sequel and Gothic II alpha elements – enabled by countless new and custom-made assets',
      g2_v2: 'A new, reworked user interface',
      g2_v3: 'Countless model revisions, variations and fixes (UV mapping, distortions, missing vertices)',
      g2_v4: 'Countless bug fixes and cosmetic improvements – seriously',
      notfound_title: 'Page not found',
      notfound_text: 'The page you are looking for does not exist or has been moved.',
      notfound_btn: 'TO HOMEPAGE'
    },
    pl: {
      skip: 'Przejdź do treści',
      aria_nav: 'Nawigacja główna',
      aria_menu: 'Menu',
      aria_home: 'Przejdź do strony głównej',
      aria_lang: 'Wybierz język',
      nav_projects: 'Projekty',
      nav_about: 'O projekcie',
      nav_team: 'Zespół',
      nav_support: 'Wesprzyj',
      nav_back: '← Projekty',
      view_projects: 'ZOBACZ PROJEKTY',
      hero_kicker: 'MODYFIKACJE FANOWSKIE',
      hero_intro: 'Nowe zadania, nowe postacie, nowe miejsca – znajomy świat, który wciąż rośnie.',
      eyebrow_projects: 'NASZE',
      projects_title: 'Projekty modów',
      projects_intro: 'Aby dowiedzieć się więcej, wybierz żądany projekt.',
      g1_desc: 'Witaj w kolonii, dziecko!',
      g2_desc: 'Pojedynczy więzień zmienił los setek...',
      secret_desc: 'Tajny projekt jest w trakcie...',
      secret_question: 'Co mamy tutaj?',
      more_info: 'DOWIEDZ SIĘ WIĘCEJ',
      eyebrow_about: 'O EDYCJI ROCZNICY',
      about_title: 'Jaki jest cel?',
      about_text: 'Edycja Rocznicy to seria niekomercyjnych projektów fanowskich, które mają na celu rozszerzenie świata Gothic o nowe zadania, postacie, historie i pomysły – nie tracąc z oczu oryginalnego charakteru gier.',
      eyebrow_team: 'NASZ',
      eyebrow_support: 'WESPRZYJ NAS',
      eyebrow_join: 'DOŁĄCZ',
      join_h: 'Poszukujemy artystów',
      join_text: 'Szukamy artystów 2D i 3D do Anniversary Edition – tekstury, concept art lub modele. Zainteresowany? Odezwij się na naszym <a href="https://discord.gg/P5TWh8krmc" target="_blank" rel="noopener noreferrer">Discordzie</a>.',
      team_title: 'Zespół',
      team_intro: 'Kreatywne umysły stojące za projektami.',
      role_crygreg: 'Twórca projektu, lider zespołu i główny dev',
      role_alistair: 'Pomysły i koncepcje · Grafika 2D/3D i animacja · Skrypty Daedalus · Silnik i renderer GD3D11 (C++/Union) · Strona · QA i feedback',
      role_ben: 'Pomysły i koncepcje · Artysta 2D i 3D · QA i feedback',
      role_midgard: 'Pomysły i koncepcje · Artysta 3D · QA i feedback',
      footer1: 'EDYCJA ROCZNICY',
      footer2: 'Niekomercyjne projekty fanowskie',
      footer_legal: 'Gothic jest znakiem towarowym THQ Nordic AB – projekt nieoficjalny.',
      footer_back: 'Powrót do strony głównej',
      overview: 'PRZEGLĄD',
      about_mod: 'O modyfikacji',
      features: 'Funkcje',
      media: 'Aktualności',
      media_short: 'YouTube Short',
      media_video: 'Film na YouTube',
      media_videos: 'Filmy na YouTube',
      media_screenshot: 'Zrzut ekranu',
      media_screenshots: 'Zrzuty ekranu',
      g2_m1_date: '24.08.2026',
      g2_m2_date: '09.08.2026',
      g2_m3_date: '30.07.2026',
      media_open: 'Otwórz na YouTube',
      media_press: 'Prasa',
      media_extvideo: 'Wideo',
      media_open_gs: 'Obejrzyj na GameStar',
      media_open_pat: 'Zobacz na Patreonie',
      g2_m1_title: 'Porównanie Bigfarm',
      g2_m1_post: 'Wersja YouTube najnowszej prezentacji Bigfarm!',
      g2_m2_title: 'Farma Lobarta: oryginał kontra nowa wersja',
      g2_m2_post: 'Słodki nastrój, więc wleciał pierwszy short porównawczy 💅 👀',
      g2_m3_cap: 'Farma Lobarta – pierwsza wersja wydania, eksperymenty z roślinnością (W.I.P.)',
      media_post: 'Aktualizacja deweloperska',
      g2_post_author: 'Crygreg',
      g2_m3_title: 'Farma Lobarta i Patreon',
      g2_m3_post: '<p>Finalizujemy pierwszą wydaniową wersję farmy Lobarta. Eksperymentujemy z nową roślinnością – jak zawsze W.I.P., więc kolory trawy mogą się jeszcze lekko zmienić.</p><p>Za inspirację posłużyła <a href="images/artwork-martin-nawaz.webp" target="_blank" rel="noopener noreferrer">ta fantastyczna grafika</a> – bardzo podoba mi się w niej oświetlenie i ogólna atmosfera (uznanie dla Martina Nawaza!).</p><p>Ponadto, jak niedawno ogłoszono, poszedłem za radą i otworzyłem <a href="https://patreon.com/Crygreg/" target="_blank" rel="noopener noreferrer">Patreon</a>, gdzie będę dzielić się bardziej szczegółowymi aktualizacjami, tworzyć ankiety i pytać o opinie – albo wesprzyj nas przez <a href="https://ko-fi.com/crygreg" target="_blank" rel="noopener noreferrer">Ko-Fi</a>!</p><p>Zastrzeżenie: NIE wiąże się to z żadnymi innymi korzyściami. Chcę, żeby projekt pozostał niekomercyjny – żadnych „ekskluzywnych“ wersji przedpremierowych. Patreon i Ko-Fi to po prostu sposoby wsparcia tego i przyszłych projektów; prawie wszystkie otrzymane pieniądze (i moje własne) idą na moda. Każde wsparcie – finansowe czy nie – jest głęboko doceniane!</p><p>Wciąż pracujemy nad pierwszą grywalną wersją – miejmy nadzieję, do końca tego roku, jeśli się uda.</p>',
      g2_m4_date: '20.06.2026',
      g2_m4_title: 'Przy obozie uchodźców',
      g2_m4_post: '<p>„Wyglądasz jak uchodźca. Wszyscy uchodźcy chcą dostać się do miasta …”</p>',
      g2_m5_date: '03.06.2026',
      g2_m5_title: 'Odpoczynek przy drodze',
      g2_m5_post: '<p>Chwila relaksu na poboczu drogi …</p>',
      g2_m6_date: '29.04.2026',
      g2_m6_title: 'Dopracowanie vobów',
      g2_m6_post: '<p>Kolejny dzień, kolejna aktualizacja trwającego dopracowywania vobów świata gry. Wszystko jak zawsze W.I.P.</p><p>Wielkie podziękowania dla Snowfoxa za dodatkowy, fantastyczny wkład w spacering i pomysły!</p>',
      g2_m7_date: '27.03.2026',
      g2_m7_title: 'Wybierz swoją ścieżkę',
      g2_m7_post: '<p>Nadszedł 27 marca, a zatem – jak obiecano – tym razem sami wybieracie swoją ścieżkę!<br>Ponadto wideo na 25. rocznicę otrzymało napisy (na razie po niemiecku, angielsku, polsku i rosyjsku – przy czym dwa ostatnie przetłumaczono narzędziami, więc miejmy nadzieję, że pasują)!</p><p>Wystarczy wrócić do wideo na 25. rocznicę i przeskoczyć na koniec, aby wybrać!<br>(Na wszelki wypadek i dla wygody podlinkuję wszystkie filmy poniżej.)</p>',
      g2_m7_v1: 'Wideo na 25. rocznicę',
      g2_m7_v2: 'Dylemat Akila (Ścieżka żołnierza)',
      g2_m7_v3: 'Pakt z Akilem (Ścieżka najemnika)',
      g2_m8_date: '14.03.2026',
      g2_m8_title: 'Zwiastun na 25. rocznicę',
      g2_m9_date: '12.03.2026',
      g2_m9_title: 'Pokaz na 25. rocznicę',
      g2_m9_post: '<p>Kolejny miesiąc minął, a 25. rocznica już tuż-tuż. Czas na kolejny mały pokaz.</p>',
      g2_m8_post: '<p>Jutro, 15 marca o 20:00 CET / 19:00 UTC, świętujemy 25 lat od pierwszego wydania GOTHIC™. Niestety, ponieważ premierę trzeba było przełożyć – jak już ogłaszaliśmy – tego dnia możemy pokazać jedynie zwiastun. Ale to nie wszystko: 27 marca możecie wrócić do wideo i wybrać między ścieżką żołnierza króla a najemnika Onara – i zaliczyć małe zadanie.</p><p>AE wciąż planujemy wydać w 2026 roku, mimo opóźnienia! Mamy nadzieję, że wam się spodoba!</p>',
      g2_m10_date: '03.02.2026',
      g2_m10_title: 'Dobre i złe wieści',
      g2_m10_post: '<p>Cześć wszystkim, mamy dziś dla was dobre i złe wieści!</p><p>Dobre wieści: od publikacji zwiastuna poczyniliśmy niesamowite postępy! Jharkendar otrzymał dużą, imponującą przeróbkę, która łączy estetykę wersji alfa i Gothica 1, zachowując jednocześnie nienaruszoną atmosferę doliny z oryginału. Irdorath oferuje teraz wiele nowych zagadek, wyzwań i możliwości eksploracji oraz kilka kluczowych momentów fabularnych. Zaimplementowano też liczne inne funkcje – część już pokazaliśmy, inne trzymamy jeszcze w tajemnicy. Należą do nich m.in. usprawnienia QoL, przeróbka systemu rzemiosł, nowe kalkulacje obrażeń i wiele więcej. Niemiecki dubbing robi już dobre postępy i szykuje dla was kilka niespodzianek! Wszystkie trzy podgildie oferują kolejne unikalne dialogi i zadania.</p><p>Niestety, są też złe wieści. Pojawiło się wiele nieoczekiwanych problemów poza naszą kontrolą, które opóźniły kilka elementów projektu. Choć wciąż jesteśmy w fazie alfa, do bety już niedaleko – jednak nie odbyły się jeszcze żadne prawdziwe testy. W związku z tym stało się jasne, że pierwotnie planowanej premiery najprawdopodobniej nie uda się dotrzymać. Dlatego jesteśmy zmuszeni przesunąć premierę na … 2026 rok. Tak, 2026 pozostaje rokiem premiery. Kiedy dokładnie – zdecydujemy, gdy przyjdzie na to czas, by nie powtarzać błędów.</p><p>15 marca byłby świetną okazją na premierę projektu. W ten sposób można jednak dalej rozbudowywać wiele rzeczy. Uda nam się też wydać moda na 25. rocznicę (tylko nie dokładnie w punkt).</p><p>Do zobaczenia wkrótce w Khorinis naznaczonym konsekwencjami WASZYCH czynów! Do zobaczenia, podróżnicy i uchodźcy!</p>',
      g2_m11_date: '28.01.2026',
      g2_m11_title: 'GameStar: „Neuer Wind für Gothic 2”',
      g2_m11_v1: 'GameStar: „Neuer Wind für Gothic 2”',
      g2_m11_post: '<p>GameStar opublikował artykuł o Anniversary Edition – jak przed chwilą zauważyłem! 🥹</p>',
      g2_m12_date: '25.12.2025',
      g2_m12_title: 'Świąteczny pokaz: nowa pogoda',
      g2_m12_cap: 'Nowe stany pogody – wciąż W.I.P.',
      g2_m12_post: '<p>Po długiej walce z zaszytym na sztywno systemem pogody i stanów nieba w grze, dzięki @Alistair Afton, udało się osiągnąć kilka poważnych przełomów! Oto część nowych warunków pogodowych jako świąteczny prezent – pamiętajcie jednak, że to wciąż W.I.P. (zanim ktoś zapyta: zielona pogoda nawiązuje do tej z intra G1) i nie wszystkie pojawią się wszędzie. Mają one stanowić zdrową mieszankę bardziej gothicowej natury i bardziej idyllicznych klimatów świata zewnętrznego, choć te drugie nie będą już dominować.</p><p>Wesołych Świąt 🎄, spędźcie fantastyczny czas z bliskimi i miejcie świetny start w nowy rok! Do zobaczenia w 2026! ✨</p>',
      g2_m13_date: '15.12.2025',
      g2_m13_title: 'Fauna Myrtany',
      g2_m13_cap: 'Nowe zwierzęta i potwory',
      g2_m13_post: '<p>Flora i fauna Królestwa Myrtany są domem dla wielu zwierząt i potworów różnej płci i wieku. Ale strzeż się: wszystkie mogą uznać cię za mile widzianą zdobycz, a niektóre zostały przez mroczne moce zmienione nie do poznania … przez co stały się dla zwykłego człowieka jeszcze groźniejsze.</p>',
      g2_m14_date: '27.11.2025',
      g2_m14_title: 'Zapowiedź na 23. urodziny',
      g2_m14_v1: 'Wideo-zapowiedź',
      g2_m14_post: '<p>Gothic II kończy 23 lata 29 listopada. Uczcijmy to specjalną zapowiedzią, która ukaże się właśnie tego dnia! 👀</p>',
      g2_m15_date: '23.08.2026',
      g2_m15_title: 'Nowy short – podgląd na Patreonie',
      g2_m15_post: 'Nowy short jest już gotowy dla patronów; na YouTube trafi później dziś lub jutro:',
      g2_m16_date: '21.07.2026',
      g2_m16_title: 'Patreon wystartował',
      g2_m16_post: '<p>Na czyjąś radę założyłem Patreona dla wspierających – głównie ze względu na pojawiające się koszty, gdyby ktoś chciał je wesprzeć. Będę starał się publikować regularnie i dawać (ekskluzywne) aktualizacje.</p><p>NIE będzie to paywall, za którym chowam coś „konkretnego” ani nie daję wczesnego dostępu czy czegoś podobnego – to dla tych, którzy chcieliby wesprzeć więcej oryginalnych dubbingów i innych rzeczy i ewentualnie mieć prawo głosu. :)</p><p>Zobaczcie sami!</p>',
      g2_m17_date: '27.11.2025',
      g2_m17_title: 'Zmierzch na farmach',
      g2_m17_cap: 'Zmierzch na farmach',
      g2_m18_date: '05.11.2025',
      g2_m18_title: 'Kolejny dzień na farmie Onara',
      g2_m18_post: 'Kolejny dzień na farmie Onara …',
      g2_m18_cap: 'Kolejny dzień na farmie Onara …',
      g2_m19_date: '04.11.2025',
      g2_m19_title: 'Gameplay z Gamescom 2025',
      g2_m19_post: 'Gameplay z Gamescom 2025:',
      g2_m20_date: '04.11.2025',
      g2_m20_title: 'One Year Later',
      g2_m20_post: '„One Year Later” – w nawiązaniu do tego starego klipu testowego:',
      g2_m20_v1: 'One Year Later',
      g2_m20_v2: 'Stary klip testowy (odniesienie)',
      g2_m21_date: '04.11.2025',
      g2_m21_title: 'Pierwsze wrażenia',
      g2_m21_cap: 'Pierwsze wrażenia',
      support_h: 'Wesprzyj',
      support_note: 'To osobiste strony Crygrega i Alistaira Aftona – dobrowolne sposoby wsparcia rozwoju; projekt pozostaje niekomercyjny.',
      screenshot: 'Zrzut ekranu',
      download_h: 'Pobieranie',
      download_note: 'Ostateczny link do pobrania, wydanie na GitHubie lub zewnętrzny link można dodać tutaj później.',
      download_btn: 'POBIERZ',
      download_soon: 'Pobieranie nie jest jeszcze dostępne.',
      lb_label: 'Podgląd obrazu',
      lb_video_label: 'Podgląd wideo',
      lb_close: 'Zamknij',
      lb_prev: 'Poprzedni obraz',
      lb_next: 'Następny obraz',
      g1_overview: 'Rozszerzenie pierwszej przygody Gothic.',
      g1_f1: 'Nowe zadania i wątki fabularne',
      g1_f2: 'Ulepszona grafika i tekstury',
      g1_f3: 'Rozbudowany rozwój postaci',
      g1_f4: 'Nowe przedmioty i ekwipunek',
      g2_overview: 'Anniversary Edition to rozbudowane fanowskie rozszerzenie i mod overhaul do Gothic II: Noc Kruka. Rozszerza i częściowo przerabia fabułę główną oraz stare i nowe zadania poboczne, wprowadza nowe gildie i ścieżki, powiększa świat o nowe obszary i mieszkańców – i nadaje grze własny styl graficzny oparty na Gothicu I i jego alfie, Gothic Sequel oraz materiałach alfa Gothica II. Po premierze planowane są kolejne aktualizacje, które rozbudują historię i dalej przerobią meshe świata.',
      g2_cat_story: 'Fabuła i świat',
      g2_cat_game: 'Rozgrywka',
      g2_cat_gear: 'Postać i ekwipunek',
      g2_cat_gfx: 'Oprawa i dopracowanie',
      g2_s1: 'Rozbudowana i częściowo delikatnie przerobiona fabuła główna (4 nowe zadania) – plus około 50 nowych zadań pobocznych, w większości powiązanych z wyborem frakcji',
      g2_s2: 'Wybory frakcji niosą ze sobą nowe możliwości i trwałe konsekwencje',
      g2_s3: 'Wiele alternatywnych dróg i rozwiązań w licznych oryginalnych zadaniach',
      g2_s4: 'Ścieżka bez gildii oraz trzy nowe podgildie: Magowie Wody, Łowcy Demonów i Gwardia Królewska',
      g2_s5: 'Logicznie rozszerzone poziomy świata – zamieszkane przez niezliczonych nowych NPC-ów',
      g2_s6: 'Przerobione dialogi, interakcje i rutyny NPC-ów – dla bardziej reaktywnego świata',
      g2_s7: 'Ukryte miejsca, które zasługują na tę nazwę – PD za ich odkrycie',
      g2_s8: 'Kolejne aktualizacje po premierze rozbudują historię i dalej przerobią meshe świata',
      g2_g1: 'Cztery poziomy trudności do wyboru – żadnych „gąbek na pociski”, za to głębsze zmiany w rozgrywce',
      g2_g2: 'Nowa kalkulacja obrażeń – mieszanka Gothica I i II z kilkoma ukrytymi mechanikami',
      g2_g3: 'Przerobione walki z bossami i nowy balans – miejscami głębiej lub trudniej niż w oryginale, gdzie indziej nieco łatwiej',
      g2_g4: 'Przeróbki SI: NPC-e reagują na status bohatera (i innych), mogą zignorować przestępstwo albo uciec; ofiary i świadkowie komentują zapłatę kary i witają cię zależnie od statusu oraz relacji',
      g2_g5: 'Kondycja i sprint (prawie bez wpływu na system walki) oraz walka laską i tarczą',
      g2_g6: 'Komunikaty o śmierci – zależne i niezależne od rozdziału',
      g2_e1: 'Przegrupowane menu statusu z przerzucaniem stron',
      g2_e2: 'Koszt nauki w PN rośnie wraz z dotychczasowymi postępami – niezależnie od statystyk postaci',
      g2_e3: 'Rozszerzone i zupełnie nowe rzemiosła – znane z Gothic Sequel',
      g2_e4: 'Wiele nowych broni – w tym znanych z Gothica I',
      g2_e5: 'Nowe pancerze, bez gildii i dla gildii – uzupełnione brakujące rangi, rozbudowana progresja',
      g2_v1: 'Nowy styl graficzny zbudowany z materiału Gothica I i jego wersji alfa, Gothic Sequel oraz alfy Gothica II – dzięki niezliczonym nowym i autorskim zasobom',
      g2_v2: 'Nowy, przerobiony interfejs użytkownika',
      g2_v3: 'Niezliczone przeróbki, warianty i poprawki modeli (mapowanie UV, zniekształcenia, brakujące wierzchołki)',
      g2_v4: 'Niezliczone poprawki błędów i usprawnienia kosmetyczne – naprawdę',
      notfound_title: 'Strona nie znaleziona',
      notfound_text: 'Szukana strona nie istnieje lub została przeniesiona.',
      notfound_btn: 'DO STRONY GŁÓWNEJ'
    },
    ru: {
      skip: 'Перейти к содержимому',
      aria_nav: 'Основная навигация',
      aria_menu: 'Меню',
      aria_home: 'На главную',
      aria_lang: 'Выбрать язык',
      nav_projects: 'Проекты',
      nav_about: 'О проекте',
      nav_team: 'Команда',
      nav_support: 'Поддержать',
      nav_back: '← Проекты',
      view_projects: 'СМОТРЕТЬ ПРОЕКТЫ',
      hero_kicker: 'ФАНАТСКИЕ МОДИФИКАЦИИ',
      hero_intro: 'Новые квесты, новые персонажи, новые места — знакомый мир, который продолжает расти.',
      eyebrow_projects: 'НАШИ',
      projects_title: 'Мод-проекты',
      projects_intro: 'Чтобы узнать больше, выберите желаемый проект.',
      g1_desc: 'Добро пожаловать в колонию, малыш!',
      g2_desc: 'Один заключенный изменил судьбу сотен...',
      secret_desc: 'Секретный проект в разработке...',
      secret_question: 'Что у нас тут?',
      more_info: 'УЗНАТЬ БОЛЬШЕ',
      eyebrow_about: 'О ЮБИЛЕЙНОМ ИЗДАНИИ',
      about_title: 'Какова цель?',
      about_text: 'Юбилейное издание — это серия некоммерческих фанатских проектов, направленных на расширение мира Gothic новыми квестами, персонажами, историями и идеями, не теряя при этом оригинального характера игр.',
      eyebrow_team: 'НАША',
      eyebrow_support: 'ПОДДЕРЖИТЕ НАС',
      eyebrow_join: 'ПРИСОЕДИНЯЙСЯ',
      join_h: 'Ищем художников',
      join_text: 'Мы ищем 2D- и 3D-художников для Anniversary Edition — текстуры, концепт-арт или модели. Заинтересованы? Напишите нам в <a href="https://discord.gg/P5TWh8krmc" target="_blank" rel="noopener noreferrer">Discord</a>.',
      team_title: 'Команда',
      team_intro: 'Творческие умы, стоящие за проектами.',
      role_crygreg: 'Создатель проекта, лидер команды и ведущий разработчик',
      role_alistair: 'Идеи и концепции · 2D/3D и анимация · Скрипты Daedalus · Движок и рендер GD3D11 (C++/Union) · Сайт · QA и обратная связь',
      role_ben: 'Идеи и концепции · 2D- и 3D-художник · QA и обратная связь',
      role_midgard: 'Идеи и концепции · 3D-художник · QA и обратная связь',
      footer1: 'ЮБИЛЕЙНОЕ ИЗДАНИЕ',
      footer2: 'Некоммерческие фанатские проекты',
      footer_legal: 'Gothic — товарный знак THQ Nordic AB, неофициальный проект.',
      footer_back: 'Вернуться на главную',
      overview: 'ОБЗОР',
      about_mod: 'О модификации',
      features: 'Особенности',
      media: 'Новости',
      media_short: 'YouTube Short',
      media_video: 'Видео на YouTube',
      media_videos: 'Видео на YouTube',
      media_screenshot: 'Скриншот',
      media_screenshots: 'Скриншоты',
      g2_m1_date: '24.08.2026',
      g2_m2_date: '09.08.2026',
      g2_m3_date: '30.07.2026',
      media_open: 'Открыть на YouTube',
      media_press: 'Пресса',
      media_extvideo: 'Видео',
      media_open_gs: 'Смотреть на GameStar',
      media_open_pat: 'Открыть на Patreon',
      g2_m1_title: 'Сравнение «Большой фермы»',
      g2_m1_post: 'YouTube-версия новейшего шоукейса Bigfarm!',
      g2_m2_title: 'Ферма Лобарта: оригинал и новая версия',
      g2_m2_post: 'В милом настроении — первый шорт со сравнением 💅 👀',
      g2_m3_cap: 'Ферма Лобарта – первая версия релиза, эксперименты с растительностью (W.I.P.)',
      media_post: 'Обновление разработки',
      g2_post_author: 'Crygreg',
      g2_m3_title: 'Ферма Лобарта и Patreon',
      g2_m3_post: '<p>Завершаем первую релизную версию фермы Лобарта. Экспериментируем с новой растительностью — как всегда, W.I.P., поэтому цвета травы ещё могут немного измениться.</p><p>В качестве вдохновения использовался <a href="images/artwork-martin-nawaz.webp" target="_blank" rel="noopener noreferrer">этот фантастический арт</a> — мне очень понравились освещение и атмосфера (спасибо Мартину Навазу!).</p><p>Кроме того, как было объявлено недавно, я последовал рекомендации и открыл <a href="https://patreon.com/Crygreg/" target="_blank" rel="noopener noreferrer">Patreon</a>, где буду делиться более подробными обновлениями разработки, проводить опросы и спрашивать мнения — или поддержите нас через <a href="https://ko-fi.com/crygreg" target="_blank" rel="noopener noreferrer">Ko-Fi</a>!</p><p>Дисклеймер: это НЕ даёт никаких других преимуществ. Я хочу, чтобы проект оставался некоммерческим — никаких «эксклюзивных» пре-релизных сборок. Patreon и Ko-Fi — просто способы поддержать этот и будущие проекты; почти все полученные деньги (и мои собственные) всё равно идут на мод. Любая поддержка — финансовая или нет — очень ценится!</p><p>Мы продолжаем работать над первой играбельной версией — надеемся, к концу этого года, если получится.</p>',
      g2_m4_date: '20.06.2026',
      g2_m4_title: 'У лагеря беженцев',
      g2_m4_post: '<p>«Ты похож на беженца. Все беженцы хотят попасть в город …»</p>',
      g2_m5_date: '03.06.2026',
      g2_m5_title: 'Привал у дороги',
      g2_m5_post: '<p>Немного отдыха на обочине …</p>',
      g2_m6_date: '29.04.2026',
      g2_m6_title: 'Тонкая настройка вобов',
      g2_m6_post: '<p>Ещё один день — ещё одно обновление о продолжающейся тонкой настройке вобов игрового мира. Всё, как всегда, W.I.P.</p><p>Огромное спасибо Snowfox за дополнительный, фантастический вклад в спейсеринг и идеи!</p>',
      g2_m7_date: '27.03.2026',
      g2_m7_title: 'Выбери свой путь',
      g2_m7_post: '<p>27 марта наступило, и, как обещано, на этот раз вы сами выбираете свой путь!<br>Кроме того, видео к 25-й годовщине получило субтитры (пока на немецком, английском, польском и русском – причём два последних переведены инструментами, так что, надеемся, подходят)!</p><p>Просто вернитесь к видео к 25-й годовщине и перемотайте до конца, чтобы выбрать!<br>(На всякий случай и для удобства я всё же дам ссылки на все видео ниже.)</p>',
      g2_m7_v1: 'Видео к 25-й годовщине',
      g2_m7_v2: 'Дилемма Акила (Путь солдата)',
      g2_m7_v3: 'Пакт с Акилом (Путь наёмника)',
      g2_m8_date: '14.03.2026',
      g2_m8_title: 'Трейлер к 25-й годовщине',
      g2_m9_date: '12.03.2026',
      g2_m9_title: 'Шоукейс к 25-й годовщине',
      g2_m9_post: '<p>Прошёл ещё один месяц, и 25-я годовщина уже не за горами. Время для ещё одного небольшого шоукейса.</p>',
      g2_m8_post: '<p>Завтра, 15 марта, в 20:00 CET / 19:00 UTC, присоединяйтесь к празднованию 25 лет с первого релиза GOTHIC™. К сожалению, поскольку релиз пришлось перенести – как мы уже объявляли – в этот день мы можем показать только трейлер. Но впереди ещё многое: 27 марта вы сможете вернуться к видео и выбрать между путём солдата короля и наёмника Онара – и посетить небольшой квест.</p><p>AE по-прежнему планируется к выходу в 2026 году, несмотря на задержку! Надеемся, вам понравится!</p>',
      g2_m10_date: '03.02.2026',
      g2_m10_title: 'Хорошие и плохие новости',
      g2_m10_post: '<p>Всем привет, сегодня у нас для вас хорошие и плохие новости!</p><p>Хорошие новости: с момента выхода трейлера мы добились невероятного прогресса! Яркендар получил большую, впечатляющую переработку, объединяющую эстетику альфа-версий и Gothic 1, но при этом сохраняющую нетронутую атмосферу долины оригинала. Ирдорат теперь предлагает множество новых загадок, испытаний и возможностей для исследования, а также несколько центральных сюжетных моментов. Кроме того, было реализовано множество других функций — некоторые мы уже показывали, другие пока держим в секрете. Среди них улучшения QoL, переработка системы крафта, новые расчёты урона и многое другое. Немецкая озвучка уже делает хорошие успехи и готовит для вас сюрпризы! Все три субгильдии предлагают дополнительные уникальные диалоги и квесты.</p><p>К сожалению, есть и плохие новости. Возникло много неожиданных проблем вне нашего контроля, которые задержали несколько элементов проекта. Мы всё ещё в альфа-фазе, но уже недалеко от беты — однако настоящих плейтестов пока не было. Поэтому стало ясно, что первоначально запланированный релиз, скорее всего, не удастся удержать. По этой причине мы вынуждены перенести релиз на … 2026 год. Да, 2026 остаётся годом релиза. Когда именно — решим, когда придёт время, чтобы не повторять ошибки.</p><p>15 марта была бы отличной возможностью для релиза проекта. Зато теперь можно расширить ещё многое. Нам также удастся выпустить мод к 25-й годовщине (просто не точно в день).</p><p>Скоро увидимся в Хоринисе, отмеченном последствиями ВАШИХ поступков! До скорого, путники и беженцы!</p>',
      g2_m11_date: '28.01.2026',
      g2_m11_title: 'GameStar: «Neuer Wind für Gothic 2»',
      g2_m11_v1: 'GameStar: «Neuer Wind für Gothic 2»',
      g2_m11_post: '<p>GameStar выпустил статью об Anniversary Edition — как я только что заметил! 🥹</p>',
      g2_m12_date: '25.12.2025',
      g2_m12_title: 'Рождественский шоукейс: новая погода',
      g2_m12_cap: 'Новые погодные состояния – пока W.I.P.',
      g2_m12_post: '<p>После долгой борьбы с жёстко зашитыми в игру погодой и состояниями неба, благодаря @Alistair Afton, нам удалось добиться серьёзных прорывов! Вот некоторые из новых погодных эффектов в качестве рождественского подарка — но имейте в виду, это всё ещё W.I.P. (прежде чем кто-то спросит: зелёная погода напоминает ту самую из вступительного ролика G1), и не все они будут встречаться повсюду. Они должны давать здоровый микс более готической природы и более идиллических настроений внешнего мира, хотя последние больше не будут преобладать.</p><p>Счастливого Рождества всем 🎄, отличного времени с близкими и отличного начала нового года! Увидимся в 2026! ✨</p>',
      g2_m13_date: '15.12.2025',
      g2_m13_title: 'Фауна Миртаны',
      g2_m13_cap: 'Новые звери и монстры',
      g2_m13_post: '<p>Флора и фауна королевства Миртана полны самых разных зверей и монстров разного пола и возраста. Но берегись: любой из них может счесть тебя желанной добычей, а некоторых тёмные силы изменили до неузнаваемости … отчего для обычного человека они стали ещё опаснее.</p>',
      g2_m14_date: '27.11.2025',
      g2_m14_title: 'Анонс к 23-летию',
      g2_m14_v1: 'Видео-анонс',
      g2_m14_post: '<p>Gothic II исполняется 23 года 29 ноября. Отметим это особым анонсом, который выйдет в тот же день! 👀</p>',
      g2_m15_date: '23.08.2026',
      g2_m15_title: 'Новый шорт — превью на Patreon',
      g2_m15_post: 'Новый шорт готов для подписчиков Patreon; на YouTube он будет загружен позже сегодня или завтра:',
      g2_m16_date: '21.07.2026',
      g2_m16_title: 'Запуск Patreon',
      g2_m16_post: '<p>По совету я завёл Patreon для желающих поддержать проект – в основном из-за возникающих расходов, если кто-то захочет помочь. Буду стараться постить регулярно и делать (эксклюзивные) обновления.</p><p>Это НЕ будет пейволом, за которым я прячу что-то «существенное» или даю ранний доступ и т. п. – он для тех, кто хотел бы поддержать больше оригинальной озвучки и прочего и, возможно, иметь право голоса. :)</p><p>Загляните сами!</p>',
      g2_m17_date: '27.11.2025',
      g2_m17_title: 'Сумерки на фермах',
      g2_m17_cap: 'Сумерки на фермах',
      g2_m18_date: '05.11.2025',
      g2_m18_title: 'Ещё один день на ферме Онара',
      g2_m18_post: 'Ещё один день на ферме Онара …',
      g2_m18_cap: 'Ещё один день на ферме Онара …',
      g2_m19_date: '04.11.2025',
      g2_m19_title: 'Геймплей с Gamescom 2025',
      g2_m19_post: 'Геймплей с Gamescom 2025:',
      g2_m20_date: '04.11.2025',
      g2_m20_title: 'One Year Later',
      g2_m20_post: '«One Year Later» — в отсылке к этому старому тестовому клипу:',
      g2_m20_v1: 'One Year Later',
      g2_m20_v2: 'Старый тестовый клип (отсылка)',
      g2_m21_date: '04.11.2025',
      g2_m21_title: 'Первые впечатления',
      g2_m21_cap: 'Первые впечатления',
      support_h: 'Поддержка',
      support_note: 'Это личные страницы Crygreg и Alistair Afton — добровольные способы поддержать разработку; проект остаётся некоммерческим.',
      screenshot: 'Скриншот',
      download_h: 'Скачивание',
      download_note: 'Финальная ссылка на скачивание, релиз на GitHub или внешняя ссылка могут быть добавлены здесь позже.',
      download_btn: 'СКАЧАТЬ',
      download_soon: 'Скачивание пока недоступно.',
      lb_label: 'Просмотр изображения',
      lb_video_label: 'Просмотр видео',
      lb_close: 'Закрыть',
      lb_prev: 'Предыдущее изображение',
      lb_next: 'Следующее изображение',
      g1_overview: 'Расширение первого приключения Gothic.',
      g1_f1: 'Новые квесты и сюжетные линии',
      g1_f2: 'Улучшенная графика и текстуры',
      g1_f3: 'Расширенное развитие персонажа',
      g1_f4: 'Новые предметы и снаряжение',
      g2_overview: 'Anniversary Edition — масштабное фанатское расширение и оверол-мод для Gothic II: Ночь Ворона. Оно расширяет и частично перерабатывает основной сюжет, а также старые и новые побочные задания, добавляет новые гильдии и пути, увеличивает мир новыми областями и жителями — и придаёт игре собственный визуальный стиль, основанный на Gothic I, альфе Gothic I, Gothic Sequel и альфа-материалах Gothic II. После релиза выйдут обновления, которые продолжат расширять историю и перерабатывать меши мира.',
      g2_cat_story: 'История и мир',
      g2_cat_game: 'Геймплей',
      g2_cat_gear: 'Персонаж и снаряжение',
      g2_cat_gfx: 'Графика и полировка',
      g2_s1: 'Расширенная и частично мягко переработанная основная история (4 новых квеста) — плюс около 50 новых побочных заданий, многие из которых зависят от выбора фракции',
      g2_s2: 'Выбор фракции открывает новые возможности и ведёт к долгосрочным последствиям',
      g2_s3: 'Несколько альтернативных путей и решений во множестве оригинальных квестов',
      g2_s4: 'Путь без гильдии и три новых субгильдии: Маги Воды, Охотники на демонов и Королевская гвардия',
      g2_s5: 'Логично расширенные уровни мира — населённые бесчисленными новыми NPC',
      g2_s6: 'Переработанные диалоги, взаимодействия и распорядки NPC — ради более живого мира',
      g2_s7: 'Скрытые места, которые оправдывают своё название — опыт за их нахождение',
      g2_s8: 'После релиза выйдут обновления, которые расширят историю и продолжат перерабатывать меши мира',
      g2_g1: 'Четыре уровня сложности на выбор — никаких «губок для урона», зато более глубокие изменения в игровом процессе',
      g2_g2: 'Новый расчёт урона — смесь Gothic I и II с парой скрытых механик',
      g2_g3: 'Переработанные бои с боссами и новый баланс — местами глубже или сложнее оригинала, местами чуть проще',
      g2_g4: 'Переработки ИИ: NPC реагируют на статус героя (и других), могут игнорировать преступления или убегать; жертвы и свидетели комментируют уплату штрафа и приветствуют в зависимости от статуса и отношений',
      g2_g5: 'Выносливость и спринт (почти без влияния на боевую систему), а также бой посохом и со щитом',
      g2_g6: 'Сообщения о смертях — зависящие и не зависящие от главы',
      g2_e1: 'Перекомпонованное меню статуса с перелистыванием страниц',
      g2_e2: 'Стоимость обучения в ОО растёт в зависимости от уже изученного, а не от характеристик',
      g2_e3: 'Расширенные и совершенно новые ремёсла — известные по Gothic Sequel',
      g2_e4: 'Множество новых видов оружия — в том числе знакомых по Gothic I',
      g2_e5: 'Новые доспехи, без гильдии и для гильдий — дополнены недостающие ранги, расширена прогрессия',
      g2_v1: 'Новый арт-стиль из элементов Gothic I, альфы Gothic I, Gothic Sequel и альфы Gothic II — благодаря бесчисленным новым и авторским ресурсам',
      g2_v2: 'Новый переработанный интерфейс',
      g2_v3: 'Бесчисленные переработки, вариации и исправления моделей (UV-развёртки, искажения, недостающие вершины)',
      g2_v4: 'Бесчисленные исправления ошибок и косметические улучшения — всерьёз',
      notfound_title: 'Страница не найдена',
      notfound_text: 'Запрашиваемая страница не существует или была перемещена.',
      notfound_btn: 'НА ГЛАВНУЮ'
    }
  };

  function getInitialLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) { /* Speicher nicht verfuegbar */ }
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return translations[nav] ? nav : DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    var t = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n')];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n-aria')];
      if (value !== undefined) el.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n-alt')];
      if (value !== undefined) el.setAttribute('alt', value);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n-html')];
      if (value !== undefined) el.innerHTML = value;
    });
    var select = document.getElementById('lang-select');
    if (select) select.value = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignorieren */ }
  }

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.getElementById('nav-links');
    if (!toggle || !links) return;
    function closeMenu() {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') &&
          !e.target.closest('.nav-links') &&
          !e.target.closest('.nav-toggle')) {
        closeMenu();
      }
    });
  }

  function initReveal() {
    var els = document.querySelectorAll('[data-reveal], .detail-content, .detail-body > *');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    // Hysterese: "in" braucht einen tieferen Viewport-Eintritt als "out" -
    // sonst retriggered die translateY-Bewegung der Animation den Observer
    // und Elemente flackern an den Raendern endlos hin und her.
    var inObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('out');
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0, rootMargin: '-15% 0px -15% 0px' });

    var outObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting && entry.target.classList.contains('in')) {
          entry.target.classList.remove('in');
          entry.target.classList.add('out');
        }
      });
    }, { threshold: 0, rootMargin: '-8% 0px -6% 0px' });

    els.forEach(function (el) {
      inObserver.observe(el);
      outObserver.observe(el);
    });
  }

  function initScrollSpy() {
    var links = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[entry.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  }

  /* YouTube-Thumbnails: je nach Video/CDN fehlen einzelne Tiers oder es
     kommt ein 120x90-Platzhalter mit Status 200 (onerror feuert nicht).
     Deshalb Kette runtergehen, bis ein echtes Bild kommt. */
  function initVideoThumbs() {
    document.querySelectorAll('.media-video img').forEach(function (im) {
      var card = im.closest('.media-video');
      var m = /(?:v=|shorts\/)([A-Za-z0-9_-]+)/.exec(card ? card.getAttribute('href') : '')
            || /vi\/([A-Za-z0-9_-]+)\//.exec(im.getAttribute('src') || '');
      if (!m) return;
      var base = 'https://i.ytimg.com/vi/' + m[1] + '/';
      var tiers = im.closest('.media-video-short')
        ? ['oar2.jpg', 'maxresdefault.jpg', 'sddefault.jpg', 'hqdefault.jpg', 'mqdefault.jpg']
        : ['maxresdefault.jpg', 'sddefault.jpg', 'hqdefault.jpg', 'mqdefault.jpg'];
      var i = tiers.indexOf((im.getAttribute('src') || '').split('/').pop());
      function next() {
        if (i + 1 < tiers.length) { i++; im.src = base + tiers[i]; }
        else { im.closest('.media-video').classList.add('no-thumb'); }
      }
      function check() { if (im.naturalWidth <= 120) next(); }
      im.addEventListener('error', next);
      im.addEventListener('load', check);
      if (im.complete) check();
    });
  }

  /* Lightbox fuer Bild-Links (Galerie + Artwork im Post): grosses Vorschaubild
     direkt auf der Seite. Delegierter Click-Handler, damit per data-i18n-html
     neu gesetzte Post-Links ohne Re-Bind funktionieren.
     Pfeiltasten/Buttons zum Blaettern, Esc oder Klick auf den Hintergrund
     schliesst. Ohne JS funktionieren die Links weiterhin (neuer Tab). */
  function initLightbox() {
    var imgRe = /\.(jpe?g|png|webp|gif|avif)($|\?)/i;
    /* Alle Medien eines Eintrags (Bilder + Videos gemischt) bilden eine
       gemeinsame Blaetter-Sequenz. */
    function itemsFor(a) {
      var scope = a.closest('.media-post-body') || document;
      return Array.prototype.slice.call(scope.querySelectorAll('a[href]'))
        .filter(function (x) {
          return x.hasAttribute('data-embed') || imgRe.test(x.getAttribute('href'));
        });
    }
    if (!document.querySelector('.media-post-body')) return;
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML =
      '<button type="button" class="lb-close" data-i18n-aria="lb_close" aria-label="Schließen">&times;</button>' +
      '<button type="button" class="lb-prev" data-i18n-aria="lb_prev" aria-label="Vorheriges Bild">&lsaquo;</button>' +
      '<div class="lb-stage"><img alt="" aria-live="polite" draggable="false">' +
      '<div class="lb-video"></div>' +
      '<div class="lb-caption"></div></div>' +
      '<div class="lb-count" aria-hidden="true"></div>' +
      '<button type="button" class="lb-next" data-i18n-aria="lb_next" aria-label="Nächstes Bild">&rsaquo;</button>';
    box.setAttribute('aria-label', 'Bildvorschau');
    box.setAttribute('data-i18n-aria', 'lb_label');
    document.body.appendChild(box);
    var img = box.querySelector('img');
    var vid = box.querySelector('.lb-video');
    var cap = box.querySelector('.lb-caption');
    var count = box.querySelector('.lb-count');
    var items = [];
    var current = 0;
    var lastFocus = null;
    function t(key) {
      var lang = document.documentElement.lang;
      var dict = translations[lang] || translations[DEFAULT_LANG];
      return dict[key];
    }
    /* Zoom/Pan fuer Bilder: Rad/Doppelklick/Pinch zoomt zum Zeiger,
       Ziehen verschiebt. translate(tx,ty) um das Layout-Zentrum. */
    var zoom = { s: 1, tx: 0, ty: 0 };
    function applyZoom() {
      img.style.transform = zoom.s === 1 ? ''
        : 'translate(' + zoom.tx + 'px,' + zoom.ty + 'px) scale(' + zoom.s + ')';
      img.classList.toggle('zoomed', zoom.s > 1);
    }
    function resetZoom() { zoom.s = 1; zoom.tx = 0; zoom.ty = 0; applyZoom(); }
    function zoomTo(cx, cy, s2) {
      s2 = Math.min(8, Math.max(1, s2));
      if (s2 === zoom.s) return;
      var r = img.getBoundingClientRect();
      var dx = cx - (r.left + r.width / 2 - zoom.tx);
      var dy = cy - (r.top + r.height / 2 - zoom.ty);
      var k = s2 / zoom.s;
      zoom.tx = dx - (dx - zoom.tx) * k;
      zoom.ty = dy - (dy - zoom.ty) * k;
      zoom.s = s2;
      if (s2 === 1) { zoom.tx = 0; zoom.ty = 0; }
      applyZoom();
    }
    function zoomAt(cx, cy, factor) { zoomTo(cx, cy, zoom.s * factor); }
    img.addEventListener('wheel', function (e) {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 1.3 : 1 / 1.3);
    }, { passive: false });
    /* Einzelklick zoomt auf die Stelle: Ziel = mindestens 3x der
       Einpassungsgroesse (bzw. native Pixel, wenn hoeher), damit auch
       niedriger aufgeloeste Bilder spuerbar herankommen. Bei bereits
       gezoomtem Bild zurueck auf 1. */
    function clickZoom(cx, cy) {
      if (zoom.s > 1) { resetZoom(); return; }
      var w0 = img.getBoundingClientRect().width;
      var s2 = img.naturalWidth ? img.naturalWidth / w0 : 2.5;
      zoomTo(cx, cy, Math.min(Math.max(3, s2), 6));
    }
    var pts = {}, downs = {}, dragDist = 0, dragMid = null, multi = false;
    img.addEventListener('pointerdown', function (e) {
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      downs[e.pointerId] = { x: e.clientX, y: e.clientY };
      img.setPointerCapture(e.pointerId);
      img.classList.add('dragging');
      var keys = Object.keys(pts);
      if (keys.length > 1) multi = true;
      if (keys.length === 2) {
        var p0 = pts[keys[0]], p1 = pts[keys[1]];
        dragDist = Math.hypot(p0.x - p1.x, p0.y - p1.y);
        dragMid = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
      } else {
        dragMid = { x: e.clientX, y: e.clientY };
      }
      e.preventDefault();
    });
    img.addEventListener('pointermove', function (e) {
      if (!pts[e.pointerId]) return;
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      var keys = Object.keys(pts);
      if (keys.length === 2) {
        var p0 = pts[keys[0]], p1 = pts[keys[1]];
        var d = Math.hypot(p0.x - p1.x, p0.y - p1.y);
        var mid = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
        if (dragDist) {
          zoomAt(mid.x, mid.y, d / dragDist);
          zoom.tx += mid.x - dragMid.x;
          zoom.ty += mid.y - dragMid.y;
          applyZoom();
        }
        dragDist = d;
        dragMid = mid;
      } else if (dragMid) {
        if (zoom.s > 1) {
          zoom.tx += e.clientX - dragMid.x;
          zoom.ty += e.clientY - dragMid.y;
          applyZoom();
        }
        dragMid = { x: e.clientX, y: e.clientY };
      }
    });
    function endPointer(e) {
      var down = downs[e.pointerId];
      delete pts[e.pointerId];
      delete downs[e.pointerId];
      dragDist = 0;
      if (down && Object.keys(pts).length === 0) {
        var dx = e.clientX - down.x, dy = e.clientY - down.y;
        if (!multi && Math.abs(dx) < 8 && Math.abs(dy) < 8) {
          clickZoom(e.clientX, e.clientY);
        } else if (zoom.s === 1 && Math.abs(dx) >= 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          /* Wischen ohne Zoom blättert (Touch & Maus-Drag). */
          nav(dx > 0 ? -1 : 1);
        }
      }
      if (!Object.keys(pts).length) {
        img.classList.remove('dragging');
        dragMid = null;
        multi = false;
      }
    }
    img.addEventListener('pointerup', endPointer);
    img.addEventListener('pointercancel', endPointer);

    function show(a) {
      box.classList.remove('video');
      box.setAttribute('aria-label', t('lb_label'));
      resetZoom();
      vid.innerHTML = '';
      img.src = a.getAttribute('href');
      var thumb = a.querySelector('img');
      var alt = thumb ? thumb.alt : a.textContent.trim();
      img.alt = alt;
      var capKey = a.getAttribute('data-cap');
      cap.innerHTML = capKey ? t(capKey) : alt;
      cap.style.display = cap.innerHTML ? '' : 'none';
      fitMedia();
    }
    /* Medium so gross wie moeglich, ohne dass die Caption aus dem
       Viewport gedraengt wird: Hoehe = Viewport - Caption - Padding. */
    function fitMedia() {
      var vw = window.innerWidth;
      var h = Math.max(160, window.innerHeight - 48 - (cap.offsetHeight || 0) - 12);
      var stageW = vw * 0.96;
      img.style.maxHeight = h + 'px';
      /* Explizite Zielgroesse statt width:auto: Bilder duerfen ueber
         ihre native Aufloesung hinaus auf die Buehne hochskaliert
         werden – sonst bleiben niedriger aufgeloeste Bilder auf
         grossen Monitoren sichtbar kleiner als hochaufloesende. */
      var ar = img.naturalWidth && img.naturalHeight
        ? img.naturalWidth / img.naturalHeight : 0;
      if (ar > 0) {
        var w = Math.min(stageW, h * ar);
        img.style.width = w + 'px';
        img.style.height = (w / ar) + 'px';
      } else {
        img.style.width = '';
        img.style.height = '';
      }
      if (vid.classList.contains('portrait')) {
        vid.style.width = Math.min(stageW, h * 9 / 16) + 'px';
      } else {
        vid.style.width = Math.min(stageW, h * 16 / 9) + 'px';
      }
    }
    /* naturalWidth ist vor dem Laden 0 -> nach dem Laden neu fitten. */
    img.addEventListener('load', fitMedia);
    function showVideo(a) {
      resetZoom();
      box.classList.add('video');
      vid.classList.toggle('portrait', a.classList.contains('media-video-short'));
      box.setAttribute('aria-label', t('lb_video_label'));
      img.removeAttribute('src');
      var f = document.createElement('iframe');
      f.src = a.getAttribute('data-embed');
      var title = a.querySelector('.media-video-title');
      var thumb = a.querySelector('img');
      f.title = title ? title.textContent.trim() : (thumb ? thumb.alt : a.href);
      f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      f.allowFullscreen = true;
      vid.innerHTML = '';
      vid.appendChild(f);
      var capKey = a.getAttribute('data-cap');
      cap.innerHTML = capKey ? t(capKey) : f.title;
      cap.style.display = cap.innerHTML ? '' : 'none';
      fitMedia();
    }
    /* Seite hinter dem Dialog fuer Tastatur/Screenreader sperren (inert),
       statt Fokus manuell zu trappen. */
    function setPageInert(on) {
      Array.prototype.forEach.call(document.body.children, function (el) {
        if (el === box) return;
        if (on) el.setAttribute('inert', '');
        else el.removeAttribute('inert');
      });
    }
    function renderItem() {
      var a = items[current];
      if (a.hasAttribute('data-embed')) showVideo(a); else show(a);
      count.textContent = items.length > 1 ? (current + 1) + ' / ' + items.length : '';
      /* Benachbarte Bilder vorladen -> Blaettern wirkt sofort. */
      if (items.length > 1) {
        [-1, 1].forEach(function (d) {
          var n = items[(current + d + items.length) % items.length];
          if (n && !n.hasAttribute('data-embed')) {
            var pre = new Image();
            pre.src = n.getAttribute('href');
          }
        });
      }
    }
    function nav(d) {
      if (items.length < 2) return;
      current = (current + d + items.length) % items.length;
      renderItem();
    }
    function open(a) {
      lastFocus = document.activeElement;
      items = itemsFor(a);
      current = items.indexOf(a);
      box.classList.toggle('single', items.length < 2);
      renderItem();
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
      setPageInert(true);
      box.querySelector('.lb-close').focus();
    }
    function close() {
      resetZoom();
      box.classList.remove('open');
      box.classList.remove('video');
      document.body.style.overflow = '';
      setPageInert(false);
      vid.innerHTML = '';
      cap.innerHTML = '';
      img.removeAttribute('src');
      if (lastFocus) lastFocus.focus();
    }
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || !a.closest('.media-post-body')) return;
      if (!a.hasAttribute('data-embed') && !imgRe.test(a.getAttribute('href'))) return;
      e.preventDefault();
      open(a);
    });
    box.querySelector('.lb-close').addEventListener('click', close);
    box.querySelector('.lb-prev').addEventListener('click', function () { nav(-1); });
    box.querySelector('.lb-next').addEventListener('click', function () { nav(1); });
    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });
    window.addEventListener('resize', function () {
      if (box.classList.contains('open')) fitMedia();
    });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') nav(-1);
      else if (e.key === 'ArrowRight') nav(1);
    });
  }

  /* Discord-Avatare, dreistufig:
     1. lokale Datei aus images/avatars/ (vom Bot-Workflow taeglich syncronisiert)
     2. Lanyard-API (live, wenn Mitglied dem Lanyard-Server beigetreten ist)
     3. Initialen als Fallback bei Fehler/fehlendem Avatar */
  function initAvatars() {
    var els = Array.prototype.slice.call(
      document.querySelectorAll('.member-avatar[data-discord-id]')
    );
    if (!els.length) return;

    function addImg(el, src) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      el.appendChild(img);
    }

    function lanyard(el, id) {
      fetch('https://api.lanyard.rest/v1/users/' + id)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          var u = d && d.data && d.data.discord_user;
          if (!u || !u.avatar) return;
          addImg(el, 'https://cdn.discordapp.com/avatars/' + id + '/' + u.avatar +
            (u.avatar.indexOf('a_') === 0 ? '.gif' : '.png') + '?size=256');
        })
        .catch(function () {});
    }

    fetch('images/avatars/manifest.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (manifest) {
        els.forEach(function (el) {
          var id = el.getAttribute('data-discord-id');
          var entry = manifest && manifest[id];
          var file = entry && (entry.file || entry);
          if (file) addImg(el, 'images/avatars/' + file);
          else lanyard(el, id);
        });
      })
      .catch(function () {
        els.forEach(function (el) {
          lanyard(el, el.getAttribute('data-discord-id'));
        });
      });
  }

  function initDownloads() {
    document.querySelectorAll('.button.download[aria-disabled="true"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var msg = btn.parentElement.querySelector('.download-msg');
        if (msg) msg.hidden = false;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('lang-select');
    if (select) {
      select.addEventListener('change', function () {
        applyLanguage(select.value);
      });
    }
    initLightbox();
    initVideoThumbs();
    initAvatars();
    applyLanguage(getInitialLang());
    initNav();
    initDownloads();
    initReveal();
    initScrollSpy();
  });
})();
