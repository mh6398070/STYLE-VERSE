/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


/* =========================
   GALLERY FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.85)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 250);

            }

        });

    });

});


/* =========================
   LIGHTBOX
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const item = button.closest(".gallery-item");
        const image = item.querySelector("img");

        lightboxImage.src = image.src;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* =========================
   IMAGE CLICK
========================= */

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        lightboxImage.src = image.src;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* =========================
   CLOSE LIGHTBOX
========================= */

function closeGallery() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

    setTimeout(() => {
        lightboxImage.src = "";
    }, 300);

}

closeLightbox.addEventListener("click", closeGallery);


/* =========================
   CLICK OUTSIDE IMAGE
========================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeGallery();
    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeGallery();
    }

});


/* =========================
   SEARCH BUTTON
========================= */

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const search = prompt("What are you looking for?");

    if (search && search.trim() !== "") {

        alert(
            "Searching Style Verse Gallery for: " +
            search
        );

    }

});