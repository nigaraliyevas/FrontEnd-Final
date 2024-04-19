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

let basketProducts = [];

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
} else {
  basketProducts = JSON.parse(localStorage.getItem("basket"));
}
// shopBtns.forEach((btn) => {
//   btn.addEventListener("click", function (ev) {
//     const findProduct = this.closest(".product");
//     const productId = findProduct
//       .querySelector(".product-body")
//       .getAttribute("id");

//     const existProduct = basketProducts.find((p) => p.id == productId);
//     if (existProduct) {
//       existProduct.count++;

//       const shopProducts = document.querySelectorAll(
//         ".shop-products .shop-product"
//       );

//       shopProducts.forEach((product) => {
//         if (product.getAttribute("id") === productId) {
//           product.querySelector(".shop-product__counter input").value =
//             existProduct.count;
//         }
//       });
//     } else {
//       const product = {
//         id: productId,
//         img: findProduct.querySelector(".product-img").getAttribute("src"),
//         category: findProduct.querySelector(".product-category").innerHTML,
//         name: findProduct.querySelector(".product-name").innerHTML,
//         price: findProduct.querySelector(".product-price").innerHTML,
//         count: 1,
//       };
//       basketProducts.push(product);
//       appendProducts();
//     }
//     localStorage.setItem("basket", JSON.stringify(basketProducts));
//     calcBasketCount();
//   });
// });

const plusBtns = document.querySelectorAll(".plus");
plusBtns.forEach((plus) => {
  plus.addEventListener("click", function () {
    if (this.previousElementSibling.classList.contains("hidden")) {
      this.previousElementSibling.classList.remove("hidden");
    }
  });
});
const minusBtns = document.querySelectorAll(".minus");




// const shopProducts = document.querySelector(".shop-products");
// function appendProducts() {
//   shopProducts.innerHTML = "";
//   basketProducts.forEach((product) => {
//     shopProducts.innerHTML += `<div class="shop-product" id="${product.id}">
//     <div class="shop-product__img">
//       <img src="${product.img}" alt="">
//       </div>
//       <div class="shop-product__content">
//         <p class="shop-product__category">${product.category}</p>
//         <p class="shop-product__name">${product.name}</p>
//       </div>
//       <div class="shop-product__total">
//         <p class="product-product__price">${product.price} AZN</p>
//       </div>
//       <div class="shop-product__counter">
//         <button class="counter-minus">-</button>
//         <input type="number" value="${product.count}" min="1" max="10" class="shop-product__count" />
//         <button class="counter-plus">+</button>
//       </div>
//       <div class="shop-product__settings">
//         <button class="shop-product__remove">
//           <i class="fa-solid fa-trash"></i>
//         </button>
//       </div>
//   </div>
//     `;
//   });
//   removeProducts();
//   increaseCount();
//   decreaseCount();
// }

// appendProducts();
