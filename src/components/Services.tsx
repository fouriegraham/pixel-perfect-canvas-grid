
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0a3431]">SERVICES</h2>
            <ul className="space-y-8">
              <li className="flex space-x-4 items-start">
                <div className="bg-[#0a3431] text-white p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0a3431]">Training and Skills Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We design and implement comprehensive training programs that cover various aspects of the built environment industry in
                    partnership with higher education institutions.
                  </p>
                </div>
              </li>
              
              <li className="flex space-x-4 items-start">
                <div className="bg-[#0a3431] text-white p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0a3431]">Facilitating Mentors & Market Access Opportunities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We facilitate market access opportunities and funding by actively seeking partnerships with industry leaders,
                    businesses, and governmental organizations.
                  </p>
                </div>
              </li>
              
              <li className="flex space-x-4 items-start">
                <div className="bg-[#0a3431] text-white p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0a3431]">Property Inspections</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By ordering a property inspection with us, you create work opportunities for youth inspectors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#d4aa36] rounded-lg"></div>
              <img 
                src="/lovable-uploads/225f1120-f118-47ad-8f18-4f051272b6d5.png" 
                alt="Construction worker measuring" 
                className="w-full max-w-sm rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
