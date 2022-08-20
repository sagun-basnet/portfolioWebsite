// change nav style on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

// typing animation script
var typing = new Typed(".typing", {
    strings: ["Student.", "Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// toggle navbar=========================
const menuBtn = document.querySelector('#nav_toggle-open');
const closeMenu = document.querySelector('#nav_toggle-close');
const menu = document.querySelector('.nav_links');

// open menu
menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    closeMenu.style.display = 'inline-block';
    menuBtn.style.display = 'none';
});

// close menu 
closeMenu.addEventListener('click', () =>{
    menu.style.display = 'none';
    closeMenu.style.display = 'none';
    menuBtn.style.display = 'block';
});