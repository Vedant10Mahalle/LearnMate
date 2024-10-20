const reminderForm = document.getElementById("reminderForm");
const reminderList = document.getElementById("reminderList");

// Function to add reminder
reminderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const reminderTime = document.getElementById("reminderTime").value;
    const reminderDesc = document.getElementById("reminderDesc").value;

    // Validate time and description
    if (!reminderTime || !reminderDesc) {
        alert("Please fill out both fields.");
        return;
    }

    const reminderItem = document.createElement("li");
    reminderItem.classList.add("list-group-item");

    reminderItem.innerHTML = `
        <span>
            <span class="reminder-time">${reminderTime}</span> - ${reminderDesc}
        </span>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;

    reminderList.appendChild(reminderItem);

    // Set a timeout to trigger reminder alert
    const currentTime = new Date();
    const reminderDateTime = new Date(currentTime.toDateString() + ' ' + reminderTime);

    const timeDiff = reminderDateTime - currentTime;

    if (timeDiff > 0) {
        setTimeout(function () {
            // Trigger a browser notification
            speakReminder(`Reminder: ${reminderDesc}`);

            // Show an alert on the page as well
            alert(`Reminder: ${reminderDesc}`);
        }, timeDiff);
    }

    // Delete reminder on button click
    reminderItem.querySelector(".delete-btn").addEventListener("click", function () {
        reminderItem.remove();
    });

    // Clear the form
    document.getElementById("reminderTime").value = "";
    document.getElementById("reminderDesc").value = "";
});

// Function to use Web Speech API for speaking the reminder
function speakReminder(message) {
    const synth = window.speechSynthesis;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'en-US';
        synth.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
}
