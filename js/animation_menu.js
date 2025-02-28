const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu a, .desktop-menu a');
const body = document.body;

// Vitesse du scroll en ms (plus la valeur est basse, plus le scroll est rapide)
const scrollDuration = 400;

// Gestion du clic sur le bouton burger
burgerMenu.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    // Empêcher le scroll si le menu est ouvert
    body.style.overflow = isActive ? 'hidden' : '';
});

// Fermer le menu en cliquant à l'extérieur
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
        closeMenu();
    }
});

// Fermer le menu et faire un scroll smooth en cliquant sur un lien
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            smoothScroll(targetSection, scrollDuration);
        }

        closeMenu();
    });
});

// Fonction pour fermer le menu
function closeMenu() {
    burgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.style.overflow = ''; // Réactiver le scroll
}

// Fonction de scroll fluide avec contrôle de vitesse
function smoothScroll(target, duration) {
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Limite à 1 max
        const easeInOutQuad = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, start + (end - start) * easeInOutQuad);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
