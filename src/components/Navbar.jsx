import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Advantages', href: '#advantages' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'Testimonials', href: '#testimonials' },
  ];
 
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.a 
          href="/" 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Forge AI
        </motion.a>
        
        <motion.div 
          className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.href} 
              className="navbar-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3 + (index * 0.1),
                duration: 0.5
              }}
              whileHover={{ 
                color: 'var(--color-accent)',
                y: -2
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.a 
          href="#booking" 
          className="navbar-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.7,
            duration: 0.5,
            type: "spring", 
            stiffness: 400, 
            damping: 10 
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'var(--color-button-hover)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </motion.a>

        <motion.button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar; 