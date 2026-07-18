import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">

        <div className="text-7xl mb-4">
          😕
        </div>

        <h1 className="text-4xl font-bold">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-2">
          Page Not Found
        </h2>

        <p className="text-slate-500 mt-4">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>

      </div>

    </main>
  );
}