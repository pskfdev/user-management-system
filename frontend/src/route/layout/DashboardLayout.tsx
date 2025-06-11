import Sidebar from "@/components/nav/Sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, Outlet } from "react-router";

function DashboardLayout() {
  const username = "Pongsakan";

  return (
    <main className="min-h-screen p-5 flex flex-col">
      <div className="flex h-full flex-grow space-x-5">
        <Sidebar />

        {/* Content right */}
        <div className="w-full">
          {/* Profile */}
          <div className="flex justify-end py-2 text-black">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer border-2 w-10 h-10 border-indigo-500">
                  <AvatarFallback className="uppercase bg-indigo-200">
                    {username && username.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <h4 className="text-blue-500 text-sm">{username}</h4>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/users">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/users">user</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500 cursor-pointer"
                  /* onClick={() => {
                    userLogout();
                  }} */
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <hr className="my-5" />

          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default DashboardLayout;
