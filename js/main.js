// Menu functionality for mobile
const menuButton = document.querySelector('.navigation__mobile-menu-button');
const menuButtonImage = menuButton.querySelector('img');
const menu = document.querySelector('.navigation');
const menuLinks = document.querySelectorAll('.menu__link__item');

menuButton.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menuButtonImage.src = 'images/icon-close.svg';
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuButtonImage.src = 'images/icon-hamburger.svg';
    menuButton.setAttribute('aria-expanded', 'false');
  }
  menu.classList.toggle('hidden');
});

window.addEventListener('keyup', () => {
  if (!menu.classList.contains('hidden') && event.key === 'Escape') {
    menu.classList.add('hidden');
    menuButtonImage.src = 'images/icon-hamburger.svg';
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

menuLinks.forEach((link) => {
    link.addEventListener('focusout', (event) => {
    if (event.relatedTarget.classList.contains('menu__link__item')) {
      return;
    } else {
      menu.classList.add('hidden');
      menuButtonImage.src = 'images/icon-hamburger.svg';
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});

// Show Dropdown menus when focus-within hasn't got browser support
let dropdownMenu = document.querySelectorAll('.navigation__menu__item-title')

try {
    let focuswithin = document.querySelector(':focus-within');
} catch (error) {
    for (i = 0; i < dropdownMenu.length; i++) {
     dropdownMenu[i].addEventListener('focusin', function (e) {
            console.log(e.target.nextElementSibling.nextElementSibling)
            e.target.nextElementSibling.nextElementSibling.classList.add('menu__dropdown--reveal');
            e.target.nextElementSibling.nextElementSibling.lastElementChild.addEventListener('focusout', function (e) {
                e.target.parentElement.parentElement.classList.remove('menu__dropdown--reveal');
            });
        });
    }
}

// Change of images and arrows for mobile view
let sectThreeImage = document.querySelector('.sect-three__image-block__image')
let sectFirstImage = document.querySelector('.sect-first__image-block__image')

if (window.screen.width < 735) {
    sectThreeImage.src = "images/illustration-laptop-mobile.svg"
    sectFirstImage.src = "images/illustration-editor-mobile.svg"
}

let arrowIcons = document.querySelectorAll('.navigation__menu__item-title span img')

arrowIcons.forEach(arrowIcon => {
    if (window.screen.width < 735) {
        arrowIcon.src = "images/icon-arrow-dark.svg"
    }
})
