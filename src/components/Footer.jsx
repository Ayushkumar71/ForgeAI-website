import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  // TODO: Replace '#' with actual social media links
  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, href: 'https://x.com/Ayushk71' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayush-kumar-3a83b2215/' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/ayush.ayushkumar.980/' },
    { name: 'Email', icon: FaEnvelope, href: 'mailto:ayush11092003@gmail.com' },
  ];

  return (
    <footer className="footer footer-minimal">
      <div className="container">
        <motion.div 
          className="footer-bottom-minimal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} DentalAI. All rights reserved.</p>
          <div className="footer-social-minimal">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.name} 
                href={social.href} 
                aria-label={social.name}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                whileHover={{ y: -3, color: 'var(--color-accent-primary)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
