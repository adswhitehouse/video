let controlButtons = document.querySelector(".jsControlButtons");
let video = document.querySelector("video");
let slider = document.querySelector(".slider");
let preloader = document.querySelector(".preloader");

controlButtons.addEventListener("click", () => {
  if (!slider.classList.contains("slider-switched")) {
    slider.classList.add("slider-switched");
    video.pause();
  } else {
    slider.classList.remove("slider-switched");
    video.play();
  }
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
