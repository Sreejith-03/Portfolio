const API_URL = window.PORTFOLIO_AI_API || "http://127.0.0.1:8000/api/chat";
const widget = document.getElementById("chat-widget");
const messagesElement = document.getElementById("chat-messages");
const input = document.getElementById("chat-input");
const form = document.getElementById("chat-form");
const history = [];

function addMessage(text, role) {
  const element = document.createElement("div");
  element.className = `message ${role}`;
  element.textContent = text;
  messagesElement.appendChild(element);
  messagesElement.scrollTop = messagesElement.scrollHeight;
  return element;
}

function addSources(sources) {
  if (!sources?.length) return;
  const wrapper = document.createElement("div");
  wrapper.className = "sources";
  wrapper.append("Portfolio sources");
  for (const source of sources) {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.title || "View portfolio";
    wrapper.appendChild(link);
  }
  messagesElement.appendChild(wrapper);
}

async function sendMessage(message) {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;

  addMessage(cleanMessage, "user");
  input.value = "";
  const loading = addMessage("Thinking…", "assistant");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: cleanMessage, history }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "The portfolio assistant is unavailable.");

    loading.textContent = data.answer;
    addSources(data.sources);
    history.push(
      { role: "user", content: cleanMessage },
      { role: "assistant", content: data.answer }
    );
    if (history.length > 20) history.splice(0, history.length - 20);
  } catch (error) {
    loading.className = "message error";
    loading.textContent = error.message;
  }
}

document.getElementById("chat-toggle").addEventListener("click", () => {
  widget.classList.remove("hidden");
  input.focus();
});

document.getElementById("chat-close").addEventListener("click", () => {
  widget.classList.add("hidden");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await sendMessage(input.value);
});

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => sendMessage(button.dataset.question));
});

addMessage(
  "Hi! I’m Sreejith’s portfolio assistant. Ask me about his profile, projects, skills, services, or contact details.",
  "assistant"
);
