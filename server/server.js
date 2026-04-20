'use strict';

const crypto  = require('crypto');
const path    = require('path');
const express = require('express');
const cors    = require('cors');
const { DatabaseSync: Database } = require('node:sqlite');
const geoip   = require('geoip-lite');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const CONFIG = {
  PORT: process.env.PORT || 3001,
  API_TOKEN: process.env.ANALYTICS_TOKEN || 'change-me-in-production',
  ALLOWED_ORIGINS: [
    'https://dimatherapyonline.com',
    'https://www.dimatherapyonline.com',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:3500',
    'http://127.0.0.1:3500'
  ],
  DB_PATH: path.join(__dirname, 'analytics.db')
};

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------
const db = new Database(CONFIG.DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS visits (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    ts        INTEGER NOT NULL,
    page      TEXT    NOT NULL,
    referrer  TEXT,
    language  TEXT,
    ip_hash   TEXT    NOT NULL,
    country   TEXT,
    city      TEXT
  );

  CREATE TABLE IF NOT EXISTS events (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    ts        INTEGER NOT NULL,
    page      TEXT    NOT NULL,
    event     TEXT    NOT NULL,
    element   TEXT,
    ip_hash   TEXT    NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_visits_ts   ON visits(ts);
  CREATE INDEX IF NOT EXISTS idx_visits_page ON visits(page);
  CREATE INDEX IF NOT EXISTS idx_visits_ip   ON visits(ip_hash);
  CREATE INDEX IF NOT EXISTS idx_events_ts   ON events(ts);
`);

const stmtInsertVisit = db.prepare(
  'INSERT INTO visits (ts, page, referrer, language, ip_hash, country, city) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

const stmtInsertEvent = db.prepare(
  'INSERT INTO events (ts, page, event, element, ip_hash) VALUES (?, ?, ?, ?, ?)'
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function hashIp(rawIp) {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return crypto.createHash('sha256').update(rawIp + ':' + today).digest('hex');
}

function sanitizePage(value) {
  if (typeof value !== 'string') return '/';
  const clean = value.split('?')[0].split('#')[0].slice(0, 200).trim();
  return clean.startsWith('/') ? clean : '/' + clean;
}

function getRealIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.socket.remoteAddress || '0.0.0.0';
}

function formatTime(ts) {
  return new Date(ts * 1000).toLocaleString('en-GB', {
    timeZone: 'Asia/Jerusalem',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function computeWidths(rows, valueKey) {
  const max = rows.length > 0 ? rows[0][valueKey] : 1;
  return rows.map(row => ({
    ...row,
    width: Math.round((row[valueKey] / max) * 200)
  }));
}

// ---------------------------------------------------------------------------
// Express app
// ---------------------------------------------------------------------------
const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || CONFIG.ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ---------------------------------------------------------------------------
// GET /health — para que Hostinger verifique que el servidor está vivo
// ---------------------------------------------------------------------------
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', ts: Date.now() });
});

// ---------------------------------------------------------------------------
// POST /track — registra una visita
// ---------------------------------------------------------------------------
app.post('/track', (req, res) => {
  try {
    const rawIp  = getRealIp(req);
    const ipHash = hashIp(rawIp);
    const geo    = geoip.lookup(rawIp);
    const ts     = Math.floor(Date.now() / 1000);
    const page   = sanitizePage(req.body.page);
    const referrer = typeof req.body.referrer === 'string' ? req.body.referrer.slice(0, 500) : '';
    const language = typeof req.body.language === 'string' ? req.body.language.slice(0, 20) : '';
    const country  = geo ? (geo.country || '') : '';
    const city     = geo ? (geo.city || '') : '';

    stmtInsertVisit.run(ts, page, referrer, language, ipHash, country, city);
  } catch (_) {
    // tracking never breaks the page
  }
  res.status(204).end();
});

// ---------------------------------------------------------------------------
// POST /event — registra un click/evento
// ---------------------------------------------------------------------------
app.post('/event', (req, res) => {
  try {
    const rawIp   = getRealIp(req);
    const ipHash  = hashIp(rawIp);
    const ts      = Math.floor(Date.now() / 1000);
    const page    = sanitizePage(req.body.page);
    const event   = typeof req.body.event   === 'string' ? req.body.event.slice(0, 100)   : 'click';
    const element = typeof req.body.element === 'string' ? req.body.element.slice(0, 200) : '';

    stmtInsertEvent.run(ts, page, event, element, ipHash);
  } catch (_) {
    // tracking never breaks the page
  }
  res.status(204).end();
});

// ---------------------------------------------------------------------------
// GET /api/analytics — devuelve datos al panel admin
// ---------------------------------------------------------------------------
app.get('/api/analytics', (req, res) => {
  const auth = req.headers['authorization'] || '';
  if (auth !== 'Bearer ' + CONFIG.API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const now30d = Math.floor(Date.now() / 1000) - 30 * 86400;

    const totalViews             = db.prepare('SELECT COUNT(*) as n FROM visits').get().n;
    const views30Days            = db.prepare('SELECT COUNT(*) as n FROM visits WHERE ts >= ?').get(now30d).n;
    const uniqueVisitors         = db.prepare('SELECT COUNT(DISTINCT ip_hash) as n FROM visits').get().n;
    const uniqueVisitors30Days   = db.prepare('SELECT COUNT(DISTINCT ip_hash) as n FROM visits WHERE ts >= ?').get(now30d).n;

    const topPagesRaw = db.prepare(
      'SELECT page, COUNT(*) as visits FROM visits GROUP BY page ORDER BY visits DESC LIMIT 10'
    ).all();

    const topEventsRaw = db.prepare(
      'SELECT event, element, COUNT(*) as total FROM events GROUP BY event, element ORDER BY total DESC LIMIT 10'
    ).all();

    const topCountriesRaw = db.prepare(
      "SELECT country, COUNT(*) as visits FROM visits WHERE country IS NOT NULL AND country != '' GROUP BY country ORDER BY visits DESC LIMIT 10"
    ).all();

    const recentRaw = db.prepare(
      'SELECT page, country, city, ts FROM visits ORDER BY ts DESC LIMIT 20'
    ).all();

    res.json({
      summary: {
        totalViews,
        views30Days,
        uniqueVisitors,
        uniqueVisitors30Days
      },
      topPages: computeWidths(topPagesRaw, 'visits'),
      topEvents: topEventsRaw,
      topCountries: computeWidths(topCountriesRaw, 'visits'),
      recentViews: recentRaw.map(r => ({
        page:    r.page,
        country: r.country || '-',
        city:    r.city    || '-',
        time:    formatTime(r.ts)
      }))
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
app.listen(CONFIG.PORT, () => {
  console.log('Dima analytics server running on port ' + CONFIG.PORT);
});
