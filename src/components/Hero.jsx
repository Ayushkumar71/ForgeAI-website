import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-pattern hero-pattern-diagonal"></div>
      <div className="hero-pattern hero-pattern-horizontal"></div>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Automating Dental Clinics
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero; 