const menu=document.getElementsByClassName("nav-menu");
const openMenu=document.getElementsByClassName("fa-bars");
const closeMenu=document.getElementsByClassName("fa-x");
const closeMenu_1=document.querySelectorAll(".nav-menu");
const overlay=document.getElementsByClassName("data-overlay");



for(let i=0;i<closeMenu.length;i++){
    closeMenu[i].addEventListener("click",()=>{
        menu[i].classList.remove('active');
        overlay[i].classList.remove('active');
    })
}
for (let i = 0; i <openMenu.length; i++) {
    openMenu[i].addEventListener("click",()=>{
      menu[i].classList.add('active');
      overlay[i].classList.add('active');
    })
}

for (let i = 0; i <closeMenu_1.length; i++) {
  closeMenu_1[i].addEventListener("click",()=>{
    menu[i].classList.remove('active');
    overlay[i].classList.remove('active');
  })
}

// animation

const animateFadeIn=document.querySelectorAll(".animate-fadeIn");

window.addEventListener('scroll',FadeIn);

function FadeIn(){
  const triggerAnimate=window.innerHeight;

  animateFadeIn.forEach(box =>{
    const boxes= box.getBoundingClientRect().top;


    if(boxes < triggerAnimate - 150){
      box.classList.add('animate-show-fadeIn');

    }
    else{
      box.classList.remove("animate-show-fadeIn");
    }
  })
}
FadeIn();


const animateLeft=document.querySelectorAll(".animate-left-fadeIn");

window.addEventListener('scroll',animateFadeLeft);

function animateFadeLeft(){
  const triggerAnimate=window.innerHeight;

  animateLeft.forEach(box =>{
    const boxes= box.getBoundingClientRect().top;

    if(boxes < triggerAnimate - 150){
      box.classList.add('animate-show-left-fadeIn');
    }
    else{
      box.classList.remove("animate-show-left-fadeIn");
    }      
  })
}
animateFadeLeft();

const animateUp=document.querySelectorAll(".animate-fadeUp");

window.addEventListener('scroll',animateFadeUp);

function animateFadeUp(){
  const triggerAnimate=window.innerHeight;

  animateUp.forEach(box =>{
    const boxes= box.getBoundingClientRect().top;

    if(boxes < triggerAnimate - 150){
      box.classList.add('animate-show-fadeUp');
    }
    else{
      box.classList.remove("animate-show-fadeUp");
    }
      
  })
}
animateFadeUp();

const animateDown=document.querySelectorAll(".animate-fadeDown");

window.addEventListener('scroll',fadeDown);

function fadeDown(){
  const triggerAnimate=window.innerHeight;
  animateDown.forEach(box =>{
    const boxes=box.getBoundingClientRect().top;

    if(boxes < triggerAnimate - 150){
      box.classList.add("animate-show-fadeDown");
    }
    else{
      box.classList.add("animate-show-fadeDown");
    }
   
  })
}

const scale=document.querySelectorAll(".animate-scale");

window.addEventListener('scroll' , animateScale);

function animateScale(){
const triggerAnimate=window.innerHeight;


 scale.forEach(box =>{
  const boxes=box.getBoundingClientRect().top; 

  if(boxes < triggerAnimate -150){
    box.classList.add("animate-show-scale");

  }
  else{
    box.classList.add("animate-show-scale");
  }
 })

}
animateScale();
