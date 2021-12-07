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

// coding with nick testimonial
// vars
("use strict");
var testim = document.getElementById("testim"),
 testimDots = Array.prototype.slice.call(
  document.getElementById("testim-dots").children
 ),
 testimContent = Array.prototype.slice.call(
  document.getElementById("testim-content").children
 ),
 testimleftArrow = document.getElementById("left-arrow"),
 testimRightArrow = document.getElementById("right-arrow"),
 testimSpeed = 5000,
 currentSlide = 0,
 currentActive = 0,
 testimTimer;
// coding with nick
window.onload = function () {
 // Testim Script
 function playSlide(slide) {
  for (var k = 0; k < testimDots.length; k++) {
   testimContent[k].classList.remove("active");
   testimContent[k].classList.remove("inactive");
   testimDots[k].classList.remove("active");
  }
  if (slide < 0) {
   slide = currentSlide = testimContent.length - 1;
  }
  if (slide > testimContent.length - 1) {
   slide = currentSlide = 0;
  }
  if (currentActive != currentSlide) {
   testimContent[currentActive].classList.add("inactive");
  }
  testimContent[slide].classList.add("active");
  testimDots[slide].classList.add("active");

  currentActive = currentSlide;

  clearTimeout(testimTimer);
  testimTimer = setTimeout(function () {
   playSlide((currentSlide += 1));
  }, testimSpeed);
 }
 // coding with nick
 testimleftArrow.addEventListener("click", function () {
  playSlide((currentSlide -= 1));
 });
 testimRightArrow.addEventListener("click", function () {
  playSlide((currentSlide += 1));
 });

 for (var l = 0; l < testimDots.length; l++) {
  testimDots[l].addEventListener("click", function () {
   playSlide((currentSlide = testimDots.indexOf(this)));
  });
 }
 playSlide(currentSlide);
};
// coding with nick
