function show(n) {
  document.querySelector('.property-visible').classList.remove('property-visible')
  document.querySelector('.property-' + n).classList.add('property-visible')
}

document.querySelectorAll('.slideshow').forEach(initSlideshow)

function initSlideshow(slideshow) {
  let slideIndex = 1;
  showSlides(slideIndex);

  slideshow.querySelector('.slideshow__prev')
    .addEventListener('click', function () {
      plusSlides(-1)
    })

  slideshow.querySelector('.slideshow__next')
    .addEventListener('click', function () {
      plusSlides(1)
    })

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    let slides = slideshow.querySelectorAll('.slideshow__slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }
}



