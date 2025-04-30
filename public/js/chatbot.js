async function fetchDataset() {
  // Fetch the dataset (make sure it's in the public folder or correct path)
  const response = await fetch("/dataset.json");  // Ensure the correct path
  const data = await response.json();
  return data.questions;  // Returning the questions array
}

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
    // Fetch the dataset (Q&A pairs) from dataset.json
    const dataset = await fetchDataset();

    // Check if the user's input matches any question in the dataset
    const matchingQA = dataset.find(item => 
      userInput.toLowerCase().includes(item.question.toLowerCase())
    );

    let aiResponse = "I can only assist with questions related to Pradeep's professional background.";

    // If a match is found, respond with the answer from the dataset
    if (matchingQA) {
      aiResponse = matchingQA.answer;
    } else {
      // If no match, call OpenRouter AI API for a generic fallback response
      const systemPrompt = `
You are Ady, a professional and friendly virtual assistant for Pradeep Balakrishnan.

You must ONLY respond to queries related to Pradeep’s professional journey, achievements, skills, certifications, roles, leadership style, tools he has used, projects he has led, and his learning path.

🚫 DO NOT answer questions unrelated to Pradeep’s profile (e.g., weather, news, personal topics, entertainment, jokes, general email drafts, etc.).

❗ Pradeep is not a software developer or full-stack engineer. He specializes in operations leadership, transformation strategy, DevOps, SRE, service delivery, and data visualization within financial services.

If the user asks a question that is not related to Pradeep's professional journey, respond with:  
"I can only assist with questions related to Pradeep's professional background. Please ask something about his skills, roles, or experience."

If the user asks for a joke, respond with:
"I cannot provide jokes. Please ask something about Pradeep's career, skills, or experience."

✅ **Response Format**: Keep responses short, concise, and to the point. Avoid providing lengthy explanations. Aim for 1-2 sentences, or a brief bullet point format when possible.

📌 **Example Q&A**:

Q: Can Pradeep join immediately?  
A: "Pradeep is available immediately to join, with Bangalore as his preferred location. He is open to relocation if the role is a good fit for his skills and career growth."

Q: What is Pradeep’s experience with application monitoring?  
A: "Pradeep is implementing a new monitoring framework using Azure Monitor and Sentinel to optimize the performance and reliability of critical systems."

Q: Can you tell me a joke?  
A: "I cannot provide jokes. Please ask something about Pradeep's career, skills, or experience."

Q: What is Ady?  
A: "I’m Ady, Pradeep’s virtual assistant. I can help you explore his career, skills, projects, and achievements."
`;

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",  // <-- paste your key
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemma-3-1b-it:free",
          messages: [
            {
              "role": "system",
              "content": systemPrompt
            },
            {
              "role": "user",
              "content": userInput
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      aiResponse = data.choices[0]?.message?.content || "Ady: Sorry, I couldn't generate a reply.";
    }

    // Display AI's response
    const aiMsg = document.createElement("div");
    aiMsg.innerText = "Ady: " + aiResponse;
    aiMsg.classList.add("ai-message");
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
