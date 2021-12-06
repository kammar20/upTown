const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

hamBurger.addEventListener("click", mobileView);

function mobileView() {
 hamBurger.classList.toggle("active");
 navMenu.classList.toggle("active");
 navBar.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
 hamBurger.classList.remove("active");
 navMenu.classList.remove("active");
 navBar.classList.remove("active");
}

// demo
$(document).ready(function () {
 $("#owl-demo").owlCarousel({
  autoPlay: 3000, //Set AutoPlay to 3 seconds

  items: 4,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [979, 3],
 });
});
// demo
