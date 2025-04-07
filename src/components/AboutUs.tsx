
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0a3431]">About Us</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              BETF is a social entrepreneurship venture dedicated to empowering 
              the youth in the built environment. Our mission is to nurture the next 
              generation of property practitioners and construction professionals, 
              equipping them with the knowledge, skills, and opportunities they 
              need to thrive in this dynamic field. We firmly believe that the future of 
              our cities and infrastructure depends on the talent and innovation of 
              young minds.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through mentorship, education, and real-world experiences, we are 
              committed to fostering the growth and success of aspiring 
              professionals, ensuring that they possess the necessary tools to shape a 
              sustainable and resilient built environment for generations to come. We 
              invite you to join us on our journey to empower the youth and 
              transform the future of the built world.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#d4aa36] rounded-lg"></div>
              <img 
                src="/lovable-uploads/e5b8ad55-80b8-4099-9b1d-5a7a7ac4ed1b.png" 
                alt="Construction worker" 
                className="w-full max-w-md rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
