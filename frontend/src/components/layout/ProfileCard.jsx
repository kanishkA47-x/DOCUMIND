import Button from "../common/Button";

export default function ProfileCard() {
  return (
    <div className="mt-auto border-t border-slate-700 pt-6">

      <div className="flex items-center gap-3">

        <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
          K
        </div>

        <div>
          <h3 className="font-semibold">
            Kanishka Sharma
          </h3>

          <p className="text-slate-400 text-sm">
            Student
          </p>
        </div>

      </div>

      <div className="mt-6 flex flex-col gap-3">

        <Button variant="secondary">
          View Profile
        </Button>

        <Button variant="outline">
          Logout
        </Button>

      </div>

    </div>
  );
}