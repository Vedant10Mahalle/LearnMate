// Daily.co API setup for video call




const videoFrame = document.getElementById('videoFrame');

// Replace with your Daily.co room link
const dailyRoomURL = "https://vedantmahalle.daily.co/vedantmahalle"; 

videoFrame.src = dailyRoomURL;

// WebSocket setup for chat
let socket = new WebSocket("ws://your-websocket-url"); // Replace with your WebSocket server URL

const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// When a new message is received from the WebSocket server
socket.onmessage = function(event) {
  const message = event.data;
  displayMessage(message);
};

// Function to display message in chat box
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

// Send message when "Send" button is clicked
sendBtn.addEventListener('click', function() {
  const message = chatInput.value;
  if (message.trim() !== "") {
    socket.send(message); // Send message to WebSocket server
    chatInput.value = ""; // Clear input field
  }
});

// Send message when "Enter" is pressed
chatInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const message = chatInput.value;
    if (message.trim() !== "") {
      socket.send(message);
      chatInput.value = "";
    }
  }
});
