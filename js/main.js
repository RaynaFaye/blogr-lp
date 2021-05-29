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
