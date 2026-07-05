// ==========================================
// AVENOR CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("avenorCart")) || [];

function saveCart(){

    localStorage.setItem("avenorCart", JSON.stringify(cart));

}

function updateCartCount(){

    const cartCount = document.getElementById("cartCount");

    if(!cartCount) return;

    const latestCart =
        JSON.parse(localStorage.getItem("avenorCart")) || [];

    const totalItems = latestCart.reduce((total,item)=>{

        return total + item.quantity;

    },0);

    cartCount.textContent = totalItems;

}

function addToCart(product){

    const existingProduct = cart.find(item => item.id === product.id);

    if(existingProduct){

        existingProduct.quantity++;

    }

    else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    saveCart();

    updateCartCount();

}

document.addEventListener("DOMContentLoaded", ()=>{

    updateCartCount();

    renderCart();

});

// ==========================================
// Render Cart Page
// ==========================================

function renderCart(){

    const cartItems = document.getElementById("cartItems");

    if(!cartItems) return;

    if(cart.length === 0){

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h2>Your Shopping Bag Awaits</h2>

                <p>Discover timeless essentials designed to complement every wardrobe.</p>

                <a href="shop.html" class="btn-primary">

                    Explore Collection

                </a>

            </div>

        `;

        updateSummary();

        return;

    }

    cartItems.innerHTML = "";

    cart.forEach(item=>{

        cartItems.innerHTML += createCartItem(item);

    });

    updateSummary();

}

function createCartItem(item){

    return `

    <div class="cart-item" data-id="${item.id}">

        <img src="${item.image}" alt="${item.name}">

        <div class="cart-item-info">

            <h3>${item.name}</h3>

            <p>${item.category}</p>

            <span>Rs. ${item.price.toLocaleString()}</span>

        </div>

        <div class="cart-quantity">

            <button class="decrease">−</button>

            <span>${item.quantity}</span>

            <button class="increase">+</button>

        </div>

        <button class="remove-item">

            Remove

        </button>

    </div>

    `;

}

function updateSummary(){

    const subtotal = cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);

    const shipping = subtotal >= 10000 || subtotal === 0 ? 0 : 350;

    const finalTotal = subtotal + shipping;

    // Bag Count
    const bagCount = document.getElementById("bagCount");

    if(bagCount){

        const totalItems = cart.reduce((total, item) => {

            return total + item.quantity;

        }, 0);

        bagCount.textContent = totalItems > 0 ? `(${totalItems})` : "";

    }

    // Checkout Button
    const checkoutBtn = document.getElementById("checkoutBtn");

    if(checkoutBtn){

        checkoutBtn.disabled = cart.length === 0;

    }

    // Price Summary
    const subtotalElement = document.getElementById("subtotal");
    const shippingElement = document.getElementById("shipping");
    const totalElement = document.getElementById("total");

    if(subtotalElement){

        subtotalElement.textContent = `Rs. ${subtotal.toLocaleString()}`;

    }

    if(shippingElement){

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : `Rs. ${shipping.toLocaleString()}`;

    }

    if(totalElement){

        totalElement.textContent = `Rs. ${finalTotal.toLocaleString()}`;

    }

}

// ==========================================
// Cart Actions
// ==========================================

document.addEventListener("click", function(e){

    const cartItem = e.target.closest(".cart-item");

    if(!cartItem) return;

    const productId = Number(cartItem.dataset.id);

    // Increase Quantity
    if(e.target.classList.contains("increase")){

        const product = cart.find(item => item.id === productId);

        product.quantity++;

        saveCart();

        updateCartCount();

        renderCart();

    }

    // Decrease Quantity
    if(e.target.classList.contains("decrease")){

        const product = cart.find(item => item.id === productId);

        if(product.quantity > 1){

            product.quantity--;

        }

        saveCart();

        updateCartCount();

        renderCart();

    }

    // Remove Product
 if(e.target.classList.contains("remove-item")){

    const removedProduct = cart.find(item => item.id === productId);

    cart = cart.filter(item => item.id !== productId);

    saveCart();

    updateCartCount();

    renderCart();

    //toast
const toast = document.getElementById("toast");

if(toast && removedProduct){

    document.getElementById("toastTitle").textContent = "Removed from Bag";

    document.getElementById("toastProduct").textContent = removedProduct.name;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

}

}

);