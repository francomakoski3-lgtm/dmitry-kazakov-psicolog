const STORAGE_KEYS = {
  language: 'dima_admin_language',
  session: 'dima_admin_session'
};

const ADMIN_CREDENTIALS = {
  username: 'franco',
  password: 'francothebest'
};

const LOCALE_BY_LANGUAGE = {
  es: 'es-ES',
  en: 'en-US',
  ru: 'ru-RU',
  he: 'he-IL'
};

const RTL_LANGUAGES = new Set(['he']);

const TRANSLATIONS = {
  es: {
    pageTitle: 'Admin panel | Dima Therapy',
    metaDescription: 'Panel privado para monitorear el sitio de Dima Therapy.',
    languageLabel: 'Idioma',
    bootLabel: 'Carga del sistema',
    bootTitle: 'Inicializando panel de control',
    bootStatus1: 'Sincronizando interfaz...',
    bootStatus2: 'Validando acceso seguro...',
    bootStatus3: 'Preparando metricas del panel...',
    bootFooter: 'dima_admin :: online',
    loginEyebrow: 'Panel privado',
    loginTitle: 'Controla el panel de Dima Therapy desde una sola vista.',
    loginCopy: 'Este acceso privado abre un panel de monitoreo independiente para el proyecto de Dima, sin compartir archivos ni logica con otros sitios.',
    loginPoint1: 'Acceso con usuario y contrasena local.',
    loginPoint2: 'Panel separado del proyecto Gestoria Sonia.',
    loginPoint3: 'Vista cyberpunk con resumen y actividad.',
    loginHeading: 'Ingresar al panel',
    usernameLabel: 'Usuario',
    passwordLabel: 'Contrasena',
    loginButton: 'Entrar',
    loginHelper: 'Este admin es propio de dimatherapyonline.com y no depende del proyecto Sonia.',
    dashboardEyebrow: 'Rendimiento',
    dashboardTitle: 'Panel de movimientos',
    dashboardDescription: 'Revisa el estado del panel privado, las paginas clave y la actividad reciente.',
    logoutButton: 'Cerrar sesion',
    analyticsPanelLabel: 'Panel de rendimiento',
    analyticsHeaderTitle: '// monitoring system - dimatherapyonline.com',
    statTotal: 'Visitas totales',
    stat30Days: 'Ultimos 30 dias',
    statUnique: 'Visitantes unicos',
    statUnique30Days: 'Unicos (30 dias)',
    pagesEyebrow: 'Paginas',
    pagesTitle: 'Mas visitadas',
    pageColumn: 'Pagina',
    visitsColumn: 'Visitas',
    interactionsEyebrow: 'Interacciones',
    interactionsTitle: 'Botones mas usados',
    actionColumn: 'Accion',
    elementColumn: 'Elemento',
    clicksColumn: 'Clics',
    originEyebrow: 'Origen',
    originTitle: 'Paises de los visitantes',
    countryColumn: 'Pais',
    activityEyebrow: 'Actividad',
    activityTitle: 'Visitas recientes',
    cityColumn: 'Ciudad',
    timeColumn: 'Hora',
    geoEyebrow: 'Geolocalizacion',
    geoTitle: 'Mapa de visitas',
    geoHint: 'Este admin es independiente. La fuente de datos real se puede conectar despues.',
    loadingPanel: 'Preparando panel...',
    toastSessionStarted: 'Sesion iniciada correctamente.',
    toastSessionClosed: 'Sesion cerrada.',
    toastInvalidCredentials: 'Usuario o contrasena incorrectos.',
    emptyNoData: 'Sin datos aun.',
    emptyNoClicks: 'Sin clics registrados aun.',
    emptyNoLocation: 'Sin datos de ubicacion aun.',
    emptyNoVisits: 'Sin visitas registradas.',
    mapFallback: 'Esperando conexion de metricas'
  },
  en: {
    pageTitle: 'Admin panel | Dima Therapy',
    metaDescription: 'Private panel to monitor the Dima Therapy site.',
    languageLabel: 'Language',
    bootLabel: 'System load',
    bootTitle: 'Initializing control panel',
    bootStatus1: 'Syncing interface...',
    bootStatus2: 'Validating secure access...',
    bootStatus3: 'Preparing panel metrics...',
    bootFooter: 'dima_admin :: online',
    loginEyebrow: 'Private panel',
    loginTitle: 'Control the Dima Therapy panel from a single view.',
    loginCopy: 'This private access opens an independent monitoring panel for the Dima project, without sharing files or logic with other sites.',
    loginPoint1: 'Local username and password access.',
    loginPoint2: 'Separated from the Gestoria Sonia project.',
    loginPoint3: 'Cyberpunk view with summary and activity.',
    loginHeading: 'Sign in to the panel',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    loginButton: 'Enter',
    loginHelper: 'This admin belongs to dimatherapyonline.com and does not depend on the Sonia project.',
    dashboardEyebrow: 'Performance',
    dashboardTitle: 'Activity panel',
    dashboardDescription: 'Review the private panel status, key pages and recent activity.',
    logoutButton: 'Log out',
    analyticsPanelLabel: 'Performance panel',
    analyticsHeaderTitle: '// monitoring system - dimatherapyonline.com',
    statTotal: 'Total visits',
    stat30Days: 'Last 30 days',
    statUnique: 'Unique visitors',
    statUnique30Days: 'Unique (30 days)',
    pagesEyebrow: 'Pages',
    pagesTitle: 'Most visited',
    pageColumn: 'Page',
    visitsColumn: 'Visits',
    interactionsEyebrow: 'Interactions',
    interactionsTitle: 'Most used buttons',
    actionColumn: 'Action',
    elementColumn: 'Element',
    clicksColumn: 'Clicks',
    originEyebrow: 'Origin',
    originTitle: 'Visitor countries',
    countryColumn: 'Country',
    activityEyebrow: 'Activity',
    activityTitle: 'Recent visits',
    cityColumn: 'City',
    timeColumn: 'Time',
    geoEyebrow: 'Geolocation',
    geoTitle: 'Visit map',
    geoHint: 'This admin is independent. The real data source can be connected later.',
    loadingPanel: 'Preparing panel...',
    toastSessionStarted: 'Session started successfully.',
    toastSessionClosed: 'Session closed.',
    toastInvalidCredentials: 'Incorrect username or password.',
    emptyNoData: 'No data yet.',
    emptyNoClicks: 'No clicks recorded yet.',
    emptyNoLocation: 'No location data yet.',
    emptyNoVisits: 'No visits recorded.',
    mapFallback: 'Waiting for metrics connection'
  },
  ru: {
    pageTitle: 'Панель администратора | Dima Therapy',
    metaDescription: 'Закрытая панель для мониторинга сайта Dima Therapy.',
    languageLabel: 'Язык',
    bootLabel: 'Загрузка системы',
    bootTitle: 'Инициализация панели управления',
    bootStatus1: 'Синхронизация интерфейса...',
    bootStatus2: 'Проверка безопасного доступа...',
    bootStatus3: 'Подготовка метрик панели...',
    bootFooter: 'dima_admin :: online',
    loginEyebrow: 'Закрытая панель',
    loginTitle: 'Управляйте панелью Dima Therapy из одного окна.',
    loginCopy: 'Этот закрытый доступ открывает независимую панель мониторинга для проекта Dima без общих файлов и логики с другими сайтами.',
    loginPoint1: 'Локальный доступ по логину и паролю.',
    loginPoint2: 'Полностью отделено от проекта Gestoria Sonia.',
    loginPoint3: 'Киберпанк-интерфейс со сводкой и активностью.',
    loginHeading: 'Войти в панель',
    usernameLabel: 'Пользователь',
    passwordLabel: 'Пароль',
    loginButton: 'Войти',
    loginHelper: 'Эта админка относится к dimatherapyonline.com и не зависит от проекта Sonia.',
    dashboardEyebrow: 'Производительность',
    dashboardTitle: 'Панель активности',
    dashboardDescription: 'Проверьте состояние панели, ключевые страницы и недавнюю активность.',
    logoutButton: 'Выйти',
    analyticsPanelLabel: 'Панель производительности',
    analyticsHeaderTitle: '// monitoring system - dimatherapyonline.com',
    statTotal: 'Всего визитов',
    stat30Days: 'Последние 30 дней',
    statUnique: 'Уникальные посетители',
    statUnique30Days: 'Уникальные (30 дней)',
    pagesEyebrow: 'Страницы',
    pagesTitle: 'Самые посещаемые',
    pageColumn: 'Страница',
    visitsColumn: 'Визиты',
    interactionsEyebrow: 'Взаимодействия',
    interactionsTitle: 'Самые используемые кнопки',
    actionColumn: 'Действие',
    elementColumn: 'Элемент',
    clicksColumn: 'Клики',
    originEyebrow: 'Источник',
    originTitle: 'Страны посетителей',
    countryColumn: 'Страна',
    activityEyebrow: 'Активность',
    activityTitle: 'Недавние визиты',
    cityColumn: 'Город',
    timeColumn: 'Время',
    geoEyebrow: 'Геолокация',
    geoTitle: 'Карта визитов',
    geoHint: 'Эта админка независима. Реальный источник данных можно подключить позже.',
    loadingPanel: 'Подготовка панели...',
    toastSessionStarted: 'Сессия успешно открыта.',
    toastSessionClosed: 'Сессия закрыта.',
    toastInvalidCredentials: 'Неверное имя пользователя или пароль.',
    emptyNoData: 'Данных пока нет.',
    emptyNoClicks: 'Клики пока не зарегистрированы.',
    emptyNoLocation: 'Данных о местоположении пока нет.',
    emptyNoVisits: 'Визиты пока не зарегистрированы.',
    mapFallback: 'Ожидание подключения метрик'
  },
  he: {
    pageTitle: 'פאנל ניהול | Dima Therapy',
    metaDescription: 'פאנל פרטי למעקב אחרי האתר של Dima Therapy.',
    languageLabel: 'שפה',
    bootLabel: 'טעינת מערכת',
    bootTitle: 'מאתחל את פאנל הבקרה',
    bootStatus1: 'מסנכרן את הממשק...',
    bootStatus2: 'מאמת גישה מאובטחת...',
    bootStatus3: 'מכין מדדי פאנל...',
    bootFooter: 'dima_admin :: online',
    loginEyebrow: 'פאנל פרטי',
    loginTitle: 'נהל את פאנל Dima Therapy מתוך תצוגה אחת.',
    loginCopy: 'הגישה הפרטית הזאת פותחת פאנל ניטור עצמאי עבור פרויקט Dima, בלי לשתף קבצים או לוגיקה עם אתרים אחרים.',
    loginPoint1: 'גישה מקומית עם משתמש וסיסמה.',
    loginPoint2: 'מופרד לחלוטין מפרויקט Gestoria Sonia.',
    loginPoint3: 'ממשק סייברפאנק עם סיכום ופעילות.',
    loginHeading: 'כניסה לפאנל',
    usernameLabel: 'שם משתמש',
    passwordLabel: 'סיסמה',
    loginButton: 'כניסה',
    loginHelper: 'האדמין הזה שייך ל-dimatherapyonline.com ואינו תלוי בפרויקט Sonia.',
    dashboardEyebrow: 'ביצועים',
    dashboardTitle: 'פאנל תנועות',
    dashboardDescription: 'בדוק את מצב הפאנל, העמודים המרכזיים והפעילות האחרונה.',
    logoutButton: 'התנתקות',
    analyticsPanelLabel: 'פאנל ביצועים',
    analyticsHeaderTitle: '// monitoring system - dimatherapyonline.com',
    statTotal: 'סה״כ ביקורים',
    stat30Days: '30 הימים האחרונים',
    statUnique: 'מבקרים ייחודיים',
    statUnique30Days: 'ייחודיים (30 ימים)',
    pagesEyebrow: 'עמודים',
    pagesTitle: 'העמודים הנצפים ביותר',
    pageColumn: 'עמוד',
    visitsColumn: 'ביקורים',
    interactionsEyebrow: 'אינטראקציות',
    interactionsTitle: 'הכפתורים הכי בשימוש',
    actionColumn: 'פעולה',
    elementColumn: 'אלמנט',
    clicksColumn: 'קליקים',
    originEyebrow: 'מקור',
    originTitle: 'מדינות המבקרים',
    countryColumn: 'מדינה',
    activityEyebrow: 'פעילות',
    activityTitle: 'ביקורים אחרונים',
    cityColumn: 'עיר',
    timeColumn: 'זמן',
    geoEyebrow: 'מיקום גיאוגרפי',
    geoTitle: 'מפת ביקורים',
    geoHint: 'האדמין הזה עצמאי. אפשר לחבר מקור נתונים אמיתי בהמשך.',
    loadingPanel: 'מכין את הפאנל...',
    toastSessionStarted: 'הסשן התחיל בהצלחה.',
    toastSessionClosed: 'הסשן נסגר.',
    toastInvalidCredentials: 'שם המשתמש או הסיסמה שגויים.',
    emptyNoData: 'עדיין אין נתונים.',
    emptyNoClicks: 'עדיין לא נרשמו קליקים.',
    emptyNoLocation: 'עדיין אין נתוני מיקום.',
    emptyNoVisits: 'עדיין לא נרשמו ביקורים.',
    mapFallback: 'ממתין לחיבור מדדים'
  }
};

const DEFAULT_ANALYTICS = {
  summary: {
    totalViews: 0,
    views30Days: 0,
    uniqueVisitors: 0,
    uniqueVisitors30Days: 0
  },
  topPages: [],
  topEvents: [],
  topCountries: [],
  recentViews: []
};

const elements = {};

const state = {
  language: 'es',
  session: false,
  geoMap: null,
  heatLayer: null,
  analytics: DEFAULT_ANALYTICS
};

document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  initLanguage();
  bindEvents();
  startBootSequence();
});

function cacheElements() {
  elements.bootScreen = document.getElementById('boot-screen');
  elements.bootPercent = document.getElementById('boot-percent');
  elements.bootProgressFill = document.getElementById('boot-progress-fill');
  elements.metaDescription = document.querySelector('meta[name="description"]');
  elements.translatable = Array.from(document.querySelectorAll('[data-i18n]'));
  elements.languageSwitch = document.getElementById('language-switch');
  elements.languageButtons = Array.from(document.querySelectorAll('.language-option'));
  elements.loginView = document.getElementById('login-view');
  elements.dashboardView = document.getElementById('dashboard-view');
  elements.loginForm = document.getElementById('login-form');
  elements.logoutButton = document.getElementById('logout-button');
  elements.currentUser = document.getElementById('current-user');
  elements.toast = document.getElementById('toast');
  elements.analyticsPanel = document.querySelector('.analytics-panel');
}

function initLanguage() {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);
  const browserLanguage = (navigator.language || 'es').slice(0, 2).toLowerCase();
  const initialLanguage = TRANSLATIONS[savedLanguage] ? savedLanguage : TRANSLATIONS[browserLanguage] ? browserLanguage : 'es';
  setLanguage(initialLanguage, { persist: false });
}

function bindEvents() {
  elements.loginForm.addEventListener('submit', onLoginSubmit);
  elements.logoutButton.addEventListener('click', onLogoutClick);

  elements.languageButtons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
}

async function startBootSequence() {
  document.body.classList.add('is-booting');
  setLoadingState(t('loadingPanel'));

  await animateBootProgress(3000);

  restoreSession();
  finishBootSequence();
}

function animateBootProgress(durationMs) {
  return new Promise(resolve => {
    const start = performance.now();

    function frame(now) {
      const progress = Math.min(1, (now - start) / durationMs);
      const percent = Math.round(progress * 100);

      elements.bootPercent.textContent = `${percent}%`;
      elements.bootProgressFill.style.width = `${percent}%`;

      if (progress < 1) {
        window.requestAnimationFrame(frame);
        return;
      }

      resolve();
    }

    window.requestAnimationFrame(frame);
  });
}

function finishBootSequence() {
  elements.bootScreen.classList.add('is-hidden');
  document.body.classList.remove('is-booting');

  window.setTimeout(() => {
    elements.bootScreen.hidden = true;
  }, 500);
}

function restoreSession() {
  state.session = window.sessionStorage.getItem(STORAGE_KEYS.session) === '1';

  if (state.session) {
    showDashboard();
    loadAnalytics();
    return;
  }

  showLogin();
}

function setLanguage(language, options = {}) {
  const { persist = true } = options;
  if (!TRANSLATIONS[language]) return;

  state.language = language;
  document.documentElement.lang = language;
  document.documentElement.dir = RTL_LANGUAGES.has(language) ? 'rtl' : 'ltr';

  elements.languageSwitch.dataset.lang = language;
  elements.languageSwitch.setAttribute('aria-label', t('languageLabel'));

  elements.languageButtons.forEach(button => {
    button.classList.toggle('is-active', button.dataset.lang === language);
  });

  if (persist) {
    window.localStorage.setItem(STORAGE_KEYS.language, language);
  }

  applyTranslations();
  renderAnalytics(state.analytics);
  initGeoMap();
}

function applyTranslations() {
  document.title = t('pageTitle');
  if (elements.metaDescription) {
    elements.metaDescription.setAttribute('content', t('metaDescription'));
  }
  if (elements.analyticsPanel) {
    elements.analyticsPanel.setAttribute('aria-label', t('analyticsPanelLabel'));
  }

  elements.translatable.forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
}

function showLogin() {
  elements.loginView.hidden = false;
  elements.dashboardView.hidden = true;
}

function showDashboard() {
  elements.loginView.hidden = true;
  elements.dashboardView.hidden = false;
  elements.currentUser.textContent = ADMIN_CREDENTIALS.username;
}

function onLoginSubmit(event) {
  event.preventDefault();

  const username = field(elements.loginForm, 'username').value.trim();
  const password = field(elements.loginForm, 'password').value;

  if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
    showToast(t('toastInvalidCredentials'), true);
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEYS.session, '1');
  state.session = true;
  elements.loginForm.reset();
  showDashboard();
  loadAnalytics();
  showToast(t('toastSessionStarted'));
}

function onLogoutClick() {
  window.sessionStorage.removeItem(STORAGE_KEYS.session);
  state.session = false;
  showLogin();
  setLoadingState(t('loadingPanel'));
  showToast(t('toastSessionClosed'));
}

function loadAnalytics() {
  state.analytics = DEFAULT_ANALYTICS;
  renderAnalytics(state.analytics);
  initGeoMap();
}

function setLoadingState(message) {
  updateTableBody('an-top-pages', `<tr><td colspan="2" class="analytics-empty">${escapeHtml(message)}</td></tr>`);
  updateTableBody('an-top-events', `<tr><td colspan="3" class="analytics-empty">${escapeHtml(message)}</td></tr>`);
  updateTableBody('an-top-countries', `<tr><td colspan="2" class="analytics-empty">${escapeHtml(message)}</td></tr>`);
  updateTableBody('an-recent', `<tr><td colspan="4" class="analytics-empty">${escapeHtml(message)}</td></tr>`);
}

function renderAnalytics(data) {
  document.getElementById('an-total').textContent = formatNumber(data.summary.totalViews);
  document.getElementById('an-30d').textContent = formatNumber(data.summary.views30Days);
  document.getElementById('an-unique').textContent = formatNumber(data.summary.uniqueVisitors);
  document.getElementById('an-unique-30d').textContent = formatNumber(data.summary.uniqueVisitors30Days);

  renderTable('an-top-pages', data.topPages, row => `
    <td>
      <div class="analytics-bar-wrap">
        <div class="analytics-bar" style="width:${Math.max(4, row.width || 4)}px"></div>
        <span>${escapeHtml(row.page)}</span>
      </div>
    </td>
    <td class="analytics-count">${formatNumber(row.visits)}</td>
  `, t('emptyNoData'));

  renderTable('an-top-events', data.topEvents, row => `
    <td><span class="analytics-tag">${escapeHtml(row.event)}</span></td>
    <td>${escapeHtml(row.element || '-')}</td>
    <td class="analytics-count">${formatNumber(row.total)}</td>
  `, t('emptyNoClicks'));

  renderTable('an-top-countries', data.topCountries, row => `
    <td>
      <div class="analytics-bar-wrap">
        <div class="analytics-bar" style="width:${Math.max(4, row.width || 4)}px"></div>
        <span>${escapeHtml(row.country)}</span>
      </div>
    </td>
    <td class="analytics-count">${formatNumber(row.visits)}</td>
  `, t('emptyNoLocation'));

  renderTable('an-recent', data.recentViews, row => `
    <td>${escapeHtml(row.page)}</td>
    <td>${escapeHtml(row.country || '-')}</td>
    <td>${escapeHtml(row.city || '-')}</td>
    <td>${escapeHtml(row.time || '-')}</td>
  `, t('emptyNoVisits'));
}

function renderTable(id, rows, rowFn, emptyMessage) {
  const table = document.getElementById(id);
  if (!table) return;

  const cols = table.querySelector('thead tr')?.children.length || 2;
  if (!rows || rows.length === 0) {
    updateTableBody(id, `<tr><td colspan="${cols}" class="analytics-empty">${escapeHtml(emptyMessage)}</td></tr>`);
    return;
  }

  updateTableBody(id, rows.map(row => `<tr>${rowFn(row)}</tr>`).join(''));
}

function updateTableBody(id, html) {
  const table = document.getElementById(id);
  if (!table) return;
  const tbody = table.querySelector('tbody');
  if (tbody) tbody.innerHTML = html;
}

function initGeoMap() {
  const mapEl = document.getElementById('geo-map');
  if (!mapEl || !window.L || elements.dashboardView.hidden) return;

  if (!state.geoMap) {
    state.geoMap = L.map('geo-map', {
      zoomControl: true,
      scrollWheelZoom: false
    }).setView([20, 0], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(state.geoMap);
  }

  state.geoMap.eachLayer(layer => {
    if (!(layer instanceof L.TileLayer)) {
      state.geoMap.removeLayer(layer);
    }
  });

  L.circleMarker([40.4168, -3.7038], {
    radius: 6,
    color: '#00ff9d',
    fillColor: '#00ff9d',
    fillOpacity: 0.6,
    weight: 1
  }).bindTooltip(t('mapFallback')).addTo(state.geoMap);

  window.setTimeout(() => state.geoMap?.invalidateSize(), 50);
}

function field(form, name) {
  return form.elements.namedItem(name);
}

function t(key) {
  return TRANSLATIONS[state.language]?.[key] || TRANSLATIONS.es[key] || key;
}

function formatNumber(value) {
  const locale = LOCALE_BY_LANGUAGE[state.language] || LOCALE_BY_LANGUAGE.es;
  return Number(value || 0).toLocaleString(locale);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function showToast(message, isError = false) {
  elements.toast.hidden = false;
  elements.toast.className = `toast${isError ? ' error' : ''}`;
  elements.toast.textContent = message;

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    elements.toast.hidden = true;
  }, 3500);
}
