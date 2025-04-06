import { useState } from "react";
import { AdminNavbar as navItems, NavItem } from "../constants/index"; // Import constants
import { Link } from "react-router-dom"; // Use Link for navigation

const Navbar = ({navbarelements,children}) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (<div className="flex flex-col">
    <nav className="bg-white border-b border-gray-300">
      {/* Navbar Header */}

      {/* Navbar Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white md:bg-transparent `}
      >
        <div className=" bg-blue-700 flex-col fixed h-screen w-1/5 md:flex-row md:items-center md:gap-4  md:px-6">

        <span className="flex items-center justify-center py-3 text-3xl font-bold text-white">Dashboard</span>
          {navbarelements.map((item: NavItem, index: number) => (
            <Link
              to={item.link}
              key={index}
              className="flex gap-3  lg:py-5 md:py-3 sm:py-0 items-center text-xl  hover:text-blue-700 hover:bg-white
              bg-blue-700 text-white rounded-md transition-all"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
    <div className="flex flex-col px-2">
      {children}
    </div>
  </div>
  );
};

export default Navbar;
