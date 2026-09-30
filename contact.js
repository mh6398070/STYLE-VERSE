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
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const privacy =
        document.getElementById("privacy").checked;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === "" ||
        !privacy
    ) {

        formMessage.style.display = "block";

        formMessage.style.color = "#ff7777";

        formMessage.textContent =
            "Please complete all required fields.";

        return;
    }


    formMessage.style.display = "block";

    formMessage.style.color = "#d4af37";

    formMessage.textContent =
        "Thank you, " +
        name +
        "! Your message has been received.";


    contactForm.reset();

});


/* =========================
   FAQ ACCORDION
========================= */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("open");

                otherItem.querySelector(
                    ".faq-answer"
                ).style.maxHeight = null;

            }

        });


        item.classList.toggle("open");


        if (item.classList.contains("open")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});