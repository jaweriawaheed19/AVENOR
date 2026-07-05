// ==========================================
// SHOP PAGE
// ==========================================

let selectedCategory = "all";
let selectedColour = "all";
let selectedPrice = 15000;
let currentProducts = [...products];

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

const category = params.get("category");

if(category){

    selectedCategory = category;

}

    applyFilters();

    initCategoryFilters();

    initColourFilters();

    initPriceFilter();

    initSort();

});

// ==========================================
// APPLY ALL FILTERS
// ==========================================

function applyFilters(){

    currentProducts = products.filter(product => {

        // Category
        let categoryMatch = true;

        if(selectedCategory !== "all"){

            if(selectedCategory === "women"){

                categoryMatch = product.category === "Women's Clothing";

            }

            else if(selectedCategory === "men"){

                categoryMatch = product.category === "Men's Clothing";

            }

            else{

                categoryMatch = product.category
                    .toLowerCase()
                    .includes(selectedCategory);

            }

        }

        // Colour
        let colourMatch = true;

        if(selectedColour !== "all"){

            colourMatch =
                product.color &&
                product.color.trim().toLowerCase() ===
                selectedColour.trim().toLowerCase();

        }

        // Price
        const priceMatch = product.price <= selectedPrice;

        return categoryMatch && colourMatch && priceMatch;

    });

    renderProducts(currentProducts);

}

// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts(productList){

    const grid = document.getElementById("productsGrid");
    const count = document.getElementById("productCount");

    if(!grid) return;

    grid.innerHTML = "";

    count.textContent = `${productList.length} Products`;

    productList.forEach(product => {

        grid.innerHTML += createProductCard(product);

    });

}

// ==========================================
// CATEGORY FILTER
// ==========================================

function initCategoryFilters(){

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {

    if(button.dataset.category === selectedCategory){

        button.classList.add("active");

    } else {

        button.classList.remove("active");

    }

});

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            selectedCategory = button.dataset.category;

            applyFilters();

        });

    });

}

// ==========================================
// COLOUR FILTER
// ==========================================

function initColourFilters(){

    const colours = document.querySelectorAll(".colour-option");

    colours.forEach(colour => {

        colour.addEventListener("click", () => {

            colours.forEach(item =>
                item.classList.remove("active")
            );

            colour.classList.add("active");

            selectedColour = colour.dataset.colour;

            applyFilters();

        });

    });

}

// ==========================================
// PRICE FILTER
// ==========================================

function initPriceFilter(){

    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");

    if(!priceRange) return;

    priceRange.addEventListener("input", () => {

        selectedPrice = Number(priceRange.value);

        priceValue.textContent =
            `Rs. ${selectedPrice.toLocaleString()}`;

        applyFilters();

    });

}

// ==========================================
// SORT
// ==========================================

function initSort(){

    const sortSelect = document.getElementById("sortProducts");

    if(!sortSelect) return;

    sortSelect.addEventListener("change", () => {

        switch(sortSelect.value){

            case "low":

                currentProducts.sort((a,b)=>a.price-b.price);

                break;

            case "high":

                currentProducts.sort((a,b)=>b.price-a.price);

                break;

            case "name":

                currentProducts.sort((a,b)=>
                    a.name.localeCompare(b.name)
                );

                break;

        }

        renderProducts(currentProducts);

    });

}