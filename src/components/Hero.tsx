
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/082469ce-ab8e-4b78-b11b-437131c286be.png')",
          backgroundPosition: "center 30%"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/cb461d4d-6466-448e-9eea-f3b49c2439d0.png" 
              alt="BETF Logo" 
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          
          <div className="text-white">
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6",
              "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d4aa36]"
            )}>
              Expert Building Inspections & Risk Management
            </h1>
            
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
              Professional building assessment services with a focus on safety, compliance, and structural integrity for your construction projects.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-[#d4aa36] hover:bg-[#b38d20] text-[#0a3431] font-bold py-6 px-8 rounded-md text-lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-6 px-8 rounded-md text-lg"
              >
                Book Inspection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
