import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col text-center space-y-5">
      <h2>Welcome to user management system</h2>
      <div className="flex items-center justify-center">
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
