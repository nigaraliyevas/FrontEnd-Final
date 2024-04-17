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

$(document).ready(function () {
  $.ajax({
    url: "../../index.html",
    method: "GET",
    dataType: "html",
    success: function (datas) {
      let products = $(datas).find(".cars-body__bottom").html();
      $(".glasses-body__right").append(products);
      $(".glasses-body__right").append(`
      <div class="showing-items flex justify-between">
                  <div class="showing-items__left">
                    <p class="text-textgray showing-items__text">Showing 1-9 of 1.3k Products</p>
                  </div>
                  <div class="showing-items__right">
                    <ul class="pagination flex gap-2">
                      <li class="deactive">
                        <i class="fa-solid fa-chevron-left"></i>  
                      </li>
                      <li class="">1</li>
                      <li class="">2</li>
                      <li class="">3</li>
                      <li class="">4</li>
                      <li class="">...</li>
                      <li class="">5</li>
                      <li class="">6</li>
                      <li class="">7</li>
                      <li class="">8</li>
                      <li class="">9</li>
                      <li class="">
                        <i class="fa-solid fa-chevron-right"></i>
                      </li>
                    </ul>
                  </div>
                </div>`);
    },
    error: function (error) {
      console.error("Error loading content:", error);
    },
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
