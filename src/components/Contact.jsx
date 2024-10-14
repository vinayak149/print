import React from "react";
import Navbar from "./Navbar.jsx";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer.jsx";

const Contact = () => {
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
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl" style={{ fontFamily: "Poppins", fontWeight: "500" }}>CONTACT US</h1>
                </div>
            </div>

            <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-32 gap-8 px-6">
                
                <div className="w-full md:w-1/2">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.853027732698!2d77.78407899999999!3d9.434286700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf2439dcc0b3%3A0xc77e41cddda5c76e!2s2%2F2276M%2C%20Sasi%20Nagar%2C%20Sivakasi%2C%20Tamil%20Nadu%20626123!5e0!3m2!1sen!2sin!4v1728937104114!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center px-24" style={{fontFamily: "Poppins"}}>
                    <h2 className="text-3xl font-bold mb-6 ">Corporate Office</h2>
                    <p className="mb-2">2/2222K, Sasinagar North,</p>
                    <p className="mb-2">Sithurajapuram, SIVAKASI, Tamil Nadu, India</p>
                    <p className="mb-2">Tel.: +91 9940064001</p>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:divineprintsolution@gmail.com"
                            className="text-blue-500 underline"
                        >
                            divineprintsolution@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
