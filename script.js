let currentCoffee = "";
let tempQty = "";
let tempPayMethod = "";
let tempNote = "";

function orderNow(itemName) {
    currentCoffee = itemName;
    document.querySelector("#selectedItem span").innerText = currentCoffee;
    document.getElementById("customModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("customModal").style.display = "none";
}

function closePayModal() {
    document.getElementById("paymentModal").style.display = "none";
}

function closeSuccess() {
    document.getElementById("successModal").style.display = "none";
}

function finalCheckout() {
    tempQty = document.getElementById("qty").value;
    tempPayMethod = document.getElementById("payment").value;
    tempNote = document.getElementById("customNote").value;

    if (tempPayMethod === "Bkash/Nagad" || tempPayMethod === "Card") {
        document.getElementById("customModal").style.display = "none";
        document.getElementById("payTitle").innerText = "Payment via " + tempPayMethod;
        document.getElementById("paymentModal").style.display = "flex";
    } else {
        showSuccess();
    }
}

function processPayment() {
    const num = document.getElementById("payNumber").value;
    const pin = document.getElementById("payPin").value;

    if (num && pin) {
        document.getElementById("paymentModal").style.display = "none";
        showSuccess();
    } else {
        alert("Please enter valid account number and pin.");
    }
}

function showSuccess() {
    document.getElementById("customModal").style.display = "none";
    let summaryText = `Order Placed!<br>You ordered <b>${tempQty}</b> cup(s) of <b>${currentCoffee}</b> via <b>${tempPayMethod}</b>.`;
    
    if (tempNote.trim() !== "") {
        summaryText += `<br><i>Special Note: ${tempNote}</i>`;
    }

    document.getElementById("finalSummary").innerHTML = summaryText;
    document.getElementById("successModal").style.display = "flex";
    
    // Reset inputs
    document.getElementById("customNote").value = "";
    document.getElementById("payNumber").value = "";
    document.getElementById("payPin").value = "";
}

// Close modals on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
        closePayModal();
        closeSuccess();
    }
}