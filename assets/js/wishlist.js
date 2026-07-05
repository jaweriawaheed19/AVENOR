// ==========================================
// AVENOR WISHLIST MANAGER
// ==========================================

const Wishlist = {

    items: JSON.parse(localStorage.getItem("avenorWishlist")) || [],

    save() {

        localStorage.setItem(
            "avenorWishlist",
            JSON.stringify(this.items)
        );

    },

    isWishlisted(id) {

        return this.items.some(item => item.id === id);

    },

    toggle(id) {

        const exists = this.isWishlisted(id);

        if (exists) {

            this.items = this.items.filter(item => item.id !== id);

        } else {

            const product = products.find(item => item.id === id);

            if (product) {

                this.items.push(product);

            }

        }

        this.save();

        this.updateCount();

    },

    updateCount() {

        const badge = document.getElementById("wishlistCount");

        if (!badge) return;

        badge.textContent = this.items.length;

    }

};

Wishlist.updateCount();

// ==========================================
// Render Wishlist Page
// ==========================================

function renderWishlistPage() {

    const container = document.getElementById("wishlistContainer");

    const empty = document.getElementById("wishlistEmpty");

    const count = document.getElementById("wishlistCountText");

    if (!container) return;

    container.innerHTML = "";

    count.textContent = `${Wishlist.items.length} Item${Wishlist.items.length !== 1 ? "s" : ""}`;

    if (Wishlist.items.length === 0) {

        empty.style.display = "block";

        return;

    }

    empty.style.display = "none";

    Wishlist.items.forEach(product => {

        container.innerHTML += `

        <article class="wishlist-card">

            <a
                href="product.html?id=${product.id}"
                class="wishlist-image">

                <img
                    src="${product.image}"
                    alt="${product.name}">

            </a>

            <div class="wishlist-info">

                <p class="wishlist-category">

                    ${product.category}

                </p>

                <h2 class="wishlist-title">

                    <a href="product.html?id=${product.id}">

                        ${product.name}

                    </a>

                </h2>

                <div class="rating">

                    <div class="stars">

                        ${generateStars(product.rating)}

                    </div>

                    <span class="rating-count">

                        (${product.rating})

                    </span>

                </div>

                <p class="wishlist-price">

                    Rs. ${product.price.toLocaleString()}

                </p>

                <div class="wishlist-actions">

    <button
        class="btn-primary wishlist-add-cart"
        data-id="${product.id}">

        Add to Bag

    </button>

    <button
    class="remove-btn"
    data-id="${product.id}">

    <i class="ri-delete-bin-line"></i>

    Remove

</button>

</div>

            </div>

        </article>

        `;

    });

}

document.addEventListener("click", function (e) {

    const heart = e.target.closest(".wishlist-btn");

    if (!heart) return;

    e.preventDefault();
    e.stopPropagation();

    const productId = Number(heart.dataset.id);

    Wishlist.toggle(productId);

    const icon = heart.querySelector("i");

    if (Wishlist.isWishlisted(productId)) {

        icon.classList.remove("ri-heart-line");
        icon.classList.add("ri-heart-fill");

        heart.classList.add("active");

    }

    else{

        icon.classList.remove("ri-heart-fill");
        icon.classList.add("ri-heart-line");

        heart.classList.remove("active");

    }

});
// ==========================================
// Wishlist Page Events
// ==========================================

document.addEventListener("click", function(e){

    const removeBtn = e.target.closest(".remove-btn");

    if(removeBtn){

        const id = Number(removeBtn.dataset.id);

        Wishlist.toggle(id);

        renderWishlistPage();

        return;

    }

    const addBtn = e.target.closest(".wishlist-add-cart");

    if(addBtn){

        const id = Number(addBtn.dataset.id);

        const product = products.find(item => item.id === id);

        if(product){

            addToCart(product);

            showToast(product);

        }

    }

});

document.addEventListener("DOMContentLoaded", () => {

    Wishlist.updateCount();

    renderWishlistPage();

});