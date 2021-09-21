const featureLinkBtn = document.querySelectorAll('.feature__link'),
    featureSub = document.querySelectorAll('.feature-sub');

featureLinkBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        featureLinkBtn.forEach((btnItem, i) => {
            if (item === btnItem) {
                btnItem.classList.toggle('feature__link_active')
                featureSub[i].classList.toggle('hidden')
            } else {
                btnItem.classList.remove('feature__link_active')
                featureSub[i].classList.add('hidden')
            }
        });
    });
});