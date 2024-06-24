function prevSlide() {
    const carousel = document.getElementById('carousel');
    const carouselWidth = carousel.clientWidth;
    const itemsToShow = getItemsToShow();

    carousel.scrollLeft -= carouselWidth / itemsToShow;
}

function nextSlide() {
    const carousel = document.getElementById('carousel');
    const carouselWidth = carousel.clientWidth;
    const itemsToShow = getItemsToShow();

    carousel.scrollLeft += carouselWidth / itemsToShow;
}

function getItemsToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        return 1;
    } else if (screenWidth < 900) {
        return 2;
    } else {
        return 4;
    }
}

function currentSlide(index) {
    const carousel = document.getElementById('carousel');
    const carouselWidth = carousel.clientWidth;
    const itemsToShow = getItemsToShow();

    carousel.scrollLeft = (index - 1) * (carouselWidth / itemsToShow);
}

window.addEventListener('resize', () => {
    const carousel = document.getElementById('carousel');
    const itemsToShow = getItemsToShow();
    const activeDot = document.querySelector('.dot.active');
    if (activeDot) {
        const index = Array.from(document.querySelectorAll('.dot')).indexOf(activeDot) + 1;
        carousel.scrollLeft = (index - 1) * (carousel.clientWidth / itemsToShow);
    }
});
