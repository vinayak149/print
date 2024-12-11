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
import images7 from '../assets/images7.jpg';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img17 from '../assets/img17.png';

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
        { id: 1, src: img1, alt: 'Client Project 1' },
        { id: 2, src: img2, alt: 'Client Project 2' },
        { id: 3, src: img3, alt: 'Client Project 3' },
        { id: 4, src: img4, alt: 'Client Project 4' },
        { id: 5, src: img5, alt: 'Client Project 5' },
        { id: 6, src: img6, alt: 'Client Project 6' },

        { id: 7, src: images7, alt: 'Client Project 7' },
        { id: 8, src: img8, alt: 'Client Project 8' },
        { id: 9, src: img9, alt: 'Client Project 9' },
        { id: 10, src: img10, alt: 'Client Project 10' },
        { id: 11, src: img11, alt: 'Client Project 11' },
        { id: 12, src: img12, alt: 'Client Project 12' },
        { id: 13, src: img13, alt: 'Client Project 13' },
        { id: 14, src: img14, alt: 'Client Project 14' },
        { id: 15, src: img15, alt: 'Client Project 15' },
        { id: 17, src: img17, alt: 'Client Project 17' }
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
                    <h1 className="text-white text-3xl md:text-5xl" style={{ fontFamily: "DM Sans", fontWeight: "500" }}>OUR CLIENTS</h1>
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
                    <ul className="space-y-4 text-gray-700" style={{ fontFamily: "DM Sans" }}>
                        <p className="text-sm md:text-base">
                            Divine Print Solution has worked with a wide range of clients, showcasing some examples below:
                        </p>
                        <br />
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={3}
                            autoplay={true}
                            autoplaySpeed={2500}
                            slidesToScroll={1}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                            ]}
                        >
                            {clientImages.map((image, index) => (
                                <div key={index} className="p-2">
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-[30em] object-fill"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Clients