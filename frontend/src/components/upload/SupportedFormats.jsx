export default function SupportedFormats() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-semibold">
        Supported Formats
      </h2>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="bg-slate-100 rounded-xl p-5 text-center">
          📄 PDF
        </div>

        <div className="bg-slate-100 rounded-xl p-5 text-center">
          📝 DOCX
        </div>

        <div className="bg-slate-100 rounded-xl p-5 text-center">
          📃 TXT
        </div>

      </div>

    </div>
  );
}