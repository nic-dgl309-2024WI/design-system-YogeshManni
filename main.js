/****  Fade and add hover effect *****/
const testimonialPage = document.querySelector(
  ".l-quotes__slide[data-slider-slide-index='1']"
);
testimonialPage.classList.add("l-quotes__slide--active");

document.querySelector(".l-quotes").addEventListener("mouseout", function () {
  document
    .querySelector(".l-quotes__slide--active")
    .classList.remove("l-quotes__slide--active");
  document
    .querySelector(".l-quotes__slide[data-slider-slide-index='1']")
    .classList.add("l-quotes__slide--active");
});

document.querySelectorAll(".l-quotes__slide").forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    document
      .querySelector(".l-quotes__slide--active")
      .classList.remove("l-quotes__slide--active");
    this.classList.add("l-quotes__slide--active");
  })
);
