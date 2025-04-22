import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar-container">
        <motion.a 
          href="/" 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Forge<span>AI</span>
        </motion.a>
        
        <motion.div 
          className="navbar-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.href} 
              className="navbar-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.3 + (index * 0.1),
                duration: 0.4
              }}
              whileHover={{ 
                scale: 1.05,
                color: 'var(--color-accent)'
              }}
              whileTap={{ scale: 0.95 }}
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
            delay: 0.5,
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mobile-menu-link"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              className="mobile-menu-cta"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
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