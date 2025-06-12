import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Home() {
  return (
    <main className="w-full max-w-6xl px-10 mx-5 lg:mx-0 bg-white rounded-xl shadow-xl flex items-center space-x-5">
      <div className="w-full lg:w-[800px] py-10">
        <h1 className="uppercase tracking-wide text-indigo-800">Welcome</h1>
        <h2 className="text-orange-300">to user management system</h2>
        <h4 className="mt-10 text-indigo-300">for test web developer fullstack global wireless company.</h4>
        <Button className="btn-indigo mx-auto rounded-full w-1/3 min-w-28" asChild>
          <Link to="/login" className="tracking-wide mt-20">Continue</Link>
        </Button>
      </div>

      <div className="py-10 w-full hidden lg:flex">
        <div className="w-full h-[500px] bg-[url('/img/welcome.png')] bg-cover bg-center"></div>
      </div>
    </main>
  );
}

export default Home;
