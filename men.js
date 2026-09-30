// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu

document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ================= PRODUCT FILTER =================

const filters =
    document.querySelectorAll(".filter");

const products =
    document.querySelectorAll(".product");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        // Remove active class

        filters.forEach(function (item) {

            item.classList.remove("active");

        });

        filter.classList.add("active");


        const selected =
            filter.getAttribute("data-filter");


        products.forEach(function (product) {

            const category =
                product.getAttribute("data-category");


            if (
                selected === "all" ||
                category === selected
            ) {

                product.classList.remove("hide");

            } else {

                product.classList.add("hide");

            }

        });

    });

});


// ================= FAVORITE =================

document.querySelectorAll(".heart").forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {

            button.innerHTML = "♥";

        } else {

            button.innerHTML = "♡";

        }

    });

});


// ================= QUICK VIEW =================

document.querySelectorAll(".quick").forEach(function (button) {

    button.addEventListener("click", function () {

        const product =
            button.closest(".product");

        const name =
            product.querySelector("h3").textContent;

        const price =
            product.querySelector("strong").textContent;

        alert(
            "STYLE VERSE\n\n" +
            name +
            "\nPrice: " +
            price +
            "\n\nProduct details coming soon."
        );

    });

});


// ================= SCROLL ANIMATION =================

const animatedItems =
    document.querySelectorAll(
        ".category, .product, .why-grid > div"
    );


animatedItems.forEach(function (item) {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(30px)";

    item.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


animatedItems.forEach(function (item) {

    observer.observe(item);

});