import React from 'react';
import Slider from 'react-slick';
import Navbar from './Navbar';
import Footer from './Footer.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Strengths() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const images = [
        "https://images.unsplash.com/photo-1529016623883-da79d2541b2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661943377898-a0e4a0f0e359?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="relative">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    ))}
                </Slider>
                <div className="absolute mb-[8px] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl" style={{ fontFamily: "Poppins", fontWeight: "500" }}>OUR STRENGTHS</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-white p-6">
                    <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Poppins",marginBottom:"90px",marginLeft: "20px" }}>OUR STRENGTHS</h2>
                    <ul className="space-y-4 text-gray-700" style={{ listStyleType: "disc", marginLeft: "20px", fontFamily: "Poppins" }}>
                        <p>Divine Print Solution is a comprehensive print solutions company
                            offering a complete range of services including Design Studio, Pre-
                            press, Post-press, Digital Printing, Variable Printing, as well as
                            Warehousing and Logistic Management across the globe.
                        </p>

                        <br /><br />
                        <li><strong>Robust Infrastructure:</strong> Equipped with Digital, Sheet-fed, and Web-fed
                            machines, with in-house design, layout, scanning, and archiving services.</li>
                        <li><strong>Specialized Hard-case Book Binding:</strong> One of the finest setups for hard-case
                            book binding in Western India.</li>
                        <li><strong>24/7 Customer Support:</strong> Available round the clock to assist clients and
                            provide prompt solutions.</li>
                        <li><strong>Fastest Turnaround:</strong> Proven, consistent performance across our three primary
                            business verticals—Financial Printing, Commercial Printing, and Publishing
                            Solutions.</li>
                        <li><strong>lobal Procurement Network:</strong> Extensive paper storage capacity of over 1000
                        tons.</li>
                        <li><strong>Efficient Warehouse and Logistics:</strong> A streamlined inventory management and
                        on-demand logistics support system, both in India and internationally.</li>
                        <li><strong>Tech-Savvy Organization:</strong> Continuously embracing cutting-edge technology
                        and committed to constant upgradation.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
