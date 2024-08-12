import "../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function getCookieValue(cookieName) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop().split(";").shift();
      return cookieValue;
    }
    return null;
  }

  useEffect(() => {
    const tokenFromCookie = getCookieValue("auth");
    if (tokenFromCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  return (
    <div className="">
      <div className="bg-sky-800 text-white flex justify-between items-center cursor-pointer font-bold text-xl">
        <div className="bg-white border-sky-800 rounded-r-full p-10">
          <img
            className=""
            src="https://research.pes.edu/wp-content/uploads/2023/03/PESU-new-logo.png"
            alt=""
          />
        </div>
        <div>
          <a href="/centres">Centres</a>
        </div>
        <div>
          <a href="/professors">Faculty</a>
        </div>
        <div>
          <a href="/rprogram">PHD program</a>
        </div>
        <div>
          <a href="/patent-process">Patents</a>
        </div>
        <div>
          <a href="/Research-Grant">Research-Grant</a>
        </div>
        <div>
          <Link to={"/conference"}>Conference</Link>
        </div>
        <div>
          <a href="/journals">Journals</a>
        </div>
        <div>
          <a href="/research-support">Research Support</a>
        </div>
        <div>
          <a href="/Contact">Contact Us</a>
        </div>
        <div className="p-4">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
