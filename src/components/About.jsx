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
                    <h1 className="text-white text-5xl" style={{ fontFamily: "Poppins", fontWeight: "500" }}>ABOUT US</h1>
                </div>
            </div>

            <div className="container mx-auto py-16 px-4" style={{ fontFamily: "Poppins", width: "1200px" }}>
                <p className="text-gray-800 text-lg mb-10">
                    Divine Print Solution, based in Sivakasi, India, was established in 2022
                    with a vision to become a leading print solutions provider. Founded by
                    a team of dynamic and experienced professionals, each with over two
                    decades of expertise in the printing industry, the company has rapidly
                    expanded to serve businesses both locally and globally.
                    We are committed to delivering top-quality printing services with
                    exceptional customer care to businesses and organizations of all sizes.
                    At Divine Print Solution, we understand the importance of staying
                    ahead with the latest technology to offer our clients the best quality
                    and service.
                </p>
                <p className="text-gray-800 text-lg">
                    Whether it’s upgrading our software, investing in cutting-
                    edge prepress and press technologies, or enhancing our finishing
                    processes, we continuously strive to improve the efficiency, quality, and
                    value of our services.
                    Our goal is to help you achieve perfection in every print, every time.
                </p>
                <div style={{ marginTop: "80px" }}>
                    <Accordion />
                </div>
            </div>

            <div className="bg-white py-24" style={{ fontFamily: "Poppins", fontWeight: "300" }}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">OUR STRENGTHS</h2>
                    <p className="text-center mb-12 max-w-3xl mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestiae minus eius
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {['DESIGN STUDIO', 'PRE-PRESS', 'PRESS', 'POST PRESS'].map((strength, index) => (
                            <div key={index} className="text-center">
                                <div className="rounded-full p-6 mb-4 inline-block">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold mb-2">{strength}</h3>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
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
