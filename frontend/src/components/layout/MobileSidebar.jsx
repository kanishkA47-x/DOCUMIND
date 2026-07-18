"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠" },
    { name: "Documents", href: "/documents", icon: "📄" },
    { name: "Upload", href: "/upload", icon: "⬆" },
    { name: "Chat", href: "/chat", icon: "💬" },
    { name: "Settings", href: "/settings", icon: "⚙" },
  ];

  return (
    <>
      <div className="lg:hidden bg-slate-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🧠 DocuMind</h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-slate-800 text-white p-4 space-y-3">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 hover:bg-slate-700"
            >
              {link.icon} {link.name}
            </Link>
          ))}

        </div>
      )}
    </>
  );
}