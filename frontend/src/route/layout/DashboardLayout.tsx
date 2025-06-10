import React from "react";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <main className="min-h-screen p-5 flex flex-col">
      <div className="flex bg-amber-50 h-full flex-grow space-x-5">
        <nav className="bg-indigo-500 rounded-md py-5">
          <h3 className="px-2 text-white">LOGO</h3>

          <ul className="text-center text-white mt-10 space-y-3">
            <li>home</li>
            <li>users</li>
          </ul>
        </nav>

        <div className="bg-blue-200 w-full">
          <div className="flex justify-end py-2">
            <p>profile</p>
          </div>
          <hr className="my-5" />
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
