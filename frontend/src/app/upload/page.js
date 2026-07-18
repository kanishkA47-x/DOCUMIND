import DashboardLayout from "../../components/layout/DashboardLayout";
import UploadArea from "../../components/upload/UploadArea";
import SupportedFormats from "../../components/upload/SupportedFormats";

export default function UploadPage() {
  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          Upload Documents
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Upload your documents and chat with them using AI.
        </p>

        <UploadArea />

        <div className="mt-8">
          <SupportedFormats />
        </div>

      </div>

    </DashboardLayout>
  );
}