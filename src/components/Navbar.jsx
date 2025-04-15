import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Dental<motion.span 
            initial={{ color: 'var(--text-primary)' }}
            animate={{ color: 'var(--primary-color)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >AI</motion.span>
        </motion.div>
        
        <motion.button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
        
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
                color: 'var(--primary-color)',
                y: -2
              }}
            >
              {link.name}
            </motion.a>
          ))}
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
              backgroundColor: 'var(--primary-dark)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--background-main)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-md)',
              zIndex: 99
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '0.5rem',
                  color: 'var(--text-secondary)'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ color: 'var(--primary-color)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#booking" 
              onClick={() => setIsMenuOpen(false)}
              style={{
                padding: '0.5rem',
                background: 'var(--primary-color)',
                color: 'white',
                borderRadius: 'var(--border-radius-md)',
                textAlign: 'center',
                marginTop: '0.5rem'
              }}
              whileHover={{ backgroundColor: 'var(--primary-dark)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 