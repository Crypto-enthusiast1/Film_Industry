import ProjectsData from './projects_data.js';

export function initModal() {
   const modal = document.getElementById('project-modal');
   const modalBackdrop = document.querySelector('.modal-backdrop');

   if (modal && modalBackdrop) {
      modalBackdrop.addEventListener('click', closeModal);

      document.addEventListener('keydown', function (e) {
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

   // Основной контент
   document.getElementById('modal-title').textContent = project.title;
   document.getElementById('modal-genre').textContent = `${project.genre} | Shooting in ${project.location}`;
   document.getElementById('modal-location').textContent = project.location;
   document.getElementById('modal-description').textContent = project.description;
   document.getElementById('project-name').value = project.title;

   // Видео или картинка
   const mediaContainer = modal.querySelector('.aspect-w-16');
   if (mediaContainer) {
      mediaContainer.innerHTML = project.video
         ? `
        <video class="modal-video w-full h-full object-cover rounded-lg" 
        controls 
        preload="auto" 
        autoplay 
        loop 
        playsinline poster="${project.image}">
          <source src="${project.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`
         : `
         <div class="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center h-64 rounded-t-lg">
                <i data-feather="image" class="w-20 h-20 text-gray-500"></i>
            </div>`;
   }

   // Production details
   const directorElement = modal.querySelector('li:nth-child(1) span:last-child');
   const datesElement = modal.querySelector('li:nth-child(2) span:last-child');
   if (directorElement) directorElement.textContent = project.director;
   if (datesElement) datesElement.textContent = project.shootingDates;

   // Роли
   const rolesContainer = document.getElementById('modal-roles');
   rolesContainer.innerHTML = project.roles.map(role => `
    <div class="role-item role-${role.status}">
      <span class="text-black">${role.name}</span>
      <span class="role-status">${role.status === 'available' ? 'Available' : 'Taken'}</span>
    </div>
  `).join('');

   // Селект только для доступных ролей
   const roleSelect = document.getElementById('modal-role-select');
   if (roleSelect) {
      const placeholder = '<option value="">Select Role</option>';
      const availableRoles = project.roles.filter(r => r.status === 'available');
      const options = availableRoles.map(r => `<option value="${r.name}">${r.name}</option>`).join('');
      roleSelect.innerHTML = placeholder + options;
      if (availableRoles.length === 1) {
         roleSelect.value = availableRoles[0].name;
      }
   }

   // Показ модалки
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