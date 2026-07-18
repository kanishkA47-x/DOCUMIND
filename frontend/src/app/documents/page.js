import DashboardLayout from "../../components/layout/DashboardLayout";
import DocumentsList from "../../components/documents/DocumentsList";
import SearchDocuments from "../../components/documents/SearchDocuments";

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">
          Documents
        </h1>

        <p className="text-slate-500 mt-2">
          Manage every uploaded document.
        </p>

        <div className="mt-8">
          <SearchDocuments />
        </div>

        <div className="mt-8">
          <DocumentsList />
        </div>

      </div>
    </DashboardLayout>
  );
}