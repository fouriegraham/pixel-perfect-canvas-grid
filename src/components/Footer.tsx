
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#072724] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/21f9d330-1ff2-4902-ab28-56db62f6b716.png" 
                alt="BETF Logo" 
                className="w-12 h-12 mr-3"
              />
              <span className="text-xl font-bold">BETF</span>
            </div>
            <p className="text-gray-400">
              Building futures, Managing risks. Empowering youth in the built environment through education, mentorship, and real-world experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d4aa36]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#d4aa36] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#d4aa36] transition-colors">About Us</a></li>
              <li><a href="#mission" className="hover:text-[#d4aa36] transition-colors">Mission & Vision</a></li>
              <li><a href="#services" className="hover:text-[#d4aa36] transition-colors">Services</a></li>
              <li><a href="#partners" className="hover:text-[#d4aa36] transition-colors">Partners</a></li>
              <li><a href="#contact" className="hover:text-[#d4aa36] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d4aa36]">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on our programs, events, and success stories.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-white/10 border border-gray-700 rounded-l-md focus:outline-none focus:border-[#d4aa36] flex-grow"
              />
              <button 
                type="submit" 
                className="bg-[#d4aa36] hover:bg-[#b38d20] text-[#0a3431] font-bold py-2 px-4 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BETF - Built Environment Transformation Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#d4aa36] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#d4aa36] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
