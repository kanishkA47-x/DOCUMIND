export default function MessageBubble({
  sender,
  message,
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xl rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white shadow-md"
        }`}
      >
        {message}
      </div>
    </div>
  );
}