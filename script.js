// Projects data - Easy to modify
const projectsData = [
   {
      id: 'midnight-heist',
      title: 'The Midnight Heist',
      genre: 'Crime Thriller',
      location: 'Kyiv, Ukraine',
      description: 'A group of skilled thieves plan the perfect heist, but when things go wrong, they must outsmart both the police and a ruthless crime boss to survive the night.',
      image: 'https://via.placeholder.com/300x450/2c3e50/ecf0f1?text=Midnight+Heist',
      director: 'John Doe',
      shootingDates: 'March 15 - May 30, 2025',
      roles: [
         { name: 'Lead Actor (Male, 25-35)', status: 'available' },
         { name: 'Lead Actress (Female, 25-35)', status: 'taken' },
         { name: 'Supporting Role (Any, 40-60)', status: 'available' },
         { name: 'Extras (Any age)', status: 'available' }
      ]
   },
   {
      id: 'summer-89',
      title: 'Summer of \'89',
      genre: 'Historical Drama',
      location: 'Lviv, Ukraine',
      description: 'Set in the final summer before Ukraine\'s independence, this coming-of-age story follows a group of friends navigating love, politics, and personal growth during a time of great change.',
      image: 'https://via.placeholder.com/300x450/34495e/ecf0f1?text=Summer+89',
      director: 'Maria Kovalenko',
      shootingDates: 'June 1 - August 15, 2025',
      roles: [
         { name: 'Young Male Lead (18-25)', status: 'available' },
         { name: 'Young Female Lead (18-25)', status: 'available' },
         { name: 'Older Mentor (50-65)', status: 'taken' },
         { name: 'Extras (Various ages)', status: 'available' }
      ]
   },
   {
      id: 'neon-dreams',
      title: 'Neon Dreams',
      genre: 'Sci-Fi',
      location: 'Odesa, Ukraine',
      description: 'In a dystopian future where dreams can be recorded and sold, a young woman discovers a dangerous secret hidden in her subconscious that could change the world.',
      image: 'https://via.placeholder.com/300x450/27ae60/ecf0f1?text=Neon+Dreams',
      director: 'Alex Petrov',
      shootingDates: 'September 1 - November 30, 2025',
      roles: [
         { name: 'Female Lead (20-30)', status: 'available' },
         { name: 'Male Antagonist (35-45)', status: 'available' },
         { name: 'Tech Specialist (25-40)', status: 'taken' },
         { name: 'Extras (Future citizens)', status: 'available' }
      ]
   },
   {
      id: 'urban-legends',
      title: 'Urban Legends',
      genre: 'Horror',
      location: 'Kharkiv, Ukraine',
      description: 'A paranormal investigation team explores abandoned Soviet-era buildings, uncovering terrifying secrets that should have remained buried.',
      image: 'https://via.placeholder.com/300x450/8e44ad/ecf0f1?text=Urban+Legends',
      director: 'Viktor Shevchenko',
      shootingDates: 'October 15 - December 20, 2025',
      roles: [
         { name: 'Investigation Team Leader (30-40)', status: 'available' },
         { name: 'Paranormal Expert (25-35)', status: 'available' },
         { name: 'Camera Operator (20-30)', status: 'taken' },
         { name: 'Extras (Spirits & Locals)', status: 'available' }
      ]
   },
   {
      id: 'love-revolution',
      title: 'Love & Revolution',
      genre: 'Romance Drama',
      location: 'Prague, Czech Republic',
      description: 'During the Velvet Revolution, two young activists from opposite sides find love amidst the chaos of political change.',
      image: 'https://via.placeholder.com/300x450/e74c3c/ecf0f1?text=Love+Revolution',
      director: 'Elena Novakova',
      shootingDates: 'April 10 - June 25, 2025',
      roles: [
         { name: 'Female Revolutionary (22-28)', status: 'available' },
         { name: 'Male Government Agent (25-32)', status: 'available' },
         { name: 'Veteran Activist (45-55)', status: 'available' },
         { name: 'Extras (Protesters & Citizens)', status: 'available' }
      ]
   },
   {
      id: 'arctic-expedition',
      title: 'Arctic Expedition',
      genre: 'Adventure Thriller',
      location: 'Iceland',
      description: 'A team of scientists in the Arctic discovers something that could change humanity forever, but they must survive the harsh conditions and mysterious forces pursuing them.',
      image: 'https://via.placeholder.com/300x450/3498db/ecf0f1?text=Arctic+Expedition',
      director: 'Hans Eriksson',
      shootingDates: 'January 5 - March 20, 2025',
      roles: [
         { name: 'Lead Scientist (35-45)', status: 'taken' },
         { name: 'Survival Expert (30-40)', status: 'available' },
         { name: 'Research Assistant (25-30)', status: 'available' },
         { name: 'Extras (Expedition Team)', status: 'available' }
      ]
   }
];

// Carousel state
let currentSlide = 0;
let carouselTimer = null;
let isCarouselPaused = false;

// Calculate how many slides are visible
function getVisibleSlides() {
   const width = window.innerWidth;
   if (width >= 1200) return 4;  // Desktop: 4 slides
   if (width >= 900) return 3;   // Tablet: 3 slides
   if (width >= 600) return 2;   // Small tablet: 2 slides
   return 1;                     // Mobile: 1 slide
}

// Initialize Feather Icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
   feather.replace();
   initializeComponents();
   loadProjects();
   startCarouselAutoplay();
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

// Load projects into carousel
function loadProjects() {
   const carousel = document.getElementById('projects-carousel');
   const indicators = document.getElementById('carousel-indicators');

   if (!carousel || !indicators) return;

   // Clear existing content
   carousel.innerHTML = '';
   indicators.innerHTML = '';

   // Generate project cards
   projectsData.forEach((project, index) => {
      // Create project card
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
            <div class="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center h-48 rounded-t-lg">
                <i data-feather="image" class="w-20 h-20 text-gray-500"></i>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-white">${project.title}</h3>
                <p class="text-gray-400 mb-4">${project.genre} | Shooting in ${project.location}</p>
                <button onclick="openModal('${project.id}')" class="project-btn">
                    Learn More
                </button>
            </div>
        `;
      carousel.appendChild(projectCard);
   });

   // Create indicators based on visible slides
   const visibleSlides = getVisibleSlides();
   const totalIndicators = Math.max(1, projectsData.length - visibleSlides + 1);

   for (let i = 0; i < totalIndicators; i++) {
      const indicator = document.createElement('button');
      indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
      indicator.onclick = () => goToSlide(i);
      indicators.appendChild(indicator);
   }

   // Set initial position
   updateCarouselPosition();

   // Replace feather icons
   feather.replace();
}

// Fixed carousel functionality
function initCarousel() {
   const prevBtn = document.getElementById('carousel-prev');
   const nextBtn = document.getElementById('carousel-next');
   const carouselWrapper = document.querySelector('.carousel-wrapper');

   if (prevBtn) prevBtn.addEventListener('click', () => {
      previousSlide();
      pauseCarousel();
   });

   if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      pauseCarousel();
   });

   // Pause on hover, resume on leave
   if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', pauseCarousel);
      carouselWrapper.addEventListener('mouseleave', resumeCarousel);
   }

   // Handle resize
   window.addEventListener('resize', function () {
      // Recalculate and update carousel
      loadProjects();
   });
}

// function updateCarouselPosition() {
//     const carousel = document.getElementById('projects-carousel');
//     if (!carousel) return;

//     const cardWidth = 280; // Fixed card width
//     const gap = 24; // 1.5rem = 24px gap
//     const totalWidth = cardWidth + gap;

//     const translateX = -(currentSlide * totalWidth);
//     carousel.style.transform = `translateX(${translateX}px)`;

//     // Update indicators
//     const indicators = document.querySelectorAll('.carousel-indicator');
//     indicators.forEach((indicator, i) => {
//         indicator.classList.toggle('active', i === currentSlide);
//     });
// }

function goToSlide(index) {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, projectsData.length - visibleSlides);

   currentSlide = Math.max(0, Math.min(index, maxSlide));
   updateCarouselPosition();
}

function nextSlide() {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, projectsData.length - visibleSlides);

   if (currentSlide >= maxSlide) {
      currentSlide = 0; // Loop back to start
   } else {
      currentSlide++;
   }

   updateCarouselPosition();
}

function previousSlide() {
   const visibleSlides = getVisibleSlides();
   const maxSlide = Math.max(0, projectsData.length - visibleSlides);

   if (currentSlide <= 0) {
      currentSlide = maxSlide; // Loop to end
   } else {
      currentSlide--;
   }

   updateCarouselPosition();
}

function startCarouselAutoplay() {
   if (carouselTimer) clearInterval(carouselTimer);

   carouselTimer = setInterval(() => {
      if (!isCarouselPaused) {
         nextSlide();
      }
   }, 5000); // 5 seconds as requested
}

function pauseCarousel() {
   isCarouselPaused = true;
}

function resumeCarousel() {
   isCarouselPaused = false;
}

// Mobile Menu Functionality
function initMobileMenu() {
   const mobileMenuBtn = document.getElementById('mobile-menu-btn');
   const mobileMenu = document.querySelector('.mobile-menu');
   const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

   if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function () {
         this.classList.toggle('active');
         mobileMenu.classList.toggle('active');
      });

      // Close mobile menu when clicking on a link
      mobileNavLinks.forEach(link => {
         link.addEventListener('click', function () {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
         });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', function (e) {
         if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
         }
      });
   }
}

// Language Selector Functionality
function initLanguageSelector() {
   const languageBtn = document.getElementById('language-btn');
   const languageDropdown = document.querySelector('.language-dropdown');

   if (languageBtn && languageDropdown) {
      languageBtn.addEventListener('click', function (e) {
         e.stopPropagation();
         languageDropdown.classList.toggle('hidden');

         if (!languageDropdown.classList.contains('hidden')) {
            languageDropdown.classList.remove('opacity-0', 'translate-y-2');
            languageDropdown.classList.add('opacity-100', 'translate-y-0');
         }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function () {
         if (!languageDropdown.classList.contains('hidden')) {
            languageDropdown.classList.add('opacity-0', 'translate-y-2');
            languageDropdown.classList.remove('opacity-100', 'translate-y-0');
            setTimeout(() => {
               languageDropdown.classList.add('hidden');
            }, 300);
         }
      });

      // Handle language selection
      const languageLinks = languageDropdown.querySelectorAll('a');
      languageLinks.forEach(link => {
         link.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLang = this.textContent.trim();
            const langCode = selectedLang.split(' ')[1] || selectedLang.substring(2);
            languageBtn.innerHTML = `<i data-feather="globe" class="mr-2"></i> ${langCode} <i data-feather="chevron-down" class="ml-1 w-4 h-4"></i>`;
            feather.replace();

            // Close dropdown
            languageDropdown.classList.add('opacity-0', 'translate-y-2');
            languageDropdown.classList.remove('opacity-100', 'translate-y-0');
            setTimeout(() => {
               languageDropdown.classList.add('hidden');
            }, 300);
         });
      });
   }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
   const navLinks = document.querySelectorAll('a[href^="#"]');

   navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
         e.preventDefault();

         const targetId = this.getAttribute('href');
         const targetSection = document.querySelector(targetId);

         if (targetSection) {
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

// Back to Top Button - Fixed for all devices including mobile
function initBackToTop() {
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

// Form Handling
function initForms() {
   const forms = document.querySelectorAll('form');

   forms.forEach(form => {
      form.addEventListener('submit', function (e) {
         e.preventDefault();

         // Get form data
         const formData = new FormData(this);
         const formType = this.id;

         // Show loading state
         const submitBtn = this.querySelector('button[type="submit"]');
         const originalText = submitBtn.innerHTML;
         submitBtn.innerHTML = '<i data-feather="loader" class="w-4 h-4 mr-2 animate-spin"></i> Sending...';
         submitBtn.disabled = true;
         feather.replace();

         // Simulate form submission (replace with actual API call)
         setTimeout(() => {
            let message = 'Thank you! Your message has been sent successfully.';

            if (formType === 'project-application-form') {
               message = 'Your application has been submitted! We\'ll contact you soon.';
            } else if (formType === 'sponsor-form') {
               message = 'Thank you for your interest! Our partnership team will contact you within 24 hours.';
            }

            showNotification(message, 'success');
            this.reset();

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            feather.replace();

            // Close modal if it's a project application
            if (formType === 'project-application-form') {
               closeModal();
            }
         }, 2000);
      });
   });
}

// Modal Functionality
function initModal() {
   const modal = document.getElementById('project-modal');
   const modalBackdrop = document.querySelector('.modal-backdrop');

   if (modal && modalBackdrop) {
      // Close modal when clicking backdrop
      modalBackdrop.addEventListener('click', closeModal);

      // Close modal with Escape key
      document.addEventListener('keydown', function (e) {
         if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
         }
      });
   }
}

// Modal functions
function openModal(projectId) {
   const modal = document.getElementById('project-modal');
   const project = projectsData.find(p => p.id === projectId);

   if (!project) return;

   // Update modal content
   document.getElementById('modal-title').textContent = project.title;
   document.getElementById('modal-genre').textContent = `${project.genre} | Shooting in ${project.location}`;
   document.getElementById('modal-location').textContent = project.location;
   document.getElementById('modal-description').textContent = project.description;
   document.getElementById('project-name').value = project.title;

   // Update production details
   const modalContent = modal.querySelector('.modal-content');
   const directorElement = modalContent.querySelector('li:nth-child(1) span:last-child');
   const datesElement = modalContent.querySelector('li:nth-child(2) span:last-child');

   if (directorElement) directorElement.textContent = project.director;
   if (datesElement) datesElement.textContent = project.shootingDates;

   // Update roles
   const rolesContainer = document.getElementById('modal-roles');
   rolesContainer.innerHTML = project.roles.map(role => `
        <div class="role-item role-${role.status}">
            <span class="text-gray-200">${role.name}</span>
            <span class="role-status">${role.status === 'available' ? 'Available' : 'Taken'}</span>
        </div>
    `).join('');

   // Show modal with animation
   modal.classList.add('active');
   document.body.style.overflow = 'hidden';

   // Update feather icons
   setTimeout(() => feather.replace(), 100);
}

function closeModal() {
   const modal = document.getElementById('project-modal');
   modal.classList.remove('active');
   document.body.style.overflow = 'auto';
}

// Notification system
function showNotification(message, type = 'info') {
   // Remove existing notifications
   const existingNotifications = document.querySelectorAll('.notification');
   existingNotifications.forEach(notification => notification.remove());

   // Create notification element
   const notification = document.createElement('div');
   notification.className = `notification fixed top-20 right-6 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full max-w-sm`;

   // Set notification style based on type
   switch (type) {
      case 'success':
         notification.classList.add('bg-green-600', 'text-white', 'border-green-500');
         break;
      case 'error':
         notification.classList.add('bg-red-600', 'text-white', 'border-red-500');
         break;
      default:
         notification.classList.add('bg-blue-600', 'text-white', 'border-blue-500');
   }

   notification.innerHTML = `
        <div class="flex items-start">
            <span class="mr-3 flex-1">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200 flex-shrink-0">
                <i data-feather="x" class="w-4 h-4"></i>
            </button>
        </div>
    `;

   document.body.appendChild(notification);
   feather.replace();

   // Animate in
   setTimeout(() => {
      notification.classList.remove('translate-x-full');
   }, 100);

   // Auto remove after 5 seconds
   setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => notification.remove(), 300);
   }, 5000);
}

// Projects Management Functions (for easy editing)
function addProject(projectData) {
   projectsData.push(projectData);
   loadProjects();
   saveProjectsToStorage();
}

function removeProject(projectId) {
   const index = projectsData.findIndex(p => p.id === projectId);
   if (index > -1) {
      projectsData.splice(index, 1);
      loadProjects();
      saveProjectsToStorage();
   }
}

function updateProject(projectId, updatedData) {
   const index = projectsData.findIndex(p => p.id === projectId);
   if (index > -1) {
      projectsData[index] = { ...projectsData[index], ...updatedData };
      loadProjects();
      saveProjectsToStorage();
   }
}

// Save projects to localStorage (simple persistence)
function saveProjectsToStorage() {
   localStorage.setItem('filmcrewProjects', JSON.stringify(projectsData));
}

// Load projects from localStorage
function loadProjectsFromStorage() {
   const stored = localStorage.getItem('filmcrewProjects');
   if (stored) {
      projectsData.length = 0;
      projectsData.push(...JSON.parse(stored));
   }
}

// Admin Panel Functions
function toggleAdminPanel() {
   const adminPanel = document.getElementById('admin-panel');
   if (adminPanel.style.display === 'none' || !adminPanel.style.display) {
      showAdminPanel();
   } else {
      hideAdminPanel();
   }
}

function showAdminPanel() {
   const adminPanel = document.getElementById('admin-panel');
   const projectsList = document.getElementById('projects-list');

   adminPanel.style.display = 'block';

   // Populate projects list
   projectsList.innerHTML = projectsData.map(project => `
        <div class="project-admin-item p-3 bg-gray-700 rounded mb-2">
            <h4 class="font-bold text-white">${project.title}</h4>
            <p class="text-sm text-gray-300">${project.genre} | ${project.location}</p>
            <div class="mt-2 space-x-2">
                <button onclick="editProject('${project.id}')" class="text-xs bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                <button onclick="deleteProject('${project.id}')" class="text-xs bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
        </div>
    `).join('');
}

function hideAdminPanel() {
   document.getElementById('admin-panel').style.display = 'none';
}

function showAddProjectForm() {
   const title = prompt('Project Title:');
   const genre = prompt('Genre:');
   const location = prompt('Location:');
   const description = prompt('Description:');

   if (title && genre && location && description) {
      const newProject = {
         id: title.toLowerCase().replace(/\s+/g, '-'),
         title,
         genre,
         location,
         description,
         image: 'https://via.placeholder.com/300x450/555/fff?text=' + encodeURIComponent(title),
         director: 'TBA',
         shootingDates: 'TBA',
         roles: [
            { name: 'Lead Role', status: 'available' },
            { name: 'Supporting Role', status: 'available' },
            { name: 'Extras', status: 'available' }
         ]
      };

      addProject(newProject);
      showNotification('Project added successfully!', 'success');
      showAdminPanel(); // Refresh admin panel
   }
}

function editProject(projectId) {
   const project = projectsData.find(p => p.id === projectId);
   if (!project) return;

   const title = prompt('Project Title:', project.title) || project.title;
   const genre = prompt('Genre:', project.genre) || project.genre;
   const location = prompt('Location:', project.location) || project.location;
   const description = prompt('Description:', project.description) || project.description;

   updateProject(projectId, { title, genre, location, description });
   showNotification('Project updated successfully!', 'success');
   showAdminPanel(); // Refresh admin panel
}

function deleteProject(projectId) {
   if (confirm('Are you sure you want to delete this project?')) {
      removeProject(projectId);
      showNotification('Project deleted successfully!', 'success');
      showAdminPanel(); // Refresh admin panel
   }
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
function debounce(func, wait) {
   let timeout;
   return function executedFunction(...args) {
      const later = () => {
         clearTimeout(timeout);
         func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
   };
}

// Apply debounce to scroll events
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