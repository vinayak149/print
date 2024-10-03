
import Slider from "react-slick"; // Carousel for the images
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from 'lucide-react';
import logo from "../assets/main-logo.png";  // Keep your logo as it is
import Footer from "./Footer";
import "../styles/Homepage.css";

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
      {/* Sticky Navbar */}
      <div className="w-full fixed top-0 bg-white shadow-md py-4 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Divine Print Solutions" className="mr-3" height="100" width="100" />
          </div>
          <nav className="flex-grow flex justify-center items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">HOME</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">ABOUT US</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">INFRASTRUCTURE</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">OUR SERVICES</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">OUR STRENGTHS</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">FINANCIALS</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-xs font-medium">CONTACT US</a>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-8 pr-3 py-1 border rounded-full text-xs w-28 focus:w-36 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
          </div>
        </div>
      </div>

      {/* Main Content */}
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

        {/* Other sections */}
        {/* Your previous code for OUR STRENGTHS, SERVICES, etc. */}
      </main>
      

      <Footer />
    </div>
  );
};

export default Homepage;
