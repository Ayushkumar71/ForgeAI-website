import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <section className="cta section" id="booking">
      <div className="container">
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            type: "spring", 
            stiffness: 60, 
            damping: 12 
          }}
        >
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Transform Your Dental Practice?
          </motion.h2>
          <motion.p 
            className="cta-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Book your free discovery call today and let's discuss how AI automation can streamline your operations, reduce administrative burden, and improve patient experience.
          </motion.p>
          
          <motion.div 
            className="calendar-widget"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* This would be replaced with an actual Calendly embed */}
            <p style={{ textAlign: 'center', padding: '2rem 0' }}>
              Calendly booking widget will be embedded here. For implementation, use the Calendly embed code or React component.
            </p>
            <motion.a 
              href="https://calendly.com" 
              className="button cta-button" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Schedule Your Free Discovery Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking; 