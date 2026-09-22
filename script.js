const nav = document.querySelector('.nav');
const year = document.querySelector('#year');
const revealItems = document.querySelectorAll('.reveal');

if (year) year.textContent = new Date().getFullYear();

const updateNav = () => nav?.classList.toggle('scrolled', window.scrollY > 24);
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}


const contactConfig = window.YADZ_CONFIG || {};
const emailLink = document.querySelector('#email-link');
const discordLink = document.querySelector('#discord-link');
const whatsappLink = document.querySelector('#whatsapp-link');

if (emailLink && contactConfig.email) {
  emailLink.href = `mailto:${contactConfig.email}`;
  emailLink.firstChild.textContent = contactConfig.email + ' ';
}
if (discordLink && contactConfig.discord) discordLink.href = contactConfig.discord;
if (whatsappLink && contactConfig.whatsapp) whatsappLink.href = contactConfig.whatsapp;
