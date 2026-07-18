export default function HistoryItem({ title, active = false }) {
  return (
    <button
      className={`w-full text-left px-4 py-3 rounded-xl transition ${
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-slate-100 text-slate-700"
      }`}
    >
      💬 {title}
    </button>
  );
}