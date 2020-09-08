const redBlock = document.querySelector(".red.block");
const blueBlock = document.querySelector(".blue.block");
const startBtn = document.querySelector(".start.btn");
const stopBtn = document.querySelector(".stop.btn");

redBlock.addEventListener("mouseover", () => {
  if (+redBlock.style.opacity) {
    redBlock.style.opacity = 0;
    blueBlock.style.opacity = 1;
  }
});

blueBlock.addEventListener("mouseover", () => {
  if (+blueBlock.style.opacity) {
    blueBlock.style.opacity = 0;
    redBlock.style.opacity = 1;
  }
});

startBtn.addEventListener("click", () => {
  startBtn.style.opacity = 0;
  stopBtn.style.opacity = 1;
  redBlock.style.opacity = 1;
  blueBlock.style.opacity = 0;
});

stopBtn.addEventListener("click", () => {
  stopBtn.style.opacity = 0;
  startBtn.style.opacity = 1;
  redBlock.style.opacity = 0;
  blueBlock.style.opacity = 0;
});
