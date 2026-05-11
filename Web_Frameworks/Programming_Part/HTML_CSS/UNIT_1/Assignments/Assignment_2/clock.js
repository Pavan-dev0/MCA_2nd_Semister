/* ── Build analog face ── */
(function () {
  const CX = 130, CY = 130, R = 114;
  const ns = 'http://www.w3.org/2000/svg';
  const tg = document.getElementById('a-ticks');
  const ng = document.getElementById('a-nums');
  const labels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  for (let i = 0; i < 60; i++) {
    const ang = (i / 60) * 2 * Math.PI - Math.PI / 2;
    const isMaj = i % 5 === 0;
    const len = isMaj ? 14 : 5;
    const x1 = CX + R * Math.cos(ang),          y1 = CY + R * Math.sin(ang);
    const x2 = CX + (R - len) * Math.cos(ang),  y2 = CY + (R - len) * Math.sin(ang);

    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x1.toFixed(2)); line.setAttribute('y1', y1.toFixed(2));
    line.setAttribute('x2', x2.toFixed(2)); line.setAttribute('y2', y2.toFixed(2));
    line.setAttribute('class', isMaj ? 'tick-maj' : 'tick-min');
    tg.appendChild(line);

    if (isMaj) {
      const rN = R - 28;
      const txt = document.createElementNS(ns, 'text');
      txt.setAttribute('x', (CX + rN * Math.cos(ang)).toFixed(2));
      txt.setAttribute('y', (CY + rN * Math.sin(ang)).toFixed(2));
      txt.setAttribute('class', 'hour-lbl');
      txt.textContent = labels[i / 5];
      ng.appendChild(txt);
    }
  }
})();

/* ── Ring canvas ── */
const ring = document.getElementById('ring-canvas');
const rctx = ring.getContext('2d');

function drawRing(sec) {
  const cx = 28, cy = 28, r = 24;
  rctx.clearRect(0, 0, 56, 56);
  rctx.beginPath();
  rctx.arc(cx, cy, r, 0, 2 * Math.PI);
  rctx.strokeStyle = '#1a2540';
  rctx.lineWidth = 4;
  rctx.stroke();
  if (sec > 0) {
    rctx.beginPath();
    rctx.arc(cx, cy, r, -Math.PI / 2, (sec / 60) * 2 * Math.PI - Math.PI / 2);
    rctx.strokeStyle = '#facc15';
    rctx.lineWidth = 4;
    rctx.lineCap = 'round';
    rctx.shadowColor = 'rgba(250,204,21,.6)';
    rctx.shadowBlur = 6;
    rctx.stroke();
    rctx.shadowBlur = 0;
  }
}

/* ── Helpers ── */
const pad = n => String(n).padStart(2, '0');
const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/* ── Main tick ── */
function tick() {
  const now  = new Date();
  const h24  = now.getHours();
  const min  = now.getMinutes();
  const sec  = now.getSeconds();
  const ms   = now.getMilliseconds();
  const h12  = h24 % 12 || 12;

  const dateHTML =
    `<span class="hi">${DAYS[now.getDay()]}</span> &mdash; ` +
    `${pad(now.getDate())} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

  /* DIGITAL */
  const hStr = pad(h12), mStr = pad(min), sStr = pad(sec);
  document.getElementById('dh1').textContent = hStr[0];
  document.getElementById('dh2').textContent = hStr[1];
  document.getElementById('dm1').textContent = mStr[0];
  document.getElementById('dm2').textContent = mStr[1];
  document.getElementById('ds1').textContent = sStr[0];
  document.getElementById('ds2').textContent = sStr[1];
  document.getElementById('dampm').textContent = h24 < 12 ? 'AM' : 'PM';
  document.getElementById('d-date').innerHTML = dateHTML;
  drawRing(sec);
  document.getElementById('ring-num').textContent = pad(sec);
  document.getElementById('ms-fill').style.width = (ms / 10).toFixed(1) + '%';

  /* ANALOG */
  const sDeg = (sec + ms / 1000) * 6;
  const mDeg = (min + sec / 60) * 6;
  const hDeg = (h24 % 12 + min / 60) * 30;
  document.getElementById('hand-hour').setAttribute('transform',   `rotate(${hDeg.toFixed(2)} 130 130)`);
  document.getElementById('hand-minute').setAttribute('transform', `rotate(${mDeg.toFixed(2)} 130 130)`);
  document.getElementById('hand-second').setAttribute('transform', `rotate(${sDeg.toFixed(3)} 130 130)`);
  document.getElementById('a-date').innerHTML = dateHTML;
  document.getElementById('a-h').textContent  = pad(h12);
  document.getElementById('a-m').textContent  = mStr;
  document.getElementById('a-s').textContent  = sStr;
}

tick();
setInterval(tick, 40);
