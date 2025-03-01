document.querySelector('.gif-clickable').addEventListener('click', function () {
    this.classList.toggle('enlarged');
    document.getElementById('overlay').classList.toggle('active');

    // Ajout du overflow hidden au body quand le modal est ouvert
    document.body.style.overflow = this.classList.contains('enlarged') ? 'hidden' : 'auto';
});

// Fermer quand on clique sur l'overlay
document.getElementById('overlay').addEventListener('click', function () {
    document.querySelector('.gif-clickable').classList.remove('enlarged');
    this.classList.remove('active');
    document.body.style.overflow = 'auto';
});