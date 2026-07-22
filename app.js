/*=========================================
 ATLANTICA CLASSIC V3 EXYNOS
 app.js
=========================================*/

// Sticky Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".news-item,.download-box,.guide-card,.ranking-box,.support-box")
.forEach(el => observer.observe(el));


// ==========================
// Active Menu
// ==========================

const sections=document.querySelectorAll("section");
const menus=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.id;

}

});

menus.forEach(menu=>{

menu.classList.remove("active");

if(menu.getAttribute("href")==="#"+current){

menu.classList.add("active");

}

});

});


const list = document.querySelector(".weekly-scroll");

if(list){

    let speed = 1;

    function autoScroll(){
        list.scrollTop += speed;

        if(list.scrollTop >= list.scrollHeight - list.clientHeight){
            list.scrollTop = 0;
        }
    }

    let interval = setInterval(autoScroll, 40);

    list.addEventListener("mouseenter",()=>{
        clearInterval(interval);
    });

    list.addEventListener("mouseleave",()=>{
        interval = setInterval(autoScroll,40);
    });

}



/*==================================================
 Credit By:MrRex
==================================================*/