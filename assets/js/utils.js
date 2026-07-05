function generateStars(rating){

    let stars = "";

    const fullStars = Math.floor(rating);

    const hasHalfStar = rating % 1 >= 0.5;

    for(let i = 0; i < fullStars; i++){

        stars += '<i class="ri-star-fill"></i>';

    }

    if(hasHalfStar){

        stars += '<i class="ri-star-half-fill"></i>';

    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for(let i = 0; i < emptyStars; i++){

        stars += '<i class="ri-star-line"></i>';

    }

    return stars;

}

// ==========================================
// Toast Notification
// ==========================================

function showToast(product){

    const toast = document.getElementById("toast");

    if(!toast || !product) return;

    const title = toast.querySelector("h4");

    const productName = document.getElementById("toastProduct");

    if(title){

        title.textContent = "Added to Bag";

    }

    if(productName){

        productName.textContent = product.name;

    }

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}

function initRevealAnimation(){

    const elements=document.querySelectorAll(".reveal");

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(element=>{

        element.classList.add("hidden");

        observer.observe(element);

    });

}

document.addEventListener("DOMContentLoaded",()=>{

    initRevealAnimation();

});

document.addEventListener("DOMContentLoaded",()=>{

    initRevealAnimation();

    const wishlistButton=document.getElementById("wishlistButton");

    if(wishlistButton){

        wishlistButton.addEventListener("click",()=>{

            window.location.href="wishlist.html";

        });

    }

    const cartButton=document.getElementById("cartButton");

    if(cartButton){

        cartButton.addEventListener("click",()=>{

            window.location.href="cart.html";

        });

    }

});