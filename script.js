/* =============================================
   X PERFORMANCE DIGITAL — SCRIPT
   ============================================= */

/* ─── INTRO OVERLAY ─── */
const introOverlay    = document.getElementById('intro-overlay');
const introLogoWrap   = document.getElementById('intro-logo-wrap');
const introFillPaths    = document.querySelectorAll('.intro-fill');
const introShimmerPaths = document.querySelectorAll('.shimmer-path');
const introOutlinePaths = document.querySelectorAll('.outline-ghost');
const navbar          = document.getElementById('navbar');
const wppFloat        = document.querySelector('.wpp-float');
const heroSection     = document.getElementById('hero');

let heroRevealDone     = false;
let userInitiatedScroll = false; // true só quando há interação real (wheel/touch)
let lastScrollY         = 0;
let heroSnapActive      = false;

// Detecta interação real do usuário — exclui restauração automática de scroll do browser
document.addEventListener('wheel',      () => { userInitiatedScroll = true; }, { once: true, passive: true });
document.addEventListener('touchstart', () => { userInitiatedScroll = true; }, { once: true, passive: true });

function revealHero() {
  if (heroRevealDone) return;
  heroRevealDone = true;

  // (scroll lock removido para teste)

  const heroEls = heroSection
    ? heroSection.querySelectorAll('.animate-on-scroll')
    : [];
  // rAF duplo: overlay opacity:0 pintado antes da hero começar a transicionar
  requestAnimationFrame(() => requestAnimationFrame(() => {
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }));
}

// 3 fases ao longo de 80vh de scroll (hero fica sticky atrás da overlay):
// Fase 1 (0 → 30vh):  preenchimento da logo
// Fase 2 (30 → 60vh): logo encolhe
// Fase 3 (60 → 80vh): logo + overlay somem → hero é revelada
// Após 80vh:          hero fica visível em repouso até 180vh (margem antes da Seção 2)
// Scroll reverso:     overlay reaparece corretamente pois não há guard
function updateIntro() {
  const scrollY   = window.scrollY;
  const vh        = window.innerHeight;
  const bufferH   = vh * 0.8;
  const fillEnd   = vh * 0.3;
  const shrinkEnd = vh * 0.6;

  if (scrollY >= bufferH) {
    introOverlay.style.opacity       = '0';
    introOverlay.style.pointerEvents = 'none';
    navbar.style.opacity             = '';
    if (wppFloat) wppFloat.style.opacity = '';
    revealHero();
    return;
  }

  // Fase 1: preenchimento
  const fillT   = Math.min(scrollY / fillEnd, 1);
  // Fase 2: encolhimento (começa após fill completo)
  const shrinkT = scrollY > fillEnd
    ? Math.min((scrollY - fillEnd) / (shrinkEnd - fillEnd), 1)
    : 0;
  // Fase 3: fade out (começa após shrink completo)
  const fadeT   = scrollY > shrinkEnd
    ? (scrollY - shrinkEnd) / (bufferH - shrinkEnd)
    : 0;

  introFillPaths.forEach(p => { p.style.opacity = fillT.toFixed(3); });

  // Contorno e flash somem juntos quando o fill chega em ~70%
  const edgeOpacity = fillT < 0.7 ? 1 : Math.max(0, 1 - (fillT - 0.7) / 0.3);
  introShimmerPaths.forEach(p => { p.style.opacity = edgeOpacity.toFixed(3); });
  introOutlinePaths.forEach(p => { p.style.opacity = edgeOpacity.toFixed(3); });

  const scale = 1 - shrinkT * 0.32;
  introLogoWrap.style.transform    = `scale(${scale.toFixed(3)})`;
  introOverlay.style.opacity       = (1 - fadeT).toFixed(3);
  introOverlay.style.pointerEvents = 'auto';

  const navT = Math.max(0, (fadeT - 0.5) / 0.5);
  navbar.style.opacity = navT.toFixed(3);
  if (wppFloat) wppFloat.style.opacity = navT.toFixed(3);
}

navbar.style.opacity = '0';
if (wppFloat) wppFloat.style.opacity = '0';
updateIntro();

/* ─── NAVBAR SCROLL + SNAP DA SEÇÃO 1 ─── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollDir = scrollY > lastScrollY ? 'down' : 'up';
  lastScrollY = scrollY;

  navbar.classList.toggle('scrolled', scrollY > 40);
  updateIntro();

  // Trava suave: quando o usuário vem de baixo (Section 2→1) e a Seção 1
  // está quase completamente visível, auto-ajusta para enquadrá-la na tela.
  // O snap point é onde a hero deixa de ser sticky (wrapper.height - 100vh).
  if (heroRevealDone && !heroSnapActive && scrollDir === 'up') {
    const wrapper  = document.querySelector('.hero-sticky-wrapper');
    const snapPoint = wrapper
      ? wrapper.offsetHeight - window.innerHeight
      : window.innerHeight * 1.6;
    const snapZone = window.innerHeight * 0.15; // 15vh de zona de snap
    if (scrollY > snapPoint && scrollY < snapPoint + snapZone) {
      heroSnapActive = true;
      if (_lenis) {
        _lenis.scrollTo(snapPoint, { duration: 0.6 });
      } else {
        window.scrollTo({ top: snapPoint, behavior: 'smooth' });
      }
      setTimeout(() => { heroSnapActive = false; }, 800);
    }
  }
}, { passive: true });

/* ─── MOBILE MENU ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  mobileMenu.classList.add('active');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('active');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
});
mobileClose.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link, .mobile-wpp').forEach(el => {
  el.addEventListener('click', closeMenu);
});

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── SCROLL ANIMATIONS ─── */
const animEls = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = parseFloat(el.dataset.animDelay || 0);
    setTimeout(() => el.classList.add('visible'), delay * 1000);
    scrollObserver.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

animEls.forEach(el => {
  // Hero elements are revealed by the overlay — not the observer
  if (heroSection && heroSection.contains(el)) return;
  // Horizontal panel elements are triggered by the panel scroll driver below
  if (el.closest('.hscroll-wrapper')) return;

  // Stagger cards within a grid parent
  const parent = el.parentElement;
  if (parent) {
    const siblings = Array.from(parent.querySelectorAll(':scope > .animate-on-scroll'));
    if (siblings.length > 1) {
      const idx = siblings.indexOf(el);
      el.dataset.animDelay = (idx * 0.08).toFixed(2);
    }
  }
  scrollObserver.observe(el);
});

/* ─── COUNTER ANIMATION ─── */
let countersRan = false;
const statsGrid = document.getElementById('statsGrid');

function runCounters() {
  if (countersRan) return;
  countersRan = true;
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    const tick = now => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  });
}

if (statsGrid) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) runCounters();
  }, { threshold: 0.3 }).observe(statsGrid);
}

/* ─── FORM VALIDATION ─── */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function setError(inputId, errorId, msg) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errorId);
  if (inp) inp.classList.add('invalid');
  if (err) err.textContent = msg;
}
function clearError(inputId, errorId) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errorId);
  if (inp) inp.classList.remove('invalid');
  if (err) err.textContent = '';
}

const fields = [
  { id: 'nome',       errId: 'erroNome',        label: 'Informe seu nome.' },
  { id: 'whatsapp',   errId: 'erroWhatsapp',     label: 'Informe um número com DDD.' },
  { id: 'empresa',    errId: 'erroEmpresa',      label: 'Informe o nome da empresa.' },
  { id: 'faturamento',errId: 'erroFaturamento',  label: 'Selecione a faixa de faturamento.' },
];

fields.forEach(({ id, errId }) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input',  () => clearError(id, errId));
    el.addEventListener('change', () => clearError(id, errId));
  }
});

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;

    const nome = document.getElementById('nome').value.trim();
    if (!nome) { setError('nome', 'erroNome', 'Informe seu nome.'); ok = false; }
    else clearError('nome', 'erroNome');

    const wpp = document.getElementById('whatsapp').value.replace(/\D/g, '');
    if (wpp.length < 10) { setError('whatsapp', 'erroWhatsapp', 'Informe um número válido com DDD.'); ok = false; }
    else clearError('whatsapp', 'erroWhatsapp');

    const empresa = document.getElementById('empresa').value.trim();
    if (!empresa) { setError('empresa', 'erroEmpresa', 'Informe o nome da empresa.'); ok = false; }
    else clearError('empresa', 'erroEmpresa');

    const fat = document.getElementById('faturamento').value;
    if (!fat) { setError('faturamento', 'erroFaturamento', 'Selecione a faixa de faturamento.'); ok = false; }
    else clearError('faturamento', 'erroFaturamento');

    if (!ok) return;

    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simula envio — substituir por fetch() real à sua API
    setTimeout(() => {
      form.style.display = 'none';
      formSuccess.classList.add('show');
    }, 1200);
  });
}

/* ─── HORIZONTAL SCROLL ─── */
const hWrapper = document.querySelector('.hscroll-wrapper');
const hInner   = document.querySelector('.hscroll-inner');
const hPanels  = document.querySelectorAll('.horizontal-panel');

if (hWrapper && hInner && hPanels.length > 0) {
  const panelAnimEls = Array.from(hPanels).map(panel =>
    Array.from(panel.querySelectorAll('.animate-on-scroll'))
  );
  let lastActivePanel = -1;

  function updateHScroll() {
    const rect = hWrapper.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    if (scrollable <= 0) return;
    const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
    const translate = progress * (hPanels.length - 1) * 100;
    // Transform the inner flex container (not the sticky wrapper — would clip)
    hInner.style.transform = `translateX(-${translate}vw)`;

    // Trigger animate-on-scroll when a panel slides into view
    const activePanel = Math.round(progress * (hPanels.length - 1));
    if (activePanel !== lastActivePanel) {
      lastActivePanel = activePanel;
      panelAnimEls[activePanel].forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
      });
    }
  }
  window.addEventListener('scroll', updateHScroll, { passive: true });
  updateHScroll();
}

/* ─── LENIS SMOOTH SCROLL ─── */
let _lenis = null;
if (typeof Lenis !== 'undefined') {
  _lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });
  function lenisRaf(time) {
    _lenis.raf(time);
    requestAnimationFrame(lenisRaf);
  }
  requestAnimationFrame(lenisRaf);
}
