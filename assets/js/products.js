// ==========================================
// AVENOR
// PRODUCTS
// ==========================================

const products = [

{
    id: 1,
    name: "Silk Scarf-Tie Blouse",
    category: "Women's Clothing",
    price: 6990,
    image: "assets/images/products/women-shirt.webp",
    description: "An elegant satin blouse featuring a refined scarf-tie neckline, designed for effortless sophistication from day to evening.",
    color: "Blue",
    rating: 5,
    badge: "New Arrival",
    featured: true
},

{
    id: 2,
    name: "Tailored Wide-Leg Trousers",
    category: "Women's Clothing",
    price: 5490,
    image: "assets/images/products/women-trousers.webp",
    description: "Beautifully tailored wide-leg trousers crafted for comfort, movement, and timeless elegance.",
    color: "Olive",
    rating: 5,
    badge: "Signature",
    featured: true
},

{
    id: 3,
    name: "Premium Linen Shirt",
    category: "Men's Clothing",
    price: 6490,
    image: "assets/images/products/men-shirt.webp",
    description: "A breathable premium linen shirt with clean tailoring, perfect for refined everyday dressing.",
    color: "Green",
    rating: 5,
    badge: "Best Seller",
    featured: true
},

{
    id: 4,
    name: "Tailored Pleated Trousers",
    category: "Men's Clothing",
    price: 5990,
    image: "assets/images/products/men-trousers.webp",
    description: "Modern pleated trousers with a tailored silhouette that balances sophistication and comfort.",
    color: "Black",
    rating: 5,
    badge: "Signature",
    featured: true
},

{
    id: 5,
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 2490,
    image: "assets/images/products/belt.webp",
    description: "Premium genuine leather belt finished with a polished buckle for timeless everyday styling.",
    color: "Brown",
    rating: 5,
    badge: "Best Seller",
    featured: true
},

{
    id: 6,
    name: "No. 07 – Santal & Amber",
    category: "Fragrances",
    price: 8490,
    image: "assets/images/products/perfume.webp",
    description: "A warm blend of sandalwood and amber creating a refined signature fragrance with lasting elegance.",
    rating: 5,
    badge: "Signature",
    featured: true
},

{
    id: 7,
    name: "Structured Leather Tote",
    category: "Bags",
    price: 8990,
    image: "assets/images/products/bag.webp",
    description: "A spacious structured leather tote designed to combine functionality with timeless luxury.",
    color: "Brown",
    rating: 5,
    badge: "New Arrival",
    featured: true
},

{
    id: 8,
    name: "Leather Penny Loafers",
    category: "Footwear",
    price: 7490,
    image: "assets/images/products/loafers.webp",
    description: "Classic leather penny loafers handcrafted for exceptional comfort and effortless sophistication.",
    color: "Brown",
    rating: 5,
    badge: "Best Seller",
    featured: true
},

{
    id: 9,
    name: "Satin Button-Down Blouse",
    category: "Women's Clothing",
    price: 6790,
    image: "assets/images/products/women-satin-blouse.webp",
    description: "A luxurious satin blouse with a timeless button-down silhouette, perfect for elegant everyday styling.",
    color: "Ivory",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 10,
    name: "Pleated Midi Skirt",
    category: "Women's Clothing",
    price: 7290,
    image: "assets/images/products/women-midi-skirt.webp",
    description: "A graceful dusty mauve pleated midi skirt designed with effortless movement and timeless sophistication.",
    color: "Mauve",
    rating: 5,
    badge: "",
    featured: false
},

{
    id: 11,
    name: "Linen Maxi Dress",
    category: "Women's Clothing",
    price: 8990,
    image: "assets/images/products/women-maxi-dress.webp",
    description: "A modest linen maxi dress featuring clean lines and a flowing silhouette for refined elegance.",
    color: "Red",
    rating: 4.7,
    badge: "New Arrival",
    featured: false
},

{
    id: 12,
    name: "Straight-Leg Jeans",
    category: "Women's Clothing",
    price: 6990,
    image: "assets/images/products/women-jeans.webp",
    description: "Premium straight-leg denim crafted for everyday comfort with a polished contemporary fit.",
    color: "Blue",
    rating: 4.4,
    badge: "",
    featured: false
},

{
    id: 13,
    name: "Wide-Leg Trousers",
    category: "Women's Clothing",
    price: 7690,
    image: "assets/images/products/women-wide-leg-trousers.webp",
    description: "Soft flowing wide-leg trousers offering an elegant silhouette with exceptional comfort.",
    color: "Beige",
    rating: 4.6,
    badge: "",
    featured: false
},

{
    id: 14,
    name: "Oversized Cotton Shirt",
    category: "Women's Clothing",
    price: 6290,
    image: "assets/images/products/women-oversized-shirt.webp",
    description: "Relaxed oversized cotton shirt tailored with clean lines for effortless everyday luxury.",
    color: "Soft Pink",
    rating: 4.2,
    badge: "",
    featured: false
},

{
    id: 15,
    name: "Cropped Tailored Jacket",
    category: "Women's Clothing",
    price: 9990,
    image: "assets/images/products/women-jacket.webp",
    description: "A structured cropped jacket with refined tailoring that elevates every wardrobe.",
    color: "Cream",
    rating: 4.9,
    badge: "Signature",
    featured: false
},

{
    id: 16,
    name: "Oxford Cotton Shirt",
    category: "Men's Clothing",
    price: 6690,
    image: "assets/images/products/men-oxford-shirt.webp",
    description: "A crisp Oxford cotton shirt tailored for modern sophistication and everyday versatility.",
    color: "White",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 17,
    name: "Knitted Polo Shirt",
    category: "Men's Clothing",
    price: 6290,
    image: "assets/images/products/men-polo.webp",
    description: "A finely knitted polo shirt combining refined texture with timeless casual elegance.",
    color: "Blue",
    rating: 4.5,
    badge: "",
    featured: false
},

{
    id: 18,
    name: "Slim-Fit Chinos",
    category: "Men's Clothing",
    price: 7390,
    image: "assets/images/products/men-chinos.webp",
    description: "Premium slim-fit chinos crafted for comfort, versatility, and effortless smart-casual styling.",
    color: "Cream",
    rating: 4.4,
    badge: "",
    featured: false
},

{
    id: 19,
    name: "Premium Cotton T-Shirt",
    category: "Men's Clothing",
    price: 4490,
    image: "assets/images/products/men-tshirt.webp",
    description: "An elevated everyday essential made from soft premium cotton with a clean minimalist finish.",
    color: "Black",
    rating: 4.6,
    badge: "",
    featured: false
},

{
    id: 20,
    name: "Bomber Jacket",
    category: "Men's Clothing",
    price: 10990,
    image: "assets/images/products/men-bomber.webp",
    description: "A contemporary bomber jacket featuring premium construction and timeless urban styling.",
    color: "Olive",
    rating: 4.9,
    badge: "New Arrival",
    featured: false
},

{
    id: 21,
    name: "Straight-Leg Jeans",
    category: "Men's Clothing",
    price: 6990,
    image: "assets/images/products/men-jeans.webp",
    description: "Classic straight-leg denim designed for everyday comfort with a refined modern silhouette.",
    color: "Blue",
    rating: 4.3,
    badge: "",
    featured: false
},

{
    id: 22,
    name: "Cotton Overshirt",
    category: "Men's Clothing",
    price: 7890,
    image: "assets/images/products/men-overshirt.webp",
    description: "A heavyweight cotton overshirt designed for effortless layering throughout the seasons.",
    color: "Brown",
    rating: 4.7,
    badge: "Signature",
    featured: false
},

{
    id: 23,
    name: "Leather Crossbody Bag",
    category: "Bags",
    price: 7990,
    image: "assets/images/products/crossbody-bag.webp",
    description: "A compact leather crossbody bag designed for effortless everyday elegance and functionality.",
    color: "Black",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 24,
    name: "Curved Shoulder Bag",
    category: "Bags",
    price: 7490,
    image: "assets/images/products/shoulder-bag.webp",
    description: "A modern curved shoulder bag with clean lines and a refined minimalist silhouette.",
    color: "Burgundy",
    rating: 4.6,
    badge: "",
    featured: false
},

{
    id: 25,
    name: "Mini Top Handle Bag",
    category: "Bags",
    price: 6990,
    image: "assets/images/products/mini-bag.webp",
    description: "A structured mini handbag crafted for elegant occasions and elevated everyday styling.",
    color: "Cream",
    rating: 4.5,
    badge: "",
    featured: false
},

{
    id: 26,
    name: "Canvas Tote Bag",
    category: "Bags",
    price: 4990,
    image: "assets/images/products/canvas-tote.webp",
    description: "A spacious canvas tote designed for daily essentials with understated sophistication.",
    color: "Olive",
    rating: 4.3,
    badge: "",
    featured: false
},

{
    id: 27,
    name: "Leather Satchel",
    category: "Bags",
    price: 7990,
    image: "assets/images/products/satchel.webp",
    description: "Premium leather satchel featuring timeless craftsmanship and practical organization.",
    color: "Brown",
    rating: 4.9,
    badge: "Signature",
    featured: false
},

{
    id: 28,
    name: "Quilted Shoulder Bag",
    category: "Bags",
    price: 7690,
    image: "assets/images/products/quilted-bag.webp",
    description: "A luxurious quilted shoulder bag finished with refined detailing for versatile styling.",
    color: "Black",
    rating: 4.7,
    badge: "",
    featured: false
},

{
    id: 29,
    name: "Leather Bucket Bag",
    category: "Bags",
    price: 7290,
    image: "assets/images/products/bucket-bag.webp",
    description: "A soft leather bucket bag blending relaxed elegance with everyday practicality.",
    color: "Mauve",
    rating: 4.4,
    badge: "New Arrival",
    featured: false
},

{
    id: 30,
    name: "Leather Sneakers",
    category: "Footwear",
    price: 6890,
    image: "assets/images/products/sneakers.webp",
    description: "Premium leather sneakers crafted with clean lines for everyday comfort and timeless style.",
    color: "White",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 31,
    name: "Block Heel Sandals",
    category: "Footwear",
    price: 5890,
    image: "assets/images/products/block-heels.webp",
    description: "Elegant block heel sandals designed for effortless sophistication and all-day comfort.",
    color: "Beige",
    rating: 4.5,
    badge: "",
    featured: false
},

{
    id: 32,
    name: "Chelsea Boots",
    category: "Footwear",
    price: 7990,
    image: "assets/images/products/chelsea-boots.webp",
    description: "Classic Chelsea boots crafted from premium leather with a refined modern silhouette.",
    color: "Brown",
    rating: 4.9,
    badge: "Signature",
    featured: false
},

{
    id: 33,
    name: "Leather Pumps",
    category: "Footwear",
    price: 6490,
    image: "assets/images/products/pumps.webp",
    description: "Timeless leather pumps designed to elevate every wardrobe with understated elegance.",
    color: "Black",
    rating: 4.6,
    badge: "",
    featured: false
},

{
    id: 34,
    name: "Performance Sneakers",
    category: "Footwear",
    price: 7290,
    image: "assets/images/products/running-sneakers.webp",
    description: "Lightweight performance sneakers combining comfort, support, and modern aesthetics.",
    color: "Olive",
    rating: 4.4,
    badge: "",
    featured: false
},

{
    id: 35,
    name: "Leather Sandals",
    category: "Footwear",
    price: 5490,
    image: "assets/images/products/leather-sandals.webp",
    description: "Premium leather sandals offering breathable comfort with a minimalist finish.",
    color: "Brown",
    rating: 4.3,
    badge: "",
    featured: false
},

{
    id: 36,
    name: "Slide Sandals",
    category: "Footwear",
    price: 4990,
    image: "assets/images/products/slides.webp",
    description: "Modern slide sandals designed for relaxed everyday wear without compromising style.",
    color: "White",
    rating: 4.7,
    badge: "New Arrival",
    featured: false
},

{
    id: 37,
    name: "Gold Hoop Earrings",
    category: "Accessories",
    price: 2990,
    image: "assets/images/products/hoop-earrings.webp",
    description: "Classic gold hoop earrings crafted to complement both casual and formal looks.",
    color: "Gold",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 38,
    name: "Pearl Pendant Necklace",
    category: "Accessories",
    price: 3590,
    image: "assets/images/products/pearl-necklace.webp",
    description: "A timeless pearl pendant necklace that adds effortless elegance to every outfit.",
    color: "Gold",
    rating: 4.9,
    badge: "Signature",
    featured: false
},

{
    id: 39,
    name: "Silk Printed Scarf",
    category: "Accessories",
    price: 2490,
    image: "assets/images/products/silk-scarf.webp",
    description: "Luxuriously soft silk scarf featuring a refined print inspired by modern elegance.",
    color: "Cream",
    rating: 4.5,
    badge: "",
    featured: false
},

{
    id: 40,
    name: "Classic Cufflinks",
    category: "Accessories",
    price: 1990,
    image: "assets/images/products/cufflinks.webp",
    description: "Elegant cufflinks finished with a polished shine for timeless formal styling.",
    color: "Silver",
    rating: 4.4,
    badge: "",
    featured: false
},

{
    id: 41,
    name: "Chain Bracelet",
    category: "Accessories",
    price: 2790,
    image: "assets/images/products/bracelet.webp",
    description: "Minimal chain bracelet designed with a contemporary silhouette for everyday luxury.",
    color: "Gold",
    rating: 4.6,
    badge: "",
    featured: false
},

{
    id: 42,
    name: "Leather Wallet",
    category: "Accessories",
    price: 4790,
    image: "assets/images/products/wallet.webp",
    description: "Premium leather wallet featuring multiple compartments and timeless craftsmanship.",
    color: "Black",
    rating: 4.7,
    badge: "New Arrival",
    featured: false
},

{
    id: 43,
    name: "Oversized Sunglasses",
    category: "Accessories",
    price: 5690,
    image: "assets/images/products/sunglasses.webp",
    description: "Oversized sunglasses offering UV protection with a bold, sophisticated design.",
    color: "Brown",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 44,
    name: "No. 01 – Rose Velours",
    category: "Fragrances",
    price: 7990,
    image: "assets/images/products/perfume-rose.webp",
    description: "A luxurious floral fragrance blending velvety rose petals with delicate white musk.",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 45,
    name: "No. 02 – Ocean Mist",
    category: "Fragrances",
    price: 6990,
    image: "assets/images/products/perfume-ocean.webp",
    description: "A refreshing aquatic fragrance with crisp marine notes and soft citrus accords.",
    rating: 4.6,
    badge: "",
    featured: false
},

{
    id: 46,
    name: "No. 03 – Midnight Oud",
    category: "Fragrances",
    price: 8990,
    image: "assets/images/products/perfume-oud.webp",
    description: "An intense blend of rich oud, smoky woods, and warm amber for an unforgettable signature scent.",
    rating: 4.9,
    badge: "Signature",
    featured: false
},

{
    id: 47,
    name: "No. 04 – Green Tea Essence",
    category: "Fragrances",
    price: 5990,
    image: "assets/images/products/perfume-green-tea.webp",
    description: "A fresh and calming fragrance inspired by green tea leaves with soft herbal undertones.",
    rating: 4.5,
    badge: "",
    featured: false
},

{
    id: 48,
    name: "No. 05 – Vanilla Cashmere",
    category: "Fragrances",
    price: 7490,
    image: "assets/images/products/perfume-vanilla.webp",
    description: "A comforting gourmand fragrance combining creamy vanilla with smooth cashmere woods.",
    rating: 4.7,
    badge: "New Arrival",
    featured: false
},

{
    id: 49,
    name: "No. 06 – Amber Noir",
    category: "Fragrances",
    price: 8490,
    image: "assets/images/products/perfume-amber.webp",
    description: "A bold amber fragrance layered with exotic spices and deep woody accords for lasting sophistication.",
    rating: 4.8,
    badge: "",
    featured: false
},

{
    id: 50,
    name: "No. 08 – Citrus Soleil",
    category: "Fragrances",
    price: 6490,
    image: "assets/images/products/perfume-citrus.webp",
    description: "A vibrant citrus fragrance balanced with delicate florals and warm musk for everyday freshness.",
    rating: 4.4,
    badge: "",
    featured: false
}
];

document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedProducts();

});

function renderFeaturedProducts() {

    const productsGrid = document.getElementById("productsGrid");

    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    const featuredProducts = products
        .filter(product => product.featured)
        .slice(0, 8);

    featuredProducts.forEach(product => {

        productsGrid.innerHTML += createProductCard(product);

    });

}

function generateStars(rating){

    let stars = "";

    let fullStars = Math.floor(rating);

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
// Luxury Toast
// ==========================================

document.addEventListener("click", function(e){

    const button = e.target.closest(".quick-add");

    if(!button) return;

    const card = button.closest(".product-card");

    const productId = Number(card.dataset.id);

    const product = products.find(item => item.id === productId);

    const productName = product.name;

    if(product){

        addToCart(product);

    }

    const toast = document.getElementById("toast");

    document.getElementById("toastProduct").textContent = productName;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    },3000);

});