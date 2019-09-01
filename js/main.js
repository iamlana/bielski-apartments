document.querySelector('.show-1').addEventListener('click', show1)
function show1() {
  document.querySelector('.property-visible').classList.remove('property-visible')
  document.querySelector('.property-1').classList.add('property-visible')
}
function show2() {
  document.querySelector('.property-visible').classList.remove('property-visible')
  document.querySelector('.property-2').classList.add('property-visible')
}
function show3() {
  document.querySelector('.property-visible').classList.remove('property-visible')
  document.querySelector('.property-3').classList.add('property-visible')
}
function show4() {
    document.querySelector('.property-visible').classList.remove('property-visible')
    document.querySelector('.property-4').classList.add('property-visible')
  }


  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
   slides[slideIndex-1].style.display = "block";
}