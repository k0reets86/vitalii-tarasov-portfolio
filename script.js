/* =========================================================
   Vitalii Tarasov — portfolio
   To add a document: put the PDF in /assets and add an entry to DOCS.
   To add work samples: add entries to REEL (href = link to video/photo).
   ========================================================= */

const TICKER = [
  "„Ukraine 24“ — Platz 1 unter über zehn Nachrichtensendern (Nielsen)",
  "Bis zu 200 Mitarbeitende im 24/7-Telemarathon geführt",
  "Primetime-Marktanteil bis zu 30 %",
  "Hospitationen bei DW, BBC, CNN und ABC/NBC",
  "Live vom Maidan 2013/14",
  "ZAB: Abschluss zwischen Bachelor- und Masterebene",
  "Deutsch B2 · telc · „gut erfüllt“",
  "Jetzt in München — offen für neue Projekte",
];

const SKILLS = [
  {t:"Redaktionsleitung", d:"Teams von 5 bis 200 Mitarbeitenden, Programmplanung, Senderstrategie."},
  {t:"Ukraine-Expertise", d:"Gewachsenes Netzwerk in ukrainischen Medien, Politik und Expertenkreisen; Zugang zu Quellen und exklusiven Themen."},
  {t:"PR & Kommunikation", d:"Pressemitteilungen, Pressekonferenzen, Social-Media-Kampagnen, Interviews."},
  {t:"Moderation & Sprecher", d:"TV, Radio und Bühne vor mehreren Tausend Zuschauern; Voice-over und Synchronisation."},
  {t:"Projekte & Events", d:"Von Einzeltrainings bis zu Stadionkonzerten."},
  {t:"KI-Content", d:"Text, Audio, Video und automatisierte Veröffentlichung."},
];

const TIMELINE = [
  {date:"09/2022 – 12/2024", title:"Chefredakteur", org:"TV-Sender „Wir – Ukraine“, Kyjiw", top:true,
   points:["Mitaufbau des Senders mit dem Redaktionsteam nach der Einstellung von „Ukraine 24“","Leitung von rund 200 Mitarbeitenden im 24/7-Sendebetrieb des nationalen Nachrichten-Telemarathons","Senderstrategie, neue Formate und TV-Projekte; Auswertung von Ratings"]},
  {date:"12/2019 – 07/2022", title:"Stellvertretender Chefredakteur", org:"Mediengruppe „Ukraina“, Kyjiw – neuer Nachrichtensender „Ukraine 24“", top:true,
   points:["Aufbau des Senders vom Start an: in zwei Jahren Platz 1 unter über zehn Nachrichtensendern (Nielsen)","Rating 2–3 %, Marktanteil 10–20 %, in der Primetime bis zu 30 %","Planung und Steuerung der redaktionellen Arbeit von bis zu 200 Mitarbeitenden"]},
  {date:"09/2018 – 12/2019", title:"Leiter der Politikredaktion", org:"Mediengruppe „Ukraina“, Kyjiw (TV-Sender „Ukraina“)",
   points:["Koordination der politischen Berichterstattung, Reportagen und Sendungen"]},
  {date:"01/2012 – 09/2018", title:"Journalist, Nachrichtensendung „Sobytiya“, später „Segodnya“ (Heute)", org:"Mediengruppe „Ukraina“, Kyjiw",
   points:["Reportagen, Live-Berichterstattung, analytische Beiträge","Berichterstattung über die Revolution der Würde (Maidan, 2013/14) direkt vor Ort"]},
  {date:"01/2014 – 03/2015", title:"Nachrichtensprecher (parallel)", org:"Radiosender „Hit FM“, Kyjiw", points:[]},
  {date:"09/2011 – 12/2011", title:"Redakteur und Moderator „Thema des Tages“", org:"TV-Sender „Kyivska Rus“, Kyjiw", points:[]},
  {date:"08/2009 – 08/2011", title:"Redakteur vom Dienst (Nachrichten)", org:"TV-Sender „UBC“ (Ukrainian Business Channel), Kyjiw",
   points:["Redaktionelle Bearbeitung der Beiträge der Journalisten","Zusammenstellung und Layout der Nachrichtenausgabe (Sendeablauf)","Verantwortung für die Ausspielung der Ausgabe in den Live-Sendebetrieb"]},
  {date:"06/2007 – 07/2009", title:"Journalist", org:"TV-Sender „Tonis“, Kyjiw", points:[]},
  {date:"2005 – 12/2006", title:"Journalist und Korrespondent", org:"TV-Sender „5 Kanal“, Kyjiw (parallel zum Studium)", points:[]},
  {date:"Parallel", title:"Freiberuflich: Sprecher und Moderator", org:"Voice-over, Synchronisation, Events",
   points:["Voice-over und Synchronisation: 3 Spielfilme, zahlreiche Dokumentarfilme, 7–8 TV-Werbespots","Moderation von Veranstaltungen bis zu Stadionkonzerten mit mehreren Tausend Gästen"]},
];

// level: number of CEFR segments filled (A1..C2 = 1..6)
const LANGS = [
  {n:"Ukrainisch", l:"Muttersprache", level:6},
  {n:"Russisch", l:"Fließend", level:6},
  {n:"Deutsch", l:"B2 · telc", level:4},
  {n:"Englisch", l:"A2", level:2},
];

const DOCS = [
  {t:"Lebenslauf", d:"Vollständiger Lebenslauf auf Deutsch, aktueller Stand.", meta:"PDF · 195 KB", href:"assets/Lebenslauf_Vitalii_Tarasov.pdf"},
  {t:"ZAB-Zeugnisbewertung · Bachelor", d:"Bachelor Film- und Fernsehkunst (2008, mit Auszeichnung). ZAB/KMK Bonn, 14.04.2026: entspricht einem deutschen Hochschulabschluss auf Bachelor-Ebene.", meta:"PDF · 193 KB · elektronisch signiert", href:"assets/ZAB_Zeugnisbewertung_Bachelor_2008.pdf"},
  {t:"ZAB-Zeugnisbewertung · Sprecher & Moderator", d:"Spezialist „Sprecher und Moderator von Fernsehsendungen“ (2009, mit Auszeichnung). ZAB/KMK Bonn, 14.04.2026: Niveau zwischen Bachelor- und Masterebene.", meta:"PDF · 195 KB · elektronisch signiert", href:"assets/ZAB_Zeugnisbewertung_Sprecher_Moderator_2009.pdf"},
  {t:"telc Deutsch B2 · Beruf", d:"Deutsch-Test für den Beruf B2, Ergebnis „gut erfüllt“ (189 von 240 Punkten), ausgestellt am 05.08.2026.", meta:"PDF · 2,5 MB", href:"assets/telc_Deutsch_B2_Zertifikat.pdf"},
  {t:"Original-Diplome (Ukraine)", d:"Bachelor-Diplom (2008) und Spezialist-Diplom (2009) im Original.", meta:"Folgt"},
  {t:"Urkunden & Ehrenamt", d:"Nachweise zu ehrenamtlicher Presse- und Öffentlichkeitsarbeit (CenterUA e.V., „Krayna“ e.V.).", meta:"Folgt"},
];

// add href:"https://…" when material is ready; tiles without href show a "no signal" test card
const REEL = [
  {tag:"Video", t:"Nachrichten-Telemarathon · Ukraine 24", m:"Showreel folgt"},
  {tag:"Video", t:"Interviewreihe mit ukrainischen Persönlichkeiten", m:"Folgt"},
  {tag:"Foto", t:"Moderation & Pressearbeit", m:"Folgt"},
];

/* ---------------- render ---------------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function render(){
  const items = TICKER.map(t=>`<span>${esc(t)}</span>`).join("");
  $("#ticker").innerHTML = items + items; // doubled for a seamless loop

  $("#skills").innerHTML = SKILLS.map((s,i)=>`
    <li class="skill reveal"><span class="n">${String(i+1).padStart(2,"0")}</span>
      <h3>${esc(s.t)}</h3><span class="arrow" aria-hidden="true">→</span>
      <p>${esc(s.d)}</p></li>`).join("");

  $("#jobs").innerHTML = TIMELINE.map((j,i)=>{
    const has = j.points.length>0;
    return `<div class="job reveal${j.top?" top":""}">
      <button class="job-head" ${has?`aria-expanded="false" aria-controls="jb${i}"`:"disabled"}>
        <span class="job-date">${esc(j.date)}</span>
        <span><span class="job-title">${esc(j.title)}</span>${j.org?`<span class="job-org">${esc(j.org)}</span>`:""}</span>
        ${has?`<span class="job-tog" aria-hidden="true"></span>`:"<span></span>"}
      </button>
      ${has?`<div class="job-body" id="jb${i}"><div><ul>${j.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div></div>`:""}
    </div>`;}).join("");

  $("#langs").innerHTML = LANGS.map(l=>`
    <div class="lang">
      <div class="lang-top"><b>${esc(l.n)}</b><span class="mono">${esc(l.l)}</span></div>
      <div class="cefr" aria-label="Niveau ${l.level} von 6">${[1,2,3,4,5,6].map(k=>`<i class="${k<=l.level?"on":""}" style="transition-delay:${k*70}ms"></i>`).join("")}</div>
      <div class="cefr-scale" aria-hidden="true"><span>A1</span><span>A2</span><span>B1</span><span>B2</span><span>C1</span><span>C2</span></div>
    </div>`).join("");

  $("#docs").innerHTML = DOCS.map(d=>{
    const ready = !!d.href;
    const inner = `<span class="doc-ic"><span>${ready?"PDF":"···"}</span></span>
      <span><h3>${esc(d.t)}</h3><p>${esc(d.d)}</p><span class="meta mono">${esc(d.meta)}</span></span>
      <span class="doc-act">${ready?"Download ↓":"In Vorbereitung"}</span>`;
    return ready
      ? `<a class="doc reveal" href="${d.href}" download>${inner}</a>`
      : `<div class="doc soon reveal">${inner}</div>`;
  }).join("");

  $("#reel").innerHTML = REEL.map(r=>{
    const body = `<span class="tape-tag mono">${esc(r.tag)}</span>
      ${r.href?"":`<div class="bars" aria-hidden="true">${"<i></i>".repeat(7)}</div><span class="nosignal mono">No signal</span>`}
      <div class="tape-info"><b>${esc(r.t)}</b><span class="mono">${esc(r.m)}</span></div>`;
    return r.href
      ? `<a class="tape reveal" href="${r.href}" target="_blank" rel="noopener">${body}</a>`
      : `<div class="tape reveal">${body}</div>`;
  }).join("");
}
render();

/* ---------------- hero intro ---------------- */
requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.add("loaded")));

/* ---------------- clock (Munich) + timecode ---------------- */
function tickClock(){
  try{
    $("#clock").textContent = new Intl.DateTimeFormat("de-DE",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}).format(new Date());
  }catch(e){}
}
tickClock(); setInterval(tickClock, 15000);
const tc = $("#timecode"), t0 = performance.now();
const pad = n => String(n).padStart(2,"0");
(function frame(now){
  const s = (now - t0)/1000, f = Math.floor((s%1)*25);
  tc.textContent = `${pad(Math.floor(s/3600))}:${pad(Math.floor(s/60)%60)}:${pad(Math.floor(s)%60)}:${pad(f)}`;
  requestAnimationFrame(frame);
})(t0);

/* ---------------- top bar, progress, active nav ---------------- */
const topbar = $("#topbar"), prog = $("#progress");
let ticking = false;
function onScroll(){
  if(ticking) return; ticking = true;
  requestAnimationFrame(()=>{
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    topbar.classList.toggle("scrolled", y > 30);
    prog.style.transform = `scaleX(${h>0 ? Math.min(y/h,1) : 0})`;
    ticking = false;
  });
}
addEventListener("scroll", onScroll, {passive:true}); onScroll();

const navLinks = [...document.querySelectorAll(".nav a")];
const secObs = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ navLinks.forEach(a=>a.classList.toggle("active", a.getAttribute("href")==="#"+e.target.id)); }
}),{rootMargin:"-45% 0px -50% 0px"});
["top","profil","kompetenzen","werdegang","ausbildung","dokumente","arbeitsproben","kontakt"].forEach(id=>{const el=document.getElementById(id); if(el) secObs.observe(el);});

/* ---------------- mobile menu ---------------- */
const burger = $("#burger"), nav = $("#nav");
function setMenu(open){
  nav.classList.toggle("open", open);
  topbar.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", ()=>setMenu(!nav.classList.contains("open")));
navLinks.forEach(a=>a.addEventListener("click", ()=>setMenu(false)));
addEventListener("keydown", e=>{ if(e.key==="Escape") setMenu(false); });

/* ---------------- reveal on scroll ---------------- */
const revObs = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add("in"); revObs.unobserve(e.target); }
}),{rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));
const langObs = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add("in"); langObs.unobserve(e.target); }
}),{threshold:.4});
document.querySelectorAll(".lang").forEach(el=>langObs.observe(el));

/* ---------------- counters ---------------- */
const statObs = new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting) return;
  e.target.querySelectorAll("[data-count]").forEach(el=>{
    const end = +el.dataset.count, dur = 1500, st = performance.now();
    (function step(now){
      const p = Math.min((now-st)/dur,1), v = 1-Math.pow(1-p,3);
      el.textContent = Math.round(end*v);
      if(p<1) requestAnimationFrame(step);
    })(st);
  });
  statObs.unobserve(e.target);
}),{threshold:.35});
statObs.observe($("#stats"));

/* ---------------- career accordion ---------------- */
$("#jobs").addEventListener("click", e=>{
  const btn = e.target.closest(".job-head"); if(!btn || btn.disabled) return;
  const job = btn.parentElement, open = !job.classList.contains("open");
  document.querySelectorAll(".job.open").forEach(j=>{ j.classList.remove("open"); j.querySelector(".job-head").setAttribute("aria-expanded","false"); });
  if(open){ job.classList.add("open"); btn.setAttribute("aria-expanded","true"); }
});

/* ---------------- portrait: subtle parallax (desktop) ---------------- */
const vf = $("#viewfinder");
if(matchMedia("(hover:hover) and (min-width:901px)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches){
  vf.addEventListener("mousemove", e=>{
    const r = vf.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
    vf.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`;
  });
  vf.addEventListener("mouseleave", ()=>{ vf.style.transform = ""; });
}

/* ---------------- copy contact ---------------- */
const toast = $("#toast"); let tt;
function showToast(msg){ toast.textContent = msg; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(()=>toast.classList.remove("show"),1800); }
document.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click", async ()=>{
  const v = b.dataset.copy;
  try{ await navigator.clipboard.writeText(v); showToast("Kopiert ✓  " + v); }
  catch(err){
    const r = document.createRange(); r.selectNodeContents(b.querySelector("b"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r); showToast("Markiert — jetzt kopieren");
  }
}));

/* ---------------- QR + year ---------------- */
$("#year").textContent = new Date().getFullYear();
try{
  const qr = qrcode(0,"M"); qr.addData(location.href.split("#")[0]); qr.make();
  $("#qr").innerHTML = qr.createSvgTag({cellSize:4, margin:1});
}catch(e){ $("#qr").style.display="none"; }
