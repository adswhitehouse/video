let play = document.querySelector(".jsPlay");
let pause = document.querySelector(".jsPause");
let controlButtons = document.querySelector(".jsControlButtons");
let video = document.querySelector("video");

pause.addEventListener("click", () => {
  controlButtons.setAttribute("class", "control-buttons-changed");
  video.pause();
});

play.addEventListener("click", () => {
  controlButtons.setAttribute("class", "control-buttons");
  video.play();
});
