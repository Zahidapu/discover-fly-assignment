//first class ticket price calculation
function getFirstClassPrice(total) {
    const firstclassInput = document.getElementById("firstclass-count");
    const firstclassCount = parseInt(firstclassInput.value);
    let firstclassNewCount = firstclassCount;
    if (total == true) {
        firstclassNewCount = firstclassCount + 1;
    } else if (total == false && firstclassCount > 0) {
        firstclassNewCount = firstclassCount - 1;
    }
    firstclassInput.value = firstclassNewCount;
    const firstclassTotal = firstclassNewCount * 150;
    document.getElementById("firstclass-total").innerText = firstclassTotal;
    totalCalculator();
}

//Economy class ticket price calculation
function getEconomyPrice(total) {
    const economyInput = document.getElementById("economy-count");
    const economyCount = parseInt(economyInput.value);
    let economyNewCount = economyCount;
    if (total == true) {
        economyNewCount = economyCount + 1;
    } else if (total == false && economyCount > 0) {
        economyNewCount = economyCount - 1;
    }
    economyInput.value = economyNewCount;
    const economyTotal = economyNewCount * 100;
    document.getElementById("economy-total").innerText = economyTotal;
    totalCalculator();
}


//when firstclass ticket quantity increases
document.getElementById("firstclass-increase").addEventListener('click', function () {
    getFirstClassPrice(true);
});

//when firstclass ticket quantity decreases
document.getElementById("firstclass-decrease").addEventListener('click', function () {
    getFirstClassPrice(false);
});


//when Economyclass ticket quantity increases
document.getElementById("economy-increase").addEventListener('click', function () {
    getEconomyPrice(true);
});

//when Economyclass ticket quantity decreases
document.getElementById("economy-decrease").addEventListener('click', function () {
    getEconomyPrice(false);
});


//total calculation for ticket price
function totalCalculator() {

    const firstclassInput = document.getElementById('firstclass-count');
    const firstclassCount = parseInt(firstclassInput.value);


    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);

    //subtotal price breakdown
    const subtotalPrice = economyCount * 100 + firstclassCount * 150;
    document.getElementById('subtotal-price').innerText = subtotalPrice;

    //tax price breakdown
    const tax = Math.round(subtotalPrice * 0.1);

    document.getElementById('total-tax').innerText = tax;


    //overall total price breakdown
    const grandTotal = tax + subtotalPrice;
    document.getElementById('grand-total').innerText = grandTotal;
}


//Button click Output for final pricing
document.getElementById("booking-button").addEventListener("click", function () {


    getFirstClassPrice();
    getEconomyPrice();
    alert(
        "You have confirmed your ticket. Your total cost is:  $" + document.getElementById(
            "grand-total").innerText +
        " only. " +
        " Thank you for being with us"
    )
});