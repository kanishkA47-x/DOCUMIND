import DashboardLayout from "../../components/layout/DashboardLayout";
import FileUpload from "../../components/upload/FileUpload";

export default function UploadPage() {
  return (
    <DashboardLayout>

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">
          Upload Documents
        </h1>

        <p className="text-slate-500 mt-2">
          Add documents to your AI workspace.
        </p>

        <div className="mt-10">

          <FileUpload />

        </div>

      </div>

    </DashboardLayout>
  );
}