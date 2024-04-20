"use strict";
$("#down-icon").click(function () {
  $(".mobile-side-dropdown").toggle();
});
// Local Storage Append HTML
let basketProducts = [];

if (localStorage.getItem("basket") !== null) {
  basketProducts = JSON.parse(localStorage.getItem("basket"));
}

function appendProducts() {
  const ordersAll = document.querySelector(".orders-all");
  ordersAll.innerHTML = "";
  basketProducts.forEach((product) => {
    ordersAll.innerHTML += `<div class="order py-3">
    <div class="order-body flex items-center gap-5" id=${product.id}>
      <div class="order-body__img">
        <img src="${product.img}" alt="" class="order-body__img-size">
      </div>
      <div class="order-body__info w-full">
        <div class="order-body__info-top flex justify-between mb-16">
          <p class="order-body__name font-medium text-xl text-textLightBlackColor">${
            product.name
          }</p>
          <i class="fa-light fa-xmark remove cursor-pointer text-textLightBlackColor text-xl font-medium"></i>
        </div>
        <div class="order-body__info-bottom flex justify-between">
          <div class="order-body__cost">
            <span class="text-textgray uppercase font-medium">${
              product.price
            }</span>
            <span class=" text-textgray font-medium">x </span>
            <span class="order-count text-textgray font-medium"> ${
              product.count
            }</span>
            <span class="order-price text-textLightRed font-medium">US$${getPrice(
              product.price,
              product.count
            )}</span>
          </div>
          <div class="order-body__counter">
            <i class="fa-thin fa-square-minus minus cursor-pointer"></i>
            <span class="order-body-count font-medium text-xl">${
              product.count
            }</span>
            <i class="fa-thin fa-square-plus plus cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
    </div>`;
  });
  calcBasketCount();
};
appendProducts();

function calcBasketCount() {
  const countBasket = document.querySelector(".count");
  let length = 0;
  for (let i = 0; i < basketProducts.length; i++) {
    length += basketProducts[i].count;
  }
  countBasket.innerText = length;
};

const plusBtns = document.querySelectorAll(".plus");
plusBtns.forEach((plus) => {
  plus.addEventListener("click", function () {
    const findProduct = this.closest(".order");
    const productId = findProduct
      .querySelector(".order-body")
      .getAttribute("id");
    const product = basketProducts.find((p) => p.id === productId);

    if (product) {
      product.count++;
      const orderCount = findProduct.querySelector(".order-count");
      const orderTimes = findProduct.querySelector(".order-body-count");
      if (orderCount) {
        orderCount.innerHTML = product.count;
      }
      if (orderTimes) {
        orderTimes.innerHTML = product.count;
      }
      findProduct.querySelector(".order-price").innerHTML =
        "$US" + getPrice(product.price, product.count);
      // Append total price
      document.querySelector(".total").innerHTML = getTotal();
      localStorage.setItem("basket", JSON.stringify(basketProducts));
      calcBasketCount();
    }
  });
});
const minusBtns = document.querySelectorAll(".minus");
minusBtns.forEach((minus) => {
  minus.addEventListener("click", function () {
    const findProduct = this.closest(".order");
    const productId = findProduct
      .querySelector(".order-body")
      .getAttribute("id");
    const product = basketProducts.find((p) => p.id === productId);

    if (product && product.count > 0) {
      product.count--;
      const orderCount = findProduct.querySelector(".order-count");
      const orderTimes = findProduct.querySelector(".order-body-count");

      if (orderCount) {
        orderCount.innerHTML = product.count;
      }
      if (orderTimes) {
        orderTimes.innerHTML = product.count;
      }
      findProduct.querySelector(".order-price").innerHTML =
        "$US" + getPrice(product.price, product.count);
      // Append total price
      document.querySelector(".total").innerHTML = getTotal();
      localStorage.setItem("basket", JSON.stringify(basketProducts));
      calcBasketCount();
    }
    if (product.count == 0) {
      localStorage.setItem("basket", JSON.stringify(basketProducts));
      calcBasketCount();
    }
  });
});

function updateProductCartCount(p, count) {
  const relatedProduct = p.querySelector(".product-body__count");
  relatedProduct.innerHTML = count;
}
const removeBtns = document.querySelectorAll(".remove");
removeBtns.forEach((remove) => {
  remove.addEventListener("click", function () {
    const findProduct = this.closest(".order");
    const productId = findProduct
      .querySelector(".order-body")
      .getAttribute("id");
    basketProducts = basketProducts.filter((p) => p.id !== productId);
    findProduct.remove();
    localStorage.setItem("basket", JSON.stringify(basketProducts));
    calcBasketCount();
  });
});
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
document.querySelector(".total").innerHTML = getTotal();
// thx God code is workingg
