function show(n) {
  document.querySelector('.property-visible').classList.remove('property-visible')
  document.querySelector('.property-' + n).classList.add('property-visible')
}

let slideIndex = 1;
showSlides(slideIndex);

document.querySelectorAll('.slideshow__prev').forEach(
  function (button) {
    button.addEventListener('click', function () {
      plusSlides(-1)
    })
  }
)

document.querySelectorAll('.slideshow__next').forEach(
  function (button) {
    button.addEventListener('click', function () {
      plusSlides(1)
    })
  }
)


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
