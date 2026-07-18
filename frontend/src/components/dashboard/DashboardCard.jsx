export default function DashboardCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h3 className="text-slate-500">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>

    </div>
  );
}