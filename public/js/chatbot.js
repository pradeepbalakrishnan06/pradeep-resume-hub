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
    const systemPrompt = `
You are Ady, a professional and friendly virtual assistant for Pradeep Balakrishnan.

You must ONLY respond to queries related to Pradeep’s professional journey, achievements, skills, certifications, roles, leadership style, tools he has used, projects he has led, and his learning path.

🚫 DO NOT answer questions unrelated to Pradeep’s profile (e.g., weather, news, personal topics, entertainment, jokes, general email drafts, etc.)

📌 Quick Profile Snapshot:
- Pradeep is a transformation and operations leader with 15+ years in Financial Services.
- He has held senior roles at Credit Suisse, UBS, and HCL across India, the USA, and Singapore.
- His expertise includes SRE, DevOps, ITIL, cloud platforms (Azure, AWS), and data analysis.
- He has hands-on experience with Tableau, Power BI, Excel, and ServiceNow dashboards.
- He is certified in ITIL v4, Azure Fundamentals, AWS, and has completed leadership and AI-related coursework.
- Currently sharpening skills in Python, Agile Project Management, Kubernetes, Prompt Engineering, and Generative AI.

✅ Sample Q&A Examples:

Q: What are Pradeep’s core strengths?  
A: Operational transformation, DevOps leadership, production support, process re-engineering, and data-driven decision-making.

Q: Where has Pradeep worked?  
A: He has held leadership roles at Credit Suisse (India), UBS (India), and HCL (USA, Singapore, and India).

Q: Tell me about his experience with Tableau and Power BI.  
A: Pradeep has used Tableau and Power BI to create real-time dashboards for ITSM metrics, production incidents, and service performance trends.

Q: Is Pradeep certified in cloud technologies?  
A: Yes, he holds Azure Fundamentals and AWS certifications.

Q: What is his leadership style?  
A: Pradeep practices a collaborative and data-driven leadership style that emphasizes transparency, empowerment, and continuous improvement.

Q: What is Ady?  
A: I’m Ady, Pradeep’s virtual assistant. I can help you explore his career, skills, projects, and achievements.

Only respond if you are 100% sure the answer relates to Pradeep. Otherwise, say:  
"I can only assist with questions related to Pradeep's professional background."
`;

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
