// ==========================================
// LOAD LAST ORDER
// ==========================================

const lastOrder =
JSON.parse(localStorage.getItem("avenorLastOrder")) || [];

const paymentMethod =
localStorage.getItem("avenorPayment") ||
"Cash on Delivery";

const successItems =
document.getElementById("successItems");

const successTotal =
document.getElementById("successTotal");

const payment =
document.getElementById("paymentMethod");

const orderNumber =
document.getElementById("orderNumber");

const deliveryDate =
document.getElementById("deliveryDate");

// ==========================================
// ORDER NUMBER
// ==========================================

orderNumber.textContent =
"#AVN" +
Math.floor(
100000 + Math.random() * 900000
);

// ==========================================
// DELIVERY DATE
// ==========================================

const date = new Date();

date.setDate(date.getDate() + 4);

deliveryDate.textContent =
date.toLocaleDateString("en-GB",{

day:"numeric",

month:"long",

year:"numeric"

});

// ==========================================
// PAYMENT
// ==========================================

payment.textContent = paymentMethod;

// ==========================================
// ORDER SUMMARY
// ==========================================

let subtotal = 0;

successItems.innerHTML = "";

lastOrder.forEach(product=>{

subtotal += product.price * product.quantity;

successItems.innerHTML += `

<div class="success-item">

<div>

<strong>${product.name}</strong>

<br>

<small>

Qty × ${product.quantity}

</small>

</div>

<div>

Rs. ${(product.price * product.quantity).toLocaleString()}

</div>

</div>

`;

});

const shipping =
subtotal >= 10000 || subtotal === 0
? 0
: 350;

successItems.innerHTML += `

<div class="success-item">

<div>

Shipping

</div>

<div>

${shipping === 0 ? "FREE" : "Rs. " + shipping.toLocaleString()}

</div>

</div>

`;

const total =
subtotal + shipping;

successTotal.textContent =
"Rs. " + total.toLocaleString();

// ==========================================
// CLEANUP
// ==========================================

localStorage.removeItem("avenorLastOrder");
localStorage.removeItem("avenorPayment");