
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const BookInspection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    inspectionType: 'residential',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    toast({
      title: "Inspection booked",
      description: "We'll contact you shortly to confirm your booking.",
    });
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      inspectionType: 'residential',
      message: ''
    });
  };

  return (
    <section id="inspection" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0a3431]">BOOK AN INSPECTION</h2>
            <p className="text-gray-700 mb-8">
              Schedule a property inspection with our trained youth inspectors and contribute to their professional development while getting expert assessment of your property.
            </p>
            
            <div className="bg-[#0a3431] text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Inspection Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="text-[#d4aa36] mt-1">•</div>
                  <p>Professionally trained youth inspectors</p>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="text-[#d4aa36] mt-1">•</div>
                  <p>Comprehensive inspection reports</p>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="text-[#d4aa36] mt-1">•</div>
                  <p>Support youth employment in construction</p>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="text-[#d4aa36] mt-1">•</div>
                  <p>Reasonable pricing and quick scheduling</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-[#0a3431]">Inspection Request Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0a3431]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0a3431]"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0a3431]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inspectionType" className="block text-gray-700 mb-1">Inspection Type</label>
                    <select
                      id="inspectionType"
                      name="inspectionType"
                      value={formData.inspectionType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0a3431]"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-1">Property Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0a3431]"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0a3431]"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#0a3431] hover:bg-[#072724] text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Book Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookInspection;
