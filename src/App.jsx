import { useEffect, useRef, useState } from "react";
import { profile, experience, projects, prcFlow, cancelFlow, skills, hobbies } from "./data.js";

const lib = experience[0].projects, tcs = experience[1].projects;
const pick = (a, n) => a.find((p) => p.name.startsWith(n));
const useMedia = (q) => {
  const [m, setM] = useState(() => matchMedia(q).matches);
  useEffect(() => { const l = matchMedia(q), f = () => setM(l.matches); l.addEventListener("change", f); return () => l.removeEventListener("change", f); }, [q]);
  return m;
};
const hide = (e) => (e.target.style.display = "none");
const shot = (u) => `https://image.thum.io/get/width/600/${u}`;

function Pol({ src, cap, tilt = -3, fallback }) {
  return (
    <figure className="pol" style={{ "--t": `${tilt}deg` }}>
      <div className="ph">{fallback}<img src={src} alt={cap} loading="lazy" onError={hide} /></div>
      <figcaption>{cap}</figcaption>
    </figure>
  );
}

function Typer() {
  const words = ["writes novels.", "writes songs.", "writes code.", "debugs at midnight."];
  const [w, setW] = useState(0), [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(99); return; }
    const t = setTimeout(() => (n < words[w].length ? setN(n + 1) : (setN(0), setW((w + 1) % words.length))), n < words[w].length ? 80 : 1400);
    return () => clearTimeout(t);
  }, [n, w]);
  return <span className="hand">Himani <b>{words[w].slice(0, n) || "\u00a0"}</b><i className="caret" /></span>;
}

function Flow({ steps, on }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!on || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % steps.length), 2000);
    return () => clearInterval(t);
  }, [on, steps.length]);
  return (
    <ol className="flow">
      {steps.map(([n, d], k) => (
        <li key={n} className={k === i ? "on" : k < i ? "done" : ""} onClick={() => setI(k)}>
          <span>{k + 1}</span><div><b>{n}</b>{k === i && <p>{d}</p>}</div>
        </li>
      ))}
    </ol>
  );
}

const Stamp = () => <span className="stamp">Client work: screenshots redacted</span>;
const Head = ({ ch, t, sub }) => (
  <header className="pop" style={{ "--d": 0 }}><p className="ch">{ch}</p><h2 className="hand"><span className="ul">{t}</span></h2>{sub && <p className="sub">{sub}</p>}</header>
);
function Proj({ p, ch, sub, children }) {
  return (
    <>
      <Head ch={ch} t={p.name} sub={sub} />
      <p className="mono pop" style={{ "--d": 1 }}>{p.stack}</p>
      <ul>{p.points.map((x, i) => <li key={x} className="pop" style={{ "--d": i + 2 }}>{x}</li>)}</ul>
      {children}
    </>
  );
}
function Personal({ list }) {
  return (
    <div className="pgrid">
      {list.map((p, i) => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="pop pcard" style={{ "--d": i + 1 }}>
          <Pol src={shot(p.url)} cap={p.name} tilt={i % 2 ? 2 : -2} fallback={<em>{p.name[0]}</em>} />
          <p>{p.desc}</p>
          <span className="go">Open live demo</span>
        </a>
      ))}
    </div>
  );
}

const personal = projects.filter((p) => p.cat !== "x");
const TOC = [["About me", 2], ["Off the clock", 3], ["Timeline", 4], ["TCS: VIAVI and Walgreens", 5], ["Libratherm: PRC-309 and Cancellations", 7], ["Libratherm: THP-V4 and DTH-948", 9], ["Personal projects", 11], ["Toolbox", 13], ["Say hello", 14]];

const pages = (go) => [
  (v) => (
    <div className="cover">
      <div className="stitch" />
      <i className="band" />
      <div className="label pop" style={{ "--d": 0 }}>
        <p className="mono">PROPERTY OF</p><h1 className="hand">Himani Soni</h1><p className="mono">Full Stack Engineer</p>
      </div>
      <p className="sub pop" style={{ "--d": 1 }}>Engineer by day. Novelist and songwriter by night.</p>
      <Pol src="/me.jpg" cap="that is me" tilt={4} fallback={<em>HS</em>} />
      <div className="how pop" style={{ "--d": 3 }}>
        <b className="hand">How to read this notebook</b>
        <ul>
          <li>Click any page to turn it. Right pages go forward, left pages go back.</li>
          <li>Or use the arrow keys, the buttons below, or swipe on a phone.</li>
          <li>The Contents button jumps straight to any chapter.</li>
          <li>Links and buttons inside pages work as usual.</li>
        </ul>
      </div>
    </div>
  ),
  () => (
    <>
      <Head ch="Table of contents" t="What is inside" />
      <ol className="toc">{TOC.map(([t, p], i) => <li key={t} className="pop" style={{ "--d": i + 1 }}><button onClick={() => go(p)}>{t}<i /><span>{p}</span></button></li>)}</ol>
    </>
  ),
  () => (
    <>
      <Head ch="Chapter 1" t="Who wrote this?" />
      <p className="big pop" style={{ "--d": 1 }}>{profile.summary}</p>
      <p className="pop" style={{ "--d": 2 }}>Three years of shipping React and Node.js products at TCS, and now Electron desktop software at Libratherm that connects operators to real machines.</p>
      <div className="notes">
        {["3 years of building", "Web, desktop, and hardware", "React, Node.js, Electron"].map((n, i) => <div key={n} className="note pop" style={{ "--d": i + 3, "--r": `${[-4, 3, -2][i]}deg` }}>{n}</div>)}
      </div>
    </>
  ),
  () => (
    <>
      <Head ch="Chapter 2" t="Plot twist" />
      <p className="big pop" style={{ "--d": 1 }}><Typer /></p>
      {hobbies.map(([t, d], i) => <div key={t} className="pop" style={{ "--d": i + 2 }}><h3 className="hand">{t}</h3><p>{d}</p></div>)}
      <svg className="doodle" viewBox="0 0 120 60" aria-hidden="true"><path d="M10 45 Q30 5 50 40 T95 30" /><circle cx="100" cy="28" r="6" /></svg>
    </>
  ),
  () => (
    <>
      <Head ch="Chapter 3" t="The timeline" />
      <ol className="tl">
        {[["April 2026 to Present", "Libratherm Instruments Pvt. Ltd.", "Full Stack Developer"], ["Nov 2022 to June 2025", "Tata Consultancy Services", "Full Stack Developer"], ["2018 to 2022", "BSA College of Engineering and Technology, Mathura", "B.Tech, Computer Science"]].map(([d, c, r], i) => (
          <li key={c} className="pop" style={{ "--d": i + 1 }}><span className="mono">{d}</span><b>{c}</b><em>{r}</em></li>
        ))}
      </ol>
    </>
  ),
  () => (
    <Proj p={pick(tcs, "VIAVI")} ch="Chapter 4: TCS" sub="Nov 2022 to June 2025">
      <Stamp />
      <svg className="doodle big" viewBox="0 0 160 70" aria-hidden="true"><g>{[[20, 35], [60, 12], [60, 58], [110, 35], [145, 18]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="6" />)}<path d="M20 35L60 12L110 35L60 58L20 35M110 35L145 18" /></g></svg>
    </Proj>
  ),
  () => <Proj p={pick(tcs, "Walgreens")} ch="Chapter 4: TCS" sub="Nov 2022 to June 2025"><Stamp /></Proj>,
  (v) => (
    <>
      <Head ch="Chapter 5: Libratherm" t="PRC-309" sub="Industrial monitoring and automation" />
      <p className="mono small">Electron, React, TypeScript, Redux Toolkit, Mantine, PouchDB, Firebase</p>
      <Flow steps={prcFlow} on={v} />
      <p className="mono small">Illustrative architecture, not a product screenshot.</p>
    </>
  ),
  (v) => (
    <>
      <Head ch="Chapter 5: Libratherm" t="Cancellations" sub="A released slot finds a new owner" />
      <Flow steps={cancelFlow} on={v} />
      <ul>{pick(lib, "Cancel").points.map((x) => <li key={x}>{x}</li>)}</ul>
    </>
  ),
  () => <Proj p={pick(lib, "THP")} ch="Chapter 6: Libratherm"><Stamp /></Proj>,
  () => <Proj p={pick(lib, "DTH")} ch="Chapter 6: Libratherm"><Stamp /></Proj>,
  () => (<><Head ch="Chapter 7" t="Side quests (1)" sub="Personal projects, all live" /><Personal list={personal.slice(0, 4)} /></>),
  () => (<><Head ch="Chapter 7" t="Side quests (2)" /><Personal list={personal.slice(4)} /></>),
  () => (
    <>
      <Head ch="Chapter 8" t="The toolbox" />
      {Object.entries(skills).map(([k, v], i) => <p key={k} className="pop" style={{ "--d": i + 1 }}><b className="hl">{k}</b> {v.join(", ")}</p>)}
    </>
  ),
  () => (
    <>
      <Head ch="Final chapter" t="Say hello" />
      <a className="mail pop" style={{ "--d": 1 }} href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="pop" style={{ "--d": 2 }}><a href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a></p>
      <div className="chips pop" style={{ "--d": 3 }}>
        <a href="/Himani_Soni_Resume.pdf" download>Download resume</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </>
  ),
  () => <div className="cover back"><h2 className="hand">The end.</h2><p className="sub">(Sequel in progress.)</p></div>,
];

export default function App() {
  const mobile = useMedia("(max-width: 820px)");
  const [s, setS] = useState(0);
  const [cur, setCur] = useState(0);
  const tx = useRef(0);
  const go = (p) => { setCur(p); setS(p % 2 ? (p + 1) / 2 : p / 2); };
  const list = pages(go), N = list.length / 2;
  const vis = (p) => (mobile ? p === cur : p % 2 ? s === (p + 1) / 2 : s === p / 2);
  const step = (d) => (mobile ? go(Math.max(0, Math.min(list.length - 1, cur + d))) : setS((v) => Math.max(0, Math.min(N, v + d))));
  useEffect(() => {
    const k = (e) => e.key === "ArrowRight" ? step(1) : e.key === "ArrowLeft" ? step(-1) : 0;
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  });
  const face = (p, side) => <div className={`face ${side} ${p === 0 || p === 15 ? "leather" : "paper"} ${vis(p) ? "vis" : ""}`} aria-hidden={!vis(p)}><div className="in">{list[p](vis(p))}</div>{p > 0 && p < 15 && <span className="pn mono">{p}</span>}</div>;
  const shift = mobile ? 0 : s === 0 ? -25 : s === N ? 25 : 0;
  return (
    <main className="desk">
      <div className="decor" aria-hidden="true"><i /><i /><i /><i /></div>
      <header className="top">
        <button className="brand hand" onClick={() => go(0)}>Himani Soni</button>
        <span className="mono hint-top">Click a page or use the arrow keys to turn it</span>
        <div className="links">
          <button onClick={() => go(1)}>Contents</button>
          <a className="dl" href="/Himani_Soni_Resume.pdf" download>Download resume</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>
      {mobile ? (
        <div className="leaf-wrap" onTouchStart={(e) => (tx.current = e.touches[0].clientX)} onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - tx.current; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); }}><div className="leaf" key={cur}>{face(cur, "r")}</div></div>
      ) : (
        <div className="book" style={{ transform: `translateX(${shift}%)` }}>
          <div className="spine" aria-hidden="true" />
          {Array.from({ length: N }, (_, i) => (
            <div key={i} className={`sheet ${i < s ? "f" : ""}`} style={{ zIndex: i < s ? i : N - i }} onClick={(e) => { if (e.target.closest("a,button,.flow li")) return; setS(i < s ? i : i + 1); }}>
              {face(2 * i, "r")}{face(2 * i + 1, "l")}
            </div>
          ))}
        </div>
      )}
      <nav className="ctl">
        <button onClick={() => step(-1)} aria-label="Previous page">Back</button>
        <span className="mono">{mobile ? cur : s * 2 - 1 < 1 ? "cover" : `${s * 2 - 1} / ${s * 2}`}</span>
        <button onClick={() => step(1)} aria-label="Next page">Turn page</button>
      </nav>
    </main>
  );
}
