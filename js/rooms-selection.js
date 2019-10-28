document.querySelectorAll('.rooms-selection')
  .forEach(setupRoomsSelection)

function setupRoomsSelection(element, index) {
  function show () {
    document.querySelector('.property-visible')
      .classList.remove('property-visible');
    document.querySelector('.property-' + (index + 1))
      .classList.add('property-visible');
  }

  element.addEventListener('onclick', show)
}

