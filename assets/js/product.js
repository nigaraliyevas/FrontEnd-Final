"use strict";
document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(".review-btn").click(function () {
      $(".review-info").toggle();
      $(".description-info").hide();
      $(this).css("border-bottom", "4px solid #e94560");
      $(".desc-btn").css("border-bottom", "none");
    });

    $(".desc-btn").click(function () {
      $(".description-info").toggle();
      $(".review-info").hide();
      $(this).css("border-bottom", "4px solid #e94560");
      $(".review-btn").css("border-bottom", "none");
    });
  });

  // Change image side
  const images = document.querySelectorAll(".related-img-view img");
  images[0].parentElement.classList.add("selected");
  images.forEach((img) => {
    img.addEventListener("click", function () {
      const changeImage = document.querySelector(".related-img img");
      const getImg = img.getAttribute("src");
      changeImage.setAttribute("src", getImg);

      images.forEach((otherImg) => {
        if (otherImg.parentElement.classList.contains("selected")) {
          otherImg.parentElement.classList.remove("selected");
        }
      });

      img.parentElement.classList.add("selected");
    });
  });
  // Review-sumbit btn check values
  // const reviewSubmit = document.querySelector(".review-sumbit");
  // // reviewSubmit.classList.remove("active-review");
  // // reviewSubmit.classList.add("not-active-review");
  // textarea.addEventListener("input", function () {
  //   if (textarea.value.trim()) {
  //     submitButton.removeAttribute("disabled");
  //   } else {
  //     submitButton.setAttribute("disabled", "disabled");
  //   }
  // });
  // product counter display
  const counterDisplay = document.querySelector(".related-right__btn");
  counterDisplay.addEventListener("click", function () {
    const counter = document.querySelector(".related-right__counter");
    if (counter.classList.contains("hidden")) {
      counterDisplay.classList.add("!hidden");
      counter.classList.remove("hidden");
    }
  });
});
$("#down-icon").click(function () {
  $(".mobile-side-dropdown").toggle();
});
