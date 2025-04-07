
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a3431] text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/cb461d4d-6466-448e-9eea-f3b49c2439d0.png" 
            alt="BETF Logo" 
            className="h-12 w-12 md:h-14 md:w-14"
          />
          <span className="ml-3 text-lg md:text-xl font-semibold">BETF</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-[#d4aa36] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#d4aa36] transition-colors">About Us</a>
          <a href="#mission" className="hover:text-[#d4aa36] transition-colors">Mission</a>
          <a href="#services" className="hover:text-[#d4aa36] transition-colors">Services</a>
          <a href="#inspection" className="hover:text-[#d4aa36] transition-colors">Book Inspection</a>
          <a href="#partners" className="hover:text-[#d4aa36] transition-colors">Partners</a>
          <a href="#contact" className="hover:text-[#d4aa36] transition-colors">Contact</a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-[#0a3431] shadow-lg transition-all duration-300 ease-in-out md:hidden",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
      )}>
        <div className="flex flex-col px-4 pb-4 space-y-3">
          <a href="#home" className="hover:text-[#d4aa36] transition-colors pt-3">Home</a>
          <a href="#about" className="hover:text-[#d4aa36] transition-colors">About Us</a>
          <a href="#mission" className="hover:text-[#d4aa36] transition-colors">Mission</a>
          <a href="#services" className="hover:text-[#d4aa36] transition-colors">Services</a>
          <a href="#inspection" className="hover:text-[#d4aa36] transition-colors">Book Inspection</a>
          <a href="#partners" className="hover:text-[#d4aa36] transition-colors">Partners</a>
          <a href="#contact" className="hover:text-[#d4aa36] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
