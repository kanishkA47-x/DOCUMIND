import Logo from "../common/Logo";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <h1 className="text-3xl font-bold text-center">
          {title}
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          {subtitle}
        </p>

        {children}

      </div>
    </main>
  );
}