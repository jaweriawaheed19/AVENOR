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
// Mobile Navigation Drawer
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".mobile-close");
    const overlay = document.querySelector(".mobile-overlay");

    if(!menuBtn || !mobileMenu || !closeBtn || !overlay){
        return;
    }

    function openMenu(){

        mobileMenu.classList.add("active");
        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeMenu(){

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }

    menuBtn.addEventListener("click", openMenu);

    closeBtn.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

});