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

// navigation animation

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
navLinks.forEach((link, index) => {
  if (link.style.animation) {
    link.style.animation = '';
  } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
  }
});
}
navSlide();