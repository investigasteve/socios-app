/* Cofradía – Mitglieder (Handy-App). Daten bleiben im Handy; Abgleich mit dem Notebook über eine JSON-Datei (Google Drive). */
'use strict';
const ES = {
  'Scannen': 'Escanear', 'Automatischer Abgleich mit Google Drive': 'Sincronización automática con Google Drive', 'Verbindungsadresse (einmalig eintragen)': 'Dirección de conexión (introducir una vez)', 'Verbinden': 'Conectar', 'Jetzt abgleichen': 'Sincronizar ahora', 'Verbunden. Letzter Abgleich:': 'Conectado. Última sincronización:', 'Noch nicht verbunden.': 'Aún sin conectar.', 'Verbindung fehlgeschlagen:': 'Conexión fallida:', 'Abgleich läuft …': 'Sincronizando …', 'Beleg fotografieren': 'Fotografiar recibo', 'Kamera läuft – suche Code …': 'Cámara activa – buscando código …', 'Anderer Code gelesen:': 'Otro código leído:', 'Foto wird gelesen …': 'Leyendo foto …', 'Kein Code erkannt. Bitte näher heran, ruhig halten oder die Nummer eintippen.': 'Código no detectado. Acerque la cámara, manténgala quieta o escriba el número.', 'Der Code ist klein: Kamera ca. 10–15 cm vor den Code halten, ruhig und gut beleuchtet.': 'El código es pequeño: sostenga la cámara a unos 10–15 cm del código, quieta y con buena luz.', 'Halte die Kamera auf den kleinen Code unten links auf dem Beleg.': 'Apunte la cámara al pequeño código abajo a la izquierda del recibo.', 'Oder Belegnummer eintippen': 'O escriba el número del recibo', 'Die Kamera ist nicht verfügbar. Bitte die Nummer eintippen.': 'La cámara no está disponible. Escriba el número.',
  'Dieser Beleg ist im Handy nicht bekannt. Bitte im Reiter „Abgleich“ zuerst den neuesten Stand laden.': 'Este recibo no está en el móvil. Cargue primero los datos más recientes en «Sincronizar».', 'Beleg Nr.': 'Recibo n.º', 'Bereits bezahlt am': 'Ya pagado el', 'Als bezahlt eintragen': 'Registrar como pagado', 'Weiter scannen': 'Seguir escaneando', 'Gescannt am': 'Escaneado el', 'Als bezahlt eingetragen.': 'Registrado como pagado.', 'Bitte eine Nummer eingeben.': 'Introduzca un número.',
  'Mitglieder': 'Socios', 'lfd. Nr.': 'N.º', 'Beiträge': 'Cuotas', 'Abgleich': 'Sincronizar', 'Suchen': 'Buscar', 'Jahr': 'Año', 'Alle aktiven': 'Todos los activos', 'Noch nicht bezahlt': 'Sin pagar', 'Bezahlt': 'Pagado', 'Ausgetretene mit': 'Incluir bajas',
  'Neues Mitglied': 'Nuevo socio', 'Vorname (Nombre)': 'Nombre', 'Apellido 1 (Nachname 1)': 'Primer apellido', 'Apellido 2 (Nachname 2)': 'Segundo apellido', 'Apodo (Beiname)': 'Apodo', 'Notiz': 'Nota', 'Geburtstag': 'Cumpleaños', 'Mobiltelefon': 'Móvil', 'E-Mail': 'Correo electrónico', 'Adresse': 'Dirección',
  'Eintrittsjahr': 'Año de ingreso', 'Aktives Mitglied': 'Socio activo', 'Speichern': 'Guardar', 'Abbrechen': 'Cancelar', 'Gespeichert.': 'Guardado.', 'Vorname und erster Nachname fehlen.': 'Faltan el nombre y el primer apellido.',
  'Die Nummer vergibt das Notebook beim Abgleich.': 'El número lo asigna el portátil al sincronizar.', 'Nummer': 'Número', 'ausgetreten ab': 'baja desde', 'Zahlungen': 'Pagos', 'noch offen': 'pendiente', 'bezahlt am': 'pagado el', 'Quittung': 'Recibo', 'bezahlt durch': 'pagado por', 'hat mitbezahlt für': 'ha pagado también por', 'zahlt auch für': 'paga también por',
  'Beitrag €': 'Cuota €', 'heute': 'hoy', 'bezahlt durch …': 'pagado por …', 'Bemerkung': 'Observación', 'Bitte ein Mitglied aus der Liste auswählen.': 'Seleccione un socio de la lista.',
  'Nachname 1, Nachname 2, Vorname': 'Apellido 1, apellido 2, nombre', 'Vorname, Nachname 1, Nachname 2': 'Nombre, apellido 1, apellido 2',
  'Sichern (nach Google Drive)': 'Guardar (en Google Drive)', 'Laden (vom Google Drive)': 'Cargar (desde Google Drive)', 'Keine Daten im Handy. Bitte zuerst die Datei „cofradia-daten.json“ aus dem Google Drive laden.': 'No hay datos en el móvil. Cargue primero el archivo «cofradia-daten.json» desde Google Drive.',
  'Das ist keine Datei der Mitgliederverwaltung.': 'Este archivo no es de la administración de socios.', 'Die Datei konnte nicht gelesen werden.': 'No se pudo leer el archivo.', 'Stand im Handy:': 'Datos en el móvil:', 'noch nie abgeglichen': 'nunca sincronizado', 'Zuletzt gesichert:': 'Última copia:', 'nie': 'nunca',
  'Sichern erzeugt eine Datei. Wähle in der Liste „Drive“ aus; das Notebook liest sie beim nächsten Abgleich ein.': 'Al guardar se crea un archivo. Elija «Drive» en la lista; el portátil lo leerá en la próxima sincronización.',
  'Laden öffnet die Dateiauswahl: nimm die Datei „cofradia-daten.json“ aus dem Drive-Ordner „Cofradia-Verwaltung“.': 'Al cargar se abre el selector de archivos: elija «cofradia-daten.json» de la carpeta «Cofradia-Verwaltung» de Drive.',
  'Datei gesichert.': 'Archivo guardado.', 'Es sind keine Mitglieder in dieser Liste.': 'No hay socios en esta lista.', 'Keine Treffer.': 'Sin resultados.', 'Wählen': 'Elegir',
  'Mitglieder insgesamt': 'socios en total', 'aktiv': 'activos', 'haben bezahlt': 'han pagado', 'offen': 'pendientes', 'Eingenommen': 'Ingresado', 'von': 'de'
};
let LANG = 'de'; try { LANG = localStorage.getItem('cd_lang') === 'es' ? 'es' : 'de'; } catch (e) { }
const t = s => LANG === 'es' && ES[s] ? ES[s] : s;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const eur = v => Number(v).toLocaleString(LANG === 'es' ? 'es-ES' : 'de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
const heute = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const uid = () => [...crypto.getRandomValues(new Uint8Array(8))].map(b => b.toString(16).padStart(2, '0')).join('');
function msg(s, err) { const e = $('#toast'); e.textContent = s; e.className = err ? 'err' : ''; e.style.display = 'block'; clearTimeout(msg.t); msg.t = setTimeout(() => e.style.display = 'none', err ? 6000 : 2500); }

/* ---------- Daten ---------- */
const leer = () => ({ format: 'codinaysas', version: 1, von: 'handy', stand: 0, einstellungen: { beitrag: 15, kopf: 'Cofradia del Divino Nazareno y Santo Sepulcro', jahr: 2026 }, mitglieder: [], beitraege: [], geloescht: [] });
let D = (() => { try { const j = JSON.parse(localStorage.getItem('cd_data')); if (j && Array.isArray(j.mitglieder)) return j; } catch (e) { } return leer(); })();
let QUIET = false;
function save() { try { localStorage.setItem('cd_data', JSON.stringify(D)); } catch (e) { msg('Speichern im Handy nicht möglich.', 1); } if (!QUIET && typeof drvSoon === 'function') drvSoon(4000); }
try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { }
const S = { tab: 'm', jahr: +D.einstellungen.jahr || 2026, q: '', filt: 'aktiv', bfilt: 'alle', ord: (() => { try { return localStorage.getItem('cd_ord') === 'v' ? 'v' : 'n'; } catch (e) { return 'n'; } })() };
const MF = ['nummer', 'nombre', 'apellido1', 'apellido2', 'apodo', 'notiz', 'aktiv', 'eintritt', 'austritt', 'geburtstag', 'email', 'mobil', 'adresse'];
const pickM = m => { const o = { uid: m.uid }; MF.forEach(k => o[k] = ['aktiv', 'eintritt', 'austritt'].includes(k) ? (+m[k] || 0) : String(m[k] ?? '').trim()); return o; };
const imJahr = (m, y) => m.eintritt <= y && (!m.austritt || m.austritt > y);
const nm = m => [m.nombre, m.apellido1, m.apellido2].filter(Boolean).join(' ');
const voll = m => S.ord === 'v' ? nm(m) : ([m.apellido1, m.apellido2].filter(Boolean).join(' ') + (m.nombre && (m.apellido1 || m.apellido2) ? ', ' : '') + (m.nombre || ''));
const coll = new Intl.Collator('es', { sensitivity: 'base' });
const sortM = a => a.sort((x, y) => S.ord === 'v' ? (coll.compare(x.nombre, y.nombre) || coll.compare(x.apellido1, y.apellido1) || coll.compare(x.apellido2, y.apellido2)) : (coll.compare(x.apellido1, y.apellido1) || coll.compare(x.apellido2, y.apellido2) || coll.compare(x.nombre, y.nombre)));
const getB = (u, y) => D.beitraege.find(b => b.uid === u && b.jahr === y);
function ensB(u, y) { let b = getB(u, y); if (!b) { b = { uid: u, jahr: y, betrag: +D.einstellungen.beitrag || 15, bezahlt: '', quittung_nr: 0, zahler: '', bemerkung: '', geaendert: Date.now() }; D.beitraege.push(b); } return b; }
const mByUid = u => D.mitglieder.find(m => m.uid === u);

/* ---------- Abgleich (gleiche Regeln wie am Notebook) ---------- */
function merge(r) {
  if (!r || r.format !== 'codinaysas') throw new Error(t('Das ist keine Datei der Mitgliederverwaltung.'));
  const z = { neu: 0, geaendert: 0, beitraege: 0, geloescht: 0 };
  const tomb = new Map(D.geloescht.map(x => [x.uid, x.geaendert])), loc = new Map(D.mitglieder.map(x => [x.uid, x]));
  for (const m of r.mitglieder || []) {
    const g = +m.geaendert || 0; if (!m.uid || !String(m.nombre || '').trim()) continue;
    if (tomb.has(m.uid) && tomb.get(m.uid) >= g) continue;
    const l = loc.get(m.uid), n = pickM(m);
    if (!l) { const o = { ...n, geaendert: g }; D.mitglieder.push(o); loc.set(o.uid, o); z.neu++; }
    else if (g > l.geaendert) { if (!n.nummer) n.nummer = l.nummer; Object.assign(l, n, { geaendert: g }); z.geaendert++; }
  }
  for (const x of r.geloescht || []) {
    const i = D.mitglieder.findIndex(m => m.uid === x.uid);
    if (i >= 0 && D.mitglieder[i].geaendert < x.geaendert) { D.mitglieder.splice(i, 1); z.geloescht++; }
    if (!D.geloescht.some(y => y.uid === x.uid)) D.geloescht.push({ uid: x.uid, geaendert: x.geaendert });
  }
  const have = new Set(D.mitglieder.map(m => m.uid));
  for (const b of r.beitraege || []) {
    if (!have.has(b.uid)) continue; const g = +b.geaendert || 0, l = getB(b.uid, +b.jahr);
    const n = { uid: b.uid, jahr: +b.jahr, betrag: +b.betrag || 0, bezahlt: String(b.bezahlt || ''), quittung_nr: +b.quittung_nr || 0, zahler: have.has(b.zahler) ? b.zahler : '', bemerkung: String(b.bemerkung || ''), geaendert: g };
    if (!l) { D.beitraege.push(n); z.beitraege++; }
    else if (g > l.geaendert) { n.quittung_nr = Math.max(n.quittung_nr, l.quittung_nr); Object.assign(l, n); z.beitraege++; }
    else if (n.quittung_nr > l.quittung_nr) l.quittung_nr = n.quittung_nr;
  }
  if (r.einstellungen && r.von === 'notebook') { D.einstellungen = { ...D.einstellungen, ...r.einstellungen }; if (!D.geladen) S.jahr = +D.einstellungen.jahr || S.jahr; }
  if (r.von === 'notebook') D.geladen = Date.now();
  save(); return z;
}
async function laden(inp) {
  const f = inp.files[0]; inp.value = ''; if (!f) return;
  try { const j = JSON.parse(await f.text()); const z = merge(j); msg(`${z.neu} ${t('Mitglieder')} +, ${z.geaendert} ✎, ${z.beitraege} ${t('Beiträge')}`); go(S.tab); }
  catch (e) { msg(e instanceof SyntaxError ? t('Die Datei konnte nicht gelesen werden.') : e.message, 1); }
}
async function sichern() {
  const d = new Date(), p = n => String(n).padStart(2, '0'), fn = `cofradia-handy-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.txt`;
  const out = { ...D, von: 'handy', stand: Date.now() }; delete out.geladen; delete out.gesichert;
  const file = new File([JSON.stringify(out)], fn, { type: 'text/plain' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ files: [file], title: fn });
    else { const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = fn; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000); }
    D.gesichert = Date.now(); save(); msg(t('Datei gesichert.')); go(S.tab);
  } catch (e) { if (e && e.name !== 'AbortError') msg(String(e.message || e), 1); }
}


/* ---------- Beleg scannen (QR-Code auf der Quittung: CD<Jahr>-<laufende Nr.>) ---------- */
let CAM = null;
const dmy = d => d ? d.slice(8, 10) + '.' + d.slice(5, 7) + '.' + d.slice(0, 4) : '';
function stopCam() { if (CAM) { CAM.run = false; try { CAM.stream.getTracks().forEach(x => x.stop()); } catch (e) { } CAM = null; } }
function vQ() {
  $('#m').innerHTML = `<div class="sum">${t('Halte die Kamera auf den kleinen Code unten links auf dem Beleg.')}</div>
   <video id="vid" playsinline muted style="width:100%;border-radius:12px;background:#000;max-height:55vh"></video><canvas id="cv" style="display:none"></canvas><div style="display:none;margin-top:8px"><label>Zoom</label><input type="range" id="zm"></div><div class="mu" style="margin-top:6px">${t('Der Code ist klein: Kamera ca. 10–15 cm vor den Code halten, ruhig und gut beleuchtet.')}</div><div class="mu" id="qst" style="margin-top:6px"></div><div class="row"><label class="btn alt" style="margin:0">📷 ${t('Beleg fotografieren')}<input type="file" accept="image/*" capture="environment" style="display:none" onchange="qFoto(this)"></label></div><div id="qres"></div>
   <label>${t('Oder Belegnummer eintippen')}</label><div class="half"><select id="qy">${yrOpts()}</select><input id="qn" inputmode="numeric" placeholder="123"><button class="btn" onclick="qManual()">${t('Suchen')}</button></div>`;
  startCam();
}
async function startCam() {
  stopCam();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: false });
    const v = $('#vid'); if (!v || S.tab !== 'q') { stream.getTracks().forEach(x => x.stop()); return; }
    const tr = stream.getVideoTracks()[0]; let caps = {}; try { caps = tr.getCapabilities ? tr.getCapabilities() : {}; } catch (e) { }
    try { if (caps.focusMode && caps.focusMode.includes('continuous')) await tr.applyConstraints({ advanced: [{ focusMode: 'continuous' }] }); } catch (e) { }
    v.srcObject = stream; await v.play(); const qs = $('#qst'); if (qs) qs.textContent = t('Kamera läuft – suche Code …') + ' (' + v.videoWidth + '×' + v.videoHeight + ')';
    let bd = null; try { if ('BarcodeDetector' in window) bd = new BarcodeDetector({ formats: ['qr_code'] }); } catch (e) { }
    CAM = { stream, run: true, bd }; const z = $('#zm');
    if (z && caps.zoom) { z.min = caps.zoom.min; z.max = caps.zoom.max; z.step = caps.zoom.step || 0.1; z.value = caps.zoom.min; z.parentElement.style.display = 'block'; z.oninput = () => tr.applyConstraints({ advanced: [{ zoom: +z.value }] }).catch(() => { }); }
    scanLoop();
  } catch (e) { msg(t('Die Kamera ist nicht verfügbar. Bitte die Nummer eintippen.') + ' (' + (e && e.name || '') + ')', 1); }
}
async function scanLoop() {
  const c = CAM; if (!c || !c.run) return;
  const v = $('#vid'), cv = $('#cv'); let txt = '';
  try {
    if (v && v.videoWidth) {
      if (c.bd) { try { const r = await c.bd.detect(v); if (r.length) txt = r[0].rawValue || ''; } catch (e) { c.bd = null; } }
      if (!txt) { cv.width = v.videoWidth; cv.height = v.videoHeight; const g = cv.getContext('2d', { willReadFrequently: true }); g.drawImage(v, 0, 0); const id = g.getImageData(0, 0, cv.width, cv.height), r = jsQR(id.data, id.width, id.height, { inversionAttempts: 'attemptBoth' }); if (r && r.data) txt = r.data; }
    }
  } catch (e) { }
  const m = /^CD(\d{4})-(\d{1,6})$/.exec(String(txt).trim());
  if (txt && !m) { const qs = $('#qst'); if (qs) qs.textContent = t('Anderer Code gelesen:') + ' ' + String(txt).slice(0, 60); }
  if (m && CAM === c) { stopCam(); if (v) v.pause(); qFound(+m[1], +m[2]); return; }
  if (CAM === c) setTimeout(scanLoop, 150);
}
async function qFoto(inp) {
  const f = inp.files[0]; inp.value = ''; if (!f) return; stopCam();
  const qs = $('#qst'); if (qs) qs.textContent = t('Foto wird gelesen …');
  let txt = '';
  try {
    const bmp = await createImageBitmap(f); const W = bmp.width, H = bmp.height;
    if ('BarcodeDetector' in window) { try { const r = await new BarcodeDetector({ formats: ['qr_code'] }).detect(bmp); if (r.length) txt = r[0].rawValue || ''; } catch (e) { } }
    const cv = $('#cv'), g = cv.getContext('2d', { willReadFrequently: true });
    const tries = [[0, 0, W, H, 1600], [0, H * 0.3, W * 0.6, H * 0.7, 1600], [0, 0, W, H, 2400], [0, 0, W, H, 1000], [0, H * 0.4, W * 0.5, H * 0.6, 1200]];
    for (const [x, y, w, h, mx] of tries) {
      if (txt) break; const k = mx / Math.max(w, h); cv.width = Math.round(w * k); cv.height = Math.round(h * k); g.drawImage(bmp, x, y, w, h, 0, 0, cv.width, cv.height);
      const id = g.getImageData(0, 0, cv.width, cv.height), r = jsQR(id.data, id.width, id.height, { inversionAttempts: 'attemptBoth' }); if (r && r.data) txt = r.data;
    }
  } catch (e) { if (qs) qs.textContent = 'Foto: ' + (e && e.message || e); return; }
  const m = /^CD(\d{4})-(\d{1,6})$/.exec(String(txt).trim());
  if (m) { if (qs) qs.textContent = ''; qFound(+m[1], +m[2]); return; }
  if (qs) qs.textContent = txt ? t('Anderer Code gelesen:') + ' ' + String(txt).slice(0, 60) : t('Kein Code erkannt. Bitte näher heran, ruhig halten oder die Nummer eintippen.');
}
function qManual() { const n = parseInt($('#qn').value, 10); if (!(n > 0)) return msg(t('Bitte eine Nummer eingeben.'), 1); stopCam(); qFound(+$('#qy').value, n); }
function qFound(y, n) {
  const b = D.beitraege.find(x => x.jahr === y && x.quittung_nr === n), m = b && mByUid(b.uid);
  if (!m) { $('#qres').innerHTML = `<div class="sum">${t('Dieser Beleg ist im Handy nicht bekannt. Bitte im Reiter „Abgleich“ zuerst den neuesten Stand laden.')} (${y}-${n})</div><div class="row"><button class="btn" onclick="go('q')">${t('Weiter scannen')}</button></div>`; return; }
  $('#qres').innerHTML = `<div class="card"><b>${esc(nm(m))}</b>${m.apodo ? ` <span class="tag">${esc(m.apodo)}</span>` : ''}<div class="mu">${esc(m.nummer)} · ${t('Beleg Nr.')} ${n} · ${y}</div><div style="font-size:20px;margin-top:6px"><b>${eur(b.betrag)}</b></div>
    <div class="mu" style="margin-top:6px">${b.bezahlt ? '✓ ' + t('Bereits bezahlt am') + ' ' + dmy(b.bezahlt) : ''}</div></div>
    <div class="row">${b.bezahlt ? '' : `<button class="btn" onclick="qPay('${m.uid}',${y},${n})">${t('Als bezahlt eintragen')}</button>`}<button class="btn alt" onclick="go('q')">${t('Weiter scannen')}</button></div>`;
}
function qPay(u, y, n) {
  const b = getB(u, y); if (!b || b.bezahlt) return;
  b.bezahlt = heute(); b.geaendert = Date.now(); const note = t('Gescannt am') + ' ' + dmy(heute());
  b.bemerkung = b.bemerkung ? b.bemerkung + ' · ' + note : note; save(); msg(t('Als bezahlt eingetragen.')); qFound(y, n);
}

/* ---------- Oberfläche ---------- */
const TABS = [['m', 'Mitglieder'], ['b', 'Beiträge'], ['q', 'Scannen'], ['y', 'Abgleich']];
function chrome() {
  $('#nv').innerHTML = TABS.map(([k, n]) => `<button class="${S.tab === k ? 'on' : ''}" onclick="go('${k}')">${t(n)}</button>`).join('');
  $('#lg').innerHTML = `<button class="${LANG === 'de' ? 'on' : ''}" onclick="sprache('de')">DE</button> <button class="${LANG === 'es' ? 'on' : ''}" onclick="sprache('es')">ES</button>`;
  $('#hs').textContent = D.mitglieder.length + ' ' + t('Mitglieder insgesamt') + ' · v11';
}
function sprache(l) { LANG = l; try { localStorage.setItem('cd_lang', l); } catch (e) { } document.documentElement.lang = l; go(S.tab); }
function go(tab) { stopCam(); S.tab = tab; chrome(); ({ m: vM, b: vB, q: vQ, y: vY })[tab](); scrollTo(0, 0); }
const yrOpts = () => { let h = ''; for (let y = 2022; y <= 2032; y++) h += `<option ${y === S.jahr ? 'selected' : ''}>${y}</option>`; return h; };
const ordSel = () => `<select onchange="S.ord=this.value;try{localStorage.setItem('cd_ord',S.ord)}catch(e){}go(S.tab)"><option value="n" ${S.ord === 'n' ? 'selected' : ''}>${t('Nachname 1, Nachname 2, Vorname')}</option><option value="v" ${S.ord === 'v' ? 'selected' : ''}>${t('Vorname, Nachname 1, Nachname 2')}</option></select>`;
const keepQ = () => `<input type="search" id="q" placeholder="${t('Suchen')}" value="${esc(S.q)}" oninput="S.q=this.value;list()">`;

function vM() {
  if (!D.mitglieder.length) { $('#m').innerHTML = `<div class="sum">${t('Keine Daten im Handy. Bitte zuerst die Datei „cofradia-daten.json“ aus dem Google Drive laden.')}</div><div class="row"><button class="btn" onclick="go('y')">${t('Abgleich')}</button></div>`; return; }
  $('#m').innerHTML = `<div class="half"><select onchange="S.jahr=+this.value;list()">${yrOpts()}</select><button class="btn" onclick="edit('')">+ ${t('Neues Mitglied')}</button></div>
   <div class="row">${ordSel()}</div><div class="row">${keepQ()}</div><div id="ls"></div>`;
  list();
}
function list() {
  const q = S.q.toLowerCase(); let rows = D.mitglieder.filter(m => m.eintritt <= S.jahr && imJahr(m, S.jahr) && (!q || (nm(m) + ' ' + m.apodo + ' ' + m.nummer).toLowerCase().includes(q)));
  const n = rows.length; sortM(rows);
  $('#ls').innerHTML = `<div class="mu">${n} ${t('aktiv')}</div>` + (rows.length ? rows.map(m => `<div class="card" onclick="edit('${m.uid}')"><b>${esc(voll(m))}</b>${m.apodo ? ` <span class="tag">${esc(m.apodo)}</span>` : ''}<div class="mu">${esc(m.nummer || '–')}${(getB(m.uid, S.jahr) || {}).quittung_nr ? ' · ' + t('lfd. Nr.') + ' ' + getB(m.uid, S.jahr).quittung_nr : ''}</div></div>`).join('') : `<div class="mu">${t('Keine Treffer.')}</div>`);
}
function fld(id, label, val, type) { return `<label>${t(label)}</label><input id="f_${id}" type="${type || 'text'}" value="${esc(val)}">`; }
function edit(u) {
  const m = u ? mByUid(u) : { nombre: '', apellido1: '', apellido2: '', apodo: '', nummer: '', notiz: '', geburtstag: '', email: '', mobil: '', adresse: '', eintritt: S.jahr, austritt: 0, aktiv: 1 };
  const pays = u ? D.beitraege.filter(b => b.uid === u && (b.bezahlt || b.quittung_nr || b.zahler || b.bemerkung)).sort((a, b) => a.jahr - b.jahr) : [];
  const fuer = u ? D.beitraege.filter(b => b.zahler === u).sort((a, b) => a.jahr - b.jahr) : [];
  $('#ov').innerHTML = `<div class="sheet"><h2 style="margin-top:0">${u ? esc(nm(m)) : t('Neues Mitglied')}</h2>
   <div class="mu">${t('Nummer')}: ${esc(m.nummer || '–')}${m.nummer ? '' : ' – ' + t('Die Nummer vergibt das Notebook beim Abgleich.')}</div>
   ${fld('nombre', 'Vorname (Nombre)', m.nombre)}${fld('apellido1', 'Apellido 1 (Nachname 1)', m.apellido1)}${fld('apellido2', 'Apellido 2 (Nachname 2)', m.apellido2)}${fld('apodo', 'Apodo (Beiname)', m.apodo)}
   ${fld('mobil', 'Mobiltelefon', m.mobil, 'tel')}${fld('email', 'E-Mail', m.email, 'email')}${fld('geburtstag', 'Geburtstag', m.geburtstag, 'date')}
   <label>${t('Adresse')}</label><textarea id="f_adresse">${esc(m.adresse)}</textarea><label>${t('Notiz')}</label><textarea id="f_notiz">${esc(m.notiz)}</textarea>
   ${fld('eintritt', 'Eintrittsjahr', m.eintritt, 'number')}
   <label class="chk"><input type="checkbox" id="f_aktiv" ${m.aktiv && !m.austritt ? 'checked' : ''}> ${t('Aktives Mitglied')}${m.austritt ? ' (' + t('ausgetreten ab') + ' ' + m.austritt + ')' : ''}</label>
   <div class="row"><button class="btn" onclick="eSave('${u}')">${t('Speichern')}</button><button class="btn alt" onclick="eClose()">${t('Abbrechen')}</button></div>
   ${pays.length || fuer.length ? `<h3>${t('Zahlungen')}</h3><div class="mu">${pays.map(b => { const z = b.zahler && mByUid(b.zahler); return `${b.jahr}: ${eur(b.betrag)}, ${b.bezahlt ? t('bezahlt am') + ' ' + esc(b.bezahlt) : t('noch offen')}${b.quittung_nr ? ', ' + t('Quittung') + ' ' + b.quittung_nr : ''}${z ? ', ' + t('bezahlt durch') + ' ' + esc(nm(z)) : ''}${b.bemerkung ? ' – ' + esc(b.bemerkung) : ''}`; }).concat(fuer.map(b => { const z = mByUid(b.uid); return `${b.jahr}: ${t('hat mitbezahlt für')} ${z ? esc(nm(z)) : ''}`; })).join('<br>')}</div>` : ''}</div>`;
  $('#ov').style.display = 'block'; document.body.style.overflow = 'hidden';
}
function eClose() { $('#ov').style.display = 'none'; document.body.style.overflow = ''; }
function eSave(u) {
  const v = {}; ['nombre', 'apellido1', 'apellido2', 'apodo', 'mobil', 'email', 'geburtstag', 'adresse', 'notiz'].forEach(k => v[k] = $('#f_' + k).value.trim());
  if (!v.nombre || !v.apellido1) return msg(t('Vorname und erster Nachname fehlen.'), 1);
  const ein = +$('#f_eintritt').value || S.jahr, akt = $('#f_aktiv').checked;
  let m = u ? mByUid(u) : null; if (!m) { m = { uid: uid(), nummer: '', aktiv: 1, austritt: 0 }; D.mitglieder.push(m); }
  Object.assign(m, v, { eintritt: ein, geaendert: Date.now() });
  if (akt) { m.austritt = 0; m.aktiv = 1; } else if (!m.austritt) { m.austritt = S.jahr; m.aktiv = 0; }
  save(); eClose(); msg(t('Gespeichert.')); go(S.tab);
}

const bLabel = m => voll(m) + ' · ' + (m.nummer || '–');
function vB() {
  if (!D.mitglieder.length) return vM();
  $('#m').innerHTML = `<div class="half"><select onchange="S.jahr=+this.value;bl()">${yrOpts()}</select><select onchange="S.bfilt=this.value;bl()"><option value="alle" ${S.bfilt === 'alle' ? 'selected' : ''}>${t('Alle aktiven')}</option><option value="offen" ${S.bfilt === 'offen' ? 'selected' : ''}>${t('Noch nicht bezahlt')}</option><option value="bez" ${S.bfilt === 'bez' ? 'selected' : ''}>${t('Bezahlt')}</option></select></div>
   <div class="row">${ordSel()}</div><div class="row">${keepQ().replace('list()', 'bl()')}</div><div id="sm" class="sum"></div><div id="ls"></div>
   <datalist id="dl">${sortM(D.mitglieder.filter(m => m.eintritt <= S.jahr)).map(m => `<option value="${esc(bLabel(m))}">`).join('')}</datalist>`;
  bl();
}
function bl() {
  const y = S.jahr, act = D.mitglieder.filter(m => m.eintritt <= y && imJahr(m, y)), q = S.q.toLowerCase();
  const paid = act.filter(m => { const b = getB(m.uid, y); return b && b.bezahlt; });
  $('#sm').innerHTML = `<b>${y}:</b> ${paid.length} ${t('von')} ${act.length} ${t('haben bezahlt')}, ${act.length - paid.length} ${t('offen')}. ${t('Eingenommen')}: <b>${eur(paid.reduce((a, m) => a + (+getB(m.uid, y).betrag || 0), 0))}</b>`;
  let rows = act.filter(m => { const b = getB(m.uid, y), p = !!(b && b.bezahlt); return (S.bfilt === 'alle' || (S.bfilt === 'offen' ? !p : p)) && (!q || (nm(m) + ' ' + m.apodo + ' ' + m.nummer).toLowerCase().includes(q)); });
  sortM(rows);
  $('#ls').innerHTML = rows.map(m => {
    const b = getB(m.uid, y) || {}, z = b.zahler ? mByUid(b.zahler) : null, fuer = D.beitraege.filter(x => x.jahr === y && x.zahler === m.uid).map(x => mByUid(x.uid)).filter(Boolean);
    return `<div class="card"><b>${esc(voll(m))}</b>${m.apodo ? ` <span class="tag">${esc(m.apodo)}</span>` : ''}<div class="mu">${esc(m.nummer || '–')}${b.quittung_nr ? ' · ' + t('Quittung') + ' ' + b.quittung_nr : ''}</div>
     <div class="half"><div><label>${t('Beitrag €')}</label><input type="number" step="0.01" inputmode="decimal" value="${b.betrag ?? D.einstellungen.beitrag}" onchange="bSet('${m.uid}','betrag',this.value)"></div>
     <div><label>${t('bezahlt am')}</label><input type="date" id="d${m.uid}" value="${b.bezahlt || ''}" onchange="bSet('${m.uid}','bezahlt',this.value)"></div></div>
     <div class="row"><button class="btn s alt" onclick="bHeute('${m.uid}')">${t('heute')}</button></div>
     <input list="dl" value="${esc(z ? bLabel(z) : '')}" placeholder="${t('bezahlt durch …')}" onchange="bZahler('${m.uid}',this)" style="margin-top:6px">
     <input type="text" value="${esc(b.bemerkung || '')}" placeholder="${t('Bemerkung')}" onchange="bSet('${m.uid}','bemerkung',this.value)" style="margin-top:6px">
     ${fuer.map(f => `<div class="mu">${t('zahlt auch für')} ${esc(nm(f))}</div>`).join('')}</div>`;
  }).join('') || `<div class="mu">${t('Keine Treffer.')}</div>`;
}
function bSet(u, k, v) {
  const b = ensB(u, S.jahr); b[k] = k === 'betrag' ? (Math.round(parseFloat(String(v).replace(',', '.')) * 100) / 100 || 0) : String(v).trim(); b.geaendert = Date.now(); save();
  if (k === 'bezahlt' || k === 'betrag') { const sc = scrollY; bl(); scrollTo(0, sc); }
}
function bHeute(u) { bSet(u, 'bezahlt', heute()); }
function bZahler(u, inp) {
  const v = inp.value.trim(); let z = '';
  if (v) { const m = D.mitglieder.find(x => bLabel(x) === v); if (!m) { msg(t('Bitte ein Mitglied aus der Liste auswählen.'), 1); inp.value = ''; return; } z = m.uid === u ? '' : m.uid; }
  const b = ensB(u, S.jahr); b.zahler = z; b.geaendert = Date.now(); save(); const sc = scrollY; bl(); scrollTo(0, sc);
}

function vY() {
  const f = ts => ts ? new Date(ts).toLocaleString(LANG === 'es' ? 'es-ES' : 'de-DE', { dateStyle: 'short', timeStyle: 'short' }) : t('nie');
  $('#m').innerHTML = `<div class="sum">${t('Stand im Handy:')} ${D.mitglieder.length} ${t('Mitglieder')} · ${t('Zuletzt gesichert:')} ${f(D.gesichert)}${D.geladen ? '' : ' · ' + t('noch nie abgeglichen')}</div>
   ${drvBlock()}
   <div class="row"><button class="btn alt" onclick="sichern()">${t('Sichern (nach Google Drive)')}</button></div><p class="mu">${t('Sichern erzeugt eine Datei. Wähle in der Liste „Drive“ aus; das Notebook liest sie beim nächsten Abgleich ein.')}</p>
   <div class="row"><label class="btn alt" style="display:inline-block;margin:0">${t('Laden (vom Google Drive)')}<input type="file" style="display:none" onchange="laden(this)"></label></div><p class="mu">${t('Laden öffnet die Dateiauswahl: nimm die Datei „cofradia-daten.json“ aus dem Drive-Ordner „Cofradia-Verwaltung“.')}</p>`;
}
go('m');

/* ---------- Automatischer Abgleich über die Drive-Brücke (ohne Klick) ---------- */
const DRV = { app: 'cofradia', url: (() => { try { return localStorage.getItem('cd_url') || 'https://script.google.com/macros/s/AKfycbwXl6wvYj9gMHTHwL0wfTCqcwdtAe8Tp5fnYUGtbuVEzkg8leIUlgnIh4cj-wyznfE/exec'; } catch (e) { return 'https://script.google.com/macros/s/AKfycbwXl6wvYj9gMHTHwL0wfTCqcwdtAe8Tp5fnYUGtbuVEzkg8leIUlgnIh4cj-wyznfE/exec'; } })(), busy: false, t: null, st: '' };
const lsg = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } };
const lss = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };
const drvPost = async b => { const r = await fetch(DRV.url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(b) }); const j = await r.json(); if (!j.ok) throw new Error(j.err || 'Fehler'); return j; };
const drvGetF = async f => { const r = await fetch(DRV.url + (DRV.url.includes('?') ? '&' : '?') + 'a=get&app=' + DRV.app + '&f=' + encodeURIComponent(f) + '&_=' + Date.now()); const j = await r.json(); return j.ok ? JSON.parse(j.text) : null; };
function drvSoon(ms) { if (!DRV.url) return; clearTimeout(DRV.t); DRV.t = setTimeout(() => drvSync(), ms || 3000); }
function drvShow() { const e = $('#drvst'); if (e) e.textContent = DRV.st; }
function drvBlock() {
  return `<div class="sum"><b>${t('Automatischer Abgleich mit Google Drive')}</b><div class="mu" id="drvst">${esc(DRV.st || (DRV.url ? '' : t('Noch nicht verbunden.')))}</div>
   <label>${t('Verbindungsadresse (einmalig eintragen)')}</label><input id="drvurl" value="${esc(DRV.url)}" placeholder="https://script.google.com/macros/s/…/exec" autocapitalize="off" autocorrect="off" spellcheck="false">
   <div class="row"><button class="btn" onclick="drvSetze()">${DRV.url ? t('Jetzt abgleichen') : t('Verbinden')}</button></div></div>`;
}
async function drvSetze() {
  const u = ($('#drvurl').value || '').trim();
  if (u && !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(u)) { msg('Die Adresse muss mit https://script.google.com/macros/s/ beginnen und auf /exec enden.', 1); return; }
  DRV.url = u; try { localStorage.setItem('cd_url', u); } catch (e) { } DRV.st = t('Abgleich läuft …'); drvShow();
  if (u) await drvSync(true);
}
async function drvSync(manuell) {
  if (!DRV.url || DRV.busy || (document.hidden && !manuell)) return; DRV.busy = true; let neu = false;
  try {
    const m = await drvGetF('cofradia-daten.json');
    if (m && m.format === 'codinaysas' && m.von === 'notebook' && String(m.stand) !== lsg('cd_stand', '')) { QUIET = true; const z = merge(m); QUIET = false; lss('cd_stand', String(m.stand)); neu = (z.neu + z.geaendert + z.beitraege + z.geloescht) > 0; }
    const h = JSON.stringify([D.mitglieder, D.beitraege, D.geloescht]);
    if (h !== lsg('cd_pushed', '')) {
      const d = new Date(), p = n => String(n).padStart(2, '0'), name = `cofradia-handy-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.json`;
      const out = { ...D, von: 'handy', stand: Date.now() }; delete out.geladen; delete out.gesichert;
      await drvPost({ app: 'cofradia', name, text: JSON.stringify(out) });
      lss('cd_pushed', h); QUIET = true; D.gesichert = Date.now(); save(); QUIET = false;
    }
    const z = new Date(), p = n => String(n).padStart(2, '0'); DRV.st = t('Verbunden. Letzter Abgleich:') + ' ' + p(z.getHours()) + ':' + p(z.getMinutes());
    if (neu) { const a = document.activeElement, o = $('#ov'); if (!(a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) && !(o && o.style.display === 'block') && S.tab !== 'q') go(S.tab); }
  } catch (e) { QUIET = false; DRV.st = t('Verbindung fehlgeschlagen:') + ' ' + (e && e.message || e); }
  DRV.busy = false; drvShow();
}
setTimeout(() => drvSync(), 1500); setInterval(() => drvSync(), 45000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) drvSync(); });
