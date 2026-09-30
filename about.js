/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


/* =========================
   SEARCH
========================= */

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const searchText = prompt(
        "What would you like to find on Style Verse?"
    );

    if (searchText && searchText.trim() !== "") {

        alert(
            "Searching Style Verse for: " +
            searchText
        );

    }

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats-section");

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.getAttribute("data-target"));

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 60));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 25);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".story-content, .story-image, .mission-card, .value-card, .timeline-item"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {

            element.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();