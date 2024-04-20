"use strict";
$("#down-icon").click(function () {
  $(".mobile-side-dropdown").toggle();
});
let basketProducts = [];
if (localStorage.getItem("basket") !== null) {
  basketProducts = JSON.parse(localStorage.getItem("basket"));
}
// Get price
function getPrice(price, count) {
  let number = price.split("US$");
  number = parseFloat(parseFloat(number[1]).toFixed(2));
  const result = number * count;
  return result;
}
// Get total
function getTotal() {
  let result = 0;
  for (let i = 0; i < basketProducts.length; i++) {
    result += getPrice(basketProducts[i].price, basketProducts[i].count);
  }
  return "US$" + result;
}
// Append total price
let totals = document
  .querySelectorAll(".total")
  .forEach((total) => (total.innerHTML = getTotal()));

function calcBasketCount() {
  const countBasket = document.querySelector(".count");
  let length = 0;
  for (let i = 0; i < basketProducts.length; i++) {
    length += basketProducts[i].count;
  }
  countBasket.innerText = length;
}
calcBasketCount();
