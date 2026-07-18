"use client";

import { useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";

export default function ChatLayout() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! Upload a document and ask me anything about it."
    }
  ]);

  function sendMessage(question) {

    if (!question.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: question
      },
      {
        sender: "ai",
        text: "This is a dummy AI response. Later this will come from the backend."
      }
    ]);

  }

  return (

    <div className="space-y-6">

      <ChatHeader />

      <SuggestedQuestions onSelect={sendMessage} />

      <div className="space-y-4 bg-slate-100 rounded-2xl p-6 min-h-[450px]">

        {messages.map((msg, index) => (

          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.text}
          />

        ))}

      </div>

      <ChatInput onSend={sendMessage} />

    </div>

  );
}