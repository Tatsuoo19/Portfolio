// =========================================================
// Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// Nav: border appears once page is scrolled
// =========================================================
const siteNav = document.getElementById('site-nav');

function updateNavBorder() {
  if (window.scrollY > 8) {
    siteNav.classList.add('scrolled');
  } else {
    siteNav.classList.remove('scrolled');
  }
}
updateNavBorder();
window.addEventListener('scroll', updateNavBorder, { passive: true });

// =========================================================
// Nav: highlight the link for the section currently in view
// =========================================================
const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks)
  .map((link) => document.getElementById(link.dataset.nav))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`.nav-links a[data-nav="${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));

// =========================================================
// Scroll reveal animation
// =========================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// =========================================================
// Back to top button
// =========================================================
const backToTop = document.getElementById('back-to-top');

function toggleBackToTop() {
  if (window.scrollY > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}
toggleBackToTop();
window.addEventListener('scroll', toggleBackToTop, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});