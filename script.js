// ==========================
// Smooth Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
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


// ==========================
// Fade Animation
// ==========================

const observer = new IntersectionObserver(entries => {

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


// ==========================
// Floating Icons Animation
// ==========================

const icons = document.querySelectorAll(".icon");

icons.forEach((icon, index) => {

    icon.style.animationDelay = `${index * .5}s`;

});


// ==========================
// Hero Typing Effect
// ==========================

const roles = [

"Linux Administrator",
"DevOps Engineer",
"AWS Cloud Engineer",
"Kubernetes Engineer",
"Terraform Learner"

];

let roleIndex = 0;
let charIndex = 0;

const heading = document.querySelector(".hero-left h2");

function typeEffect() {

    if (!heading) return;

    if (charIndex < roles[roleIndex].length) {

        heading.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 90);

    } else {

        setTimeout(eraseEffect, 2000);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length)
            roleIndex = 0;

        setTimeout(typeEffect, 300);

    }

}

heading.textContent = "";

typeEffect();


// ==========================
// Button Ripple Effect
// ==========================

document.querySelectorAll(".btn1,.btn2").forEach(button => {

button.addEventListener("mousemove",(e)=>{

const x=e.pageX-button.offsetLeft;
const y=e.pageY-button.offsetTop;

button.style.setProperty("--x",x+"px");
button.style.setProperty("--y",y+"px");

});

});


// ==========================
// Console Welcome
// ==========================

console.log("🔥 Welcome to Vishnu DevOps Portfolio");


// ==========================
// Loading Animation
// ==========================

window.onload=()=>{

document.body.style.opacity="1";

};
