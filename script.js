// ===== Reveal on scroll =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });
reveals.forEach((el) => observer.observe(el));

// ===== Header background on scroll (opcional, leve reforço visual) =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.borderBottomColor = 'rgba(255,90,31,0.4)';
  } else {
    header.style.borderBottomColor = '';
  }
});
