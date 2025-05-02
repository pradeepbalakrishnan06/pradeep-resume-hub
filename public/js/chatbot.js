// Fetch dataset from JSON file
async function fetchDataset() {
  const response = await fetch("/dataset.json");
  const data = await response.json();
  return data.questions;
}

// One-time hide welcome message handler
const inputBox = document.getElementById("user-input");
const welcomeBox = document.querySelector(".chatbot-welcome");

function hideWelcomeMessage() {
  if (welcomeBox) {
    welcomeBox.style.display = "none";
    inputBox.removeEventListener("focus", hideWelcomeMessage);
    inputBox.removeEventListener("keydown", hideWelcomeMessage);
  }
}

// Attach one-time event listeners
if (inputBox) {
  inputBox.addEventListener("focus", hideWelcomeMessage);
  inputBox.addEventListener("keydown", hideWelcomeMessage);
}

// Send message and respond
async function sendMessage() {
  const userInput = inputBox.value.trim();
  if (userInput === "") return;

  const chatMessages = document.getElementById("chat-messages");
  const userMsg = document.createElement("div");
  userMsg.innerText = "You: " + userInput;
  userMsg.classList.add("user-message");
  chatMessages.appendChild(userMsg);

  inputBox.value = "";

  try {
    const dataset = await fetchDataset();

    const matchingQA = dataset.find(item =>
      userInput.toLowerCase().includes(item.question.toLowerCase())
    );

    let aiResponse = "I can only assist with questions related to Pradeep's professional background.";

    if (matchingQA) {
      aiResponse = matchingQA.answer;
    } else {
      const systemPrompt = `
You are Ady, a friendly and professional virtual assistant for Pradeep Balakrishnan.

Your ONLY responsibility is to answer questions about **Pradeep’s professional background**, including:
- Experience, roles, and responsibilities
- Leadership style and transformation impact
- Certifications and technical skills
- Tools he has used (e.g., Tableau, ServiceNow, Power BI, etc.)
- Projects, achievements, and STAR-model outcomes
- Career history, learning progress, and global exposure

🚫 Do NOT answer:
- Jokes, news, weather, or personal topics
- Emails, letters, or any general-purpose queries
- Anything unrelated to Pradeep’s work and professional journey

❗ Clarification:
Pradeep is *not* a software engineer. He is a senior transformation and operations leader in financial services with expertise in DevOps, SRE, service delivery, stakeholder collaboration, and operational excellence.

✅ Format:
- Keep responses short (1–2 sentences max)
- Use clear, professional language
- If unsure or unrelated, reply:
  “I can only assist with questions related to Pradeep's professional background. Please ask about his skills, achievements, or work experience.”

✨ Example Q&A:

Q: What’s Pradeep’s core strength?  
A: Pradeep excels in transformation strategy, operations leadership, and service delivery across global teams.

Q: Can he join immediately?  
A: Yes, Pradeep is available to join immediately. Bangalore is preferred, but he’s open to relocation.

Q: Tell me a joke.  
A: I cannot provide jokes. Please ask something about Pradeep’s experience.

Q: What is Ady?  
A: I’m Ady, Pradeep’s virtual assistant. I can help you explore his career, skills, and achievements.

Only reply if confident it relates to Pradeep’s dataset or profile.
`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemma-3-1b-it:free",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userInput }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      aiResponse = data.choices[0]?.message?.content || "Ady: Sorry, I couldn't generate a reply.";
    }

    const aiMsg = document.createElement("div");
    aiMsg.innerText = "Ady: " + aiResponse;
    aiMsg.classList.add("ai-message");
    chatMessages.appendChild(aiMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    const aiMsg = document.createElement("div");
    aiMsg.innerText = "Ady: Oops, something went wrong.";
    aiMsg.classList.add("ai-message");
    chatMessages.appendChild(aiMsg);
    console.error(error);
  }
}

// Toggle chatbot window
document.getElementById("ady-avatar").addEventListener("click", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  chatbotContainer.style.display =
    chatbotContainer.style.display === "none" || chatbotContainer.style.display === ""
      ? "flex"
      : "none";

  if (chatbotContainer.style.display === "flex") {
    setTimeout(() => inputBox.focus(), 100);
  }
});

// Minimize/close chatbot
document.getElementById("chatbot-close").addEventListener("click", () => {
  document.getElementById("chatbot-container").style.display = "none";
});
