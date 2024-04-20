"use strict";
$(document).ready(function () {
  $(".review-btn").click(function () {
    $(".review-info").toggle();
    $(".description-info").hide();
    $(this).css("border-bottom", "4px solid #e94560");
    $(".desc-btn").css("border-bottom", "none");
  });

  $(".desc-btn").click(function () {
    $(".description-info").toggle();
    $(".review-info").hide();
    $(this).css("border-bottom", "4px solid #e94560");
    $(".review-btn").css("border-bottom", "none");
  });
});
// Change image side
const images = document.querySelectorAll(".related-img-view img");
images[0].parentElement.classList.add("selected");
images.forEach((img) => {
  img.addEventListener("click", function () {
    const changeImage = document.querySelector(".related-img img");
    const getImg = img.getAttribute("src");
    changeImage.setAttribute("src", getImg);

    images.forEach((otherImg) => {
      if (otherImg.parentElement.classList.contains("selected")) {
        otherImg.parentElement.classList.remove("selected");
      }
    });

    img.parentElement.classList.add("selected");
  });
});

const counterDisplay = document.querySelector(".related-right__btn");
counterDisplay.addEventListener("click", function () {
  const counter = document.querySelector(".related-right__counter");
  if (counter.classList.contains("hidden")) {
    counterDisplay.classList.add("!hidden");
    counter.classList.remove("hidden");
  }
});

$("#down-icon").click(function () {
  $(".mobile-side-dropdown").toggle();
});

// LocalStorage
let basketProducts = [];

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
} else {
  basketProducts = JSON.parse(localStorage.getItem("basket"));
}
const plusBtns = document.querySelectorAll(".plus");
plusBtns.forEach((plus) => {
  plus.addEventListener("click", function () {
    if (this.previousElementSibling.classList.contains("hidden")) {
      this.previousElementSibling.classList.remove("hidden");
    }
    const findProduct = this.closest(".product");
    const productId = findProduct
      .querySelector(".product-body")
      .getAttribute("id");
    const existProduct = basketProducts.find((p) => p.id == productId);
    console.log(productId);

    if (existProduct) {
      existProduct.count++;
      updateProductCartCount(findProduct, existProduct.count);
    } else {
      const product = {
        id: productId,
        img: findProduct
          .querySelector(".product-body-image img")
          .getAttribute("src"),
        name: findProduct.querySelector(".product-body-left p").innerHTML,
        price: findProduct.querySelector(".product-discounted").innerHTML,
        count: 1,
      };
      basketProducts.push(product);
      updateProductCartCount(findProduct, product.count);
    }
    localStorage.setItem("basket", JSON.stringify(basketProducts));
    calcBasketCount();
  });
});

const minusBtns = document.querySelectorAll(".minus");
minusBtns.forEach((minus) => {
  minus.addEventListener("click", function () {
    const findProduct = this.closest(".product");
    const productId = findProduct
      .querySelector(".product-body")
      .getAttribute("id");
    const existProduct = basketProducts.find((p) => p.id == productId);

    if (existProduct) {
      if (existProduct.count > 0) {
        existProduct.count--;
        updateProductCartCount(findProduct, existProduct.count);
      }

      if (existProduct.count === 0) {
        const productIndex = basketProducts.findIndex(
          (p) => p.id === productId
        );
        if (productIndex !== -1) {
          basketProducts.splice(productIndex, 1);
          this.parentElement.classList.add("hidden");
        }
      }
    }
    localStorage.setItem("basket", JSON.stringify(basketProducts));
    calcBasketCount();
  });
});

function calcBasketCount() {
  const countBasket = document.querySelector(".count");
  let length = 0;
  for (let i = 0; i < basketProducts.length; i++) {
    length += basketProducts[i].count;
  }
  countBasket.innerText = length;
}

function updateProductCartCount(p, count) {
  const relatedProduct = p.querySelector(".product-body__count");
  relatedProduct.innerHTML = count;
}
function updateAllData() {
  localStorage.setItem("basket", JSON.stringify(basketProducts));
  calcBasketCount();
}
calcBasketCount();
