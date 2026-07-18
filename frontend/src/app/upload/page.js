"use client";

import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadArea from "../../components/upload/UploadArea";
import SupportedFormats from "../../components/upload/SupportedFormats";
import FileUpload from "../../components/upload/FileUpload";
import { showSuccess } from "../../utils/toast";

export default function UploadPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          Upload Documents
        </h1>

        <p className="text-slate-500 mt-2">
          Upload PDFs, DOCX or TXT files to chat with AI.
        </p>

        <div className="mt-8">
          <UploadArea />
        </div>

        <div className="mt-8">
          <SupportedFormats />
        </div>

        <div
          className="mt-8"
          onClick={() => showSuccess("Document uploaded successfully!")}
        >
          <FileUpload />
        </div>

      </div>
    </DashboardLayout>
  );
}