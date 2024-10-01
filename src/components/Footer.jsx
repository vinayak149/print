import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white" style={{marginTop: "20vh",background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,12,98,1) 35%, rgba(0,212,255,1) 100%)"}}>
      <div className="container mx-auto px-4 py-8" >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">MAIN LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Infrastructure</a></li>
              <li><a href="#" className="hover:underline">Our Strengths</a></li>
              <li><a href="#" className="hover:underline">Financials</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Financial Printing</a></li>
              <li><a href="#" className="hover:underline">Publishing solutions</a></li>
              <li><a href="#" className="hover:underline">Commercial Printing</a></li>
              <li><a href="#" className="hover:underline">Digital Setup</a></li>
              <li><a href="#" className="hover:underline">Design Studio</a></li>
              <li><a href="#" className="hover:underline">Corrugation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">OTHER LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Warehouse & Logistics</a></li>
              <li><a href="#" className="hover:underline">Certifications</a></li>
              <li><a href="#" className="hover:underline">Our Policies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CORPORATE OFFICE</h3>
            <p className="mb-4">
              2/2222K, Sasinagar North<br />
              Sithurajarpuram, SIVAKASI, Tamil Nadu, India<br />
              Tel.: +91 9940064001<br />
              Email: divineprintsolution@gmail.com
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>Copyright © 2024 Example Print Solutions Pvt. Ltd. | Terms & Conditions | Privacy Policy</p>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;