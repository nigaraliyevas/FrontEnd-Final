"use strict";

function openAndClose(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

// dropdown menu top
const downIcons = document.querySelectorAll(".dropdown-icon");
downIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const choosenCountry = this.closest(".right-side__country");
    const dropMenu = choosenCountry.querySelector(".dropdown-menu");

    openAndClose(dropMenu);
  });
});
// category menu
const categoryIcon = document.querySelector(".category-icon");
categoryIcon.addEventListener("click", () => {
  const categoryList = document.querySelector(".nav-categories");
  openAndClose(categoryList);
});
// user register modal
const userIcon = document.querySelector(".user-icon");
const registerModal = document.querySelector(".register-modal");
userIcon.addEventListener("click", function () {
  openAndClose(registerModal);
});

// show password on login
const eyeIcon = document.querySelector(".show-password");
eyeIcon.addEventListener("click", () => {
  const password = document.querySelector(".password-input");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.add("fa-solid");
    eyeIcon.classList.add("fa-light");
  } else {
    password.type = "password";
    eyeIcon.classList.add("fa-light");
    eyeIcon.classList.remove("fa-solid");
  }
});

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
const deals = document.querySelectorAll(".deals");
deals.forEach((deal) => {
  const icon = deal.querySelectorAll(".slick-arrow");
  icon.forEach((i) => {
    i.classList.add("slider-buttons");
  });
});
