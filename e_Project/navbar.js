document.addEventListener('DOMContentLoaded', function () {
    let mobileMenu = document.getElementById('ntoggle');
    let navMenu = document.getElementById('nmenu');
    let dropdowns = document.querySelectorAll('.ndd');
    let dropdownToggles = document.querySelectorAll('.ndt');

    if (!mobileMenu || !navMenu) {
        console.warn('Mobile menu or nav menu element not found');
        return;
    }

    function toggleMobileMenu() {
        let isOpening = !navMenu.classList.contains('active');

        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');

        if (!isOpening) {
            closeAllDropdowns();
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        closeAllDropdowns();
    }

    function toggleDropdown(dropdown) {
        if (!dropdown.classList.contains('active')) {
            closeAllDropdowns();
        }
        dropdown.classList.toggle('active');
    }

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }

    function isMobile() {
        return window.innerWidth <= 768;
    }

    mobileMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMobileMenu();
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (isMobile()) {
                e.preventDefault();
                e.stopPropagation();
                let dropdown = this.closest('.ndd');
                if (dropdown) {
                    toggleDropdown(dropdown);
                }
            }
        });
    });

    document.querySelectorAll('.nlink:not(.ndt)').forEach(link => {
        link.addEventListener('click', function () {
            if (isMobile()) {
                setTimeout(closeMobileMenu, 300);
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!isMobile()) return;

        let isClickInsideNav = navMenu.contains(event.target) || mobileMenu.contains(event.target);

        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    navMenu.addEventListener('click', function (e) {
        if (!isMobile()) return;

        if (e.target === navMenu) {
            closeAllDropdowns();
        }
    });

    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            if (!isMobile()) {
                closeMobileMenu();
                closeAllDropdowns();
            }
        }, 250);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isMobile()) {
            closeMobileMenu();
        }
    });

    document.querySelectorAll('.ndm a').forEach(link => {
        link.addEventListener('click', function () {
            if (isMobile()) {
                setTimeout(() => {
                    closeMobileMenu();
                }, 300);
            }
        });
    });
});