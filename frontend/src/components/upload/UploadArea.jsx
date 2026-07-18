"use client";

import Button from "../common/Button";

export default function UploadArea() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10">

      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-14 text-center hover:border-blue-500 transition">

        <div className="text-7xl">
          📄
        </div>

        <h2 className="text-3xl font-bold mt-6">
          Drag & Drop your file
        </h2>

        <p className="text-slate-500 mt-3 mb-8">
          Upload a document to start chatting with AI
        </p>

        <Button>
          Browse Files
        </Button>

      </div>

    </div>
  );
}