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
    if (sideNavbar) sideNavbar.className = "c-menu__sidebarNav";
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  var list = document.querySelectorAll(".c-makeSnippet");

  [].forEach.call(list, function (el) {
    var snippet = el.innerHTML.replace(/</g, "&lt;");
    snippet = snippet.replace(/ /g, "&nbsp;");
    var code =
      '<pre class="language-markup"><code>' + snippet + "</pre></code>";
    el.insertAdjacentHTML("afterend", code);
  });
});
