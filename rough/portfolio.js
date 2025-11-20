// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Close mobile menu on link click (optional)
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Counter animation
const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (count < target) {
      counter.innerText = count + increment > target ? target : count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Contact form submit example (just prevent default and alert)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you shortly.');
  contactForm.reset();
});