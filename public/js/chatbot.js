// Setup floating avatar click
const avatar = document.getElementById('ady-avatar');
const chatbotContainer = document.getElementById('chatbot-container');

avatar.addEventListener('click', () => {
  if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
    chatbotContainer.style.display = "block";
  } else {
    chatbotContainer.style.display = "none";
  }
});

// Hide Welcome Message on First Focus
const inputBox = document.getElementById('user-input');
const welcomeBox = document.querySelector('.chatbot-welcome');

if (inputBox && welcomeBox) {
  inputBox.addEventListener('focus', () => {
    welcomeBox.style.display = 'none';
  });
}

async function sendMessage() {
  const userInput = inputBox.value.trim();
  if (userInput === "") return; // Prevent empty messages

  // Clear input
  inputBox.value = "";

  // Get Chat Area
  const chatMessages = document.getElementById("chat-messages");

  // Add User Message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user-message"; // Add classes
  userMsg.innerText = userInput;
  chatMessages.appendChild(userMsg);

  // Add Typing Indicator
  const typingMsg = document.createElement("div");
  typingMsg.className = "chat-message typing-message";
  typingMsg.innerText = "Ady is typing...";
  chatMessages.appendChild(typingMsg);

  // Scroll to Bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Call AI API
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-small', {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: userInput })
    });

    const data = await response.json();

    // Remove Typing Indicator
    chatMessages.removeChild(typingMsg);

    // Add AI Response
    const aiMsg = document.createElement("div");
    aiMsg.className = "chat-message ai-message"; // Add classes

    if (Array.isArray(data) && data[0]?.generated_text) {
      aiMsg.innerText = data[0].generated_text;
    } else {
      aiMsg.innerText = "Sorry, I couldn't generate a reply.";
    }

    chatMessages.appendChild(aiMsg);

    // Scroll to Bottom Again
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    console.error("Error:", error);
    chatMessages.removeChild(typingMsg);

    const errorMsg = document.createElement("div");
    errorMsg.className = "chat-message ai-message";
    errorMsg.innerText = "Oops! Something went wrong.";
    chatMessages.appendChild(errorMsg);
  }
}
