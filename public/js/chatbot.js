async function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return; // Prevent empty sending

  // Make the default welcome message disappear
  const inputBox = document.getElementById('user-input'); // your text input ID
const welcomeBox = document.querySelector('.chatbot-welcome');

inputBox.addEventListener('focus', () => {
  if (welcomeBox) {
    welcomeBox.style.display = 'none';
  }
});
  // Display user's message
  const chatMessages = document.getElementById("chat-messages");
  const userMsg = document.createElement("div");
  userMsg.innerText = "You: " + userInput;
  chatMessages.appendChild(userMsg);

  document.getElementById("user-input").value = "";

  // Call AI API
  const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-small', {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: userInput })
  });

  const data = await response.json();

  const aiMsg = document.createElement("div");
  if (Array.isArray(data) && data[0]?.generated_text) {
    aiMsg.innerText = "AI: " + data[0].generated_text;
  } else {
    aiMsg.innerText = "AI: Sorry, I couldn't generate a reply.";
  }

  chatMessages.appendChild(aiMsg);
}
// floating avatar click handler
const avatar = document.getElementById('ady-avatar');
const chatbotContainer = document.getElementById('chatbot-container');

avatar.addEventListener('click', () => {
  if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
    chatbotContainer.style.display = "block";
  } else {
    chatbotContainer.style.display = "none";
  }
});
