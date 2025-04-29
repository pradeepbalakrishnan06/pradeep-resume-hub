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
    // Call OpenRouter AI API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",  // <-- paste your key
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemma-3-1b-it:free",  // Change to model of your choice.
        messages: [
    {
      "role": "system",
      "content": "You are Ady, a helpful and professional virtual assistant for Pradeep. You must only respond to queries related to Pradeep's professional background, achievements, skills, certifications, and experience. Do not respond to general queries, news, stories, jokes, or personal topics."
    },
    {
      "role": "user",
      "content": "Hello"
    }
  ]
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const aiMsg = document.createElement("div");
    const aiText = data.choices[0]?.message?.content;

    if (aiText) {
      aiMsg.innerText = "Ady: " + aiText.trim();
      aiMsg.classList.add("ai-message");
    } else {
      aiMsg.innerText = "Ady: Sorry, I couldn't generate a reply.";
      aiMsg.classList.add("ai-message");
    }

    chatMessages.appendChild(aiMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
  } catch (error) {
    const aiMsg = document.createElement("div");
    aiMsg.innerText = "Ady: Oops, something went wrong.";
    aiMsg.classList.add("ai-message");
    chatMessages.appendChild(aiMsg);
    console.error(error);
  }
}
// Toggle chatbot when avatar is clicked
document.getElementById("ady-avatar").addEventListener("click", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  chatbotContainer.style.display =
    chatbotContainer.style.display === "none" || chatbotContainer.style.display === ""
      ? "flex"
      : "none";

  // Focus input when opened
  if (chatbotContainer.style.display === "flex") {
    setTimeout(() => document.getElementById("user-input").focus(), 100);
  }
});

// Close chatbot when X is clicked
document.getElementById("chatbot-close").addEventListener("click", () => {
  document.getElementById("chatbot-container").style.display = "none";
});
