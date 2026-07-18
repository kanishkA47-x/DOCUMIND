"use client";

import { useState } from "react";

export default function SearchDocuments() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-md p-5">

      <input
        type="text"
        placeholder="Search documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}