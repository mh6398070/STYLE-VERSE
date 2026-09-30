// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Close menu after selecting a page

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


// ================= PRODUCT FILTER =================

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const selected = filter.dataset.filter;

        products.forEach(product => {

            if (
                selected === "all" ||
                product.dataset.category === selected
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


// ================= WISHLIST =================

document.querySelectorAll(".heart").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


// ================= QUICK VIEW =================

document.querySelectorAll(".quick-view").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const name =
            card.querySelector("h3").textContent;

        const price =
            card.querySelector(".product-info span").textContent;

        alert(
            "STYLE VERSE\n\n" +
            name +
            "\nPrice: " +
            price +
            "\n\nProduct details coming soon."
        );

    });

});


// ================= SEARCH =================

document.getElementById("searchBtn")
    .addEventListener("click", () => {

        const query = prompt(
            "Which footwear are you looking for?"
        );

        if (query) {

            alert(
                "Searching Style Verse for:\n\n" +
                query
            );

        }

    });


// ================= SHOPPING BAG =================

document.getElementById("cartBtn")
    .addEventListener("click", () => {

        alert(
            "Your Style Verse shopping bag is currently empty."
        );

    });


// ================= NEWSLETTER =================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    if (email) {

        alert(
            "Thank you for joining Style Verse! ✨"
        );

        newsletterForm.reset();

    }

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".category-card, .product-card, .feature-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "all .8s ease";

    observer.observe(element);

});