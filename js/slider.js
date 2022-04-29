"use script";

const slides = document.querySelector(".slider--items").children;
const prevSlide = document.querySelector(".slider--arrow-left");
const nextSlide = document.querySelector(".slider--arrow-right");
let currentSlide = 0;
const slideIndex = document.querySelector(`slider--item-${currentSlide}`);

nextSlide.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    const slide = document.querySelector(`.slider--item-${slideIndex}`);
    const nextSlide = document.querySelector(`.slider--item-${slideIndex + 1}`);
    slide.classList.remove("active");
    nextSlide.classList.add("active");
    console.log(nextSlide);
  }
});
