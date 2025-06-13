import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

function Layout() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <Outlet />
      <Toaster richColors />
    </div>
  );
}

export default Layout;
