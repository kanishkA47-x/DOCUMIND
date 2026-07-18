import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";

export default function ChatLayout() {
  return (
    <div className="space-y-6">

      <ChatHeader />

      <SuggestedQuestions />

      <div className="space-y-4 bg-slate-100 rounded-2xl p-6 min-h-[400px]">

        <MessageBubble
          sender="ai"
          message="Hello! Upload a document and ask me anything about it."
        />

      </div>

      <ChatInput />

    </div>
  );
}