import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1 bg-slate-100 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}