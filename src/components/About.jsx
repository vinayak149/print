import React from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const settings = {
        dots: true,
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

            {/* Image Carousel with Text Overlay */}
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
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl" style={{ fontFamily: "Poppins", fontWeight: "500" }}>ABOUT US</h1>
                </div>
            </div>

            <div className="container mx-auto py-16 px-4" style={{ fontFamily: "Poppins", width: "1200px" }}>
                <p className="text-gray-800 text-lg mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste, expedita accusamus enim autem, dignissimos doloremque earum animi vero repellat assumenda corrupti eius officia quae? Quaerat rerum, debitis voluptatum voluptatem accusantium delectus dolorem laudantium sapiente magnam molestias dolore necessitatibus, pariatur, ipsam ad placeat aut cum dolorum facilis est facere nostrum.
                </p>
                <p className="text-gray-800 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quia natus inventore commodi pariatur. Asperiores, distinctio tenetur optio id quo quod pariatur dolores, odit inventore earum doloremque facilis facere itaque alias ipsa deserunt? Laudantium ratione alias deleniti, consectetur nulla veritatis, commodi id asperiores ex repellendus earum a dolore quibusdam sed!
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
