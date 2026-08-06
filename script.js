// =========================
// Rin Kairo V5 - Animations
// =========================

// Fade-in animation when scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.section, .project, .card, .price-card, .contact-card').forEach(el => {
  el.classList.add('fade');
  observer.observe(el);
});

// Floating website mockups
const mockups = document.querySelectorAll('.mockup');

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  mockups.forEach((card, index) => {
    const speed = (index + 1) * 8;
    card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// Create glowing cursor
const glow = document.createElement('div');
glow.style.position = 'fixed';
glow.style.width = '250px';
glow.style.height = '250px';
glow.style.borderRadius = '50%';
glow.style.pointerEvents = 'none';
glow.style.background = 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, rgba(96,165,250,0.05) 40%, transparent 70%)';
glow.style.transform = 'translate(-50%, -50%)';
glow.style.zIndex = '-1';
glow.style.transition = 'left 0.08s linear, top 0.08s linear';

document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Parallax effect on hero section
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (hero) {
    hero.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});

// Button hover pulse
document.querySelectorAll('.btn, .email-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 25px rgba(96,165,250,0.35)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '';
  });
});

// Navbar shadow on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (!nav) return;

  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Smooth reveal delay
document.querySelectorAll('.project, .card, .price-card').forEach((el, index) => {
  el.style.transitionDelay = `${index * 80}ms`;
});