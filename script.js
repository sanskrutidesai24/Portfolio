/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* ================= TYPING EFFECT ================= */

const typingText = document.getElementById("typing-text");

const roles = [
    "Aspiring Data Analyst",
    "Power BI Enthusiast",
    "Python & SQL Learner",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const submitButton =
            contactForm.querySelector("button");

        submitButton.textContent = "Sending...";

    });

}
