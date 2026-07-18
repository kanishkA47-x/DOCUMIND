import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatLayout from "../../components/chat/ChatLayout";

export default function ChatPage() {
  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto">

        <ChatLayout />

      </div>

    </DashboardLayout>
  );
}