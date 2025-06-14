import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router";

function TopbarProfile() {
  const name: string = localStorage.name;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex justify-end py-2 text-black">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer border-2 w-10 h-10 border-indigo-500">
            <AvatarFallback className="uppercase bg-indigo-200">
              {name && name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-indigo-100 border border-indigo-200">
          <DropdownMenuItem asChild>
            <Link to="/dashboard/profile" className="text-indigo-500 text-sm">
              {name && name}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="border-b border-indigo-200" />
          <DropdownMenuItem asChild>
            <Link to="/dashboard">HOME</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/users">USER</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-500 cursor-pointer"
            onClick={() => {
              logout();
            }}
          >
            LOGOUT
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TopbarProfile;
