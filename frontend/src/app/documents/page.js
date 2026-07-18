import DashboardLayout from "../../components/layout/DashboardLayout";
import DocumentsList from "../../components/documents/DocumentsList";

export default function DocumentsPage() {
  return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">
          Documents
        </h1>

        <p className="text-slate-500 mt-2">
          View and manage your uploaded documents.
        </p>

        <div className="mt-10">

          <DocumentsList />

        </div>

      </div>

    </DashboardLayout>
  );
}