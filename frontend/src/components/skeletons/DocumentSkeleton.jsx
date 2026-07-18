export default function DocumentSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse">

      <div className="h-6 w-56 bg-slate-300 rounded"></div>

      <div className="h-4 w-32 bg-slate-200 rounded mt-4"></div>

      <div className="flex gap-3 mt-6">

        <div className="h-10 w-20 bg-slate-300 rounded"></div>

        <div className="h-10 w-20 bg-slate-300 rounded"></div>

        <div className="h-10 w-20 bg-slate-300 rounded"></div>

      </div>

    </div>
  );
}