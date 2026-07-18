import Button from "../common/Button";

export default function DocumentCard({
  name,
  size,
  uploadedAt,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-semibold">
        📄 {name}
      </h2>

      <div className="flex justify-between mt-4 text-slate-500">
        <p>Uploaded: {uploadedAt}</p>
        <p>Size: {size}</p>
      </div>

      <div className="flex gap-4 mt-6">

        <Button variant="secondary">
          Open
        </Button>

        <Button>
          Chat
        </Button>

        <Button variant="outline">
          Delete
        </Button>

      </div>

    </div>
  );
}