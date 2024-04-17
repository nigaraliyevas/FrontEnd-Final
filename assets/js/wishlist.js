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
