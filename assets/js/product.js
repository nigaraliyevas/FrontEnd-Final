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
// product counter display
const counterDisplay = document.querySelector(".related-right__btn");
counterDisplay.addEventListener("click", function () {
  const counter = document.querySelector(".related-right__counter");
  if (counter.classList.contains("hidden")) {
    counterDisplay.classList.add("!hidden");
    counter.classList.remove("hidden");
  }
});
// Review-sumbit btn check values
const reviewSubmit = document.querySelector(".review-submit");
reviewSubmit.addEventListener("click", function () {
  const textArea = document.querySelector(".textarea-review");
  if (textArea == null || textArea.value == "") {
    reviewSubmit.setAttribute("disabled", "disabled");
  }
  document.querySelectorAll(".fa-regular.fa-star").forEach((star) => {
    star.addEventListener("click", function () {
      star.classList.toggle("clicked");
      const starsClicked =
        document.querySelectorAll(".fa-regular.fa-star.clicked").length > 0;
      if (starsClicked) {
        starsClicked.forEach((star) => {
          star.classList.remove("fa-regular", "fa-star", "clicked");
          star.classList.add("fa-solid", "fa-star");
        });
      } else {
        reviewSubmit.setAttribute("disabled", "disabled");
      }
    });
  });
});
