import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-info">
            <motion.div 
              className="footer-logo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Dental<span>AI</span>
            </motion.div>
            <motion.p 
              className="footer-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              AI automation solutions designed specifically for dental clinics to streamline operations and enhance patient experience.
            </motion.p>
          </div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >            <h3>Quick Links</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#booking">Book a Call</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3>Services</h3>
            <ul>
              <li><a href="#">AI Voice Agents</a></li>
              <li><a href="#">Scheduling Automation</a></li>
              <li><a href="#">Lead Management</a></li>
              <li><a href="#">CRM Integration</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@dentalai.com">info@dentalai.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} DentalAI. All rights reserved.</p>
          <div className="footer-social">
            {['Twitter', 'LinkedIn', 'Facebook', 'Email'].map((social, index) => {
              let Icon;
              let href = '#';
              
              switch(social) {
                case 'Twitter':
                  Icon = FaTwitter;
                  break;
                case 'LinkedIn':
                  Icon = FaLinkedin;
                  break;
                case 'Facebook':
                  Icon = FaFacebook;
                  break;
                case 'Email':
                  Icon = FaEnvelope;
                  href = 'mailto:info@dentalai.com';
                  break;
                default:
                  Icon = FaTwitter;
              }
              
              return (
                <motion.a 
                  key={social} 
                  href={href} 
                  aria-label={social}
                  whileHover={{ y: -3, color: 'var(--primary-color)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
