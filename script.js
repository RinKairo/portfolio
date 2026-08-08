// =========================
// Rin Kairo V8 — Final Polish
// =========================

// Scroll progress bar
const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
});

// Reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .project-card, .service-card, .process-step, .pricing-card, .faq-card, .consultation-card').forEach(el => {
  el.classList.add('fade');
  observer.observe(el);
});

// Floating mockups
const mockups = document.querySelectorAll('.mockup');

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  mockups.forEach((card, index) => {
    const speed = (index + 1) * 6;
    card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// Navbar shadow
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,.25)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Button glow
document.querySelectorAll('.btn, .pricing-btn, .email-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 24px rgba(96,165,250,.35)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '';
  });
});