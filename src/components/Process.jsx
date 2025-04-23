import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Metrics data
  const metrics = [
    {
      value: '85+',
      label: 'Dental Practices Served'
    },
    {
      value: '25k+',
      label: 'Appointments Booked'
    },
    {
      value: '$3.2m+',
      label: 'Revenue Generated'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="trusted-by" className="trusted-by">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Trusted by<span className="highlight"> Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Featured Partners/Logos - REMOVED */}
        
        {/* Metrics Section */}
        <motion.div 
          className="metrics-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="metric-card"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="metric-value">{metric.value}</h3>
              <p className="metric-label">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy; 