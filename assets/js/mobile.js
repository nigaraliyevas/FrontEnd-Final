"use strict";
function openAndClose(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
// open category
const dropdownMobile = document.querySelector(".mobile-side-dropdown");
const dropdownIcon = document.getElementById("down-icon");

dropdownIcon.addEventListener("click", function () {
  openAndClose(dropdownMobile);
});

$("#down-icon").click(function () {
  $(".mobile-side-dropdown").toggle();
});

$(".open-hidden").click(function () {
  $(".glasses-categories__dropdown").toggle(500);
});

$(".icon-sort").click(function () {
  $(".sort-dropdown").toggle();
});

const sortDropdown = document.querySelectorAll(".sort-dropdown__list li");

sortDropdown.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedSortOption = this.textContent;
    const choosenSortSpan = document.querySelector(".choosen-sort span");
    choosenSortSpan.textContent = selectedSortOption;
  });
});

const dropIcon = document.querySelectorAll(".icon-sort");


dropIcon.forEach((icon) => {
  icon.addEventListener("click", function () {
    const sortDropdownContainer = this.closest(".sort-dropdown");
    sortDropdownContainer.classList.toggle("hidden");

  });
});

$(".icon-sort").click(function () {
  $(".sort-dropdown").toggle();
});

$(".open-hidden").click(function () {
  $(".glasses-categories__dropdown").toggle(500);
});

document.querySelectorAll(".pagination li").forEach((li) => {
  li.addEventListener("click", function () {
    const paginationItems = document.querySelectorAll(".pagination li");
    if (this.innerText === "<") {
      const selectedPage = document.querySelector(".pagination .selected-page");
      const currentPageIndex =
        Array.from(paginationItems).indexOf(selectedPage);
      if (currentPageIndex > 1) {
        paginationItems[currentPageIndex - 1].click();
      }
    } else if (this.innerText === ">") {
      const selectedPage = document.querySelector(".pagination .selected-page");
      const currentPageIndex =
        Array.from(paginationItems).indexOf(selectedPage);
      if (currentPageIndex < paginationItems.length - 2) {
        paginationItems[currentPageIndex + 1].click();
      }
    } else {
      paginationItems.forEach((li) => {
        li.classList.remove("selected-page");
      });
      this.classList.add("selected-page");
    }
  });
});

const showCategory = document.querySelector(".show-category");
const showBar = document.querySelector(".show-bar");
showBar.addEventListener("click", function () {
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const closestImg = product.closest(".product-body-image");
    product.style.width = "100%";
    const changeColorIconBar = document.querySelectorAll(".show-bar path");
    const changeColorIconCategory = document.querySelectorAll(
      ".show-category path"
    );
    changeColorIconBar.forEach((color) => {
      color.setAttribute("fill", "#E94560");
    });
    changeColorIconCategory.forEach((color) => {
      color.setAttribute("fill", "black");
    });
  });
});
showCategory.addEventListener("click", function () {
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const closestImg = product.closest(".product-body-image");
    product.style.width = "31%";

    const changeColorIconBar = document.querySelectorAll(".show-bar path");
    const changeColorIconCategory = document.querySelectorAll(
      ".show-category path"
    );
    changeColorIconBar.forEach((color) => {
      color.setAttribute("fill", "black");
    });
    changeColorIconCategory.forEach((color) => {
      color.setAttribute("fill", "#E94560");
    });
  });
});
