//slider animation

function show(n) {
  document.querySelector('.property-visible')
    .classList.remove('property-visible');
  document.querySelector('.property-' + n)
    .classList.add('property-visible');
}

document.querySelectorAll('.slideshow').forEach(initSlideshow);

function initSlideshow(slideshow) {
  const slides = slideshow.querySelectorAll('.slideshow__slide');
  let currentSlide = 0;
  showSlides();

  slideshow.querySelector('.slideshow__prev')
    .addEventListener('click', () => changeSlide(-1));

  slideshow.querySelector('.slideshow__next')
    .addEventListener('click', () => changeSlide(+1));

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
}
