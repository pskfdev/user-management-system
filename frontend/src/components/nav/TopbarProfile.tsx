import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

type Props = {};

function TopbarProfile({}: Props) {
  const username = "Pongsakan";

  return (
    <div className="flex justify-end py-2 text-black">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer border-2 w-10 h-10 border-indigo-500">
            <AvatarFallback className="uppercase bg-indigo-200">
              {username && username.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-indigo-100 border border-indigo-200">
          <DropdownMenuItem asChild>
            <Link to="/dashboard/profile" className="text-indigo-500 text-sm">
              {username}
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
            /* onClick={() => {
                    userLogout();
                  }} */
          >
            LOGOUT
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TopbarProfile;
