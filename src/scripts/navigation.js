import { initGoogleTranslate } from './google-translate.js';

export function initMobileMenu() {
   const mobileMenuBtn = document.getElementById('mobile-menu-btn');
   const mobileMenu = document.querySelector('.mobile-menu');
   const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

   if (!mobileMenuBtn || !mobileMenu) return;

   mobileMenuBtn.addEventListener('click', () => {
      const isActive = mobileMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');

      if (isActive) {
         initGoogleTranslate('google_translate_element_mobile');
      }
   });

   mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
         mobileMenu.classList.remove('active');
         mobileMenuBtn.classList.remove('active');
      });
   });

   document.addEventListener('click', e => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
         mobileMenu.classList.remove('active');
         mobileMenuBtn.classList.remove('active');
      }
   });
}


export function initSmoothScrolling() {
   const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

   navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
         const targetId = this.getAttribute('href');
         const targetSection = document.querySelector(targetId);

         if (targetSection) {
            e.preventDefault();
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;

            window.scrollTo({
               top: targetPosition,
               behavior: 'smooth'
            });
         }
      });
   });
}


export function initBackToTop() {
   const backToTopBtn = document.getElementById('back-to-top');

   if (backToTopBtn) {
      window.addEventListener('scroll', function () {
         if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
         } else {
            backToTopBtn.classList.remove('visible');
         }
      });

      backToTopBtn.addEventListener('click', function (e) {
         e.preventDefault();
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      });
   }
}