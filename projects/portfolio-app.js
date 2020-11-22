
const slides = document.querySelectorAll('.slide');
const pages = document.querySelectorAll('.page');
const hamburger = document.querySelector('.icon');
const nav = document.querySelector('.nav-open');
const logo = document.querySelector('.logo');
const contact = document.querySelector('.contact');
const social = document.querySelector('.social');
const backgrounds = [
    `radial-gradient(#2B3760, #0B1023)`,
    `radial-gradient(#4E3022, #161616)`,
    `radial-gradient(#4E4342, #161616)`
    ];

// TRACKER
let current = 0;
 
const tl = new gsap.timeline({paused: true, reversed: true});

    tl.to(nav, .5 , {y: 0})
        .fromTo(contact, 0.5, {opacity: 0, y:10}, {opacity:1, y:0}, '-=0.1')
        .fromTo(social, 0.4, {opacity:0, y:0}, {opacity:1, y:0}, '-=0.4')
        .fromTo(hamburger, 0.4, {color:'white'}, {color:'black'})



        hamburger.addEventListener('click', () => {
            tl.reversed() ? tl.play() : tl.reversed();
        });

function inIt () {

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function() {
            console.log(index);
            changeDots(this);
            nextSlide(index);

        });
    })

    
};

function changeDots(dot) {
    slides.forEach(slide => {
        slide.classList.remove('active')       
    });
    dot.classList.add('active');
};

function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    console.log(nextPage);
    const nextLeft = nextPage.querySelector('.hero .model-left');
    const nextRight = nextPage.querySelector('.hero .model-right');
    const currentLeft = currentPage.querySelector('.hero .model-left');
    const currentRight = currentPage.querySelector('.hero .model-right');
    const nextText = nextPage.querySelector('.details');
    const portofolio = document.querySelector('.portofolio');

    const tl = new gsap.timeline();

    tl.fromTo(currentLeft, 0.3, {y: '-10%', ease: 'back'}, {y: '-100%', ease: 'back'}, )
    .fromTo(currentRight, 0.3, {y: '10%'}, {y: '100%'}, '-=0.2')
    .to('.portfolio', 0.3, {backgroundImage: backgrounds[pageNumber]})
    .fromTo(currentPage, 0.3 , {opacity:1, pointerEvents: 'all'}, {opacity:0, pointerEvents:'none'}, '-=0.5')
    .fromTo(nextPage, 0.3, {opacity:0, pointerEvents: 'none'}, {opacity:1, pointerEvents:'all'}, '-=0.5')
}

inIt();

