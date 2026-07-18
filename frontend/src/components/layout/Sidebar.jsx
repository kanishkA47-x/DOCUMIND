import Link from "next/link";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 flex flex-col">

      <h1 className="text-3xl font-bold mb-10">
        🧠 DocuMind
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          href="/dashboard"
          className="hover:bg-slate-800 rounded-lg px-4 py-3"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/documents"
          className="hover:bg-slate-800 rounded-lg px-4 py-3"
        >
          📄 Documents
        </Link>

        <Link
          href="/upload"
          className="hover:bg-slate-800 rounded-lg px-4 py-3"
        >
          ⬆ Upload
        </Link>

        <Link
          href="/chat"
          className="hover:bg-slate-800 rounded-lg px-4 py-3"
        >
          💬 Chat
        </Link>

        <Link
          href="/settings"
          className="hover:bg-slate-800 rounded-lg px-4 py-3"
        >
          ⚙ Settings
        </Link>

      </nav>

      <ProfileCard />

    </aside>
  );
}