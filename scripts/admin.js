import ProjectsData from './projects_data.js';
import { loadProjects } from './carousel.js';
import { showNotification } from './utils.js';

// Projects Management Functions (for easy editing)
export function addProject(projectData) {
    ProjectsData.push(projectData);
    loadProjects();
    saveProjectsToStorage();
}

export function removeProject(projectId) {
    const index = ProjectsData.findIndex(p => p.id === projectId);
    if (index > -1) {
        ProjectsData.splice(index, 1);
        loadProjects();
        saveProjectsToStorage();
    }
}

export function updateProject(projectId, updatedData) {
    const index = ProjectsData.findIndex(p => p.id === projectId);
    if (index > -1) {
        ProjectsData[index] = { ...ProjectsData[index], ...updatedData };
        loadProjects();
        saveProjectsToStorage();
    }
}

// Save projects to localStorage (simple persistence)
export function saveProjectsToStorage() {
    localStorage.setItem('filmcrewProjects', JSON.stringify(ProjectsData));
}

// Load projects from localStorage
export function loadProjectsFromStorage() {
    const stored = localStorage.getItem('filmcrewProjects');
    if (stored) {
        ProjectsData.length = 0;
        ProjectsData.push(...JSON.parse(stored));
    }
}

// Admin Panel Functions
export function toggleAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel.style.display === 'none' || !adminPanel.style.display) {
        showAdminPanel();
    } else {
        hideAdminPanel();
    }
}

export function showAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    const projectsList = document.getElementById('projects-list');

    adminPanel.style.display = 'block';

    // Populate projects list
    projectsList.innerHTML = ProjectsData.map(project => `
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

export function hideAdminPanel() {
    document.getElementById('admin-panel').style.display = 'none';
}

export function showAddProjectForm() {
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

export function editProject(projectId) {
    const project = ProjectsData.find(p => p.id === projectId);
    if (!project) return;

    const title = prompt('Project Title:', project.title) || project.title;
    const genre = prompt('Genre:', project.genre) || project.genre;
    const location = prompt('Location:', project.location) || project.location;
    const description = prompt('Description:', project.description) || project.description;

    updateProject(projectId, { title, genre, location, description });
    showNotification('Project updated successfully!', 'success');
    showAdminPanel(); // Refresh admin panel
}

export function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
        removeProject(projectId);
        showNotification('Project deleted successfully!', 'success');
        showAdminPanel(); // Refresh admin panel
    }
}

// Make functions global for onclick handlers
window.showAddProjectForm = showAddProjectForm;
window.editProject = editProject;
window.deleteProject = deleteProject;