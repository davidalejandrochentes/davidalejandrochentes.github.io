
// --- Lógica para el Preloader ---
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});

// --- Lógica para el menú móvil ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a'); // Selecciona los enlaces dentro del menú

// Función para alternar la visibilidad del menú
const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle('is-open');

    // Cambiar el ícono de menú a 'x' y viceversa
    const icon = mobileMenuButton.querySelector('i');
    icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons(); // Vuelve a renderizar los íconos de Lucide

    // Bloquear el scroll del body cuando el menú está abierto
    document.body.style.overflow = isOpen ? 'hidden' : '';
};

// Evento para el botón del menú
mobileMenuButton.addEventListener('click', toggleMenu);

// Evento para cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('is-open')) {
            toggleMenu();
        }
    });
});

// --- Inicialización de Lucide Icons ---
// Esta llamada ya está en el HTML, pero la dejamos aquí por si se necesita en el futuro.
// lucide.createIcons();
