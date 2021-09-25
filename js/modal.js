const modalBtn = document.querySelectorAll('.more'),
    modal = document.querySelector('.modal');

modalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})

modal.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})