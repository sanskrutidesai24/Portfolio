document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener("click", e => {

        const t = document.querySelector(a.getAttribute("href"));

        if (t) {
            e.preventDefault();

            t.scrollIntoView({
                behavior: "smooth"
            });

            document.querySelector("nav").classList.remove("open");
        }

    })
);


document.querySelector(".menu-btn").addEventListener("click", () =>
    document.querySelector("nav").classList.toggle("open")
);
