import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 p-8">
        {children}
      </main>
    </>
  );
}