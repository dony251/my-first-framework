import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        
        {/* Logo في الشمال - يوديني للهوم */}
        <NavLink 
          to="/" 
          className="text-xl font-bold hover:text-green-400"
          onClick={() => setIsOpen(false)}
        >
          START FRAMEWORK
        </NavLink>

        {/* اللينكات في اليمين */}
        <div className="flex items-center">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 font-semibold">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-500 text-white px-3 py-1 rounded"
                    : "hover:bg-green-500 px-3 py-1 rounded"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-500 text-white px-3 py-1 rounded"
                    : "hover:bg-green-500 px-3 py-1 rounded"
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-500 text-white px-3 py-1 rounded"
                    : "hover:bg-green-500 px-3 py-1 rounded"
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* زرار المنيو في الموبايل */}
          <button
            className="md:hidden text-2xl ml-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col md:hidden bg-gray-900 text-center font-semibold py-4 space-y-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white px-3 py-1 rounded"
                  : "hover:bg-green-500 px-3 py-1 rounded"
              }
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white px-3 py-1 rounded"
                  : "hover:bg-green-500 px-3 py-1 rounded"
              }
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white px-3 py-1 rounded"
                  : "hover:bg-green-500 px-3 py-1 rounded"
              }
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
