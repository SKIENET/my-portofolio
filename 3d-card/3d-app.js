const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const punchLine = document.querySelector('.punch-line');
const button = document.querySelector('.cta-btn');
const line = document.querySelector('hr');


container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//ANIMATE IN

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";

    //POPOUT
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = 'translateZ(150px) rotateZ(-45deg)';
    punchLine.style.transform = 'translateZ(50px)';
    button.style.transform = 'translateZ(20px)';
    line.style.transform = 'translatelZ(100px);'
})

//ANIMATE OUT 

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0)";
    button.style.transform = 'translateZ(0px)';
    punchLine.style.transform = 'translateZ(0px)';
});