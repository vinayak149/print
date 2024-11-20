import React, { useState } from "react";
import logo from "../assets/main-logo.jpg";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <a href="/">
            <img
              src={logo}
              alt="Divine Print Solutions"
              className="h-16 w-16 mr-3"
            />
            </a>
          </div>

          <nav className="hidden lg:flex flex-grow justify-center items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-blue-600 text-sm font-medium"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-blue-600 text-sm font-medium"
            >
              ABOUT US
            </Link>
            <Link
              to="/infrastructure"
              className="text-black hover:text-blue-600 text-sm font-medium"
            >
              INFRASTRUCTURE
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-blue-600 text-sm font-medium flex items-center"
              >
                OUR SERVICES
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg mt-2 w-48 rounded-md">
                  <li className="px-4 py-2 hover:bg-blue-100 text-sm">
                    <Link to="/financial-printing">Financial Printing</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 text-sm">
                    <Link to="/publishing-solutions">Publishing Solutions</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 text-sm">
                    <Link to="/commercial-printing">Commercial Printing</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 text-sm">
                    <Link to="/digital-printing">Digital Printing</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 text-sm">
                    <Link to="/design-studio">Design Studio</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 text-sm">
                    <Link to="/corrugation">Corrugation</Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              to="/strengths"
              className="text-black hover:text-blue-600 text-sm font-medium"
            >
              OUR STRENGTHS
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-blue-600 text-sm font-medium"
            >
              CONTACT US
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/infrastructure"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  INFRASTRUCTURE
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium flex items-center"
                >
                  OUR SERVICES
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 bg-white shadow-md rounded-md space-y-2 py-2">
                    <li className="px-4 hover:bg-blue-100 text-sm">
                      <Link to="/financial-printing">Financial Printing</Link>
                    </li>
                    <li className="px-4 hover:bg-blue-100 text-sm">
                      <Link to="/publishing-solutions">Publishing Solutions</Link>
                    </li>
                    <li className="px-4 hover:bg-blue-100 text-sm">
                      <Link to="/commercial-printing">Commercial Printing</Link>
                    </li>
                    <li className="px-4 hover:bg-blue-100 text-sm">
                      <Link to="/digital-printing">Digital Printing</Link>
                    </li>
                    <li className="px-4 hover:bg-blue-100 text-sm">
                      <Link to="/design-studio">Design Studio</Link>
                    </li>
                    <li className="px-4 hover:bg-blue-100 text-sm">
                      <Link to="/corrugation">Corrugation</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/strengths"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  OUR STRENGTHS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
