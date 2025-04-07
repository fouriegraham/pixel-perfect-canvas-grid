
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import BookInspection from '@/components/BookInspection';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <AboutUs />
        <Mission />
        <Services />
        <BookInspection />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
