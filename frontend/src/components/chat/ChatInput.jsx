"use client";

import { useState } from "react";
import Button from "../common/Button";

export default function ChatInput({ onSend }) {

  const [question, setQuestion] = useState("");

  function handleSend() {
    if (!question.trim()) return;

    onSend(question);
    setQuestion("");
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex gap-4">

      <input
        type="text"
        placeholder="Ask something about your document..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        className="flex-1 border rounded-xl px-4 py-3"
      />

      <Button onClick={handleSend}>
        Send
      </Button>

    </div>
  );
}