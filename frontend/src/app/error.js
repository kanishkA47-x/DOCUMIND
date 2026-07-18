"use client";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">

        <div className="text-7xl mb-4">
          ⚠️
        </div>

        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="text-slate-500 mt-4">
          An unexpected error occurred.
        </p>

        <button
          onClick={reset}
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}