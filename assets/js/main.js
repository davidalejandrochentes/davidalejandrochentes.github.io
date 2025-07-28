// --- Lógica para el Preloader ---
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});

// --- Lógica para el ícono del menú móvil ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const icon = mobileMenuButton.querySelector('i');

// Función para cambiar el ícono al abrir/cerrar el menú de Bootstrap
const toggleIcon = () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    // El evento 'shown.bs.collapse' se dispara después de que el menú se abre
    // El evento 'hidden.bs.collapse' se dispara después de que el menú se cierra
    // Por eso verificamos el estado 'aria-expanded' que cambia al hacer clic
    
    // Si está a punto de expandirse, cambia a 'x'
    if (!isExpanded) {
        icon.setAttribute('data-lucide', 'x');
    } else { // Si está a punto de colapsarse, cambia a 'menu'
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
};

mobileMenuButton.addEventListener('click', toggleIcon);


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