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
