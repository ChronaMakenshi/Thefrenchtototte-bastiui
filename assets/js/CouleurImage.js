document.addEventListener('DOMContentLoaded', function() {
    const bodyColors = document.querySelectorAll('.bodycolor');
    const packs = document.querySelectorAll('.pack1');
    const carouselItems = document.querySelectorAll('.carousel .item');

    function updateCarousel(newImage1, newImage2, newImage3) {
        if (carouselItems.length >= 3) {
            carouselItems[0].querySelector('img').src = newImage1;
            carouselItems[1].querySelector('img').src = newImage2;
            carouselItems[2].querySelector('img').src = newImage3;

            // Update active class based on the clicked image
            carouselItems.forEach((item, index) => {
                if (index === activeIndex) {
                    item.classList.add('active');
                }
            });
        }
    }

    bodyColors.forEach((bodyColor) => {
        bodyColor.addEventListener('click', function() {
            const newImage1 = this.getAttribute('data-image1');
            const newImage2 = this.getAttribute('data-image2');
            const newImage3 = this.getAttribute('data-image3');

            updateCarousel(newImage1, newImage2, newImage3);
        });
    });

    packs.forEach((pack) => {
        pack.addEventListener('click', function() {
            const newImage1 = this.getAttribute('data-image1');
            const newImage2 = this.getAttribute('data-image2');
            const newImage3 = this.getAttribute('data-image3');

            updateCarousel(newImage1, newImage2, newImage3);
        });
    });
});