// "use strict";
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
calcBasketCount();


