"use strict";
function openAndClose(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
// user register modal
const userIcon = document.querySelector(".user-icon");
const registerModal = document.querySelector(".register-modal");
userIcon.addEventListener("click", function () {
  openAndClose(registerModal);
});

function closeRegister() {
  window.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("register-modal") &&
      !e.target.classList.contains("user-icon")
    ) {
      const registerModal2 = document.querySelector(".register-modal");

      registerModal2.classList.add("hidden");
    }
  });
}
closeRegister();
// category menu
const categoryIcon = document.querySelector(".category-icon");
categoryIcon.addEventListener("click", () => {
  const categoryList = document.querySelector(".nav-categories");
  openAndClose(categoryList);
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
// dropdown menu top countries
const dropdownItems = document.querySelectorAll(".dropdown-menu__item");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedLanguage = this.querySelector("span").textContent;
    const selectedImgSrc = this.querySelector("img").getAttribute("src");
    const choosenCountry = this.closest(".right-side__country");
    const spanElement = choosenCountry.querySelector("span");
    const imgElement = choosenCountry.querySelector("img");

    spanElement.textContent = selectedLanguage;
    imgElement.setAttribute("src", selectedImgSrc);
  });
});

const downIcons = document.querySelectorAll(".dropdown-icon");
downIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const choosenCountry = this.closest(".right-side__country");
    const dropMenu = choosenCountry.querySelector(".dropdown-menu");
    openAndClose(dropMenu);
  });
});
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", function () {
  const searchText = this.value.toLowerCase();
  const items = document.querySelectorAll(".product");
  items.forEach((item) => {
    const itemText = item.innerHTML.toLowerCase();
    if (itemText.indexOf(searchText) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
      item.style.width = "50%";
    }
    item.style.width = "31%";
  });
});
