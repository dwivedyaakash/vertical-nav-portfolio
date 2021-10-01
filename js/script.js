$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

/////////////////////////////////////////////
// Mobile nav
const navBtn = document.querySelector(".navbar-toggle");
const circle = document.querySelector(".circle");
const navLink = document.querySelector(".nav-link");

const open = function () {
  circle.classList.toggle("open");
};

navBtn.addEventListener("click", open);
