const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});
function orderProduct(productName) {

    let phoneNumber = "233249246556"; // 👈 REPLACE with your WhatsApp number

    let message = `Hello, I want to order: ${productName}`;

    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
let selectedProduct = "";

// Open modal when clicking product
function orderProduct(productName){

    document.getElementById("product").value = productName;

    document.getElementById("orderModal").style.display = "block";

    calculateTotal();

}
// Close modal
function closeModal(){
    document.getElementById("orderModal").style.display = "none";
}

// Send to WhatsApp
function sendOrder(event){

    event.preventDefault();

    let product = document.getElementById("product").value;
    let customText = document.getElementById("customText").value;
    let quantity = document.getElementById("quantity").value;
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;

    let businessNumber = "233249246556";

    let message = `
New Order Request:

Product: ${product}
Custom Text: ${customText}
Quantity: ${quantity}

Customer Name: ${name}
Customer Phone: ${phone}
`;

    let url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    closeModal();
}


function calculateTotal(){

    let product =
        document.getElementById("product").value;

    let quantity =
        parseInt(document.getElementById("quantity").value) || 1;

    let price =
        productPrices[product] || 0;

    let total =
        price * quantity;

    document.getElementById("totalPrice").value =
        "GH₵" + total;
}