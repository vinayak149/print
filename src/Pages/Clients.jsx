import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';

const Clients = () => {
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

    const clientImages = [
        { id: 1, src: img1, alt: 'Image 1 description' },
        { id: 2, src: img2, alt: 'Image 2 description' },
        { id: 3, src: img3, alt: 'Image 3 description' },
        { id: 4, src: img4, alt: 'Image 4 description' },
        { id: 5, src: img5, alt: 'Image 5 description' },
        { id: 6, src: img6, alt: 'Image 6 description' },
    ]

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
                    <h1 className="text-white text-3xl md:text-5xl" style={{ fontFamily: "DM Sans", fontWeight: "500" }}>OUR SERVICES</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-white p-4 md:p-6">
                    <h2 
                        className="text-3xl md:text-4xl font-bold mb-6" 
                        style={{ 
                            fontFamily: "DM Sans", 
                            marginBottom: "30px", 
                            marginLeft: "10px md:20px" 
                        }}
                    >
                        Our Clients
                    </h2>
                    <ul 
                        className="space-y-4 text-gray-700" 
                        style={{ 
                            listStyleType: "square", 
                            marginLeft: "10px md:20px", 
                            fontFamily: "DM Sans" 
                        }}
                    >
                        <p className="text-sm md:text-base">Divine Print Solution has worked with a wide range of clients, showcasing some examples below:</p>

                        <br />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {clientImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md mt-12 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-[30em] sm:h-[20px] lg:h-[30em] object-fill"
                                    />
                                </div>
                            ))}
                        </div>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Clients