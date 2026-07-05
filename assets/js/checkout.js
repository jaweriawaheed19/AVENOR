// ==========================================
// LOAD CART
// ==========================================

const checkoutCart = JSON.parse(localStorage.getItem("avenorCart")) || [];

const checkoutItems = document.getElementById("checkoutItems");
const subtotalElement = document.getElementById("checkoutSubtotal");
const shippingElement = document.getElementById("checkoutShipping");
const totalElement = document.getElementById("checkoutTotal");

// ==========================================
// RENDER ORDER SUMMARY
// ==========================================

renderCheckout();

function renderCheckout() {

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    let subtotal = 0;

    checkoutCart.forEach(product => {

        subtotal += product.price * product.quantity;

        checkoutItems.innerHTML += `

        <div class="checkout-item">

            <div>

                <strong>${product.name}</strong><br>

                Qty: ${product.quantity}

            </div>

            <span>

                Rs. ${(product.price * product.quantity).toLocaleString()}

            </span>

        </div>

        `;

    });

    const shipping = subtotal >= 10000 || subtotal === 0 ? 0 : 350;

    subtotalElement.textContent = `Rs. ${subtotal.toLocaleString()}`;

    shippingElement.textContent =
        shipping === 0
            ? "FREE"
            : `Rs. ${shipping.toLocaleString()}`;

    totalElement.textContent =
        `Rs. ${(subtotal + shipping).toLocaleString()}`;

}

const phone = document.getElementById("phone");

phone.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

});

const postal = document.getElementById("postal");

postal.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

});

const placeOrderBtn = document.getElementById("placeOrderBtn");

placeOrderBtn.addEventListener("click", function () {

    let valid = true;

    function validate(id, message){

        const input = document.getElementById(id);

        const error = document.getElementById(id + "Error");

        input.classList.remove("input-error");

        error.textContent = "";

        if(input.value.trim() === ""){

            input.classList.add("input-error");

            error.textContent = message;

            valid = false;

        }

    }

    validate("email","Please enter your email.");
    validate("phone","Please enter your phone number.");
    validate("firstName","Please enter your first name.");
    validate("lastName","Please enter your last name.");
    validate("city","Please enter your city.");
    validate("address","Please enter your address.");
    validate("postal","Please enter your postal code.");

    const phone = document.getElementById("phone");

    if(phone.value && phone.value.length !== 11){

        phone.classList.add("input-error");

        document.getElementById("phoneError").textContent =
        "Phone number must be 11 digits.";

        valid = false;

    }

    const postal = document.getElementById("postal");

    if(postal.value && postal.value.length !== 5){

        postal.classList.add("input-error");

        document.getElementById("postalError").textContent =
        "Postal code must be 5 digits.";

        valid = false;

    }

    localStorage.setItem(
    "avenorLastOrder",
    JSON.stringify(checkoutCart)
);

const payment =
document.querySelector('input[name="payment"]:checked')
.parentElement.textContent.trim();

localStorage.setItem("avenorPayment", payment);

localStorage.removeItem("avenorCart");

window.location.href = "success.html";

});