const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsTitle = document.querySelectorAll('.design__title')

console.log(tabsTitle);

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', (event) => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        let target = event.target;
        if (target.matches('[data-tabs-handler="body"]')) {
            tabsTitle[1].classList.remove('hidden')
            tabsTitle[0].classList.add('hidden')
        } else {
            tabsTitle[0].classList.remove('hidden')
            tabsTitle[1].classList.add('hidden')
        }

        tabsContentElems.forEach(item => {
            if (item.dataset.tabsField === btn.dataset.tabsHandler) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })

    })
}