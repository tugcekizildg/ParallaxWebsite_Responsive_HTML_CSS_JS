//Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navlist");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");

    if (navList.classList.contains("active")) {
        icon.classList.replace("bx-menu", "bx-x");
    } else {
        icon.classList.replace("bx-x", "bx-menu");
    }
});


//Parallax Effects
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desertMoon = document.getElementById("desert-moon");
let man = document.getElementById("man");



window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (window.innerWidth > 768) {
        moon.style.top = value * .9 + "px";
    text.style.top = 80 + value * -.2 + "%";
    train.style.left = value * 1.5 + "px";


    desertMoon.style.top = value * .3 + "px";
    man.style.left = value * .6 + "px";
    }
    
});


//Progress Bar

let calcScrollValue = () => { 
    if (window.innerWidth > 1080) {
        let scrollProgress = document.getElementById("progress");
        let pos = document.documentElement.scrollTop;
    
        let calcHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
        let scrollValue = Math.round((pos * 100) / calcHeight);
      
        //display the scrollbar when it is more than 100px
        scrollProgress.style.display = pos > 100 ? "grid" : "none";
    
        //return top of the page
        scrollProgress.addEventListener("click", () => { 
            document.documentElement.scrollTop = 0;
        })
    
        scrollProgress.style.background = `conic-gradient(#12f7ff ${scrollValue}%, #194eb9 ${scrollValue}%)`;
    }
   
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


