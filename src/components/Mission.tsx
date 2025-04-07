
import React from 'react';
import { cn } from '@/lib/utils';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-[#0a3431] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
              <p className="leading-relaxed">
                To manage the risks associated with economic empowerment of Youth Owned
                Emerging Enterprises within the built sector on behalf of our investor partners
                and program project funders.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision</h2>
              <p className="leading-relaxed italic">
                "Empowering youth in the built environment. Building futures, managing risks."
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Values</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4aa36]">Empowerment</h3>
                <p className="leading-relaxed">
                  We are dedicated to empowering youth by providing them with the skills, knowledge, and
                  resources they need to succeed in the professional world.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4aa36]">Inclusivity</h3>
                <p className="leading-relaxed">
                  We value inclusivity by creating equal opportunities for all, regardless of background, gender, or
                  ethnicity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4aa36]">Innovation</h3>
                <p className="leading-relaxed">
                  We embrace innovation as a core value, constantly evolving our training methods and market access
                  strategies to align with the ever-changing demands of the employment landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className={cn(
            "w-24 h-24 rounded-full bg-[#d4aa36] flex items-center justify-center",
            "shadow-lg shadow-[#d4aa36]/30"
          )}>
            <img 
              src="/lovable-uploads/21f9d330-1ff2-4902-ab28-56db62f6b716.png" 
              alt="BETF Logo" 
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
