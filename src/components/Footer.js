// Footer.js
import React from 'react';
import logo from "../assest/logo.png"
const Footer = () => {
  return (
    <footer className="text-white py-8 mt-16 bg-[#280274]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="text-center md:text-left ml-11">
            <img src={logo} alt="Logo" className="h-12" />
            <p className="mt-4"><span className='text-[#FE7A36]'>RNS Institute of Technology  (RNSIT)</span> established in the year 2001, is the brainchild of the Group Chairman, Dr. R. N. Shetty.</p>
          </div>

          {/* Quick Links */}
          <div className='ml-[30%]'>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className='text-[#FE7A36]'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ</a></li>
              
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Departments</h3>
            <ul className='text-[#FE7A36]'>
              <li>CSE</li>
              <li>ISE</li>
              <li>ECE</li>
              <li>EEE</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className=' ml-11'>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className='font-bold text-[#FE7A36]'>RNS Institute Of Technology</p>
            <p>123 Street Address</p>
            <p>City, State, ZIP</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;