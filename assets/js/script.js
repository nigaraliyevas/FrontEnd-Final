"use strict";

function openAndClose(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const hiddenBar = document.querySelector(".hidden-bar");
plus.addEventListener("click", () => {
  if (hiddenBar.classList.contains("hidden")) {
    hiddenBar.classList.remove("hidden");
  }
});
minus.addEventListener("click", () => {
  const count = document.querySelector(".product-body__count");
  // if (!count) {
  //   hiddenBar.classList.add("hidden");
  // }
  hiddenBar.classList.add("hidden");
});
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
