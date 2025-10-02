import { showNotification } from './utils.js';
import { closeModal } from './modal.js';

export function initForms() {
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