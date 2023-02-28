const carouselImages = document.querySelectorAll('.carousel-image');
const carouselButtons = document.querySelectorAll('.carousel-button');
let currentImageIndex = 0;

function updateCarousel() {
  carouselImages.forEach(image => image.classList.remove('active'));
  carouselButtons.forEach(button => button.classList.remove('active'));
  carouselImages[currentImageIndex].classList.add('active');
  carouselButtons[currentImageIndex].classList.add('active');
}

carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentImageIndex = index;
    updateCarousel();
  });
});

updateCarousel();