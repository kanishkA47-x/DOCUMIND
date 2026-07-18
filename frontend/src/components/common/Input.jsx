export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  id,
  name,
  required = false,
  disabled = false,
}) {
  return (
    <div className="w-full">

      {label && (
        <label
          htmlFor={id}
          className="block mb-2 font-medium text-slate-700"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-label={label || placeholder}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
          disabled:bg-slate-100
          disabled:cursor-not-allowed
        "
      />

    </div>
  );
}