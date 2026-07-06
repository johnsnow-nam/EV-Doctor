// P4 promo — feature-focused, ~28s, 16:9. Reads timeline globals from animations.jsx.
const { Stage, Sprite, ImageSprite, useSprite, useTime, Easing, clamp, interpolate } = window;

const KR = "'IBM Plex Sans KR', system-ui, sans-serif";
const SA = "'Saira', system-ui, sans-serif";
const MO = "'IBM Plex Mono', ui-monospace, monospace";
const P1 = '#00e0c6', P2 = '#2f80ff', P3 = '#3ddc84';
const INK = '#ffffff', BODY = '#c6c9cf', MUT = '#8a8f97', WARN = '#f4b400';
const STRIPE = 'linear-gradient(90deg,#00e0c6 0 33.33%,#2f80ff 33.33% 66.66%,#3ddc84 66.66% 100%)';

// ── generic staggered block (fade + slide), lives inside a Sprite ──
function Block({ x, y, w, align = 'left', children, entry = 0.55, exit = 0.45, slide = 20, delay = 0 }) {
  const { localTime, duration } = useSprite();
  const lt = localTime - delay;
  let op = 0, ty = slide;
  if (lt > 0) {
    if (lt < entry) { const t = Easing.easeOutCubic(clamp(lt / entry, 0, 1)); op = t; ty = (1 - t) * slide; }
    else { op = 1; ty = 0; }
  }
  const exitStart = duration - exit;
  if (localTime > exitStart) { const t = Easing.easeInCubic(clamp((localTime - exitStart) / exit, 0, 1)); op = Math.min(op, 1 - t); ty = ty - t * 12; }
  return <div style={{ position: 'absolute', left: x, top: y, width: w, textAlign: align, opacity: op, transform: `translateY(${ty}px)`, willChange: 'transform,opacity' }}>{children}</div>;
}

function Eyebrow({ text, color = P1 }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <span style={{ width: 30, height: 4, background: STRIPE }} />
    <span style={{ font: `600 15px ${SA}`, letterSpacing: '0.18em', textTransform: 'uppercase', color }}>{text}</span>
  </div>;
}

// growing 3-phase stripe
function GrowStripe({ x, y, w, h = 4, delay = 0, dur = 0.7 }) {
  const { localTime } = useSprite();
  const p = Easing.easeOutCubic(clamp((localTime - delay) / dur, 0, 1));
  return <div style={{ position: 'absolute', left: x, top: y, width: w * p, height: h, background: STRIPE }} />;
}

function GridBG({ opacity = 0.5 }) {
  const { localTime } = useSprite();
  const shift = (localTime * 6) % 48;
  return <div style={{
    position: 'absolute', inset: 0, opacity,
    backgroundImage: 'linear-gradient(rgba(120,140,160,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(120,140,160,.08) 1px,transparent 1px)',
    backgroundSize: '48px 48px', backgroundPosition: `${shift}px ${shift}px`,
  }} />;
}

// ── signal vizzes (all read the card's Sprite localTime) ──
function Frame({ children }) {
  return <svg width="150" height="66" viewBox="0 0 100 44" style={{ overflow: 'visible', display: 'block' }}>{children}</svg>;
}

function SquareWave({ color }) {
  const { localTime } = useSprite();
  const p = clamp(((localTime) % 2.6) / 1.3, 0, 1);
  const seg = 20, hi = 8, lo = 36; let d = `M0 ${lo} L0 ${hi}`; let cx = 0, lvl = hi;
  for (let i = 0; i < 5; i++) { cx += seg; d += ` L${cx} ${lvl}`; lvl = lvl === hi ? lo : hi; d += ` L${cx} ${lvl}`; }
  const scan = (localTime * 46) % 100;
  return <Frame>
    <path d={d} fill="none" stroke={color} strokeWidth="2.2" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - p} strokeLinecap="round" strokeLinejoin="round" />
    <line x1={scan} y1="2" x2={scan} y2="42" stroke={color} strokeWidth="1" opacity="0.35" />
  </Frame>;
}

function SineWave({ color }) {
  const { localTime } = useSprite();
  const p = clamp(((localTime) % 2.6) / 1.3, 0, 1);
  let d = 'M0 22'; for (let x = 0; x <= 100; x += 5) { const y = 22 - 15 * Math.sin((x / 100) * 3 * 2 * Math.PI); d += ` L${x} ${y.toFixed(1)}`; }
  const dotX = (localTime * 40) % 100; const dotY = 22 - 15 * Math.sin((dotX / 100) * 3 * 2 * Math.PI);
  return <Frame>
    <path d={d} fill="none" stroke={color} strokeWidth="2.2" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - p} strokeLinecap="round" />
    <circle cx={dotX} cy={dotY} r="3.2" fill={color} />
  </Frame>;
}

function LinkPackets({ color }) {
  const { localTime } = useSprite();
  const packs = [0, 1, 2].map(k => 14 + ((localTime * 34 + k * 30) % 72));
  return <Frame>
    <line x1="14" y1="22" x2="86" y2="22" stroke={color} strokeWidth="1.4" strokeDasharray="4 4" opacity="0.5" />
    <circle cx="10" cy="22" r="6" fill="none" stroke={color} strokeWidth="2" />
    <circle cx="90" cy="22" r="6" fill="none" stroke={color} strokeWidth="2" />
    {packs.map((x, i) => <circle key={i} cx={x} cy="22" r="3" fill={color} />)}
  </Frame>;
}

function SocGauge({ color }) {
  const { localTime } = useSprite();
  const count = Math.floor(((localTime % 3.2) / 3.2) * 6.999);
  return <Frame>
    {[0, 1, 2, 3, 4, 5].map(i => (
      <rect key={i} x={i * 16.5} y="10" width="13" height="24" rx="1"
        fill={i <= count ? color : 'transparent'} stroke={i <= count ? color : '#3a3e44'} strokeWidth="1.4" />
    ))}
  </Frame>;
}

function ReportCheck({ color }) {
  const { localTime } = useSprite();
  const cyc = localTime % 3.4;
  return <Frame>
    {[0, 1, 2].map(k => {
      const on = cyc > 0.5 + k * 0.7;
      const y = 8 + k * 13;
      return <g key={k}>
        <rect x="4" y={y} width="66" height="5" rx="2.5" fill={on ? color : '#2b2f35'} opacity={on ? 0.85 : 1} />
        <path d={`M80 ${y + 2.5} l3 3 l6 -6`} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity={on ? 1 : 0.15} />
      </g>;
    })}
  </Frame>;
}

function DiagCard({ x, y, w, h, color, kicker, title, sub, Viz }) {
  const { localTime } = useSprite();
  const e = Easing.easeOutCubic(clamp(localTime / 0.55, 0, 1));
  const op = clamp(localTime / 0.4, 0, 1);
  return <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, opacity: op, transform: `translateY(${(1 - e) * 26}px)`, background: '#131519', border: '1px solid #30343a', willChange: 'transform,opacity' }}>
    <div style={{ height: 4, background: color }} />
    <div style={{ padding: '20px 18px', height: 'calc(100% - 4px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ font: `500 11px ${MO}`, letterSpacing: '0.08em', color }}>{kicker}</div>
      <div style={{ font: `600 18px ${KR}`, color: INK, margin: '8px 0 0' }}>{title}</div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Viz color={color} /></div>
      <div style={{ font: `400 11px ${MO}`, color: MUT, letterSpacing: '0.02em' }}>{sub}</div>
    </div>
  </div>;
}

function CurrentFlow({ y }) {
  const { localTime } = useSprite();
  const x0 = 120, x1 = 1160;
  const dots = [0, 1, 2, 3].map(k => x0 + (((localTime * 0.42 + k * 0.25) % 1) * (x1 - x0)));
  return <div style={{ position: 'absolute', left: 0, top: y, width: 1280, height: 20 }}>
    <div style={{ position: 'absolute', left: x0, top: 8, width: x1 - x0, height: 2, background: 'linear-gradient(90deg,rgba(0,224,198,.15),rgba(47,128,255,.3),rgba(61,220,132,.15))' }} />
    {dots.map((x, i) => <div key={i} style={{ position: 'absolute', left: x, top: 3, width: 12, height: 12, borderRadius: 6, background: i % 2 ? P2 : P1, boxShadow: `0 0 12px ${i % 2 ? P2 : P1}` }} />)}
  </div>;
}

function BigCheck() {
  const { localTime } = useSprite();
  const s = Easing.easeOutBack(clamp(localTime / 0.5, 0, 1));
  const dash = clamp((localTime - 0.25) / 0.5, 0, 1);
  const pulse = 1 + 0.06 * Math.sin(localTime * 3);
  return <div style={{ position: 'absolute', left: 0, top: 250, width: 1280, textAlign: 'center' }}>
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 22, transform: `scale(${s})` }}>
      <svg width={130} height={130} viewBox="0 0 130 130" style={{ transform: `scale(${pulse})` }}>
        <circle cx="65" cy="65" r="58" fill="none" stroke={P3} strokeWidth="3" opacity="0.85" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - dash} strokeLinecap="round" transform="rotate(-90 65 65)" />
        <path d="M40 66 l16 16 l34 -36" fill="none" stroke={P3} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - clamp((localTime - 0.5) / 0.4, 0, 1)} />
      </svg>
      <div style={{ font: `700 40px ${KR}`, color: INK, letterSpacing: '-0.01em' }}>진단 완료</div>
      <div style={{ font: `500 15px ${MO}`, color: P3, letterSpacing: '0.1em' }}>412 / 412 CASES · 0 FAULT</div>
    </div>
  </div>;
}

function StoreBadge({ kind }) {
  const apple = kind === 'apple';
  return <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, padding: '11px 18px', border: '1px solid #3a3e44', background: '#16181c' }}>
    {apple
      ? <svg width="20" height="24" viewBox="0 0 384 512" fill="#fff"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
      : <svg width="20" height="22" viewBox="0 0 24 24"><path d="M3.6 1.3C3.3 1.6 3.1 2 3.1 2.6v18.8c0 .6.2 1 .5 1.3l.1.1L14.2 12.1v-.2L3.7 1.2z" fill={P1} /><path d="M17.7 15.6l-3.5-3.5v-.2l3.5-3.5.1.1 4.2 2.4c1.2.7 1.2 1.8 0 2.5l-4.3 2.4z" fill={P2} /><path d="M17.8 15.5L14.2 12 3.6 22.7c.4.4 1 .5 1.8.1l12.4-7.1" fill={P3} /><path d="M17.8 8.5L5.4 1.4c-.8-.4-1.4-.4-1.8.1L14.2 12z" fill="#f4b400" /></svg>}
    <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
      <div style={{ font: `500 9px ${MO}`, letterSpacing: '0.06em', textTransform: 'uppercase', color: MUT }}>{apple ? 'Download on the' : 'Get it on'}</div>
      <div style={{ font: `600 15px ${SA}`, color: INK }}>{apple ? 'App Store' : 'Google Play'}</div>
    </div>
  </div>;
}

function P4Video() {
  return (
    <Stage width={1280} height={720} duration={28} background="#000000" persistKey="p4video">

      {/* SCENE 1 — title over hero (0–4.6) */}
      <Sprite start={0} end={4.7}>
        <ImageSprite src="assets/p4-hero-product.png" x={470} y={0} width={810} height={720} fit="cover" radius={0} kenBurns kenBurnsScale={1.1} entryDur={0.9} exitDur={0.5} />
        <Block x={0} y={0} w={1280} entry={0.6}><div style={{ width: 1280, height: 720, background: 'linear-gradient(90deg,#000 0%,rgba(0,0,0,.9) 28%,rgba(0,0,0,.35) 60%,rgba(0,0,0,.55) 100%)' }} /></Block>
        <GrowStripe x={92} y={214} w={340} delay={0.35} />
        <Block x={92} y={244} w={640} delay={0.6}><div style={{ font: `600 15px ${SA}`, letterSpacing: '0.18em', textTransform: 'uppercase', color: P1 }}>EVSE Field Diagnostic · EVCT</div></Block>
        <Block x={88} y={276} w={640} delay={0.85}><div style={{ font: `700 150px ${SA}`, color: INK, letterSpacing: '-0.02em', lineHeight: 1 }}>P4</div></Block>
        <Block x={92} y={452} w={620} delay={1.15}><div style={{ font: `300 27px ${KR}`, color: BODY, lineHeight: 1.4 }}>충전 실패 원인을,<br />현장에서 바로 좁힌다</div></Block>
      </Sprite>

      {/* SCENE 2 — connect / signal flow (4.4–8.9) */}
      <Sprite start={4.4} end={9.0}>
        <ImageSprite src="assets/p4-field-diagnostics.png" x={0} y={0} width={1280} height={720} fit="cover" radius={0} kenBurns kenBurnsScale={1.09} entryDur={0.7} exitDur={0.5} />
        <Block x={0} y={0} w={1280} entry={0.5}><div style={{ width: 1280, height: 720, background: 'linear-gradient(90deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.5) 45%,rgba(0,0,0,.2) 100%)' }} /></Block>
        <Block x={0} y={0} w={1280} entry={0.5}><div style={{ width: 1280, height: 720, background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0%,transparent 45%)' }} /></Block>
        <GrowStripe x={92} y={300} w={300} delay={0.4} />
        <Block x={92} y={330} w={700} delay={0.6}><div style={{ font: `600 15px ${SA}`, letterSpacing: '0.18em', textTransform: 'uppercase', color: P1 }}>Connect · EV Emulation</div></Block>
        <Block x={90} y={362} w={720} delay={0.85}><div style={{ font: `700 56px ${KR}`, color: INK, letterSpacing: '-0.02em', lineHeight: 1.08 }}>충전기에 EV처럼<br />연결한다</div></Block>
        <Block x={92} y={520} w={640} delay={1.2}><div style={{ font: `300 22px ${KR}`, color: BODY }}>전기 신호 + ISO 15118 AC 통신을 한 번에</div></Block>
        <CurrentFlow y={632} />
      </Sprite>

      {/* SCENE 3 — 6 diagnostics (8.6–20.3) */}
      <Sprite start={8.6} end={20.3}><GridBG opacity={0.6} /></Sprite>
      <Sprite start={8.6} end={20.3}>
        <Block x={92} y={70} w={900} delay={0}><Eyebrow text="Diagnostic Classification" /></Block>
        <Block x={90} y={102} w={1000} delay={0.2}><div style={{ font: `700 44px ${KR}`, color: INK, letterSpacing: '-0.01em' }}>실패 원인을 6가지로 분류한다</div></Block>
      </Sprite>
      {[
        { c: P1, k: 'CP · PWM', t: '제어 신호', s: 'CP State · PWM duty', V: SquareWave },
        { c: P2, k: 'RELAY · AC', t: '릴레이 / 출력', s: 'K1/K2 · AC output', V: SineWave },
        { c: P3, k: 'PLC · SLAC', t: '통신 링크', s: 'SLAC · SDP · PLC', V: LinkPackets },
        { c: WARN, k: 'ISO 15118', t: '충전 단계', s: 'V2G · EV SoC', V: SocGauge },
        { c: '#b89cff', k: 'TLS · VAS', t: '보안 / VAS', s: 'TLS Cert · VAS/BIP', V: ReportCheck },
        { c: INK, k: 'REPORT', t: '판정 · 로그', s: 'Report · Live log', V: ReportCheck },
      ].map((d, i) => (
        <Sprite key={i} start={9.4 + i * 1.35} end={20.3}>
          <DiagCard x={70 + i * 190} y={205} w={174} h={340} color={d.c} kicker={d.k} title={d.t} sub={d.s} Viz={d.V} />
        </Sprite>
      ))}

      {/* SCENE 4 — market position (20.1–24.3) */}
      <Sprite start={20.1} end={24.3}>
        <ImageSprite src="assets/p4-position-map.png" x={0} y={0} width={1280} height={720} fit="cover" radius={0} kenBurns kenBurnsScale={1.12} entryDur={0.7} exitDur={0.5} />
        <Block x={0} y={0} w={1280} entry={0.5}><div style={{ width: 1280, height: 720, background: 'linear-gradient(0deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.15) 50%,rgba(0,0,0,.5) 100%)' }} /></Block>
        <GrowStripe x={92} y={498} w={300} delay={0.4} />
        <Block x={92} y={528} w={800} delay={0.6}><div style={{ font: `600 15px ${SA}`, letterSpacing: '0.18em', textTransform: 'uppercase', color: P1 }}>Market Position</div></Block>
        <Block x={90} y={558} w={900} delay={0.85}><div style={{ font: `700 46px ${KR}`, color: INK, letterSpacing: '-0.01em', lineHeight: 1.1 }}>저가 어댑터와 연구소 장비 사이,<br />비어 있던 현장 진단 구간</div></Block>
      </Sprite>

      {/* SCENE 5 — CTA (24.1–28) */}
      <Sprite start={24.1} end={28}><GridBG opacity={0.4} /></Sprite>
      <Sprite start={24.1} end={28}>
        <BigCheckCTA />
      </Sprite>
    </Stage>
  );
}

function BigCheckCTA() {
  return <div style={{ position: 'absolute', inset: 0 }}>
    <Block x={0} y={150} w={1280} align="center" delay={0}><div style={{ display: 'flex', justifyContent: 'center' }}><span style={{ width: 200, height: 5, background: STRIPE }} /></div></Block>
    <Block x={0} y={186} w={1280} align="center" delay={0.15}><div style={{ font: `600 16px ${SA}`, letterSpacing: '0.2em', textTransform: 'uppercase', color: P1 }}>Pre-order Now</div></Block>
    <Block x={0} y={224} w={1280} align="center" delay={0.35}><div style={{ font: `700 92px ${SA}`, color: INK, letterSpacing: '-0.01em', lineHeight: 1 }}>P4</div></Block>
    <Block x={0} y={332} w={1280} align="center" delay={0.55}><div style={{ font: `300 26px ${KR}`, color: BODY }}>충전 진단, 한 화면에서 · 사전예약 시작</div></Block>
    <Block x={0} y={392} w={1280} align="center" delay={0.8}><div style={{ font: `500 20px ${MO}`, color: INK, letterSpacing: '0.02em' }}>330만 ~ 490만원 <span style={{ color: MUT }}>· Field Pilot ~ Pro · VAT 별도</span></div></Block>
    <Block x={0} y={452} w={1280} align="center" delay={1.05}>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center' }}>
        <StoreBadge kind="apple" />
        <StoreBadge kind="play" />
        <div style={{ font: `600 20px ${KR}`, color: P3, marginLeft: 6 }}>피닥 <span style={{ font: `300 15px ${KR}`, color: MUT }}>P4 Doctor</span></div>
      </div>
    </Block>
  </div>;
}

window.P4Video = P4Video;
