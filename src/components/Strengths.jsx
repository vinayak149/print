import React from 'react'
import Navbar from './Navbar'
import OurStrengths from '../assets/main-hero.png'
import Footer from './Footer.jsx'

export default function Strengths() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="relative">
                <img
                    src={OurStrengths}
                    alt="Printing Machine"
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl" style={{ fontFamily: "Poppins", fontWeight: "500" }}>OUR STRENGTHS</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-white p-6">
                    <h2 className="text-4xl font-bold mb-6" style={{fontFamily: "Poppins"}}>OUR STRENGTHS</h2>
                    <ul className="space-y-4 text-gray-700" style={{listStyleType: "disc", marginLeft: "20px", fontFamily:"Poppins"}}>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}