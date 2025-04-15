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
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              duration: 0.8,
              delay: 0.2
            }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4
              }}
            >
              AI Automation for <span className="primary-text">Dental Clinics</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 
              }}
            >
              Streamline your dental practice with AI voice agents and chatbots. 
              Automate scheduling, boost lead generation, and optimize your CRM processes.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 
              }}
            >
              <motion.a 
                href="#booking" 
                className="button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Discovery Call
              </motion.a>
              <motion.a 
                href="#process" 
                className="button" 
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'var(--text-primary)', 
                  border: '1px solid var(--border-color)' 
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn How It Works
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              duration: 0.8,
              delay: 0.3
            }}
          >
            <div className="video-container">
              {isVideoPlaying ? (
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Video Sales Letter"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  style={{ width: '100%', aspectRatio: '16/9' }}
                ></iframe>
              ) : (
                <motion.div 
                  className="video-thumbnail" 
                  onClick={handlePlayVideo}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=2073&auto=format&fit=crop" 
                    alt="Dental practice using AI automation" 
                  />
                  <motion.div 
                    className="play-button"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'var(--primary-dark)' 
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <FaPlay />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 