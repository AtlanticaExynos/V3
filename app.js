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



const weeklyChampions = [
    ["1st 🏆","HiroShi","22.07.26"],
    ["2nd 🏆","Exynos","22.07.26"],
    ["3rd 🏆","DarkLord","22.07.26"],
    ["4th 🏆","Athena","22.07.26"],
    ["5th 🏆","Sakura","22.07.26"],
    ["6th 🏆","Leon","22.07.26"],
    ["7th 🏆","Arthur","22.07.26"],
    ["8th 🏆","Lucifer","22.07.26"],
    ["9th 🏆","Zero","22.07.26"],
    ["10th 🏆","Rex","22.07.26"]
];

let current = 0;

function updateWeeklyChampion(){

    const row1 = weeklyChampions[current];
    const row2 = weeklyChampions[(current + 1) % weeklyChampions.length];

    document.getElementById("rank1").textContent = row1[0];
    document.getElementById("name1").textContent = row1[1];
    document.getElementById("time1").textContent = row1[2];

    document.getElementById("rank2").textContent = row2[0];
    document.getElementById("name2").textContent = row2[1];
    document.getElementById("time2").textContent = row2[2];

    current = (current + 1) % weeklyChampions.length;
}

updateWeeklyChampion();
setInterval(updateWeeklyChampion, 2500);



/*==================================================
 Credit By:MrRex
==================================================*/