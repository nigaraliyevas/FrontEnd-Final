"use strict";

function openAndClose(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
// header autoplay slider
$(document).ready(function () {
  $(".autoplay").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

// main product slider
$(".responsive").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// main product slider-6
$(".responsive-6").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// change slider buttons style
const deals = document.querySelectorAll(".deals");
deals.forEach((deal) => {
  const icon = deal.querySelectorAll(".slick-arrow");
  icon.forEach((i) => {
    i.classList.add("slider-buttons");
  });
});
//
let lastClicked = null;
const filterCars = document.querySelectorAll(".cars-body__left-item");
filterCars.forEach((brands) => {
  brands.addEventListener("click", () => {
    if (lastClicked != null) {
      lastClicked.style.backgroundColor = "#f6f9fc";
      lastClicked.style.boxShadow = "none";
    }
    brands.style.backgroundColor = "white";
    brands.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 26px";
    lastClicked = brands;
  });
});
const filterBtns = document.querySelectorAll(".filter");
const shops = document.querySelectorAll(".shops");
const brands = document.querySelectorAll(".brands");
// filter brands
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = btn.innerHTML.trim();
    if (target === "Brands") {
      brands.forEach((brand) => brand.classList.remove("hidden"));
      shops.forEach((shop) => shop.classList.add("hidden"));
    } else {
      shops.forEach((shop) => shop.classList.remove("hidden"));
      brands.forEach((brand) => brand.classList.add("hidden"));
    }
  });
});

// shop modal opens
$(".shopping-icon").click(function () {
  $(".basket-modal").toggle();
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
