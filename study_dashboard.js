let time = 59 * 60;
let timer;
let isActive = false;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  if (!isActive) {
    isActive = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimer();
      } else {
        clearInterval(timer);
        isActive = false;
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  time = 59 * 60;
  isActive = false;
  updateTimer();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimer();
