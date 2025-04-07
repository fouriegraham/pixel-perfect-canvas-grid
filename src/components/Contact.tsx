
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0a3431] text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">CONTACT US</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#d4aa36] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p>+27 73 471 7269</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-[#d4aa36] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Website</h3>
                  <p>www.betf.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#d4aa36] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p>Sethu@ywrf.onmicrosoft.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#d4aa36] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p>167 14th Road, Whitby Manor Office Estate, Triviron House</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <p className="mb-4">
                Have questions about our services or want to explore partnership opportunities? Reach out to us today!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#d4aa36] hover:bg-[#b38d20] text-[#0a3431] font-bold py-2 px-4 rounded-md transition-colors">
                  Send Message
                </a>
                <a href="#" className="bg-transparent hover:bg-white/10 text-white border border-white py-2 px-4 rounded-md transition-colors">
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/8a2fcca0-f9af-45e5-b32d-ef36e3018dba.png" 
              alt="Construction worker measuring" 
              className="rounded-lg shadow-xl h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a3431] to-transparent p-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/21f9d330-1ff2-4902-ab28-56db62f6b716.png" 
                  alt="BETF Logo" 
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Building futures, Managing risks.</h3>
                  <p className="text-sm text-gray-300">Empowering youth in the built environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
