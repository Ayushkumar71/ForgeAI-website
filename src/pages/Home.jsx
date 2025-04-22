import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import Comparison from '../components/Comparison';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <Comparison />
      <Testimonials />
      <Booking />
    </main>
  );
};

export default Home; 