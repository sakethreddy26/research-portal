import { Link, useLocation } from "react-router-dom";

const PublicationNavbar = () => {
  const route = useLocation();
  const { pathname } = route;
  console.log(pathname);
  return (
    <div className="w-screen h-14 bg-white flex items-center justify-center">
      <div className="w-[50%] items-center justify-center text-center">
        <Link
          to={"/conference"}
          className={`text-2xl hover:text-blue-700 transition ${
            pathname === "/conference" && "text-blue-500"
          }`}
        >
          Conferences
        </Link>
      </div>
      <div className="w-[50%] items-center justify-center text-center">
        <Link
          to={"/journals"}
          className={`text-2xl hover:text-blue-700 transition ${
            pathname === "/journals" && "text-blue-500"
          }`}
        >
          Journals
        </Link>
      </div>
    </div>
  );
};

export default PublicationNavbar;
