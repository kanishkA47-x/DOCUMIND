import Button from "../common/Button";

export default function DocumentItem({
  name,
  uploadedAt,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">
            📄 {name}
          </h2>

          <p className="text-slate-500 mt-2">
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

    </div>
  );
}