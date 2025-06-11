import Sidebar from "@/components/nav/Sidebar";
import { CircleUserRound } from "lucide-react";
import { Link, Outlet } from "react-router";

function DashboardLayout() {
  return (
    <main className="min-h-screen p-5 flex flex-col">
      <div className="flex h-full flex-grow space-x-5">
        <Sidebar />

        {/* Content right */}
        <div className="w-full">
          <div className="flex justify-end py-2 text-slate-700">
            <CircleUserRound size={32} />
          </div>
          
          <hr className="my-5" />

          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
