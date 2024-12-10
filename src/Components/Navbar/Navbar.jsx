import { useState } from "react";
import logo from '../../assets/nav/logo.png'
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    
    <div className=" relative w-full h-full">
      <nav className="  absolute top-0 left-0 w-full bg-transparent z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
        </Link>

        {/* Hamburger Button for Small Screens */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center  md:justify-between md:w-auto`}
          id="navbar-menu"
        >
          {/* Centered Links */}
          <ul className="flex flex-col font-medium   text-center items-center md:flex-row md:space-x-10 mt-4 md:mt-0 mr-10">
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="block py-2 px-3 md:p-0 text-blue-700 dark:text-blue-500"
                aria-current="page"
              >
                Become a renter
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Rental deals
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                How it work
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Why Choose Us
              </a>
            </li>
          </ul>

          {/* Right-Aligned Button */}
          <div className="flex justify-end mt-4  md:mt-0">
            <button
              type="button"
              className="   mx-6 focus:border focus:border-1 focus:border-black font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
