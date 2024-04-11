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
