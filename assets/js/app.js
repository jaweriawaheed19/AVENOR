/* ==========================================
   AVENOR
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initStickyNavbar();

});

/* ==========================================
   Sticky Navbar
========================================== */

function initStickyNavbar(){

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    // Keep navbar solid on all pages except homepage
    const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname === "";

    if(!isHomePage){

        navbar.classList.add("scrolled");

        return;

    }

    // Homepage behaviour
    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

}

// ==========================================
// Navbar Navigation
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const wishlistBtn = document.querySelector(".wishlist-nav-btn");

    if (wishlistBtn) {

        wishlistBtn.addEventListener("click", () => {

            window.location.href = "wishlist.html";

        });

    }

    const cartBtn = document.querySelector(".cart-btn");

    if (cartBtn) {

        cartBtn.addEventListener("click", () => {

            window.location.href = "cart.html";

        });

    }

});