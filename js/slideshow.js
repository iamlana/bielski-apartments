document.querySelectorAll('.slideshow')
  .forEach(setupSlideshow);

function setupSlideshow (slideshow) {
  const slides = slideshow.querySelectorAll('.slideshow__slide');

  let currentSlide = 0;

  function changeSlide(count) {
    currentSlide = (slides.length + currentSlide + count) % slides.length;
    showSlides();
  }

  function showSlides() {
    for (const slide of slides) {
      slide.style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
  }

  showSlides();

  slideshow.querySelector('.slideshow__prev')
    .addEventListener('click', () => changeSlide(-1));

  slideshow.querySelector('.slideshow__next')
    .addEventListener('click', () => changeSlide(+1));
}
