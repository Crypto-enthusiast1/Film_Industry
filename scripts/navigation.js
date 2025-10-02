export function initMobileMenu() {
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

export function initLanguageSelector() {
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

export function initSmoothScrolling() {
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