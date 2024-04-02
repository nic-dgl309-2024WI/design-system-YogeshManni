/****  Fade and add hover effect *****/
const testimonialPage = document.querySelector(
  ".l-quotes-slide[data-slider-slide-index='1']"
);
testimonialPage.classList.add("l-quotes-slide--active");

document.querySelector(".l-quotes").addEventListener("mouseout", function () {
  document
    .querySelector(".l-quotes-slide--active")
    .classList.remove("l-quotes-slide--active");
  document
    .querySelector(".l-quotes-slide[data-slider-slide-index='1']")
    .classList.add("l-quotes-slide--active");
});

document.querySelectorAll(".l-quotes-slide").forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    document
      .querySelector(".l-quotes-slide--active")
      .classList.remove("l-quotes-slide--active");
    this.classList.add("l-quotes-slide--active");
  })
);
