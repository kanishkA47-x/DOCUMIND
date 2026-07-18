import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentDocuments from "../../components/dashboard/RecentDocuments";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your documents and chat with them using AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <DashboardCard title="Documents" value="0" />
          <DashboardCard title="Chats" value="0" />
          <DashboardCard title="Uploads" value="0" />
          <DashboardCard title="Storage" value="0 MB" />

        </div>

        <QuickActions />

        <RecentDocuments />

      </div>
    </DashboardLayout>
  );
}