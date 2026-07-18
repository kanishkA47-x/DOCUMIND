export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white shadow-md rounded-2xl px-5 py-4">
        <span className="animate-pulse">
          🤖 AI is thinking...
        </span>
      </div>
    </div>
  );
}