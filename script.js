// ---------- data ----------
const SKILLS = [
  {t:"Redaktionsleitung",d:"Teams von 5 bis 200 Mitarbeitenden, Programmplanung, Senderstrategie",ic:"users"},
  {t:"Ukraine-Expertise",d:"Gewachsenes Netzwerk in ukrainischen Medien, Politik und Expertenkreisen; Zugang zu Quellen und exklusiven Themen",ic:"globe"},
  {t:"PR & Kommunikation",d:"Pressemitteilungen, Pressekonferenzen, Social-Media-Kampagnen, Interviews",ic:"megaphone"},
  {t:"Moderation & Sprecher",d:"TV, Radio und Bühne vor mehreren Tausend Zuschauern; Voice-over und Synchronisation",ic:"mic"},
  {t:"Projekte & Events",d:"Von Einzeltrainings bis zu Stadionkonzerten",ic:"calendar"},
  {t:"KI-Content",d:"Text, Audio, Video und automatisierte Veröffentlichung",ic:"spark"},
];

const ICONS = {
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  megaphone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8L13 21l-3 1-1.4-5.5"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0014 0v-2M12 19v3"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3v13m0 0l5-5m-5 5l-5-5M4 20h16"/></svg>',
  film:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 9h5M17 9h5M2 15h5M17 15h5"/></svg>',
  image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
};

const TIMELINE = [
  {date:"09/2022 – 12/2024", title:"Chefredakteur", org:"TV-Sender „Wir – Ukraine“, Kyjiw",
   points:["Mitaufbau des Senders mit dem Redaktionsteam nach der Einstellung von „Ukraine 24“","Leitung von rund 200 Mitarbeitenden im 24/7-Sendebetrieb des nationalen Nachrichten-Telemarathons","Senderstrategie, neue Formate und TV-Projekte; Auswertung von Ratings"]},
  {date:"12/2019 – 07/2022", title:"Stellvertretender Chefredakteur", org:"Nachrichtensender „Ukraine 24“, Kyjiw",
   points:["Aufbau des Senders vom Start an: in zwei Jahren Platz 1 unter über zehn Nachrichtensendern (Nielsen)","Rating 2–3 %, Marktanteil 10–20 %, in der Primetime bis zu 30 %","Planung und Steuerung der redaktionellen Arbeit von bis zu 200 Mitarbeitenden"]},
  {date:"09/2018 – 12/2019", title:"Leiter der Politikredaktion", org:"TV-Sender „Ukraina“, Kyjiw",
   points:["Koordination der politischen Berichterstattung, Reportagen und Sendungen"]},
  {date:"02/2012 – 09/2018", title:"Journalist, Nachrichtensendung „Sobytiya“", org:"Mediengruppe „Ukraina“, Kyjiw",
   points:["Reportagen, Live-Berichterstattung, analytische Beiträge","Berichterstattung über die Revolution der Würde (Maidan, 2013/14) direkt vor Ort"]},
  {date:"01/2014 – 03/2015", title:"Nachrichtensprecher (parallel)", org:"Radiosender „Hit FM“, Kyjiw", points:[]},
  {date:"09/2011 – 02/2012", title:"Redakteur und Moderator „Thema des Tages“", org:"TV-Sender „Kyivska Rus“, Kyjiw", points:[]},
  {date:"06/2007 – 07/2009", title:"Journalist", org:"TV-Sender „Tonis“, Kyjiw", points:[]},
  {date:"2005 – 12/2006", title:"Journalist und Korrespondent", org:"TV-Sender „5 Kanal“, Kyjiw (parallel zum Studium)", points:[]},
  {date:"parallel", title:"Freiberuflich: Sprecher und Moderator", org:"",
   points:["Voice-over und Synchronisation: 3 Spielfilme, zahlreiche Dokumentarfilme, 7–8 TV-Werbespots","Moderation von Veranstaltungen bis zu Stadionkonzerten mit mehreren Tausend Gästen"]},
];

const LANGS = [
  {n:"Ukrainisch", l:"Muttersprache", pct:100},
  {n:"Russisch", l:"Fließend", pct:95},
  {n:"Deutsch", l:"B2 · telc", pct:60},
  {n:"Englisch", l:"A2", pct:30},
];

const DOCS = [
  {t:"Lebenslauf (CV)", d:"Vollständiger Lebenslauf auf Deutsch, aktueller Stand.", status:"ready", href:"assets/Lebenslauf_Vitalii_Tarasov.pdf", ic:"doc"},
  {t:"Diplom – Bachelor Film- &amp; Fernsehkunst", d:"Nationale Universität für Kultur und Künste Kyjiw, 2008 (mit Auszeichnung). Original-Diplom aus der Ukraine.", status:"soon", ic:"lock"},
  {t:"Diplom – Sprecher &amp; Moderator", d:"Spezialist-Diplom, 2009 (mit Auszeichnung).", status:"soon", ic:"lock"},
  {t:"ZAB-Zeugnisbewertung", d:"Anerkennung des ukrainischen Hochschulabschlusses in Deutschland (04/2026).", status:"soon", ic:"lock"},
  {t:"Deutsch-Zertifikat B2 (telc)", d:"Sprachzertifikat, ausgestellt 08/2026.", status:"soon", ic:"lock"},
  {t:"Urkunden &amp; Ehrenamt", d:"Nachweise zu ehrenamtlicher Presse- und Öffentlichkeitsarbeit (CenterUA e.V., „Krayna“ e.V.).", status:"soon", ic:"lock"},
];

const GALLERY = [
  {tag:"Video", ic:"film", label:"Nachrichten-Telemarathon – Ukraine 24"},
  {tag:"Video", ic:"film", label:"Interviewreihe mit ukrainischen Persönlichkeiten"},
  {tag:"Foto", ic:"image", label:"Moderation & Pressearbeit"},
];

// ---------- render ----------
function render(){
  document.getElementById("skills-grid").innerHTML = SKILLS.map((s,i)=>`
    <div class="skill-card reveal" style="--i:${i}" data-reveal>
      <div class="ic">${ICONS[s.ic]}</div>
      <h3>${s.t}</h3>
      <p>${s.d}</p>
    </div>`).join("");

  document.getElementById("timeline").innerHTML = TIMELINE.map((j,i)=>`
    <div class="tl-item" data-idx="${i}">
      <div class="tl-dot"></div>
      <div class="tl-head">
        <div><div class="tl-title">${j.title}</div>${j.org?`<div class="tl-org">${j.org}</div>`:""}</div>
        <div class="tl-date">${j.date}</div>
      </div>
      ${j.points.length?`<div class="tl-toggle">Details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></div>
      <div class="tl-body"><ul>${j.points.map(p=>`<li>${p}</li>`).join("")}</ul></div>`:""}
    </div>`).join("");

  document.getElementById("langs").innerHTML = LANGS.map(l=>`
    <div class="lang-pill" style="--pct:${l.pct}%" data-reveal-lang>
      <div class="n">${l.n}</div>
      <div class="bar"><div class="fill"></div></div>
      <span class="l">${l.l}</span>
    </div>`).join("");

  document.getElementById("doc-grid").innerHTML = DOCS.map((d,i)=>`
    <div class="doc-card ${d.status==='ready'?'ready':'soon'} reveal" style="--i:${i}">
      <div class="doc-ic">${ICONS[d.ic]}</div>
      <div class="doc-title">${d.t}</div>
      <div class="doc-desc">${d.d}</div>
      <span class="doc-badge ${d.status}">${d.status==='ready'?'Verfügbar':'Folgt in Kürze'}</span>
      ${d.status==='ready'?`<a class="doc-dl" href="${d.href}" download>${ICONS.download} Herunterladen</a>`:""}
    </div>`).join("");

  document.getElementById("gallery-grid").innerHTML = GALLERY.map((g,i)=>`
    <div class="gcard reveal" style="--i:${i}">
      <span class="tag">${g.tag}</span>
      <div class="ic">${ICONS[g.ic]}</div>
      <p>${g.label}<br><span style="opacity:.6">— wird ergänzt —</span></p>
    </div>`).join("");

  document.getElementById("year").textContent = new Date().getFullYear();
}
render();

// ---------- scroll progress + nav state ----------
const nav = document.getElementById("nav");
const progress = document.getElementById("progress");
function onScroll(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  progress.style.width = (max>0 ? (scrolled/max)*100 : 0) + "%";
  nav.classList.toggle("scrolled", scrolled > 10);
}
document.addEventListener("scroll", onScroll, {passive:true});
onScroll();

// mobile nav toggle
const navlinks = document.getElementById("navlinks");
document.getElementById("navmenu-btn").addEventListener("click", ()=> navlinks.classList.toggle("open"));
navlinks.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=> navlinks.classList.remove("open")));

// active section highlight
const sections = ["about","werdegang","dokumente","arbeitsproben","kontakt"].map(id=>document.getElementById(id)).filter(Boolean);
const navA = [...navlinks.querySelectorAll("a")];
const navObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id = "#"+e.target.id;
      navA.forEach(a=> a.classList.toggle("active", a.getAttribute("href")===id));
    }
  });
}, {rootMargin:"-40% 0px -55% 0px"});
sections.forEach(s=>navObserver.observe(s));

// ---------- reveal on scroll ----------
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); revealObserver.unobserve(e.target);} });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
// also observe dynamically-created cards with [data-reveal]-like classes (already have .reveal class applied above)
document.querySelectorAll(".reveal").forEach(el=>{ if(!el.classList.contains("in")) revealObserver.observe(el); });

// lang bars animate when visible
const langObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); langObserver.unobserve(e.target);} });
},{threshold:0.4});
document.querySelectorAll("[data-reveal-lang]").forEach(el=>langObserver.observe(el));

// ---------- stat counters ----------
const statObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      document.querySelectorAll(".stat .num").forEach(el=>{
        const target = parseInt(el.dataset.count,10);
        const suffix = el.dataset.suffix || "";
        const dur = 1200; const start = performance.now();
        function step(now){
          const p = Math.min(1,(now-start)/dur);
          const eased = 1-Math.pow(1-p,3);
          el.textContent = Math.round(target*eased) + suffix;
          if(p<1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
      statObserver.disconnect();
    }
  });
},{threshold:0.5});
const statsEl = document.getElementById("stats");
if(statsEl) statObserver.observe(statsEl);

// ---------- timeline accordion ----------
document.getElementById("timeline").addEventListener("click",(e)=>{
  const item = e.target.closest(".tl-item");
  if(!item) return;
  const wasOpen = item.classList.contains("open");
  document.querySelectorAll(".tl-item.open").forEach(el=>el.classList.remove("open"));
  if(!wasOpen) item.classList.add("open");
});

// ---------- copy to clipboard ----------
function setupCopy(id, text){
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener("click", async ()=>{
    try{ await navigator.clipboard.writeText(text); }
    catch(_){ /* fallback: select text */ }
    el.classList.add("copied-flash");
    setTimeout(()=>el.classList.remove("copied-flash"),1500);
  });
}
setupCopy("copy-email","v.tarasov.de@gmail.com");
setupCopy("copy-phone","+49 1563 0176269");

// ---------- QR code ----------
try{
  const qr = qrcode(0,"M");
  qr.addData(location.href);
  qr.make();
  document.getElementById("qr").innerHTML = qr.createSvgTag({cellSize:4, margin:2});
}catch(_){}
