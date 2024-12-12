document.querySelectorAll('.faq-item').forEach(elem => elem.addEventListener('click', () => toggleClick(elem)))

function toggleClick(elem) {
    const classList = elem.classList
    if(classList.contains('active')) {
        classList.remove('active')
    } else {
        classList.add('active')
    }
}
