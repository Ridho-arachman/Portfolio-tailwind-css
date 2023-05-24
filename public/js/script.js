const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
const tombol = document.querySelector('#tombol');


hamburger.addEventListener('click',()=>{
    nav.classList.toggle('hidden');
    tombol.classList.toggle('bg-slate-300')
    tombol.classList.toggle('scale-105')
});