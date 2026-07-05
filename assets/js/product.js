// ==========================================
// PRODUCT PAGE
// ==========================================

let quantity = 1;

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

const product = products.find(item => item.id === productId);

document.addEventListener("DOMContentLoaded", () => {

    if(!product){

        window.location.href = "shop.html";

        return;

    }

    loadProduct();

    initQuantity();

    renderRelatedProducts();

});

function loadProduct(){

    document.getElementById("mainImage").src = product.image;

    document.getElementById("mainImage").alt = product.name;

    document.getElementById("productCategory").textContent = product.category;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productPrice").textContent = `Rs. ${product.price.toLocaleString()}`;

    document.getElementById("productDescription").textContent = product.description;

    document.getElementById("productColour").textContent = product.color || "—";

    document.getElementById("productRating").textContent = `(${product.rating})`;

    document.getElementById("productStars").innerHTML = generateStars(product.rating);

}

function renderRelatedProducts(){

    const container = document.getElementById("relatedProducts");

    if(!container) return;

    const related = products

        .filter(item =>

            item.category === product.category &&

            item.id !== product.id

        )

        .slice(0,4);

    container.innerHTML = "";

    related.forEach(item=>{

        container.innerHTML += createProductCard(item);

    });

}

function initQuantity(){

    const minusBtn = document.getElementById("minusBtn");

    const plusBtn = document.getElementById("plusBtn");

    const quantityText = document.getElementById("quantity");

    minusBtn.addEventListener("click",()=>{

        if(quantity > 1){

            quantity--;

            quantityText.textContent = quantity;

        }

    });

    plusBtn.addEventListener("click",()=>{

        quantity++;

        quantityText.textContent = quantity;

    });

    const addBtn = document.getElementById("addToCartBtn");

addBtn.addEventListener("click",()=>{

    const cart = JSON.parse(localStorage.getItem("avenorCart")) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if(existingProduct){

        existingProduct.quantity += quantity;

    }

    else{

        cart.push({

            ...product,

            quantity

        });

    }

    localStorage.setItem("avenorCart", JSON.stringify(cart));

updateCartCount();

showToast(product);

});

}