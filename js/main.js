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

let sectThreeImage = document.querySelector('.sect-three__image-block__image')
let sectFirstImage = document.querySelector('.sect-first__image-block__image')

if (window.screen.width < 768) {
    sectThreeImage.src = "images/illustration-laptop-mobile.svg"
    sectFirstImage.src = "images/illustration-editor-mobile.svg"
}
