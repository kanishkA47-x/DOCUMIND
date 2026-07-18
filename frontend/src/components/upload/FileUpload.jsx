"use client";

import { useState } from "react";
import Button from "../common/Button";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <h2 className="text-2xl font-bold">
        Upload Document
      </h2>

      <p className="text-slate-500 mt-2">
        Upload a PDF, DOCX or TXT file to chat with it.
      </p>

      <div className="mt-8">

        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
          className="block w-full"
        />

      </div>

      <div className="mt-6">

        <p className="font-medium">
          Selected File
        </p>

        <p className="text-slate-500 mt-2">
          {selectedFile
            ? selectedFile.name
            : "No file selected"}
        </p>

      </div>

      <div className="mt-8">

        <Button>
          Upload Document
        </Button>

      </div>

    </div>
  );
}