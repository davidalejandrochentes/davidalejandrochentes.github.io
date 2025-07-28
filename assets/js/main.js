// --- Lógica para el Preloader ---
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});

// --- Cerrar menú móvil de Bootstrap al hacer clic en un enlace ---
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const mainNav = document.getElementById('main-nav');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Solo si el menú está visible (en modo móvil)
        if (mainNav.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(mainNav, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});