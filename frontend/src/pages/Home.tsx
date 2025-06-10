import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col text-center space-y-5">
      <h2>Welcome to user management system</h2>
      <div className="flex items-center justify-center space-x-2">
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
