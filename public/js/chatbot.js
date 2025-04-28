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

  document.getElementById("user-input").value = "";

  try {
    // Call AI API
    const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-small', {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",  // Replace with your actual API key
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: userInput })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const aiMsg = document.createElement("div");
    if (Array.isArray(data) && data[0]?.generated_text) {
      aiMsg.innerText = "AI: " + data[0].generated_text;
      aiMsg.classList.add("ai-message");
    } else {
      aiMsg.innerText = "AI: Sorry, I couldn't generate a reply.";
      aiMsg.classList.add("ai-message");
    }

    chatMessages.appendChild(aiMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
  } catch (error) {
    const aiMsg = document.createElement("div");
    aiMsg.innerText = "AI: Oops, something went wrong.";
    aiMsg.classList.add("ai-message");
    chatMessages.appendChild(aiMsg);
    console.error(error);
  }
}
