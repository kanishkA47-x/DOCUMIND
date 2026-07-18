import EmptyState from "../common/EmptyState";

export default function RecentDocuments() {
  return (
    <div className="mt-8">
      <EmptyState
        icon="📄"
        title="No Documents Yet"
        description="Upload your first document to start chatting with AI."
        buttonText="Upload Document"
      />
    </div>
  );
}