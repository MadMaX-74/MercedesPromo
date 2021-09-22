const navLinks = document.querySelectorAll('.menu-list__link'),
    mainScroll = document.querySelector('.main__scroll');

const newArray = [...navLinks, mainScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1) //отделили знак решетки
        document.getElementById(ID).scrollIntoView({ //метод прокрутки
            behavior: 'smooth',
            block: 'start'
        })
    })
})