import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PublishingSolutions = () => {
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
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Poppins", marginBottom: "90px", marginLeft: "20px" }}>Publishing Solutions</h2>
          <ul className="space-y-4 text-gray-700" style={{ listStyleType: "square", marginLeft: "20px", fontFamily: "Poppins" }}>
            <p>Divine Print Solution specializes in the printing of Educational Books,
              Trade Books, Hardbound, and Board Books for both domestic and
              international publishers. We offer end-to-end solutions tailored to
              educational book publishers, covering everything from Fiction to Non-
              Fiction titles, as well as innovative interactive books embedded with
              technology.
            </p>

            <br /><br />

            <li><strong>Comprehensive Services:</strong> Our expertise extends to the production of a wide variety of books:
              Educational Books
              Children’s Books
              Fiction and Non-Fiction Books
              We provide a complete solution for book publishers, including artwork
              design, printing, kitting (tier 1 to tier 4), warehousing, and final
              dispatch of customized kits directly to schools or students.</li>
            <li><strong>State-of-the-Art Infrastructure:</strong>
              With advanced Digital, Sheet-fed, and Web-fed printing capabilities,
              our facility is perfectly equipped to handle a wide range of publishing
              needs. We are ideally suited to meet the specific size and format
              requirements of both Indian and international publishers.
              Highlights
               Flexible printing solutions with a range of cut-off sizes to meet the diverse
              needs of global publishers.
               Capacity to perfect bind 150,000 books and section sew 200,000 books per
              day.
               Self-owned warehouse with a storage capacity of over 5,000 metric tons.
               Comprehensive kitting facilities, offering tier 1 to tier 4 services to provide
              added value to educational institutions and book publishers.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PublishingSolutions