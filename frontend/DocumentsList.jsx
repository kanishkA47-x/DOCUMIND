import DocumentItem from "./DocumentItem";

const documents = [
  {
    id: 1,
    name: "AI_Report.pdf",
    uploadedAt: "Today",
  },
  {
    id: 2,
    name: "MachineLearningNotes.pdf",
    uploadedAt: "Yesterday",
  },
];

export default function DocumentsList() {
  return (
    <div className="space-y-5">

      {documents.map((doc) => (
        <DocumentItem
          key={doc.id}
          name={doc.name}
          uploadedAt={doc.uploadedAt}
        />
      ))}

    </div>
  );
}