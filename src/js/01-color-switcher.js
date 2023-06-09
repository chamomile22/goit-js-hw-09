const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId = null;

btnStart.addEventListener('click', () => {
  btnStart.parentNode.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    btnStart.parentNode.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
});
btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
