import { useState } from "react";
import { AdminNavbar as navItems } from "../constants/index"; // Import constants
import { Link } from "react-router-dom"; // Use Link for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="bg-white border-b border-gray-300">
      {/* Navbar Header */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <h1 className="text-blue-700 font-bold text-lg">Quizera</h1>
        <button
          className="text-blue-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white md:bg-transparent`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 px-4 md:px-6">
          {navItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white rounded-md transition-all"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
