import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DesignStudio = () => {
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
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Poppins", marginBottom: "90px", marginLeft: "20px" }}>Design Studio</h2>
          <ul className="space-y-4 text-gray-700" style={{ listStyleType: "square", marginLeft: "20px", fontFamily: "Poppins" }}>
            <p>At Divine Print Solution, our Design Studio offers end-to-end support
              for educational book publishers and corporate clients, turning raw
              content into professionally designed and visually appealing books. We
              specialize in:
            </p>
            <br></br>
            <ul style={{ listStyleType: "square", marginLeft: "40px" }}>
              <li><strong>Educational Book Design:</strong> From conceptualization to layout and illustration, we help transform raw content into beautifully crafted books.</li>
              <li> <strong>Annual Report Design:</strong> Providing expert services in concept design, cover creation, and layout for secretarial and financial pages of annual reports.</li>
              <li>Research Reports and Presentation Booklets</li>
              <li>Visual Aids and Direct Mailers</li>
              <li>
                Event stationery such as ID Cards, Flash Cards, Enrollment/Registration
                Forms, Writing Pads, and Brochures
              </li>
              <li>
                Personalized Welcome Kits for new recruits, HR Kits, and Awards/Recognition
                Certificates for employees
              </li>
              <li>Flexible print solutions from 1 to 500 books</li>
            </ul>

            <br></br>
            <li><strong>Core Competencies:</strong></li>
            <ul style={{ listStyleType: "square", marginLeft: "40px" }}>
              <li>
                <strog>Typesetting and Layout:</strog> For Annual Reports, IPO Stationery, Application
                Forms, Monthly Fact Sheets, KIMs, Educational and Children’s Books,
                Magazines, House Journals, Diaries, Calendars, and various types of
                marketing collateral.</li>
              <li>We also offer On-site DTP services for both domestic and international
                clients, ensuring better coordination and faster turnaround for regular
                or bulk jobs.</li>
            </ul>
            <li><strong>Highlights:</strong></li>
            <ul style={{ listStyleType: "square", marginLeft: "40px" }}>
              <li>
              A team of 26 professionals, including creative designers, DTP specialists,
              proofreaders, and copy-editors.</li>
              <li>Fast and accurate conversion of raw data into final layouts.</li>
              <li>24/7 online and on-site DTP support for continuous and efficient service.</li>
            </ul>
            
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DesignStudio