import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FinancialPrinting = () => {

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
                    <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Poppins", marginBottom: "90px", marginLeft: "20px" }}>Financial Printing</h2>
                    <ul className="space-y-4 text-gray-700" style={{ listStyleType: "square", marginLeft: "20px", fontFamily: "Poppins" }}>
                        <p>As leaders in financial printing, Divine Print Solution specializes in
                            producing high-quality Annual Reports, Half-Yearly and Quarterly
                            Reports, as well as critical documents such as Mergers & Acquisitions,
                            Rights Issues, Private Placement Documents, Notices, and
                            Merger/Acquisition Agreements.
                            Our team of 26 professionals, including experts in Creative Design,
                            DTP, Proofreading, and Copy Editing, ensures that every project is
                            handled with precision and attention to detail. We also provide on-site
                            DTP facilities across India for faster and more convenient service.
                        </p>

                        <br /><br />
                        <li><strong>Variable Printing & Barcoding:</strong> We offer specialized Variable Printing and Barcoding for various
                            applications such as:
                            IPO & NFO Application Forms
                            Proposal Forms
                            Common Application Forms (CAF)
                            Postal Ballot Forms
                            Attendance Slips
                            Customized stationery for the BFSI sector (Banking, Financial Services, and
                            Insurance)
                            Mailing address slips
                            With an in-house capacity of producing 2 million application forms
                            daily, we meet the high-volume demands of our clients.</li>
                        <li><strong>Mutual Fund Industry Support:</strong> We print and dispatch essential documents for the Mutual Fund
                            industry, including:
                             Monthly Fact Sheets
                             Key Information Memorandums (KIM)
                             Offer Documents
                            We ensure timely and accurate dispatch through India Post and
                            reputable courier services across the country.
                            Highlights
                             India’s No. 1 Financial Printing Solution Provider
                             Capacity to print and bind 100,000 A4 Annual Reports within just 3 days
                             Typesetting capacity of 750 pages per day</li>
                        {/* <li><strong>24/7 Customer Support:</strong> Available round the clock to assist clients and
                            provide prompt solutions.</li>
                        <li><strong>Fastest Turnaround:</strong> Proven, consistent performance across our three primary
                            business verticals—Financial Printing, Commercial Printing, and Publishing
                            Solutions.</li>
                        <li><strong>lobal Procurement Network:</strong> Extensive paper storage capacity of over 1000
                            tons.</li>
                        <li><strong>Efficient Warehouse and Logistics:</strong> A streamlined inventory management and
                            on-demand logistics support system, both in India and internationally.</li>
                        <li><strong>Tech-Savvy Organization:</strong> Continuously embracing cutting-edge technology
                            and committed to constant upgradation.</li> */}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FinancialPrinting