export const DEFAULT_HTML = `<!DOCTYPE html><html lang="en" dir="ltr"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title><span id="_o0"></span> <span id="_o1"></span> | <span id="_o2"></span><script>(function(){var d=["Koy","ama"];document.getElementById('_o0').textContent=d.join('');})()</script><script>(function(){var d=["Fum","iya"];document.getElementById('_o1').textContent=d.join('');})()</script><script>(function(){var d=["Lap","se"];document.getElementById('_o2').textContent=d.join('');})()</script></title>
  <meta name="description" content="" id="_o16"><script>(function(){var d=["Soc","iet","y, ","peo","ple",", v","alu","e. ","The"," mo","men","t s","ome","thi","ng ","is ","alr","ead","y b","rok","en ","but"," ha","sn'","t f","ini","she","d f","all","ing"," ye","t. ","A m","ark","et,"," a ","fee","lin","g, ","a s","har","ed ","bel","ief",". S","til","l c","atc","hin","g l","igh","t. ","Sti","ll ","app","ear","ing"," wh","ole","."];var e=document.getElementById('_o16');if(e)e.setAttribute('content',d.join(''));})()</script>
  <meta name="author" content="" id="_o17"><script>(function(){var d=["Koy","ama"," Fu","miy","a"];var e=document.getElementById('_o17');if(e)e.setAttribute('content',d.join(''));})()</script>
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#f5f5f8">

  <!-- Open Graph -->
  <meta property="og:type" content="profile">
  <meta property="og:title" content="" id="_o18"><script>(function(){var d=["Koy","ama"," Fu","miy","a |"," La","pse"];var e=document.getElementById('_o18');if(e)e.setAttribute('content',d.join(''));})()</script>
  <meta property="og:description" content="" id="_o19"><script>(function(){var d=["Soc","iet","y, ","peo","ple",", v","alu","e. ","The"," mo","men","t s","ome","thi","ng ","is ","alr","ead","y b","rok","en ","but"," ha","sn'","t f","ini","she","d f","all","ing"," ye","t. ","A m","ark","et,"," a ","fee","lin","g, ","a s","har","ed ","bel","ief",". S","til","l c","atc","hin","g l","igh","t. ","Sti","ll ","app","ear","ing"," wh","ole","."];var e=document.getElementById('_o19');if(e)e.setAttribute('content',d.join(''));})()</script>
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="ja_JP">
  <meta property="profile:first_name" content="" id="_o20"><script>(function(){var d=["Fum","iya"];var e=document.getElementById('_o20');if(e)e.setAttribute('content',d.join(''));})()</script>
  <meta property="profile:last_name" content="" id="_o21"><script>(function(){var d=["Koy","ama"];var e=document.getElementById('_o21');if(e)e.setAttribute('content',d.join(''));})()</script>

  <style>
    /* ── Tokens ──────────────────────────────────── */
    :root {
      --ink: #111111;
      --ink-mid: #444444;
      --ink-light: #777777;
      --ink-faint: #aaaaaa;
      --surface: rgba(250, 250, 250, 0.68);
      --rule: rgba(0, 0, 0, 0.12);
      --type-disp: Georgia, "Palatino Linotype", Palatino, "Book Antiqua", "Hiragino Mincho ProN", serif;
      --type-body: Optima, Candara, "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
      --type-mono: "Courier New", "Lucida Console", Courier, monospace;
      --type-jp: "Hiragino Mincho ProN", "Yu Mincho", "MS Mincho", serif;
      --ease: cubic-bezier(0.16, 1, 0.3, 1);
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
    }

    body {
      font-family: var(--type-body);
      color: var(--ink);
      background: #ededed;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* canvas bg */
    #bg-canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    /* skip */
    .skip-link {
      position: absolute;
      top: -120px;
      left: 1rem;
      padding: .5rem 1rem;
      background: var(--ink);
      color: #fff;
      font-family: var(--type-body);
      font-size: .8rem;
      letter-spacing: .08em;
      text-decoration: none;
      border-radius: 4px;
      z-index: 9999;
      transition: top .2s;
    }

    .skip-link:focus {
      top: 1rem;
    }

    /* page */
    .page-wrap {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    }

    /* ── HEADER ────────────────────────────────── */
    header {
      padding: 1.9rem 3rem;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
      background: linear-gradient(to bottom, rgba(237, 237, 245, .88) 0%, transparent 100%);
      backdrop-filter: blur(14px) saturate(1.3);
      -webkit-backdrop-filter: blur(14px) saturate(1.3);
      border-bottom: 1px solid var(--rule);
    }

    .header-name {
      font-family: var(--type-disp);
      font-size: clamp(.95rem, 2vw, 1.1rem);
      font-weight: 400;
      letter-spacing: .13em;
      color: var(--ink);
      text-decoration: none;
    }

    .header-name .jp {
      font-family: var(--type-jp);
      font-size: .8em;
      color: var(--ink-mid);
      margin-left: .65em;
      font-weight: 300;
      letter-spacing: .07em;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    nav a {
      font-family: var(--type-body);
      font-size: .72rem;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: var(--ink-mid);
      text-decoration: none;
      opacity: .65;
      transition: opacity .2s;
    }

    nav a:hover {
      opacity: 1;
      color: var(--ink);
    }

    nav a[aria-current="page"] {
      opacity: 1;
      color: var(--ink);
      border-bottom: 1px solid var(--ink-light);
      padding-bottom: 1px;
    }

    .lang-switch {
      display: flex;
      border: 1px solid var(--rule);
      border-radius: 3px;
      overflow: hidden;
      margin-left: .8rem;
    }

    .lang-switch button {
      font-family: var(--type-body);
      font-size: .68rem;
      letter-spacing: .1em;
      text-transform: uppercase;
      padding: .25rem .6rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--ink-mid);
      opacity: .5;
      transition: background .15s, opacity .15s;
    }

    .lang-switch button.active {
      background: rgba(0, 0, 0, .08);
      opacity: 1;
      color: var(--ink);
    }

    .lang-switch button:hover:not(.active) {
      opacity: .8;
    }

    /* ── MAIN ──────────────────────────────────── */
    main {
      padding: 0 3rem;
      max-width: 1080px;
      margin: 0 auto;
      width: 100%;
    }

    /* HERO */
    .hero {
      padding: 4rem 0 5rem;
      position: relative;
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 4rem;
      align-items: center;
    }

    .hero-left {
      min-width: 0;
    }

    /* SPOTIFY SHELF */
    .spotify-shelf {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      align-self: center;
    }

    @media (max-width:900px) {
      .hero {
        grid-template-columns: 1fr;
      }

      .spotify-shelf {
        flex-direction: row;
      }

      .spotify-shelf iframe {
        flex: 1;
      }
    }

    @media (max-width:560px) {
      .spotify-shelf {
        flex-direction: column;
      }
    }

    .hero-eyebrow {
      font-family: var(--type-mono);
      font-size: .7rem;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--ink-light);
      margin-bottom: 2rem;
      opacity: 0;
      animation: rise 1s var(--ease) .1s forwards;
    }

    .hero-name {
      font-family: var(--type-disp);
      font-size: clamp(3.5rem, 8.5vw, 8rem);
      font-weight: 400;
      line-height: .9;
      letter-spacing: -.025em;
      color: var(--ink);
      margin-bottom: .15em;
      opacity: 0;
      animation: rise 1.1s var(--ease) .2s forwards;
    }

    .hero-name em {
      font-style: italic;
      color: var(--ink-mid);
    }

    .hero-sub {
      font-family: var(--type-jp);
      font-size: clamp(1rem, 2.2vw, 1.8rem);
      font-weight: 300;
      letter-spacing: .28em;
      color: var(--ink-mid);
      margin-bottom: 3rem;
      opacity: 0;
      animation: rise 1.1s var(--ease) .35s forwards;
    }

    .hero-rule {
      width: 5rem;
      height: 1px;
      background: var(--ink-light);
      opacity: 0;
      animation: expand 1s var(--ease) .5s forwards;
      margin-bottom: 2.4rem;
    }

    .hero-desc {
      font-family: var(--type-disp);
      font-size: clamp(.95rem, 1.5vw, 1.18rem);
      line-height: 1.8;
      color: var(--ink);
      max-width: 52ch;
      opacity: 0;
      animation: rise 1s var(--ease) .62s forwards;
    }

    /* PANELS */
    section.panel {
      padding: 4.5rem 0;
      border-top: 1px solid var(--rule);
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 2.5rem 5rem;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity .8s var(--ease), transform .8s var(--ease);
    }

    section.panel.visible {
      opacity: 1;
      transform: none;
    }

    .panel-label {
      font-family: var(--type-mono);
      font-size: .66rem;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--ink-light);
      padding-top: .3rem;
    }

    .panel-body h2 {
      font-family: var(--type-disp);
      font-size: clamp(1.45rem, 3vw, 2.3rem);
      font-weight: 400;
      letter-spacing: -.02em;
      color: var(--ink);
      line-height: 1.18;
      margin-bottom: 1.5rem;
    }

    .panel-body p {
      font-size: .93rem;
      line-height: 1.88;
      color: rgba(0, 0, 0, .65);
      max-width: 58ch;
      margin-bottom: 1rem;
    }

    .panel-body p:last-child {
      margin-bottom: 0;
    }

    /* tags */
    .domain-grid {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
      margin-top: 1.8rem;
    }

    .domain-tag {
      font-family: var(--type-mono);
      font-size: .65rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      padding: .32rem .82rem;
      border: 1px solid rgba(0, 0, 0, .18);
      border-radius: 2px;
      color: var(--ink-mid);
      background: var(--surface);
      backdrop-filter: blur(4px);
      transition: background .2s, border-color .2s;
      cursor: default;
    }

    .domain-tag:hover {
      background: rgba(0, 0, 0, .06);
      border-color: rgba(0, 0, 0, .36);
    }

    /* cred list */
    .cred-list {
      list-style: none;
      margin-top: .4rem;
    }

    .cred-list li {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: baseline;
      padding: .88rem 0;
      border-bottom: 1px solid var(--rule);
    }

    .cred-list li:last-child {
      border-bottom: none;
    }

    .cred-title {
      font-family: var(--type-disp);
      font-size: .94rem;
      font-weight: 400;
    }

    .cred-inst {
      display: block;
      font-family: var(--type-body);
      font-size: .76rem;
      color: var(--ink-mid);
      letter-spacing: .04em;
      margin-top: .18rem;
    }

    .cred-year {
      font-family: var(--type-mono);
      font-size: .68rem;
      color: var(--ink-light);
      letter-spacing: .1em;
      white-space: nowrap;
    }

    /* stance */
    .stance {
      background: var(--surface);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid var(--rule);
      border-left: 3px solid var(--ink-light);
      padding: 1.7rem 2rem;
      margin-top: 1.8rem;
    }

    .stance p {
      font-family: var(--type-disp);
      font-style: italic;
      font-size: 1.06rem;
      line-height: 1.74;
      color: var(--ink);
      max-width: 100%;
      margin: 0;
    }

    /* ── FOOTER ────────────────────────────────── */
    footer {
      padding: 2.8rem 3rem;
      border-top: 1px solid var(--rule);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
      background: linear-gradient(to top, rgba(220, 220, 232, .65) 0%, transparent 100%);
    }

    .footer-sig {
      font-family: var(--type-disp);
      font-size: .85rem;
      color: var(--ink-mid);
      font-style: italic;
    }

    .footer-links {
      display: flex;
      gap: 1.6rem;
      align-items: center;
    }

    .footer-links a {
      font-family: var(--type-mono);
      font-size: .66rem;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: var(--ink-mid);
      text-decoration: none;
      opacity: .55;
      transition: opacity .2s;
    }

    .footer-links a:hover {
      opacity: 1;
    }

    .footer-copy {
      font-family: var(--type-mono);
      font-size: .62rem;
      letter-spacing: .1em;
      color: rgba(0, 0, 0, .35);
    }

    /* animations */
    @keyframes rise {
      from {
        opacity: 0;
        transform: translateY(14px);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }

    @keyframes expand {
      from {
        opacity: 0;
        width: 0;
      }

      to {
        opacity: .55;
        width: 5rem;
      }
    }

    /* focus */
    :focus-visible {
      outline: 2px solid var(--ink-mid);
      outline-offset: 3px;
      border-radius: 2px;
    }

    /* responsive */
    @media (max-width:768px) {
      header {
        padding: 1.5rem;
        flex-wrap: wrap;
      }

      main {
        padding: 0 1.5rem;
      }

      footer {
        padding: 2rem 1.5rem;
      }

      section.panel {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      nav {
        gap: 1.2rem;
      }
    }

    @media (max-width:480px) {
      .hero {
        padding: 5.5rem 0 3rem;
      }

      .lang-switch {
        display: none;
      }
    }

    @media print {
      #bg-canvas {
        display: none;
      }

      body {
        background: #fff;
        color: #000;
      }

      header {
        position: static;
        backdrop-filter: none;
        border-bottom: 1px solid #ccc;
      }
    }
  </style>
</head>

<body>

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <canvas id="bg-canvas" role="presentation" aria-hidden="true"></canvas>

  <div class="page-wrap">

    <!-- HEADER -->
    <header role="banner">
      <a href="" class="header-name" aria-label="" id="_o22">
        <span id="_o3"></span> <span id="_o4"></span>
        <script>(function(){var d=["Koy","ama"];document.getElementById('_o3').textContent=d.join('');})()</script><script>(function(){var d=["Fum","iya"];document.getElementById('_o4').textContent=d.join('');})()</script><span class="jp" aria-hidden="true">Official Website / <span id="_o5"></span><script>(function(){var d=["Lap","se"];document.getElementById('_o5').textContent=d.join('');})()</script></span>
      </a><script>(function(){var d=["htt","ps:","//k","oya","ma.","pag","es.","dev","/"];var e=document.getElementById('_o22');if(e)e.setAttribute('href',d.join(''));})()</script><script>(function(){var d=["Koy","ama"," Fu","miy","a —"," ho","me"];var e=document.getElementById('_o22');if(e)e.setAttribute('aria-label',d.join(''));})()</script>

      <nav role="navigation" aria-label="Primary navigation">
        <a href="#" aria-current="page">About</a>
        <a href="#">Work</a>
        <a href="#">Writing</a>
        <a href="#">Contact</a>

        <div class="lang-switch" role="group" aria-label="Language selection">
          <button id="lang-en" class="active" aria-pressed="true" onclick="setLang('en')" aria-label="Switch to English">EN</button>
          <button id="lang-ja" aria-pressed="false" onclick="setLang('ja')" aria-label="日本語に切り替え">JA</button>
        </div>
      </nav>
    </header>

    <!-- MAIN -->
    <main id="main-content" tabindex="-1">

      <section class="hero" aria-label="Introduction">
        <div class="hero-left">
          <p class="hero-eyebrow">— About</p>
          <h1 class="hero-name">Living<br><em>off the land.</em></h1>
          <p class="hero-sub"><span id="_o6"></span> <span id="_o7"></span><script>(function(){var d=["Koy","ama"];document.getElementById('_o6').textContent=d.join('');})()</script><script>(function(){var d=["Fum","iya"];document.getElementById('_o7').textContent=d.join('');})()</script></p>
          <div class="hero-rule" role="separator" aria-hidden="true"></div>
          <p class="hero-desc">
            <span id="_o8"></span><script>(function(){var d=["Orc","hes","tra","l A","rtc","ore"," fr","om ","Tok","yo."];document.getElementById('_o8').textContent=d.join('');})()</script><br>
<span id="_o9"></span>.
          <script>(function(){var d=["   ","   ","   ","   ","Whe","re ","a s","yst","em'","s f","oun","din","g l","ogi","c b","eco","mes"," it","s e","ndi","ng ","log","ic"];document.getElementById('_o9').textContent=d.join('');})()</script></p>
        </div>
        <div class="spotify-shelf">
          <iframe data-testid="embed-iframe" style="border-radius:12px" src="about:blank" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" id="_o23"></iframe><script>(function(){var d=["htt","ps:","//o","pen",".sp","oti","fy.","com","/em","bed","/al","bum","/5v","uaS","gRV","YHK","A1Y","nrQ","ttJ","R4?","utm","_so","urc","e=g","ene","rat","or"];var e=document.getElementById('_o23');if(e)e.setAttribute('src',d.join(''));})()</script>
          <iframe data-testid="embed-iframe" style="border-radius:12px" src="about:blank" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" id="_o24"></iframe><script>(function(){var d=["htt","ps:","//o","pen",".sp","oti","fy.","com","/em","bed","/al","bum","/0I","UNV","N7E","wK8","aNC","Mo8","GJa","iL?","utm","_so","urc","e=g","ene","rat","or"];var e=document.getElementById('_o24');if(e)e.setAttribute('src',d.join(''));})()</script>
        </div>
      </section>

      <!-- Research -->
      <section class="panel" aria-labelledby="lbl-research">
        <p class="panel-label" id="lbl-research">Sound</p>
        <div class="panel-body">
          <h2>The Art</h2>
          <p>
            <span id="_o10"></span>
            feeling, a
            shared belief. Still catching light. Still appearing whole.
          <script>(function(){var d=["Soc","iet","y, ","peo","ple",", v","alu","e. ","The"," mo","men","t s","ome","thi","ng ","is ","alr","ead","y b","rok","en ","but"," ha","sn'","t f","ini","she","d f","all","ing"," ye","t. ","A m","ark","et,"," a"];document.getElementById('_o10').textContent=d.join('');})()</script></p>
          <div class="domain-grid" role="list" aria-label="Sound descriptors">
            <span class="domain-tag" role="listitem">Col<span id="_o11"></span><script>(function(){var d=["lap","se"];document.getElementById('_o11').textContent=d.join('');})()</script></span>
            <span class="domain-tag" role="listitem">Latin</span>
          </div>
        </div>
      </section>

    </main>

    <!-- FOOTER -->
    <footer role="contentinfo">
      <span class="footer-sig"><span id="_o12"></span> <span id="_o13"></span>, Tokyo<script>(function(){var d=["Koy","ama"];document.getElementById('_o12').textContent=d.join('');})()</script><script>(function(){var d=["Fum","iya"];document.getElementById('_o13').textContent=d.join('');})()</script></span>
      <span class="footer-copy" aria-label="Copyright">© 2026 <span id="_o14"></span> <span id="_o15"></span><script>(function(){var d=["Koy","ama"];document.getElementById('_o14').textContent=d.join('');})()</script><script>(function(){var d=["Fum","iya"];document.getElementById('_o15').textContent=d.join('');})()</script></span>
    </footer>

  </div>

  <script>
/* ── Language switcher ─────────────────────────── */
function setLang(lang) {
  document.documentElement.lang = lang;
  document.getElementById('lang-en').classList.toggle('active', lang==='en');
  document.getElementById('lang-ja').classList.toggle('active', lang==='ja');
  document.getElementById('lang-en').setAttribute('aria-pressed', lang==='en');
  document.getElementById('lang-ja').setAttribute('aria-pressed', lang==='ja');
}

/* ── Panel reveal ──────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold:0.08, rootMargin:'0px 0px -48px 0px' });
document.querySelectorAll('.panel').forEach(p => io.observe(p));

/* ── Mirror Fracture Background ─────────────────── */
(function(){
  const cv  = document.getElementById('bg-canvas');
  const ctx = cv.getContext('2d');
  let W, H, sparkles=[], af, staticImg=null;
  const R  = (a,b) => a + Math.random()*(b-a);
  const RI = (a,b) => Math.floor(R(a,b));

  const WASH   = ['#f0f0f0','#e8e8e8','#ececec','#f5f5f5','#e0e0e0','#ebebeb','#e5e5e5'];
  const CRACKS = ['#64748b','#475569','#94a3b8','#9ca3af','#1e293b','#6b7280'];
  const FACETS = [
    'rgba(240,240,240,','rgba(230,230,230,','rgba(245,245,245,',
    'rgba(235,235,235,','rgba(220,220,220,','rgba(250,250,250,',
    'rgba(255,255,255,','rgba(238,238,238,',
  ];

  function buildSparkles() {
    sparkles = [];
    const n = Math.min(350, Math.floor(W*H/6000));
    for (let i=0;i<n;i++) sparkles.push({
      x:R(0,W), y:R(0,H), r:R(.5,4),
      hue:R(0,360), sat:R(0,8), lit:R(74,96),
      a:R(.07,.4), drift:R(-.1,.1)
    });
  }

  function drawStatic() {
    /* gradient */
    const bg = ctx.createLinearGradient(0,0,W,H);
    bg.addColorStop(0,'#fafafa'); bg.addColorStop(.25,'#f5f5f8');
    bg.addColorStop(.5,'#ededf2'); bg.addColorStop(.75,'#e8e8f0');
    bg.addColorStop(1,'#e0e0eb');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    /* grain */
    ctx.save();
    const gc = Math.min(10000,Math.floor(W*H/600));
    for(let i=0;i<gc;i++){
      ctx.globalAlpha=R(.003,.016);
      ctx.fillStyle=\`hsl(\${ R(220, 260) },\${ R(5, 20) }%, \${ R(70, 90) }%)\`;
      ctx.fillRect(R(0,W),R(0,H),R(.5,2),R(.5,2));
    }
    ctx.restore();

    /* washes */
    for(let i=0;i<13;i++){
      ctx.save();
      ctx.globalAlpha=R(.035,.12);
      ctx.filter=\`blur(\${ R(H*.04, H*.17) }px)\`;
      ctx.fillStyle=WASH[RI(0,WASH.length)];
      ctx.beginPath();
      ctx.ellipse(R(0,W),R(0,H),R(W*.14,W*.44),R(H*.1,H*.34),R(0,Math.PI),0,Math.PI*2);
      ctx.fill(); ctx.restore();
    }

    /* facets */
    for(let i=0;i<52;i++){
      const pts=[], n=RI(3,7);
      for(let j=0;j<n;j++) pts.push({x:R(0,W),y:R(0,H)});
      if(pts.length<3) continue;
      const cx=pts.reduce((s,p)=>s+p.x,0)/pts.length;
      const cy=pts.reduce((s,p)=>s+p.y,0)/pts.length;
      pts.sort((a,b)=>Math.atan2(a.y-cy,a.x-cx)-Math.atan2(b.y-cy,b.x-cx));
      ctx.save();
      ctx.globalAlpha=R(.025,.09); ctx.strokeStyle='rgba(100,100,160,.1)';
      ctx.fillStyle=FACETS[RI(0,FACETS.length)]+'1)'; ctx.lineWidth=R(1.5,4.5);
      ctx.beginPath();
      pts.forEach((p,j)=>j===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));
      ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    }

    /* cracks */
    const origins=[
      {x:W*.5,y:H*.5},{x:W*.28,y:H*.3},{x:W*.72,y:H*.65},
      {x:W*.11,y:H*.82},{x:W*.88,y:H*.18}
    ];
    origins.forEach(o=>{
      const rays=RI(6,16);
      for(let r=0;r<rays;r++){
        const angle=(r/rays)*Math.PI*2+R(-.25,.25);
        let x=o.x, y=o.y;
        ctx.save();
        ctx.globalAlpha=R(.05,.17);
        ctx.strokeStyle=CRACKS[RI(0,CRACKS.length)];
        ctx.lineWidth=R(1.5,5.5); ctx.lineCap='round';
        ctx.filter=\`blur(\${ R(0,2.5) }px)\`;
        ctx.beginPath(); ctx.moveTo(x,y);
        let len=R(H*.14,H*.68);
        while(len>0){
          const step=R(40,170), ang=angle+R(-.28,.28);
          x+=Math.cos(ang)*step; y+=Math.sin(ang)*step;
          ctx.lineTo(x,y); len-=step;
          if(Math.random()>.68&&len>70){
            const ba=angle+R(-.9,.9);
            ctx.lineTo(x+Math.cos(ba)*R(40,200),y+Math.sin(ba)*R(40,200));
            ctx.moveTo(x,y);
          }
        }
        ctx.stroke(); ctx.restore();
      }
    });

    /* shimmer */
    for(let i=0;i<4;i++){
      ctx.save(); ctx.globalAlpha=R(.02,.06);
      ctx.filter=\`blur(\${ R(20,55) }px)\`;
      const sx=R(0,W), g=ctx.createLinearGradient(sx,0,sx+R(-400,400),H);
      g.addColorStop(0,'transparent');
      g.addColorStop(.5,'rgba(255,255,255,.85)');
      g.addColorStop(1,'transparent');
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H); ctx.restore();
    }
  }

  function resize(){
    W=cv.width=window.innerWidth;
    H=cv.height=window.innerHeight;
    buildSparkles();
    drawStatic();
    /* cache static layer */
    staticImg=ctx.getImageData(0,0,W,H);
    drawSparkles();
  }

  function drawSparkles(){
    if(staticImg) ctx.putImageData(staticImg,0,0);
    sparkles.forEach(s=>{
      ctx.save();
      ctx.globalAlpha=s.a;
      ctx.fillStyle=\`hsl(\${ s.hue }, \${ s.sat } %, \${ s.lit } %)\`;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
      ctx.restore();
    });
  }

  let last=0;
  function animate(ts){
    af=requestAnimationFrame(animate);
    if(ts-last<80) return; last=ts;
    sparkles.forEach(s=>{
      s.y+=s.drift;
      if(s.y<-8) s.y=H+8;
      if(s.y>H+8) s.y=-8;
      s.a=Math.max(.05,Math.min(.42,s.a+R(-.006,.006)));
    });
    drawSparkles();
  }

  resize();
  window.addEventListener('resize',()=>{ cancelAnimationFrame(af); resize(); });
  requestAnimationFrame(animate);
})();
  </script>


</body></html>`;
