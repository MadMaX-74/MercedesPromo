//humburger-menu 

const hamburgerMenu = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    hamburgerMenu.classList.toggle('hamburger-menu-active');
}

hamburgerMenu.addEventListener('click', () => toggleMenu());

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menuElem.classList.remove('menu-active');
        hamburgerMenu.classList.remove('hamburger-menu-active');
    })
})