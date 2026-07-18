"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Documents",
      href: "/documents",
      icon: "📄",
    },
    {
      name: "Upload",
      href: "/upload",
      icon: "⬆",
    },
    {
      name: "Chat",
      href: "/chat",
      icon: "💬",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "⚙",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 flex flex-col">

      <h1 className="text-3xl font-bold mb-10">
        🧠 DocuMind
      </h1>

      <nav className="flex flex-col gap-3">

        {links.map((link) => (

          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-3 rounded-xl transition-all duration-300 ${
              pathname === link.href
                ? "bg-blue-600 shadow-lg"
                : "hover:bg-slate-800"
            }`}
          >
            {link.icon} {link.name}
          </Link>

        ))}

      </nav>

      <ProfileCard />

    </aside>
  );
}