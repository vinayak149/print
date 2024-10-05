import React from "react";
import logo from "../assets/main-logo.png";
import { Search } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50">
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={logo} alt="Divine Print Solutions" className="mr-3" height="100" width="100" />
                        </div>
                        <nav className="flex-grow flex justify-center items-center space-x-4">
                            <Link to="/" className="text-gray-600 hover:text-blue-600 text-xs font-medium">HOME</Link>
                            <Link to="/about" className="text-gray-600 hover:text-blue-600 text-xs font-medium">ABOUT US</Link>
                            <Link to="/infrastructure" className="text-gray-600 hover:text-blue-600 text-xs font-medium">INFRASTRUCTURE</Link>
                            <Link to="/services" className="text-gray-600 hover:text-blue-600 text-xs font-medium">OUR SERVICES</Link>
                            <Link to="/strengths" className="text-gray-600 hover:text-blue-600 text-xs font-medium">OUR STRENGTHS</Link>
                            <Link to="/financials" className="text-gray-600 hover:text-blue-600 text-xs font-medium">FINANCIALS</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-xs font-medium">CONTACT US</Link>
                        </nav>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="pl-8 pr-3 py-1 border rounded-full text-xs w-28 focus:w-36 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;