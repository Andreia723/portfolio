//envelope animation

gsap.from('.img4', {duration:2, ease: "bounce.inOut", y:-600});

function elastic () {
    gsap.from(this, {opacity: 0, duration: 1, y: -50, ease:'elastic(1,0.2)'});
}

document.querySelector(".img4").addEventListener("mouseover", elastic);

