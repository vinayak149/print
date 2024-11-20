import React from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const images = [
        "https://images.unsplash.com/photo-1529016623883-da79d2541b2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661943377898-a0e4a0f0e359?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];


    const strengthContent = [
        {
            name: "Robust Infrastructure",
            msg: "Equipped with Digital, Sheet-fed, and Web-fed machines, with in-house design, layout, scanning, and archiving services.",
            icon: (
                <svg
                    className="w-12 h-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2l9 21H3L12 2z"
                    />
                </svg>
            ),
        },
        {
            name: "Specialized Hard-case Book Binding",
            msg: "One of the finest setups for hard-case book binding in Western India.",
            icon: (
                <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5v14"
                    />
                </svg>
            ),
        },
        {
            name: "24/7 Customer Support",
            msg: "Available round the clock to assist clients and provide prompt solutions.",
            icon: (
                <svg
                    className="w-12 h-12 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 6v6l3 3" />
                </svg>
            ),
        },
        {
            name: "Fastest Turnaround",
            msg: "Proven, consistent performance across our three primary business verticals—Financial Printing, Commercial Printing, and Publishing Solutions.",
            icon: (
                <svg
                    className="w-12 h-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4H8l4-4m6 8h1v4h-4l-4-4"
                    />
                </svg>
            ),
        },
        {
            name: "Global Procurement Network",
            msg: "Extensive paper storage capacity of over 1000 tons.",
            icon: (
                <svg
                    className="w-12 h-12 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h18M9 3v18m6-18v18"
                    />
                </svg>
            ),
        },
        {
            name: "Efficient Warehouse and Logistics",
            msg: "A streamlined inventory management and on-demand logistics support system, both in India and internationally.",
            icon: (
                <svg
                    className="w-12 h-12 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h11m8 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
        {
            name: "Tech-Savvy Organization",
            msg: "Continuously embracing cutting-edge technology and committed to constant upgradation.",
            icon: (
                <svg
                    className="w-12 h-12 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4m16 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
        {
            name: "Digital Printing",
            msg: "Cutting-edge technology for manufacturing captivating designs.",
            icon: (
                <svg
                    className="w-12 h-12 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 7a5 5 0 100-10 5 5 0 000 10z"
                    />
                </svg>
            ),
        },
    ];


    return (
        <div>
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
                    <h1 className="text-white text-5xl sm:text-4xl md:text-6xl" style={{ fontFamily: "DM Sans", fontWeight: "500" }}>ABOUT US</h1>
                </div>
            </div>

            <div className="container mx-auto py-16 px-4" style={{ fontFamily: "DM Sans" }}>
                <p className="text-gray-800 text-lg md:text-xl mb-10">
                    Divine Print Solution, based in Sivakasi, India, was established in 2022
                    with a vision to become a leading print solutions provider...
                </p>
                <p className="text-gray-800 text-lg md:text-xl">
                    Whether it’s upgrading our software, investing in cutting-edge prepress and press technologies...
                </p>
                <div style={{ marginTop: "80px" }}>
                    <Accordion />
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center sm:text-2xl md:text-4xl">OUR STRENGTHS</h2>
                    <p className="text-center mb-12 max-w-3xl mx-auto sm:text-lg md:text-xl">
                        Divine Print Solution is a comprehensive print solutions company offering a complete range of services...
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengthContent.map((strength, index) => (
                            <div key={index} className="text-center">
                                <div className="rounded-full p-6 mb-4 inline-block bg-gray-100">
                                    {strength.icon}
                                </div>
                                <h2 className="font-bold mb-2">{strength.name}</h2>
                                <p className="mt-4">{strength.msg}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
