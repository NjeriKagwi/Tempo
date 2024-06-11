// Change navbar background on scroll
const navbar= document.querySelector('.navigation');

const scrollThreshold= 5;

function toggleNavbarBackground(){
    if(window.scrollY>scrollThreshold){
        navbar.classList.add('navbar-scrolled');
    }else{
        navbar.classList.remove('navbar-scrolled')
    }
}

window.addEventListener('scroll', toggleNavbarBackground);


