function createProductCard(product) {

    const liked = Wishlist.isWishlisted(product.id);

    return `

    <article class="product-card">

        <div class="product-image">

            <a href="product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
            </a>

            ${
                product.badge
                    ? `<span class="product-badge">${product.badge}</span>`
                    : ""
            }

            <button class="wishlist-btn" data-id="${product.id}">
                <i class="${
                    liked ? "ri-heart-fill" : "ri-heart-line"
                }"></i>
            </button>

            <div class="product-overlay">

                <a href="product.html?id=${product.id}"
                   class="quick-view-btn">

                    Quick View

                </a>

            </div>

        </div>

        <div class="product-content">

            <p class="product-category">

                ${product.category}

            </p>

            <h3 class="product-title">

                <a href="product.html?id=${product.id}">
                    ${product.name}
                </a>

            </h3>

            <div class="rating">

                <div class="stars">

                    ${generateStars(product.rating)}

                </div>

                <span class="rating-count">

                    (${product.rating})

                </span>

            </div>

            <div class="product-bottom">

                <span class="product-price">

                    Rs. ${product.price.toLocaleString()}

                </span>

                <button
                    class="add-cart-btn"
                    data-id="${product.id}">

                    Add to Bag

                </button>

            </div>

        </div>

    </article>

    `;
}

document.addEventListener("click", function(e){

    const button = e.target.closest(".add-cart-btn");

    if(!button) return;

    const productId = Number(button.dataset.id);

    const product = products.find(item => item.id === productId);

    if(product){

        addToCart(product);

        showToast(product);

    }

});