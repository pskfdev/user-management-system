import { Link } from "react-router";

function Notfound() {
  return (
    <section className="w-full h-screen text-center flex justify-center items-center">
      <article className="space-y-2">
        <h1>Page not found !</h1>
        <Link
          to="/"
          className="text-sm bg-custom-cream p-3 rounded-md hover:bg-gray-200"
        >
          Home page
        </Link>
      </article>
    </section>
  );
}

export default Notfound;
