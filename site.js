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
      team_title: 'Team',
      team_intro: 'Die kreativen Köpfe hinter den Projekten.',
      role_lead: 'Projektleitung & Projektersteller',
      role_god: 'Gott',
      tag_carrier: 'Carryt die Mod',
      name_midgard: 'Alter Mann Schmidtgard',
      name_kratos: 'Kratos Benjamin Bronzebart',
      footer1: 'ANNIVERSARY EDITION',
      footer2: 'Nichtkommerzielle Fanprojekte',
      footer_back: 'Zurück zur Startseite',
      overview: 'ÜBERSICHT',
      about_mod: 'Über die Modifikation',
      features: 'Features',
      media: 'Mediensammlung',
      screenshot: 'Screenshot',
      download_h: 'Download',
      download_note: 'Hier kann später der finale Download, ein GitHub-Release oder ein externer Download-Link eingetragen werden.',
      download_btn: 'DOWNLOAD',
      download_soon: 'Der Download ist noch nicht verfügbar.',
      g1_overview: 'Eine Erweiterung des ersten Gothic-Abenteuers.',
      g1_f1: 'Neue Quests und Storylines',
      g1_f2: 'Verbesserte Grafik und Texturen',
      g1_f3: 'Erweiterte Charakterentwicklung',
      g1_f4: 'Neue Items und Ausrüstung',
      g2_overview: 'Die Anniversary Edition erweitert Gothic II: Die Nacht des Raben um neue Inhalte, Quests und Geschichten. Die konkrete Projektbeschreibung, Screenshots, Credits und der finale Download können hier später ergänzt werden.',
      g2_f1: 'Erweiterung der Nacht des Raben',
      g2_f2: 'Neue Gebiete und Dungeons',
      g2_f3: 'Verbesserte KI und Balancing',
      g2_f4: 'Neue Charaktere und Dialoge',
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
      team_title: 'Team',
      team_intro: 'The creative minds behind the projects.',
      role_lead: 'Team Lead & Project Creator',
      role_god: 'God',
      tag_carrier: 'Carries the mod',
      name_midgard: 'Old Man Schmidtgard',
      name_kratos: 'Kratos Benjamin Bronzebeard',
      footer1: 'ANNIVERSARY EDITION',
      footer2: 'Non-commercial fan projects',
      footer_back: 'Back to homepage',
      overview: 'OVERVIEW',
      about_mod: 'About the mod',
      features: 'Features',
      media: 'Media gallery',
      screenshot: 'Screenshot',
      download_h: 'Download',
      download_note: 'The final download, a GitHub release or an external download link can be added here later.',
      download_btn: 'DOWNLOAD',
      download_soon: 'The download is not available yet.',
      g1_overview: 'An expansion of the first Gothic adventure.',
      g1_f1: 'New quests and storylines',
      g1_f2: 'Improved graphics and textures',
      g1_f3: 'Expanded character development',
      g1_f4: 'New items and equipment',
      g2_overview: 'The Anniversary Edition expands Gothic II: Night of the Raven with new content, quests and stories. The detailed project description, screenshots, credits and the final download can be added here later.',
      g2_f1: 'Expansion of Night of the Raven',
      g2_f2: 'New areas and dungeons',
      g2_f3: 'Improved AI and balancing',
      g2_f4: 'New characters and dialogues',
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
      team_title: 'Zespół',
      team_intro: 'Kreatywne umysły stojące za projektami.',
      role_lead: 'Kierownik i twórca projektu',
      role_god: 'Bóg',
      tag_carrier: 'Niesie moda',
      name_midgard: 'Stary Schmidtgard',
      name_kratos: 'Kratos Benjamin Brązobrody',
      footer1: 'EDYCJA ROCZNICY',
      footer2: 'Niekomercyjne projekty fanowskie',
      footer_back: 'Powrót do strony głównej',
      overview: 'PRZEGLĄD',
      about_mod: 'O modyfikacji',
      features: 'Funkcje',
      media: 'Galeria mediów',
      screenshot: 'Zrzut ekranu',
      download_h: 'Pobieranie',
      download_note: 'Ostateczny link do pobrania, wydanie na GitHubie lub zewnętrzny link można dodać tutaj później.',
      download_btn: 'POBIERZ',
      download_soon: 'Pobieranie nie jest jeszcze dostępne.',
      g1_overview: 'Rozszerzenie pierwszej przygody Gothic.',
      g1_f1: 'Nowe zadania i wątki fabularne',
      g1_f2: 'Ulepszona grafika i tekstury',
      g1_f3: 'Rozbudowany rozwój postaci',
      g1_f4: 'Nowe przedmioty i ekwipunek',
      g2_overview: 'Edycja Rocznicy rozszerza Gothic II: Noc Kruka o nowe treści, zadania i historie. Szczegółowy opis projektu, zrzuty ekranu, lista twórców i finalny link do pobrania zostaną dodane później.',
      g2_f1: 'Rozszerzenie Nocy Kruka',
      g2_f2: 'Nowe obszary i lochy',
      g2_f3: 'Ulepszone AI i balans',
      g2_f4: 'Nowe postacie i dialogi',
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
      team_title: 'Команда',
      team_intro: 'Творческие умы, стоящие за проектами.',
      role_lead: 'Руководитель и создатель проекта',
      role_god: 'Бог',
      tag_carrier: 'Тащит мод',
      name_midgard: 'Старик Шмидтгард',
      name_kratos: 'Кратос Бенджамин Бронзобород',
      footer1: 'ЮБИЛЕЙНОЕ ИЗДАНИЕ',
      footer2: 'Некоммерческие фанатские проекты',
      footer_back: 'Вернуться на главную',
      overview: 'ОБЗОР',
      about_mod: 'О модификации',
      features: 'Особенности',
      media: 'Медиагалерея',
      screenshot: 'Скриншот',
      download_h: 'Скачивание',
      download_note: 'Финальная ссылка на скачивание, релиз на GitHub или внешняя ссылка могут быть добавлены здесь позже.',
      download_btn: 'СКАЧАТЬ',
      download_soon: 'Скачивание пока недоступно.',
      g1_overview: 'Расширение первого приключения Gothic.',
      g1_f1: 'Новые квесты и сюжетные линии',
      g1_f2: 'Улучшенная графика и текстуры',
      g1_f3: 'Расширенное развитие персонажа',
      g1_f4: 'Новые предметы и снаряжение',
      g2_overview: 'Юбилейное издание расширяет Gothic II: Ночь Ворона новым контентом, квестами и историями. Подробное описание проекта, скриншоты, список авторов и финальная ссылка на скачивание будут добавлены позже.',
      g2_f1: 'Расширение «Ночи Ворона»',
      g2_f2: 'Новые области и подземелья',
      g2_f3: 'Улучшенный ИИ и баланс',
      g2_f4: 'Новые персонажи и диалоги',
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
    applyLanguage(getInitialLang());
    initNav();
    initDownloads();
    initReveal();
    initScrollSpy();
  });
})();
