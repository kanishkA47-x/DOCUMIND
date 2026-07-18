"use client";

import { useState } from "react";
import Button from "../common/Button";

export default function ChatInput() {
  const [question, setQuestion] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex gap-4">

      <input
        type="text"
        placeholder="Ask something about your document..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="flex-1 border rounded-xl px-4 py-3"
      />

      <Button>
        Send
      </Button>

    </div>
  );
}