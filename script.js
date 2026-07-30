// ===============================
// Smooth Scroll Active Menu
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card,.project,.about,.contact").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// Typing Animation
// ===============================

const words = [

"DevOps Engineer",

"Linux Administrator",

"AWS Cloud Engineer",

"Kubernetes Engineer",

"Terraform Learner"

];

let wordIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".hero-left h2");

function type() {

    if(charIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1800);

    }

}

function erase(){

    if(charIndex>0){

        typing.textContent = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }

        setTimeout(type,300);

    }

}

typing.textContent="";

type();

// ===============================
// Floating Icons Animation
// ===============================

const icons = document.querySelectorAll(".icon");

icons.forEach((icon,index)=>{

    icon.style.animationDelay=index*0.4+"s";

});

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#020617";

}

else{

header.style.background="rgba(0,0,0,.35)";

}

});

// ===============================
// Loading Animation
// ===============================

window.onload=()=>{

document.body.style.opacity="1";

};

// ===============================
// Console Message
// ===============================

console.log("🔥 Welcome to Vishnu S Portfolio");
