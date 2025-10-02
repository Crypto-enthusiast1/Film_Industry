export function debounce(func, wait) {
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

export function showNotification(message, type = 'info') {
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