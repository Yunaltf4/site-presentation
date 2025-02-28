document.addEventListener("DOMContentLoaded", function () {
    const carrouselle = document.querySelector(".carrouselle");
    if (!carrouselle) return;

    const images = carrouselle.querySelectorAll("div img");
    if (images.length < 3) {
        console.log("oui");

    } else {
        return
    };

    let currentIndex = 0;

    // Créer les boutons
    const prevButton = document.createElement("button");
    prevButton.textContent = "◀";
    prevButton.classList.add("carrousel-prev");

    const nextButton = document.createElement("button");
    nextButton.textContent = "▶";
    nextButton.classList.add("carrousel-next");

    carrouselle.appendChild(prevButton);
    carrouselle.appendChild(nextButton);

    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
});
