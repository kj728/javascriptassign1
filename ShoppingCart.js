let items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }]

//counter for total price
let totalPrice = 0.00;
for (var i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
}
console.log(totalPrice);