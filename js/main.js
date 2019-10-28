function show(n) {
  document.querySelector('.property-visible')
    .classList.remove('property-visible');
  document.querySelector('.property-' + n)
    .classList.add('property-visible');
}
