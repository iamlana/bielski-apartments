setupNavigation(document.querySelector('.navigation'));

function setupNavigation (navigation) {
  const button = navigation.querySelector('.navigation__burger');
  const links = navigation.querySelectorAll('.navigation__item');

  let isOpen = false;

  function open () {
    isOpen = true;
    navigation.classList.add('navigation--active');
    links.forEach((link, index) => {
      link.style.animation = `slide-and-fade 0.5s ease forwards ${index / 7 + 0.2}s`;
    })
  }

  function close () {
    isOpen = false;
    navigation.classList.remove('navigation--active');
    links.forEach((link) => {
      link.style.animation = '';
    })
  }

  function toggle () {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  button.addEventListener('click', toggle);

  links.forEach(link => {
    link.addEventListener('click', close);
  });
}
