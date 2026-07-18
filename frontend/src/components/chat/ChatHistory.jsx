import HistoryItem from "./HistoryItem";

export default function ChatHistory() {
  const chats = [
    "AI Report Summary",
    "Resume Review",
    "Research Paper",
    "ML Notes",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Chat History
      </h2>

      <div className="space-y-3">
        {chats.map((chat, index) => (
          <HistoryItem
            key={chat}
            title={chat}
            active={index === 0}
          />
        ))}
      </div>

      <button className="w-full mt-6 rounded-xl bg-blue-600 text-white py-3 hover:bg-blue-700 transition">
        + New Chat
      </button>
    </div>
  );
}