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
var c=1;
let pro1=document.getElementById("p1");
let pro2=document.getElementById("p2");
let pro3=document.getElementById("p3");
let pro4=document.getElementById("p4");
function rightBtn(){
    c++;
    if (c==5){
        c=1;
    }
    if (c==0){
        c=5;
    }
    if(c==1){
        pro4.classList.add("com");
        pro1.classList.remove("com");
        // console.log("project 1");
    }else if(c==2){
        pro1.classList.add("com");
        pro2.classList.remove("com");
        // console.log("project 2");
    }else if(c==3){
        pro2.classList.add("com");
        pro3.classList.remove("com");
        // console.log("project 3");
    }else if(c==4){
        pro3.classList.add("com");
        pro4.classList.remove("com");
    }
}
function LeftBtn(){    
    c--    
    if (c==5){
        c=1;
    }
    if (c==0){
        c=5;
    }
    if(c==1){
        pro2.classList.add("com");
        pro1.classList.remove("com");
        // console.log("project 1");
    }else if(c==2){
        pro3.classList.add("com");
        pro2.classList.remove("com");
        // console.log("project 2");
    }else if(c==3){
        pro4.classList.add("com");
        pro3.classList.remove("com");
        // console.log("project 3");
    }
    else if(c==4){
        pro1.classList.add("com");
        pro4.classList.remove("com");
    }
}
