import Button from "../common/Button";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-semibold">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4 mt-6">

        <Button>
          Upload Document
        </Button>

        <Button variant="secondary">
          Start Chat
        </Button>

      </div>

    </div>
  );
}