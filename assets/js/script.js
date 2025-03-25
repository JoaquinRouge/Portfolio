const imagesContainer = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        let index = 0;
        const totalImages = images.length;

        // Ajustar el ancho del contenedor dinámicamente
        imagesContainer.style.width = `${totalImages * 100}%`;
        images.forEach(img => img.style.width = "600px");

        function updateCarousel() {
            imagesContainer.style.transform = `translateX(${-index * 600}px)`;
        }

        function nextImage() {
            index = (index + 1) % totalImages;
            updateCarousel();
        }

        function prevImage() {
            index = (index - 1 + totalImages) % totalImages;
            updateCarousel();
        }

        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);
