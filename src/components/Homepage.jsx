import React from 'react';
import { Search } from 'lucide-react';
import mainPic from "../assets/main-hero.png";
import strengthsPic from "../assets/strengths-hero.png";
import logo from "../assets/main-logo.png";
import PaintDropAnimation from '../animations/PaintDrop';
import Footer from "./Footer";
import "../styles/Homepage.css";
import Navbar from './Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {


  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };


  return (
    <div className="relative flex flex-col min-h-screen font-roboto">
      <Navbar/>

     <main className="flex-grow">
        <div className="relative" style={{ height: "90vh", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,12,98,1) 35%, rgba(0,212,255,1) 100%)" }}>
          <div className="container mx-auto px-4 py-16 flex">
            <div className="w-1/2">
              <h2 className="text-5xl font-light">
                <span className="text-white">Our</span><br />
                <span className="text-red-500 font-bold">PERFORMANCE</span><br />
                <span className="text-blue-300">Speaks</span>
              </h2>
              <p className="mt-4 text-white max-w-md">
                At Divine Print Solutions Pvt Ltd we are inspired by the philosophy, "How can sky
                be the limit when there are imprints on the moon". Our Performance Speaks.
              </p>
              <button className="mt-6 bg-white text-[#162c7a]-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                READ MORE
              </button>
            </div>

            {/* Image Carousel */}
            <div className="w-1/2 relative">
              <Slider {...carouselSettings}>
                <div>
                  <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80" alt="Carousel Image 1" className="w-full h-96 object-cover" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" alt="Carousel Image 2" className="w-full h-96 object-cover" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1000&q=80" alt="Carousel Image 3" className="w-full h-96 object-cover" />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="bg-sky-300 py-16">
          <div className="container mx-auto" style={{ marginTop: "100px", fontFamily: "Poppins", fontWeight: "500", marginRight: "10%" }}>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl mb-4">
                  Aims to invest only in what we believe will increase the
                  <span className="block text-4xl font-bold mt-2">QUALITY and EFFICIENCY</span>
                  to enhance value for our clients
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
              <div className="flex items-center">
              <img src={strengthsPic} alt="Divine Print Solutions" className="mr-3" />
            </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16 fontFamily-roboto">
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


        <div className="our-services-container" style={{marginTop:"100px"}}>
          <h2 className="our-services-title">OUR SERVICES</h2>
          <div className="services-grid">
            <div className="service-item financial-printing">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80" alt="Annual Reports" />
              <span className="service-name">FINANCIAL PRINTING</span>
            </div>
            <div className="service-item publishing-solutions">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" alt="Kids School Education Books" />
              <span className="service-name">PUBLISHING SOLUTIONS</span>
            </div>
            <div className="service-item commercial-printing">
              <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80" alt="Furniture Catalogue" />
              <span className="service-name">COMMERCIAL PRINTING</span>
            </div>
            <div className="service-item digital-setup">
              <img src="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1000&q=80" alt="Colorful Magazine Pages" />
              <span className="service-name">DIGITAL SETUP</span>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Homepage;