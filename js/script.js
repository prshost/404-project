let search__body = document.querySelector('.search__body');
let buttonClick = document.querySelector('button');

buttonClick.onclick = (e) => {
    search__body.classList.toggle('active')
    search__body.firstElementChild.focus()
}