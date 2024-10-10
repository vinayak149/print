import React from "react";
import Navbar from "./Navbar.jsx";


const Contact = () => {


    return (
        <div>
            <Navbar />
            <div className="contact-container flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                <div className="contact-info text-center">
                    <p className="mb-4">Address: 123 Main Street, City, Country</p>
                    <p className="mb-4">Phone: +123 456 789</p>
                    <p className="mb-8">Email: contact@example.com</p>
                </div>

                {/* Embedded Google Map */}
                <div className="map-container" style={{ width: "100%", maxWidth: "800px", height: "400px" }}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>


    )
}

export default Contact;