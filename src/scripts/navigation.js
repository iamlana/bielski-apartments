setupNavigation(document.querySelector('.navigation'));

function setupNavigation(navigation) {
  const button = navigation.querySelector('.navigation__burger');
  const links = navigation.querySelectorAll('.navigation__item');

  let isOpen = false;

  function open() {
    isOpen = true;
    navigation.classList.add('navigation--active');
    links.forEach((link, index) => {
      link.style.animation = `slide-and-fade 0.5s ease forwards ${(index + 1) * 0.05}s`;
    })
    document.body.style.overflow = 'hidden'
  }

  function close() {
    isOpen = false;
    navigation.classList.remove('navigation--active');
    links.forEach((link) => {
      link.style.animation = '';
    })
    document.body.style.removeProperty('overflow')
  }

  function toggle() {
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
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navigation').classList.remove('navigation--hidden');
  } else {
    document.querySelector('.navigation').classList.add('navigation--hidden');
  }
  prevScrollpos = currentScrollPos;
}

function languagePopup() {
  const button = document.querySelector(".languages__button")
  const popup = document.querySelector('.languages-popup')

  function toggle() {
    popup.classList.toggle('languages-popup--open')
  }

  button.addEventListener('click', toggle);
}
languagePopup()
