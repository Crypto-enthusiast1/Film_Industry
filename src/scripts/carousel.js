// ИСПРАВЛЕННЫЙ JS код для карусели - решение проблемы с количеством карточек

import ProjectsData from './projects_data.js';

// Carousel state
let currentSlide = 0;
let carouselTimer = null;
let isCarouselPaused = false;

// ИСПРАВЛЕНО: Calculate how many slides are visible - более точный расчет
export function getVisibleSlides() {
   const width = window.innerWidth;
   if (width >= 1200) return 4;  // Desktop: 4 slides (ПРОВЕРЕНО)
   if (width >= 900) return 3;   // Tablet: 3 slides
   if (width >= 600) return 2;   // Small tablet: 2 slides
   return 1;                     // Mobile: 1 slide
}

// НОВАЯ ФУНКЦИЯ: точный расчет ширины контейнера для показа нужного количества карточек
function calculateContainerWidth() {
   const visibleSlides = getVisibleSlides();
   const cardWidth = 280; // Фиксированная ширина карточки
   const gap = 24; // Размер gap между карточками

   // Ширина = (количество карточек * ширина карточки) + (промежутки между карточками)
   const totalWidth = (visibleSlides * cardWidth) + ((visibleSlides - 1) * gap);
   return totalWidth;
}

// Load projects into carousel - ИСПРАВЛЕНО
// Load projects into carousel - ОБНОВЛЕНО для видео
export function loadProjects() {
   const carousel = document.getElementById('projects-carousel');
   const indicators = document.getElementById('carousel-indicators');
   if (!carousel || !indicators) return;

   // Очистка
   carousel.innerHTML = '';
   indicators.innerHTML = '';

   // Устанавливаем ширину контейнера
   const containerWidth = calculateContainerWidth();
   carousel.style.maxWidth = `${containerWidth}px`;

   ProjectsData.forEach((project) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';

      // Если есть видео — вставляем видео, иначе картинку
      const mediaHTML = project.video
         ? `
        <div class="video-container">
          <video class="project-video" autoplay muted loop preload="auto" >
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="video-overlay"><i data-feather="play-circle" class="play-icon"></i></div>
        </div>`
         : `
        <div class="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center h-56 rounded-t-lg">
                <i data-feather="image" class="w-20 h-20 text-gray-500"></i>
            </div>`;

      projectCard.innerHTML = `
      ${mediaHTML}
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-black">${project.title}</h3>
        <p class="text-black mb-4">${project.genre} | Shooting in ${project.location}</p>
        <button onclick="openModal('${project.id}')" class="project-btn">Learn More</button>
      </div>
    `;
      carousel.appendChild(projectCard);

      // Обработка видео при hover
      if (project.video) {
         const video = projectCard.querySelector('.project-video');
         const overlay = projectCard.querySelector('.video-overlay');
         projectCard.addEventListener('mouseenter', () => {
            video.play();
            overlay.style.opacity = '0';
         });
         projectCard.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            overlay.style.opacity = '1';
         });
         overlay.addEventListener('click', () => openModal(project.id));
      }
   });

   // Создание индикаторов
   const visibleSlides = getVisibleSlides();
   const totalIndicators = Math.max(1, ProjectsData.length - visibleSlides + 1);
   for (let i = 0; i < totalIndicators; i++) {
      const indicator = document.createElement('button');
      indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
      indicator.onclick = () => goToSlide(i);
      indicators.appendChild(indicator);
   }

   updateCarouselPosition();
   feather.replace();
}


// ИСПРАВЛЕНО: более точный расчет позиции карусели
export function updateCarouselPosition() {
   const carousel = document.getElementById('projects-carousel');
   if (!carousel) return;

   const card = carousel.querySelector('.project-card');
   if (!card) return;

   // ИСПРАВЛЕНО: используем фиксированные значения для более точного расчета
   const cardWidth = 280; // Фиксированная ширина из CSS
   const gap = 24; // Gap между карточками из CSS

   const totalWidth = cardWidth + gap;
   const translateX = -(currentSlide * totalWidth);

   carousel.style.transform = `translateX(${translateX}px)`;

   // Обновляем индикаторы
   const indicators = document.querySelectorAll('.carousel-indicator');
   indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === currentSlide);
   });
}

export function goToSlide(index) {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, ProjectsData.length - visibleSlides);

   // ограничиваем слайд в пределах допустимого диапазона
   currentSlide = Math.max(0, Math.min(index, maxSlide));

   updateCarouselPosition();
}

// ИСПРАВЛЕНО: используем фиксированные значения
export function nextSlide() {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, ProjectsData.length - visibleSlides);

   if (currentSlide >= maxSlide) {
      currentSlide = 0; // в начало
   } else {
      currentSlide++;
   }

   updateCarouselPosition();
}

// ИСПРАВЛЕНО: используем фиксированные значения
export function previousSlide() {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, ProjectsData.length - visibleSlides);

   if (currentSlide <= 0) {
      currentSlide = maxSlide; // в конец
   } else {
      currentSlide--;
   }

   updateCarouselPosition();
}

export function startCarouselAutoplay() {
   if (carouselTimer) clearInterval(carouselTimer);

   carouselTimer = setInterval(() => {
      if (!isCarouselPaused) {
         nextSlide();
      }
   }, 5000);
}

export function pauseCarousel() {
   isCarouselPaused = true;
}

export function resumeCarousel() {
   isCarouselPaused = false;
}

// ИСПРАВЛЕНО: добавлена функция пересчета при ресайзе
function handleResize() {
   // Пересчитываем ширину контейнера при изменении размера окна
   const carousel = document.getElementById('projects-carousel');
   if (carousel) {
      const containerWidth = calculateContainerWidth();
      carousel.style.maxWidth = `${containerWidth}px`;
   }

   // Сбрасываем позицию карусели
   currentSlide = 0;
   updateCarouselPosition();

   // Пересоздаем индикаторы
   const indicators = document.getElementById('carousel-indicators');
   if (indicators) {
      indicators.innerHTML = '';
      const visibleSlides = getVisibleSlides();
      const totalIndicators = Math.max(1, ProjectsData.length - visibleSlides + 1);

      for (let i = 0; i < totalIndicators; i++) {
         const indicator = document.createElement('button');
         indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
         indicator.onclick = () => goToSlide(i);
         indicators.appendChild(indicator);
      }
   }
}

// Добавьте в initCarousel() поддержку свайпа для мобильных устройств

export function initCarousel() {
   const prevBtn = document.getElementById('carousel-prev');
   const nextBtn = document.getElementById('carousel-next');
   const viewport = document.querySelector('.carousel-viewport');

   // Навигация стрелками
   prevBtn?.addEventListener('click', () => { previousSlide(); pauseCarousel(); });
   nextBtn?.addEventListener('click', () => { nextSlide(); pauseCarousel(); });

   // Пауза/возобновление при hover (desktop)
   viewport?.addEventListener('mouseenter', pauseCarousel);
   viewport?.addEventListener('mouseleave', resumeCarousel);

   // Свайп для touch-устройств
   let startX = 0;
   let isSwiping = false;

   viewport?.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      isSwiping = true;
      pauseCarousel();
   }, { passive: true });

   viewport?.addEventListener('touchmove', e => {
      if (!isSwiping) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 10) e.preventDefault(); // блокируем скролл страницы
   }, { passive: false });

   viewport?.addEventListener('touchend', e => {
      if (!isSwiping) return;
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      isSwiping = false;
      resumeCarousel();

      if (Math.abs(diff) > 50) {
         diff < 0 ? nextSlide() : previousSlide();
      }
   });

   // Пересчёт при ресайзе
   let resizeTimeout;
   window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
   });
}

