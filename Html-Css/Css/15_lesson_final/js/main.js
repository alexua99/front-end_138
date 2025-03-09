
const themeSw = document.querySelector('.theme-sw');
const body = document.querySelector('body');


themeSw.onclick = () => {
    themeSw.classList.toggle('theme-sw--active')
    body.classList.toggle('dark')
}
