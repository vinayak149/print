import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Corrugation = () => {
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
                    <h1 className="text-white text-5xl" style={{ fontFamily: "Poppins", fontWeight: "500" }}>OUR SERVICES</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-white p-6">
                    <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Poppins", marginBottom: "90px", marginLeft: "20px" }}>Corrugation Solutions</h2>
                    <ul className="space-y-4 text-gray-700" style={{ listStyleType: "square", marginLeft: "20px", fontFamily: "Poppins" }}>
                        <p>Building on our strong foundation as a trusted print partner in Financial
                            Printing, Commercial Printing, and Publishing Solutions, Divine Print
                            Solution has expanded into the packaging industry with a state-of-the-
                            art corrugated carton setup. With over 400 clients worldwide and a
                            passionate, experienced team, we are poised to make a significant
                            impact in the packaging segment.
                            Our advanced corrugated and binding machines, combined with a
                            dedicated warehousing facility, enable us to offer competitive pricing
                            and fastest turnaround times in Western Maharashtra.
                        </p>

                        <br /><br />
                        <li><strong>Product Profile & Quality Checks</strong></li>
                        <ul style={{ listStyleType: "square", marginLeft: "40px" }}>
                            <p>We offer a comprehensive range of corrugated cartons, from standard
                                to customized sizes, catering to various needs:</p>
                            <br />
                            <li><strong>Carton Types: </strong></li>
                            <ul style={{ listStyleType: "square", marginLeft: "80px" }}>
                                <li>Wall & Desk Calendars, Planners, and PU/Hard Case Diaries with personalized options.</li>
                                <li>Customized Diaries and Calendars</li>
                                <li>Research Reports and Presentation Booklets</li>
                                <li>Visual Aids and Direct Mailers</li>
                                <li>Event stationery such as ID Cards, Flash Cards, Enrollment/Registration Forms, Writing Pads, and Brochures</li>
                                <li>Personalized Welcome Kits for new recruits, HR Kits, and Awards/Recognition Certificates for employees</li>
                                <li>Flexible print solutions from 1 to 500 books</li>

                            </ul>
                            <br />
                            <li><strong>Heavy-Duty Cartons:</strong> For domestic and export products.</li>
                            <li><strong>Paper Options:</strong> Choose from Indian/Imported, Eco-friendly,
                                Food Grade, Recycled, and Virgin Pulp.</li>
                            <li>We also provide a warehousing facility to store products with
                                minimum order quantities (MOQ).</li>
                        </ul>
                        <br />
                        <li><strong>Stringest Quality Control</strong></li>
                        <ul style={{ listStyleType: "square", marginLeft: "40px" }}>
                            <li>Our multi-layer quality check process ensures that each carton meets
                                the highest standards, starting from the raw material to the final
                                product.</li>
                        </ul>
                        <li><strong>Highlights:</strong></li>
                        <ul style={{ listStyleType: "square", marginLeft: "40px" }}>

                            <li>1, 2 & 4-color offset printing machines with in-house punching and
                            lamination facilities.</li>
                            <li>Competitive pricing and fast turnaround time (within 48 hours) in the
                            Mumbai Metropolitan Region.</li>
                            <li>Warehousing facility to accommodate minimum MOQ for clients.</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Corrugation;