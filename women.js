
// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// ================= CATEGORY FILTER =================

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});


// ================= WISHLIST =================

const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {
            heart.textContent = "♥";
        } else {
            heart.textContent = "♡";
        }

    });

});


// ================= QUICK VIEW =================

const quickButtons = document.querySelectorAll(".quick-view");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.closest(".product-card")
            .querySelector("h3").textContent;

        alert(
            "Style Verse\n\n" +
            product +
            "\n\nProduct details coming soon."
        );

    });

});


// ================= NEWSLETTER =================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email) {

        alert(
            "Thank you for subscribing to Style Verse! ✨"
        );

        newsletterForm.reset();

    }

});


// ================= SEARCH =================

document.getElementById("searchBtn")
    .addEventListener("click", () => {

        const search =
            prompt("What are you looking for?");

        if (search) {
            alert(
                "Searching Style Verse for: " +
                search
            );
        }

    });


// ================= CART =================

document.getElementById("cartBtn")
    .addEventListener("click", () => {

        alert(
            "Your Style Verse shopping bag is currently empty."
        );

    });


// ================= SCROLL ANIMATION =================

const cards =
    document.querySelectorAll(
        ".category-card, .product-card, .why-card"
    );

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .8s ease";

    observer.observe(card);

});

