import EmptyState from "../common/EmptyState";

export default function DocumentsList() {
  const documents = [];

  if (documents.length === 0) {
    return (
      <EmptyState
        icon="📂"
        title="No Documents Found"
        description="Your uploaded documents will appear here."
        buttonText="Upload Document"
      />
    );
  }

  return (
    <div className="space-y-5">
      {documents.map((doc) => (
        <div key={doc.id}>{doc.name}</div>
      ))}
    </div>
  );
}