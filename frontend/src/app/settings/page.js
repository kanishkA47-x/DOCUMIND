import DashboardLayout from "../../components/layout/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage your preferences.
        </p>

        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold">
              Appearance
            </h2>

            <select className="mt-4 w-full border rounded-xl p-3">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold">
              Language
            </h2>

            <select className="mt-4 w-full border rounded-xl p-3">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold">
              Account
            </h2>

            <button className="mt-4 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700">
              Delete All Chats
            </button>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}