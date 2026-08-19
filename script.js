const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.querySelector('#contact-form');
const feedback = document.querySelector('.form-feedback');
const formFields = [...contactForm.querySelectorAll('input, textarea')];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = '';

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    const firstInvalidField = formFields.find((field) => !field.checkValidity());
    firstInvalidField?.focus();
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  feedback.textContent = `Gracias, ${name}. Hemos recibido tu mensaje y te responderemos pronto.`;
  contactForm.reset();
});

formFields.forEach((field) => {
  field.addEventListener('input', () => {
    feedback.textContent = '';
  });
});
