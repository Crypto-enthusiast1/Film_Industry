import { initMobileMenu, initLanguageSelector, initSmoothScrolling, initBackToTop } from './scripts/navigation.js';
import { initModal } from './scripts/modal.js';
import { initForms } from './scripts/forms.js';
import { initCarousel, loadProjects, startCarouselAutoplay } from './scripts/carousel.js';
import { loadProjectsFromStorage, toggleAdminPanel } from './scripts/admin.js';
import { debounce } from './scripts/utils.js';

// Initialize Feather Icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
   feather.replace();
   initializeComponents();
   loadProjects();
   // startCarouselAutoplay();
});

// Initialize all components
function initializeComponents() {
   initMobileMenu();
   initLanguageSelector();
   initSmoothScrolling();
   initBackToTop();
   initForms();
   initModal();
   initCarousel();

   // Admin panel shortcut (Ctrl+Alt+A)
   document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
         toggleAdminPanel();
      }
   });
}

// Load projects from storage on startup
loadProjectsFromStorage();

// Header scroll effect
window.addEventListener('scroll', function () {
   const header = document.querySelector('header');
   if (window.scrollY > 100) {
      header.classList.add('bg-opacity-95');
   } else {
      header.classList.remove('bg-opacity-95');
   }
});

// Intersection Observer for animations
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animate-fade-in-up');
      }
   });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
   const animateElements = document.querySelectorAll('.step-number, h2, h3, .benefit-card, .sponsor-package');
   animateElements.forEach(el => observer.observe(el));
});

// Performance optimization: Debounce scroll events
const debouncedScrollHandler = debounce(function () {
   // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
function preloadResources() {
   // Preload feather icons
   if (typeof feather !== 'undefined') {
      feather.replace();
   }
}

// Call preload when page loads
window.addEventListener('load', preloadResources);