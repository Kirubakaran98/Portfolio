const menu=document.getElementsByClassName("nav-menu");
const openMenu=document.getElementsByClassName("fa-bars");
const closeMenu=document.getElementsByClassName("fa-x");
const overlay=document.getElementsByClassName("data-overlay");



for(let i=0;i<closeMenu.length;i++){
    closeMenu[i].addEventListener("click",()=>{
        menu[i].classList.remove('active');
        overlay[i].classList.remove('active')
    })
}
for (let i = 0; i <openMenu.length; i++) {
    openMenu[i].addEventListener("click",()=>{
      menu[i].classList.add('active');
      overlay[i].classList.add('active')
    })
  }