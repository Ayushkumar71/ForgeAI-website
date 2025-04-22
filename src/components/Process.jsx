import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Free Discovery Call',
      description: "We start with a no-obligation call to understand your clinic's unique challenges and goals."
    },
    {
      number: 2,
      title: 'Business Analysis & Strategy',
      description: 'We analyze your operations, identify gaps, and propose a customized AI automation strategy.'
    },
    {
      number: 3,
      title: 'Prototype & Testing',
      description: 'We develop and test an initial prototype of the AI solution tailored to your practice.'
    },
    {
      number: 4,
      title: 'Implementation & Onboarding',
      description: 'Once approved, we implement the full solution and provide comprehensive onboarding.'
    }
  ];

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
    <section id="checklist" className="trusted-by">
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

        {/* Featured Partners/Logos */}
        <motion.div 
          className="partners-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="partners-label">Featured partners</div>
          <div className="partners-logos">
            {/* Placeholder logos - replace with actual dental industry partners */}
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="logo-placeholder">
                <span>Partner 1</span>
              </div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="logo-placeholder">
                <span>Partner 2</span>
              </div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="logo-placeholder">
                <span>Partner 3</span>
              </div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="logo-placeholder">
                <span>Partner 4</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
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

export default Process; 