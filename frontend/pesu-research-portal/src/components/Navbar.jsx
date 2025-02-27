import "../App.css";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showCentresDropdown, setShowCentresDropdown] = useState(false);
  const [showFacultyDropdown, setShowFacultyDropdown] = useState(false);

  const ecDepartments = ["ECE", "CSE"];
  const rrDepartments = ["Mechanical", "Civil", "Chemical"];
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to get a cookie value
  const getCookieValue = (cookieName) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  };

  // Check login status whenever location changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const tokenFromCookie = getCookieValue("auth");
      const isLoggedInFromSession = sessionStorage.getItem('isLoggedIn') === 'true';
      
      if (tokenFromCookie || isLoggedInFromSession) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    
    checkLoginStatus();
  }, [location.pathname]); // Re-check when route changes

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      setIsSidebarOpen(false);
    };
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userName');
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleSidebar = (event) => {
    event.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => setIsSidebarOpen(false);
  
  // Don't show login/logout button if on login page
  const showAuthButton = location.pathname !== "/login";

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="bg-sky-800 text-white flex h-16 justify-between items-center font-bold text-lg">
        <div className="bg-white flex items-center h-16 p-2 rounded-r-full">
          <button
            onClick={toggleSidebar}
            className="p-2 focus:outline-none hover:scale-110 transition-transform duration-200"
            aria-label="Toggle Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a href="/" className="ml-2">
            <img
              className="h-12 object-contain"
              src="https://research.pes.edu/wp-content/uploads/2023/03/PESU-new-logo.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="absolute top-0 right-20 flex items-center space-x-4 p-4">
          <a
            href="/Contact"
            className="hover:scale-125 transition-transform duration-200 p-4"
          >
            Contact Us
          </a>
        </div>
        {showAuthButton && (
          <div className="p-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:scale-125 transition-transform duration-200 p-4 text-[#F97316] font-bold"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hover:scale-125 transition-transform duration-200 p-4 font-bold"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-sky-800 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 font-bold text-xl">Menu</div>
        <ul className="p-4 space-y-4">
          {/* Centres Dropdown - Always visible */}
          <li
            onMouseEnter={() => setShowCentresDropdown(true)}
            onMouseLeave={() => setShowCentresDropdown(false)}
          >
            <button className="w-full text-left hover:underline">
              Centres
            </button>
            {showCentresDropdown && (
              <ul className="pl-4 space-y-2">
                <li>
                  <Link
                    to="/centres/rr"
                    className="block hover:underline"
                    onClick={closeSidebar}
                  >
                    RR Campus
                  </Link>
                </li>
                <li>
                  <Link
                    to="/centres/ec"
                    className="block hover:underline"
                    onClick={closeSidebar}
                  >
                    EC Campus
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Faculty Dropdown - Always visible */}
          <li
            onMouseEnter={() => setShowFacultyDropdown(true)}
            onMouseLeave={() => setShowFacultyDropdown(false)}
          >
            <button className="w-full text-left hover:underline">
              Faculty
            </button>
            {showFacultyDropdown && (
              <ul className="pl-4 space-y-2">
                <li>
                  <div className="font-semibold">EC Campus</div>
                  <ul className="pl-4 space-y-2">
                    {ecDepartments.map((dept, index) => (
                      <li key={index}>
                        <Link
                          to={`/faculty?campus=EC Campus&department=${encodeURIComponent(
                            dept
                          )}`}
                          className="block hover:underline"
                          onClick={closeSidebar}
                        >
                          {dept}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="font-semibold">RR Campus</div>
                  <ul className="pl-4 space-y-2">
                    {rrDepartments.map((dept, index) => (
                      <li key={index}>
                        <Link
                          to={`/faculty?campus=RR Campus&department=${encodeURIComponent(
                            dept
                          )}`}
                          className="block hover:underline"
                          onClick={closeSidebar}
                        >
                          {dept}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            )}
          </li>

          {/* Items only visible when logged in */}
          {isLoggedIn && (
            <>
              <li>
                <Link
                  to="/rprogram"
                  className="block hover:underline"
                  onClick={closeSidebar}
                >
                  PHD Program
                </Link>
              </li>
              <li>
                <Link
                  to="/patent-process"
                  className="block hover:underline"
                  onClick={closeSidebar}
                >
                  Patents
                </Link>
              </li>
              <li>
                <Link
                  to="/Research-Grant"
                  className="block hover:underline"
                  onClick={closeSidebar}
                >
                  Research Grant
                </Link>
              </li>
              <li>
                <Link
                  to="/ethics"
                  className="block hover:underline"
                  onClick={closeSidebar}
                >
                  Ethics
                </Link>
              </li>
              <li>
                <a href="http://10.2.80.90:9001/" className="block hover:underline" onClick={closeSidebar}>
                  Collaborations
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
