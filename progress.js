const progressRing = document.getElementById("progress-ring");
const progressText = document.getElementById("progress-text");
const startButton = document.getElementById("start-btn");

let progress = 0;
const totalTime = 100; // Total time in seconds for the focus session
const intervalTime = 1000; // Update interval in milliseconds

startButton.addEventListener("click", startSession);

function startSession() {
    progress = 0;
    progressText.innerText = `${progress}%`;
    const totalCircumference = 2 * Math.PI * 90; // 90 is the radius
    progressRing.style.strokeDasharray = totalCircumference;
    progressRing.style.strokeDashoffset = totalCircumference;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            const offset = totalCircumference - (totalCircumference * progress) / 100;
            progressRing.style.strokeDashoffset = offset;
            progressText.innerText = `${progress}%`;
        } else {
            clearInterval(interval);
            alert("Session Complete!");
        }
    }, (totalTime * 1000) / 100); // Update based on total time
}
