import { initMobileMenu, initLanguageSelector, initSmoothScrolling, initBackToTop } from './scripts/navigation.js';
import { initModal } from './scripts/modal.js';
import { initCarousel, loadProjects, startCarouselAutoplay } from './scripts/carousel.js';
import { loadProjectsFromStorage, toggleAdminPanel } from './scripts/admin.js';
import { debounce } from './scripts/utils.js';
import { initForms } from './scripts/forms-secure.js';
import { showNotification } from './scripts/utils.js';
import { closeModal } from './scripts/modal.js';
import { initEnvFields } from './scripts/env-init.js';

// Initialize Feather Icons when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
   feather.replace();
   // initEnvFields();
   initializeComponents();
   loadProjects();
   startCarouselAutoplay();
});

function initializeComponents() {
   initMobileMenu();
   initLanguageSelector();
   initSmoothScrolling();
   initBackToTop();
   initForms();
   initModal();
   initCarousel();

   document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
         toggleAdminPanel();
      }
   });

   // Web3Forms initialization
   if (typeof Web3Forms !== 'undefined') {
      Web3Forms({
         formSelector: '#sponsor-form, #contact-form, #project-application-form',
         access_key: '8a1437ed-efe7-4b6a-862c-3c2aeaea9849',
         redirect: false,          // отключаем редирект
         onSuccess: ({ form }) => {
            showNotification('Заявка успешно отправлена!', 'success');
            form.reset();
            if (form.id === 'project-application-form') {
               closeModal();
            }
         },
         onError: () => {
            showNotification('Ошибка отправки формы', 'error');
         }
      });
   }
}

loadProjectsFromStorage();

window.addEventListener('scroll', () => {
   const header = document.querySelector('header');
   header.classList.toggle('bg-opacity-95', window.scrollY > 100);
});

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animate-fade-in-up');
      }
   });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.step-number, h2, h3, .benefit-card, .sponsor-package')
      .forEach(el => observer.observe(el));
});

const debouncedScrollHandler = debounce(() => { }, 16);
window.addEventListener('scroll', debouncedScrollHandler);

function preloadResources() {
   if (typeof feather !== 'undefined') feather.replace();
}
window.addEventListener('load', preloadResources);

document.querySelectorAll('.sponsor-btn').forEach(btn => {
   btn.addEventListener('click', () => {
      const target = document.getElementById('contactPartners');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
   });
});
