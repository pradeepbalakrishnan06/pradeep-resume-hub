// Function to send the message and get the response
async function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return; // Prevent empty sending

  // Make the default welcome message disappear
  const inputBox = document.getElementById('user-input');
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
  userMsg.classList.add("user-message");
  chatMessages.appendChild(userMsg);

  document.getElementById("user-input").value = ""; // Clear input field

  try {
    // Call AI API (Fix the URL here)
    const response = await fetch('https://api-inference.huggingface.co/pipeline/text2text-generation/google/flan-t5-small', {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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", // Your API Key
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: userInput })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    const aiMsg = document.createElement("div");

    // Check if the response contains generated text
    if (Array.isArray(data) && data[0]?.generated_text) {
      aiMsg.innerText = "Ady: " + data[0].generated_text;
      aiMsg.classList.add("ady-message"); // Add class for Ady message
    } else {
      aiMsg.innerText = "Ady: Sorry, I couldn't generate a reply.";
      aiMsg.classList.add("ady-message"); // Add class for Ady message
    }

    chatMessages.appendChild(aiMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
  } catch (error) {
    const aiMsg = document.createElement("div");
    aiMsg.innerText = "Ady: Oops, something went wrong.";
    aiMsg.classList.add("ady-message"); // Add class for Ady message
    chatMessages.appendChild(aiMsg);
    console.error(error);
  }
}

// Floating avatar click handler
const avatar = document.getElementById('ady-avatar');
const chatbotContainer = document.getElementById('chatbot-container');

// Ensure that both elements are found before adding event listener
if (avatar && chatbotContainer) {
  avatar.addEventListener('click', () => {
    // Toggle display of the chatbot container (show or hide)
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
      chatbotContainer.style.display = "block";  // Show chatbot container
    } else {
      chatbotContainer.style.display = "none";  // Hide chatbot container
    }
  });
}
