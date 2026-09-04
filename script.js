// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}


// ===============================
// SMOOTH SCROLL + CLOSE MENU
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            if (nav) {
                nav.classList.remove("open");
            }
        }

    });

});


// ===============================
// CONTACT FORM - FORMSPREE
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");

        // Disable button while sending
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                "https://formspree.io/f/xdeodwpb",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                alert("Thank you! Your message has been sent successfully.");

                contactForm.reset();

            } else {

                alert("Sorry, something went wrong. Please try again.");

            }

        } catch (error) {

            alert("Unable to send the message. Please check your internet connection.");

        }

        // Enable button again
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        }

    });

}
