
import React from 'react';

const partnerTypes = [
  {
    title: "Training Partner",
    image: "/lovable-uploads/fbd5118f-37bf-489a-bddd-fd1b2155a614.png",
  },
  {
    title: "Bursary Partner",
    image: "/lovable-uploads/5f6fb097-b93e-49ff-91b5-2794093589b8.png",
  },
  {
    title: "Corporate Partner",
    image: "/lovable-uploads/d4936170-4945-4a69-a4ce-0b5d0660c8bb.png",
  },
  {
    title: "Implementation Support",
    image: "/lovable-uploads/c92ee166-e82b-4412-bf50-9f97edfe1432.png",
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0a3431]">MEET OUR PARTNERS</h2>
          <p className="text-gray-600">Building futures, Managing risks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerTypes.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={partner.image} 
                  alt={`${partner.title} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 text-center bg-[#0a3431] text-white">
                <h3 className="font-bold text-lg">{partner.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0a3431]">WHY PARTNER WITH US?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0a3431]">Workforce Development</h3>
              <p className="text-gray-700 mb-4">
                By partnering with us, you contribute to the development of a skilled workforce in the construction sector, specifically addressing the issue of poor construction workmanship, especially within the home building sub-sector.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0a3431]">Skill Development</h3>
              <p className="text-gray-700 mb-4">
                Through partnership with us, you enable young people to acquire practical skills on quality assurance, processes, procedures, functions and enforcement of the building control's township establishment schemes, including submissions & processing of building plans related to residential & non-residential properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0a3431]">Talent Pipeline</h3>
              <p className="text-gray-700 mb-4">
                Your collaboration helps create a talent pipeline for your organization. As the youth beneficiaries gain skills and knowledge, they become potential candidates for future job openings within your organization.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0a3431]">Value Chain Transformation</h3>
              <p className="text-gray-700 mb-4">
                Your partnership contributes to the creation of entrepreneurship opportunities within the construction sector's value chain. This includes specialist maintenance services, property assessment services, building inspection services, and suppliers of construction materials, among others.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0a3431]">HOW TO PARTNER WITH US?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Bursary Partner", "Host Employer Partner", "Training Budget Partner", "Stipend Partner", "Workplace Tools", "Youth Enterprise Funding Partner"].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#0a3431] text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#d4aa36] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg">{item}</h3>
                </div>
                <a href="#contact" className="text-[#d4aa36] hover:underline inline-block mt-2">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
