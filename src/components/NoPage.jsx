import { Link } from "react-router-dom";

const NoPage = () => (
  <div className="space-y-20 max-w-screen-lg w-[95%] sm:w-[90%] mx-auto">
    <div className="">
      <ul className="flex flex-wrap items-center gap-3">
        <li>
          <Link to="/" className="opacity-50">
            Home
          </Link>
        </li>
        <span className="opacity-50">/</span>
        <li>
          <span>404 Error</span>
        </li>
      </ul>
    </div>

    <div className="flex flex-col items-center justify-center gap-7">
      <h2 className="font-medium text-5xl ss:text-7xl md:text-[110px]">
        404 Not Found
      </h2>
      <p>Your visited page not found. You may go home page.</p>
      <button className="w-64 h-14 rounded-md bg-red text-white mt-10">
        <Link to="/">Back to home page</Link>
      </button>
    </div>
  </div>
);

export default NoPage;
