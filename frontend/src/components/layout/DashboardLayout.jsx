import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <MobileSidebar />

      <div className="flex">

        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="flex-1 min-h-screen bg-slate-100 p-8">
          {children}
        </main>

      </div>
    </>
  );
}