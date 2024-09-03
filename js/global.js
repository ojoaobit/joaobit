// COLOCANDO HEADER EM TODAS PAGINAS
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    });
});
// COLOCANDO FOOTER EM TODAS PAGINAS
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
// TODOS OS LINKS ABREM EM OUTRA ABA
let links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.setAttribute("target", "_blank");
});

// MENU MOBILE
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "/assets/img/svgs/menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "/assets/img/svgs/close.svg";
  }
}
