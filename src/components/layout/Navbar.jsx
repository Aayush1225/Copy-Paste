import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo-good.png";
 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/debug", label: "Debug" },
    { path: "/support", label: "Support" },
  ];

  return (
    <div className="w-full flex items-center mt-4 mb-2 justify-center px-2 dark:bg-gray-900">
      <div className="w-full max-w-6xl h-16 flex items-center justify-between px-4 md:px-8 py-0 rounded-2xl shadow-md bg-stone-200 dark:bg-stone-500">
        
       
        <div className="h-full py-2 cursor-pointer">
          <img src={logo} alt="logo" className="h-full object-contain" />
        </div>

       
        <div className="hidden md:flex gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-700 hover:bg-black hover:text-white dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
          >
            ☰
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-stone-200 dark:bg-stone-800 rounded-lg shadow-lg flex flex-col gap-2 p-2 z-50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "text-gray-700 hover:bg-black hover:text-white dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}