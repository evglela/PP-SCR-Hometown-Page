'use strict'

const column1 = document.querySelector('#col1');
const column2 = document.querySelector('#col2');

window.addEventListener('scroll', ()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const s = window.scrollY;
 
    column2.style.bottom = s * -1 + 'px';
})