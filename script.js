document.addEventListener("DOMContentLoaded", function () {

    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

                document.querySelector("nav").classList.remove("open");
            }

        });

    });


    /* ================= MOBILE MENU ================= */

    const menuButton = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("open");

        });

    }


    /* ================= CONTACT FORM ================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function () {

            const button = contactForm.querySelector("button");

            if (button) {
                button.textContent = "Sending...";
                button.disabled = true;
            }

        });

    }

});
