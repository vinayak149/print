import React, { useState } from "react";
import logo from "../assets/main-logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="sticky top-0 z-50">
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="Divine Print Solutions"
                                className="mr-3"
                                height="100"
                                width="100"
                            />
                        </div>

                        {/* Nav Links - Hidden on small screens, shown on large */}
                        <nav className="hidden lg:flex flex-grow justify-center items-center space-x-8">
                            <Link
                                to="/"
                                className="text-black hover:text-blue-600 text-xs font-medium"
                            >
                                HOME
                            </Link>
                            <Link
                                to="/about"
                                className="text-black hover:text-blue-600 text-xs font-medium"
                            >
                                ABOUT US
                            </Link>
                            <Link
                                to="/infrastructure"
                                className="text-black hover:text-blue-600 text-xs font-medium"
                            >
                                INFRASTRUCTURE
                            </Link>

                            {/* Services Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-black hover:text-blue-600 text-xs font-medium flex items-center"
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
                                    <ul className="absolute bg-white shadow-md mt-2 w-48">
                                        <li className="px-2 mt-6 py-2 hover:bg-blue-200 text-sm font-small" >
                                            <Link to="/financial-printing">
                                                FINANCIAL PRINTING
                                            </Link>
                                        </li>
                                        <li className="px-2 py-2 hover:bg-blue-200 text-sm font-small">
                                            <Link to="/publishing-solutions">
                                                PUBLISHING SOLUTIONS
                                            </Link>
                                        </li>
                                        <li className="px-2 py-2 hover:bg-blue-200 text-sm font-small">
                                            <Link to="/commercial-printing">
                                                COMMERCIAL PRINTING
                                            </Link>
                                        </li>
                                        <li className="px-2 py-2 hover:bg-blue-200 text-sm font-small">
                                            <Link to="/digital-printing">
                                                DIGITAL PRINTING
                                            </Link>
                                        </li>
                                        <li className="px-2 py-2 hover:bg-blue-200 text-sm font-small">
                                            <Link to="/design-studio">
                                                DESIGN STUDIO
                                            </Link>
                                        </li>
                                        <li className="px-2 py-2 mb-6 hover:bg-blue-200 text-sm font-small">
                                            <Link to="/corrugation">
                                                CORRUGATION
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>

                            <Link
                                to="/strengths"
                                className="text-black hover:text-blue-600 text-xs font-medium"
                            >
                                OUR STRENGTHS
                            </Link>
                            <Link
                                to="/financials"
                                className="text-black hover:text-blue-600 text-xs font-medium"
                            >
                                FINANCIALS
                            </Link>
                            <Link
                                to="/contact"
                                className="text-black hover:text-blue-600 text-xs font-medium"
                            >
                                CONTACT US
                            </Link>
                        </nav>
                    </div>
                </div>



                {/* Hamburger Menu for small screens */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                {/* Mobile Menu - shown when hamburger is clicked */}
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
                                    className="text-gray-600 hover:text-blue-600 text-sm font-medium"
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

                                    <ul className="mt-2 space-y-2">
                                        <li>
                                            <Link to="/financial-printing">
                                                FINANCIAL PRINTING
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/publishing-solutions">
                                                PUBLISHING SOLUTIONS
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/commercial-printing">
                                                COMMERCIAL PRINTING
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/digital-setup">
                                                DIGITAL SETUP
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/design-studio">
                                                DESIGN STUDIO
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/corrugation">
                                                CORRUGATION
                                            </Link>
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
                                    to="/financials"
                                    className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                                >
                                    FINANCIALS
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
