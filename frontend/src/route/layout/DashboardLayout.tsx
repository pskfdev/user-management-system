import Sidebar from "@/components/nav/Sidebar";
import TopbarProfile from "@/components/nav/TopbarProfile";
import { Outlet } from "react-router";

function DashboardLayout() {

  return (
    <main className="min-h-screen p-5 flex flex-col">
      <div className="flex h-full flex-grow space-x-5">
        {/* Content left */}
        <Sidebar />

        {/* Content right */}
        <div className="w-full">
          <TopbarProfile />

          <hr className="my-5" />

          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
