"use client";

import { useState } from "react";

export default function DocumentSelector() {
  const documents = [
    "AI_Report.pdf",
    "Research_Paper.pdf",
    "Resume.pdf",
    "ML_Notes.pdf",
  ];

  const [selectedDocument, setSelectedDocument] = useState(documents[0]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <p className="text-sm text-slate-500 mb-2">
        Current Document
      </p>

      <select
        value={selectedDocument}
        onChange={(e) => setSelectedDocument(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {documents.map((doc) => (
          <option key={doc} value={doc}>
            📄 {doc}
          </option>
        ))}
      </select>

    </div>
  );
}