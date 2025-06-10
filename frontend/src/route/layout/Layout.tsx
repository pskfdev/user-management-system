import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default Layout;
