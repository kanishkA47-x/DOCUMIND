import Button from "./Button";

export default function EmptyState({
  icon = "📄",
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 text-center">

      <div className="text-6xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="text-slate-500 mt-3 max-w-md mx-auto">
        {description}
      </p>

      {buttonText && (
        <div className="mt-6 flex justify-center">
          <Button onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      )}

    </div>
  );
}