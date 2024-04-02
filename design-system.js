const toggleHamburger = () => {
  var topNavbar = document.getElementById("navbar");
  var sideNavbar = document.getElementById("sideNavbar");

  // assigning the respective classes depending on the platform
  if (topNavbar.className === "c-menu") {
    // classes for mobile
    topNavbar.className = "menu__responsive";
    sideNavbar.className = "menu__sidebarNavResponsive";
  } else {
    // classes for resolution higher then mobile
    topNavbar.className = "c-menu";
    sideNavbar.className = "c-menu__sidebarNav";
  }
};

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
