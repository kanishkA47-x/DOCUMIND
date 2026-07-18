import Button from "../common/Button";

export default function DocumentItem({
  name,
  uploadedAt,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">

      <div>

        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="text-slate-500 mt-1">
          Uploaded {uploadedAt}
        </p>

      </div>

      <div className="flex gap-3">

        <Button size="sm">
          Open
        </Button>

        <Button variant="secondary" size="sm">
          Chat
        </Button>

      </div>

    </div>
  );
}