import React from 'react';
import strengthsPic from "../assets/strengths-hero.png";
import Footer from "./Footer";
import "../styles/Homepage.css";
import Navbar from './Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import PaintDropAnimation from '../animations/PaintDrop.jsx'

const Homepage = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow relative" >
          <div className="relative" style={{ zIndex: 10, fontFamily: "DM Sans", fontWeight: "500", height: "90vh", background: "linear-gradient(to right, #fcd34d, #f59e0b, #d97706)" }}>
            <div className="container mx-auto px-4 py-36 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 w-full mb-8 lg:mb-0 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-light">
                  <span className="text-white">Our</span><br />
                  <span className="text-black font-bold">PERFORMANCE</span><br />
                  <span className="text-white">Speaks</span>
                </h2>
                <p className="mt-4 text-white max-w-md mx-auto lg:mx-0">
                  At Divine Print Solutions Pvt Ltd we are inspired by the philosophy, "How can sky
                  be the limit when there are imprints on the moon". Our Performance Speaks.
                </p>
                <Link to="/about">
                  <button className="mt-6 bg-white text-[#162c7a]-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-300 transition-colors">
                    READ MORE
                  </button>
                </Link>


              </div>

              <div className="lg:w-1/2 w-full relative" style={{ zIndex: 10 }}>
                <Slider {...carouselSettings}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80" alt="Carousel Image 1" className="w-full h-64 lg:h-96 object-cover" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" alt="Carousel Image 2" className="w-full h-64 lg:h-96 object-cover" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1000&q=80" alt="Carousel Image 3" className="w-full h-64 lg:h-96 object-cover" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className=" py-16 relative">
            <PaintDropAnimation
              duration={1.5}
              className="absolute inset-0 " 
            />
            <div className="container mx-auto relative" style={{ zIndex: 20, marginTop: "100px", fontFamily: "DM Sans", fontWeight: "500" }}>
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                  <h2 className="text-3xl mb-4">
                    Aims to invest only in what we believe will increase the
                    <span className="block text-4xl font-bold mt-2 text-orange-600 font-bold">QUALITY <span className='text-black font-light'>and</span> EFFICIENCY</span>
                    to enhance value for our clients
                  </h2>
                </div>
                <div className="w-full lg:w-1/2 text-center">
                  <img src={strengthsPic} alt="Divine Print Solutions" className="mx-auto lg:mx-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-16" style={{ fontFamily: "DM Sans", zIndex: 10 }}>
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


          <div className="our-services-container mt-24 px-4 lg:px-0">
            <h2 className="our-services-title text-center text-3xl lg:text-4xl font-normal" style={{ zIndex: 10, fontFamily: "DM Sans", fontWeight: "700", background: "linear-gradient(to right, #fcd34d, #f59e0b, #d97706)" }}>
              OUR SERVICES
            </h2>
            <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
              <div className="service-item">
                <a href='/financial-printing'>
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
                    alt="Annual Reports"
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="service-name block text-center text-lg mt-4 font-semibold">
                  FINANCIAL PRINTING
                </span>
              </div>

              <div className="service-item">
                <a href='/publishing-solutions'>
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                    alt="Kids School Education Books"
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="service-name block text-center text-lg mt-4 font-semibold">
                  PUBLISHING SOLUTIONS
                </span>
              </div>

              <div className="service-item">
                <a href='/commercial-printing'>
                  <img
                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80"
                    alt="Furniture Catalogue"
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="service-name block text-center text-lg mt-4 font-semibold">
                  COMMERCIAL PRINTING
                </span>
              </div>

              <div className="service-item">
                <a href='/digital-printing'>
                  <img
                    src="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1000&q=80"
                    alt="Colorful Magazine Pages"
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="service-name block text-center text-lg mt-4 font-semibold">
                  DIGITAL PRINTING
                </span>
              </div>

              <div className="service-item">
                <a href='/design-studio'>
                  <img
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80"
                    alt="Packaging Solutions"
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="service-name block text-center text-lg mt-4 font-semibold">
                  DESIGN STUDIO
                </span>
              </div>

              <div className="service-item">
                <a href='/corrugation'>
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                    alt="Custom Printing"
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="service-name block text-center text-lg mt-4 font-semibold">
                  CORRUGATION
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
