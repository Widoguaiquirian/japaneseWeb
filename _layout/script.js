"use strict";
// const closeButton = document.querySelector(".close-nav");
// const openButton = document.querySelector(".open-nav");
// const nav = document.querySelector(".nav");

// closeButton.addEventListener("click", () => {
//   nav.classList.remove("navigation-open");
// });

// openButton.addEventListener("click", () => {
//   nav.classList.add("navigation-open");
// });

const nav = document.querySelector("nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
