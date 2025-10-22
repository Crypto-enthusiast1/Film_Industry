import { initMobileMenu, initSmoothScrolling, initBackToTop } from './scripts/navigation.js';
import { initModal, closeModal } from './scripts/modal.js';
import { initCarousel, loadProjects, startCarouselAutoplay } from './scripts/carousel.js';
import { debounce } from './scripts/utils.js';
import { initForms } from './scripts/forms-secure.js';
import { showNotification } from './scripts/utils.js';
import { openCertificateModal, closeCertificateModal } from './scripts/certificate-modal.js';
import { disableGoogleTranslateOverlay } from './scripts/disableGoogle.js';


document.addEventListener('DOMContentLoaded', async () => {
   await loadProjects();
   await initModal();
   feather.replace();
   initializeComponents();
   loadProjects();
   startCarouselAutoplay();
   disableGoogleTranslateOverlay();
   initForms();
});

function initializeComponents() {
   initMobileMenu();
   initSmoothScrolling();
   initBackToTop();
   initModal();
   initCarousel();

   if (typeof Web3Forms !== 'undefined') {
      Web3Forms({
         formSelector: '#sponsor-form, #contact-form, #project-application-form',
         access_key: process.env.WEB3FORMS_ACCESS_KEY,
         redirect: false,
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


window.addEventListener('scroll', () => {
   const header = document.querySelector('header');
   header.classList.toggle('bg-opacity-95', window.scrollY > 100);
});

const observer = new IntersectionObserver((entries, obs) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const el = entry.target;
         el.classList.remove('opacity-0', 'translate-y-5');
         el.classList.add('animate-fade-in-up');
         obs.unobserve(el);
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


window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;