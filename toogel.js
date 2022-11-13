// console.log("hello");
const styleSwitchToggle=document.querySelector(".style-switcher-toggler");
styleSwitchToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open"); 
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open"); 
    }
})

var alternateStyle=document.querySelectorAll(".alternate-style");
function setActively(color){
    alternateStyle.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}