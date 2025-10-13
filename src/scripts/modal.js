import { loadProjectsData } from './firebase-data.js';

let ProjectsData = [];

export async function initModal() {
   // Load data once at startup
   ProjectsData = await loadProjectsData();

   const modal = document.getElementById('project-modal');
   const modalBackdrop = document.querySelector('.modal-backdrop');

   if (modal && modalBackdrop) {
      modalBackdrop.addEventListener('click', closeModal);
      document.addEventListener('keydown', e => {
         if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
         }
      });
   }
}

export function openModal(projectId) {
   const modal = document.getElementById('project-modal');
   const project = ProjectsData.find(p => p.id === projectId);
   if (!project) return;

   document.getElementById('modal-title').textContent = project.title;
   document.getElementById('modal-genre').textContent = `${project.genre} | Shooting in ${project.location}`;
   document.getElementById('modal-location').textContent = project.location;
   document.getElementById('modal-description').textContent = project.description;
   document.getElementById('project-name').value = project.title;
   document.getElementById('modal-sujet').textContent = project.sujet || 'Sujet missing';

   const mediaContainer = modal.querySelector('.aspect-w-16');
   if (mediaContainer) {
      mediaContainer.innerHTML = project.video
         ? `<video class="modal-video w-full h-full object-cover rounded-lg" controls preload="auto" autoplay loop playsinline poster="${project.image}">
           <source src="${project.video}" type="video/mp4">
         </video>`
         : `<div class="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center h-64 rounded-t-lg">
           <i data-feather="image" class="w-20 h-20 text-gray-500"></i>
         </div>`;
   }

   const directorElement = modal.querySelector('li:nth-child(1) span:last-child');
   const datesElement = modal.querySelector('li:nth-child(2) span:last-child');
   if (directorElement) directorElement.textContent = project.director;
   if (datesElement) datesElement.textContent = project.shootingDates;

   const rolesContainer = document.getElementById('modal-roles');
   rolesContainer.innerHTML = project.roles.map((role, i) => `
    <div class="role-item role-${role.status}">
      <div class="flex items-center justify-between w-full">
        <span class="text-black font-semibold">${role.name}</span>
        <span class="role-status">${role.status === 'available' ? 'Available' : 'Taken'}</span>
      </div>
      <button class="description-toggle text-blue-500 text-sm mt-2 w-full" data-index="${i}">
        <i data-feather="chevron-down" class="w-4 h-4 inline mr-1"></i>
        <span class="toggle-text">Show description</span>
      </button>
      <div class="role-description mt-2 bg-gray-100 rounded-lg" id="description-${i}">
        <p class="text-black text-sm">${role.description || 'Description missing'}</p>
      </div>
    </div>
  `).join('');

   document.querySelectorAll('.description-toggle').forEach(btn => {
      btn.addEventListener('click', function () {
         const idx = this.dataset.index;
         const desc = document.getElementById(`description-${idx}`);
         const txt = this.querySelector('.toggle-text');
         const icon = this.querySelector('i[data-feather]');

         if (desc.classList.toggle('show')) {
            txt.textContent = 'Hide description';
            icon.setAttribute('data-feather', 'chevron-up');
         } else {
            txt.textContent = 'Show description';
            icon.setAttribute('data-feather', 'chevron-down');
         }
         feather.replace();
      });
   });

   const roleSelect = document.getElementById('modal-role-select');
   if (roleSelect) {
      const available = project.roles.filter(r => r.status === 'available');
      roleSelect.innerHTML = `<option value="">Select Role</option>`
         + available.map(r => `<option>${r.name}</option>`).join('');
      if (available.length === 1) roleSelect.value = available[0].name;
   }

   modal.classList.add('active');
   document.body.style.overflow = 'hidden';
   setTimeout(() => feather.replace(), 100);
}

export function closeModal() {
   const modal = document.getElementById('project-modal');
   modal.classList.remove('active');
   document.body.style.overflow = 'auto';
}

window.openModal = openModal;
window.closeModal = closeModal;
