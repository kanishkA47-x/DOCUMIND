export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
        D
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900">
          DocuMind
        </h1>

        <p className="text-sm text-slate-500">
          AI Document Assistant
        </p>
      </div>
    </div>
  );
}