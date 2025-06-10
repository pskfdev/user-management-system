import React from "react";
import { Outlet } from "react-router";

function ProtectRoute() {
  /* เขียนโค้ด check การ Login */

  return (
    <div>
      ProtectRoute
      <Outlet />
    </div>
  );
}

export default ProtectRoute;
