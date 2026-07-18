"use client";

import { useState } from "react";

export default function SearchDocuments() {

  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="🔍 Search documents..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-xl border p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}