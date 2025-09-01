let total = 0;
const selectedProducts = {};

document.querySelectorAll(".product").forEach(product => {
    product.addEventListener("click", () => {
        const name = product.getAttribute("data-name");
        const price = parseInt(product.getAttribute("data-price"));

        if (selectedProducts[name]) {
            selectedProducts[name].quantity += 1;
        } else {
            selectedProducts[name] = { price, quantity: 1 };
        }

        updateTotal();
    });
});

function updateTotal() {
    total = 0;
    let message = "";

    for (const [name, data] of Object.entries(selectedProducts)) {
        total += data.price * data.quantity;
        message += `${data.quantity} ${name}, `;
    }

    document.getElementById("total").textContent = total;
    return message.trim();
}

document.getElementById("send-whatsapp").addEventListener("click", () => {
    const number = "+51923966738";
    const message = `Hola, quiero pedir: ${updateTotal()} por un total de ${total} PEN`;
    const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});
