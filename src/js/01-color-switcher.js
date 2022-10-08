const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', onActiveChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

function onActiveChangeColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function onStopChangeColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
