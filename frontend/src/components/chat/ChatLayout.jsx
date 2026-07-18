"use client";

import { useState, useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";

export default function ChatLayout() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! Upload a document and ask me anything about it.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  function sendMessage(question) {
    if (!question.trim()) return;

    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "This is a dummy AI response. Later this will come from the backend.",
        },
      ]);

      setLoading(false);
    }, 1200);
  }

  return (
    <div className="space-y-6">
      <ChatHeader />

      <SuggestedQuestions onSelect={sendMessage} />

      <div className="space-y-4 bg-slate-100 rounded-2xl p-6 h-[500px] overflow-y-auto">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.text}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={chatEndRef}></div>
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
}