import React, { useState } from "react";
import logo from "../assets/main-logo.png";
import {  Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 z-50">
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src={logo} alt="Divine Print Solutions" className="mr-3" height="100" width="100" />
                        </div>

                        {/* Hamburger Menu for small screens */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                        {/* Nav Links - Hidden on small screens, shown on large */}
                        <nav className={`hidden lg:flex flex-grow justify-center items-center space-x-8`}>
                            <Link to="/" className="text-gray-600 hover:text-blue-600 text-xs font-medium">HOME</Link>
                            <Link to="/about" className="text-gray-600 hover:text-blue-600 text-xs font-medium">ABOUT US</Link>
                            <Link to="/infrastructure" className="text-gray-600 hover:text-blue-600 text-xs font-medium">INFRASTRUCTURE</Link>
                            <Link to="/services" className="text-gray-600 hover:text-blue-600 text-xs font-medium">OUR SERVICES</Link>
                            <Link to="/strengths" className="text-gray-600 hover:text-blue-600 text-xs font-medium">OUR STRENGTHS</Link>
                            <Link to="/financials" className="text-gray-600 hover:text-blue-600 text-xs font-medium">FINANCIALS</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-xs font-medium">CONTACT US</Link>
                        </nav>

                        {/* Search bar - Commented out but can be used */}
                        {/* <div className="relative hidden lg:block">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="pl-8 pr-3 py-1 border rounded-full text-xs w-28 focus:w-36 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                        </div> */}
                    </div>
                </div>

                {/* Mobile Menu - shown when hamburger is clicked */}
                {isOpen && (
                    <nav className="lg:hidden bg-white shadow-md">
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm font-medium">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm font-medium">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/infrastructure" className="text-gray-600 hover:text-blue-600 text-sm font-medium">INFRASTRUCTURE</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-600 hover:text-blue-600 text-sm font-medium">OUR SERVICES</Link>
                            </li>
                            <li>
                                <Link to="/strengths" className="text-gray-600 hover:text-blue-600 text-sm font-medium">OUR STRENGTHS</Link>
                            </li>
                            <li>
                                <Link to="/financials" className="text-gray-600 hover:text-blue-600 text-sm font-medium">FINANCIALS</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm font-medium">CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbar;
