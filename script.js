//alert("Hello");


//Welcome animation

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML='';
    // for each index letter wait 80 seconds between 
    textArray.forEach(function(letra,i) {
        setTimeout(function(){
            element.innerHTML +=letra;
        
        }, 80 * i);
    });
}

var welcome = document.querySelector('.welcome');
typeWriter(welcome);


//photo animation

//gsap.from('nav', {opacity: 0, duration: 3.5, y: -50, ease:'elastic(1,0.2)'});
gsap.from('.beginning', {opacity: 0, duration: 1, y:-100});

function elastic () {
    gsap.from(this, {opacity: 0, duration: 1, y: -50, ease:'elastic(1,0.2)'});
}

document.querySelector(".avatar").addEventListener("mouseover", elastic);


//body animation

const target = document.querySelectorAll("[data-anime]");
const animationClass ="animate";

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 2)/4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})





