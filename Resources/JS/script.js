let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let row = document.querySelector(".row");

menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    row.classList.add("active");
    body.style.overflow = "auto";
}
cancelBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    row.classList.remove("active");
    body.style.overflow = "auto";
}

let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

let navLinks = document.querySelectorAll(".row li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click" , ()=>{
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    row.classList.remove("active");
    body.style.overflow = "auto";
    });
}