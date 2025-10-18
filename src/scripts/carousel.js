import { loadProjectsData } from './firebase-data.js';

let ProjectsData = [];
let currentSlide = 0;
let carouselTimer = null;
let isCarouselPaused = false;

export function getVisibleSlides() {
   const w = window.innerWidth;
   if (w >= 1200) return 4;
   if (w >= 900) return 3;
   if (w >= 600) return 2;
   return 1;
}

function calculateContainerWidth() {
   const visible = getVisibleSlides();
   const cardWidth = 280;
   const gap = 24;
   return (visible * cardWidth) + ((visible - 1) * gap);
}

export async function loadProjects() {
   if (ProjectsData.length === 0) {
      ProjectsData = await loadProjectsData();
   }

   const carousel = document.getElementById('projects-carousel');
   const indicators = document.getElementById('carousel-indicators');
   if (!carousel || !indicators) return;

   carousel.innerHTML = '';
   indicators.innerHTML = '';

   carousel.style.maxWidth = `${calculateContainerWidth()}px`;

   ProjectsData.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      const mediaHTML = project.video
         ? `<div class="video-container">
           <video class="project-video" autoplay muted loop playsinline preload="metadata">
             <source src="${project.video}" type="video/mp4">
           </video>
           <div class="video-overlay"><i data-feather="play-circle" class="play-icon"></i></div>
         </div>`
         : `<div class="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center h-56 rounded-t-lg">
           <i data-feather="image" class="w-20 h-20 text-gray-500"></i>
         </div>`;

      card.innerHTML = `
      ${mediaHTML}
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-black">${project.title}</h3>
        <p class="text-black mb-4">${project.genre} | Shooting in ${project.location}</p>
        <button onclick="openModal('${project.id}')" class="project-btn">Learn More</button>
      </div>`;

      carousel.appendChild(card);

      if (project.video) {
         const vid = card.querySelector('.project-video');
         const ov = card.querySelector('.video-overlay');
         card.addEventListener('mouseenter', () => { vid.play(); ov.style.opacity = '0'; });
         card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; ov.style.opacity = '1'; });
         ov.addEventListener('click', () => openModal(project.id));
      }
   });

   const visible = getVisibleSlides();
   const total = Math.max(1, ProjectsData.length - visible + 1);
   for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
      btn.onclick = () => goToSlide(i);
      indicators.appendChild(btn);
   }

   updateCarouselPosition();
   if (typeof feather !== 'undefined') feather.replace();
}

export function updateCarouselPosition() {
   const carousel = document.getElementById('projects-carousel');
   if (!carousel) return;
   const translate = -(currentSlide * (280 + 24));
   carousel.style.transform = `translateX(${translate}px)`;

   document.querySelectorAll('.carousel-indicator').forEach((ind, i) => {
      ind.classList.toggle('active', i === currentSlide);
   });
}

export function goToSlide(index) {
   const visible = getVisibleSlides();
   const max = Math.max(0, ProjectsData.length - visible);
   currentSlide = Math.min(Math.max(0, index), max);
   updateCarouselPosition();
}

export function nextSlide() {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, ProjectsData.length - visibleSlides);

   if (currentSlide >= maxSlide) {
      currentSlide = 0;
   } else {
      currentSlide++;
   }

   updateCarouselPosition();
}

export function previousSlide() {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, ProjectsData.length - visibleSlides);

   if (currentSlide <= 0) {
      currentSlide = maxSlide;
   } else {
      currentSlide--;
   }

   updateCarouselPosition();
}

export function startCarouselAutoplay() {
   clearInterval(carouselTimer);
   carouselTimer = setInterval(() => {
      if (!isCarouselPaused) nextSlide();
   }, 5000);
}
export function pauseCarousel() { isCarouselPaused = true; }
export function resumeCarousel() { isCarouselPaused = false; }

export function initCarousel() {
   document.getElementById('carousel-prev')?.addEventListener('click', () => { previousSlide(); pauseCarousel(); });
   document.getElementById('carousel-next')?.addEventListener('click', () => { nextSlide(); pauseCarousel(); });
   const viewport = document.querySelector('.carousel-viewport');
   viewport?.addEventListener('mouseenter', pauseCarousel);
   viewport?.addEventListener('mouseleave', resumeCarousel);

   let startX = 0, swiping = false;
   viewport?.addEventListener('touchstart', e => { startX = e.touches[0].clientX; swiping = true; pauseCarousel(); }, { passive: true });
   viewport?.addEventListener('touchmove', e => {
      if (!swiping) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 10) e.preventDefault();
   }, { passive: false });
   viewport?.addEventListener('touchend', e => {
      if (!swiping) return;
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      swiping = false;
      resumeCarousel();

      if (Math.abs(diff) > 50) {
         diff < 0 ? nextSlide() : previousSlide();
      }
   });

   let resizeTimeout;
   window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
         currentSlide = 0;
         loadProjects();
         initCarousel();
         startCarouselAutoplay();
      }, 250);
   });
}
