import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/v1";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/groq/chat`, {
        message: input,
      });
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: res.data.reply },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Error: " + err.message },
      ]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-[1000]">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 text-sm ${
              msg.role === "user" ? "text-right" : "text-left text-green-700"
            }`}
          >
            <span className="block px-2 py-1 rounded bg-gray-100 inline-block">
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-xs text-gray-400">Thinking...</div>}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          type="submit"
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
