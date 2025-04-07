
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/41dd08ac-7aef-42eb-8f6b-7bf5922dd38f.png')",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-8 md:mb-0 md:mr-12">
            <img 
              src="/lovable-uploads/21f9d330-1ff2-4902-ab28-56db62f6b716.png" 
              alt="BETF Logo" 
              className="w-40 h-40 md:w-48 md:h-48 mx-auto"
            />
          </div>
          
          <div className="text-white max-w-xl">
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
              "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d4aa36]"
            )}>
              Building futures, Managing risks.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering youth in the built environment through education, mentorship, and real-world experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#services" 
                className="bg-[#d4aa36] hover:bg-[#b38d20] text-[#0a3431] font-bold py-3 px-6 rounded-md transition-colors"
              >
                Our Services
              </a>
              <a 
                href="#about" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-3 px-6 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
