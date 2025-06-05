import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  useEffect(() => {
    // Initialize Calendly widget when component mounts
    const script = document.createElement('script');
    script.innerHTML = `
      window.onload = function() {
        Calendly.initInlineWidget({
          url: 'https://cal.com/ayush-forgeai',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      };
    `;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="booking">
      <div className="container">
        <motion.div 
          className="booking-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="booking-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ready to<br/>
            <span className="highlight">Revolutionize</span> Your<br/>
            Dental Practice <span className="highlight">with our Guarentee?</span>
          </motion.h2>
          
          <motion.p 
            className="booking-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            If you don’t see a <b>20%</b> increase in bookings within <b>90 days</b>, we'll<i> refund your investment.</i>
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="booking-calendly"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="calendly-container">
            <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '650px' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking; 