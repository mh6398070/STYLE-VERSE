// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ================= FAVORITE BUTTON =================

function favorite(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


// ================= NEWSLETTER =================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    alert(
        "Thank you for subscribing to Style Verse!\n\n" +
        "Email: " + email
    );

    newsletterForm.reset();

});


// ================= COUNTER ANIMATION =================

const counters =
    document.querySelectorAll(".stat strong");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(function (counter) {

        const target =
            Number(counter.getAttribute("data-target"));

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(function () {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current.toLocaleString();

        }, 25);

    });

}


// Start counters when stats section enters screen

const statsSection =
    document.querySelector(".stats");


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    }, {
        threshold: 0.3
    });


observer.observe(statsSection);


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(
        ".category-card, .product-card, .benefit"
    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(35px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const revealObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});