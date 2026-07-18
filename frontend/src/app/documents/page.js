import DashboardLayout from "../../components/layout/DashboardLayout";
import SearchDocuments from "../../components/documents/SearchDocuments";
import DocumentSkeleton from "../../components/skeletons/DocumentSkeleton";

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

        <div className="mt-8 space-y-5">

          <DocumentSkeleton />
          <DocumentSkeleton />
          <DocumentSkeleton />

        </div>

      </div>

    </DashboardLayout>
  );
}