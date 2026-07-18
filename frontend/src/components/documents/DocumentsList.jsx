import DocumentCard from "./DocumentCard";

export default function DocumentsList() {

  const documents = [

    {
      id: 1,
      name: "AI_Report.pdf",
      size: "3.2 MB",
      uploadedAt: "Today",
    },

    {
      id: 2,
      name: "Research_Paper.pdf",
      size: "1.8 MB",
      uploadedAt: "Yesterday",
    },

    {
      id: 3,
      name: "Resume.pdf",
      size: "450 KB",
      uploadedAt: "2 days ago",
    },

  ];

  return (
    <div className="space-y-6">

      {documents.map((doc) => (
        <DocumentCard
          key={doc.id}
          name={doc.name}
          size={doc.size}
          uploadedAt={doc.uploadedAt}
        />
      ))}

    </div>
  );
}