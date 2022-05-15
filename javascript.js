const btn = document.querySelector('#btn-menu');
const link = document.querySelector('.nav-link');
const bars = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');
const nav = document.querySelector('.encabezado');
// const nav_items = document.getElementById('nav-bar');
const nav_items = document.querySelector('#nav-bar');
const btn_up = document.querySelector('#btn-scroll');


btn.addEventListener('click', () => {
    times.classList.toggle('close');
    bars.classList.toggle('close');
    nav.classList.toggle('show');
})

nav_items.addEventListener('click', (e) => {
    if(e.target.classList == "nav-link")
        nav.classList.toggle("show");
})

btn_up.addEventListener('click', () => window.scrollTo(0,0))