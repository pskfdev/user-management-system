import { Link } from "react-router";
import { Button } from "../ui/button";
import { ContactRound, House } from "lucide-react";

function Sidebar() {
  return (
    <nav className="bg-indigo-500 rounded-md py-5 min-w-20 w-1/12 text-center">
      <h3 className="text-white">LOGO</h3>

      <ul className=" text-white mt-10 space-y-5 flex flex-col items-center px-2">
        <li className="w-full">
          <Link to="/dashboard">
            <Button variant="ghost" className="w-full p-1 hover:text-white hover:bg-indigo-400" asChild>
              <House />
            </Button>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/dashboard/users">
            <Button variant="ghost" className="w-full p-1 hover:text-white hover:bg-indigo-400" asChild>
              <ContactRound />
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
