export default function FileCard({
  name,
  type,
  size,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h3 className="font-semibold text-lg">
        {name}
      </h3>

      <p className="text-slate-500 mt-2">
        {type}
      </p>

      <p className="text-slate-500">
        {size}
      </p>

    </div>
  );
}