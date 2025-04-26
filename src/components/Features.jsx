import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaFilter, FaUserCheck } from 'react-icons/fa';

const Features = () => {
  // Stats for AI Sales Team section
  const stats = [
    { value: '24/7', label: 'Lead Response' },
    { value: '89%', label: 'Engagement Rate' },
    { value: '3x', label: 'More Booked Appointments' },
    { value: '67%', label: 'Cost Reduction' }
  ];

  // Features data
  const features = [
    {
      icon: <FaRobot />,
      title: 'Instant Response',
      description: 'Engage potential patients within seconds, any time, any channel'
    },
    {
      icon: <FaComments />,
      title: 'Multi-Channel Presence',
      description: 'Connect via Email, WhatsApp, SMS, and Website - simultaneously'
    },
    {
      icon: <FaFilter />,
      title: 'Smart Qualification',
      description: 'AI filters and qualifies leads based on your clinic criteria'
    },
    {
      icon: <FaUserCheck />,
      title: 'Automated Follow-up',
      description: 'Never lose a patient to poor follow-up again'
    }
  ];

  // Animation variants for scrolling effects
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="advantages" className="advantages">
      <div className="container">
        {/* AI Sales Team Section */}
        <motion.div 
          className="ai-sales-team"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your AI Dental Assistant
            <span className="highlight">&nbsp;Never Sleeps</span>
          </motion.h2>

          <motion.div 
            className="stats-grid"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* AI-Driven Solutions Section */}
        <motion.div 
          className="ai-solutions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="section-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              AI-Driven Solutions
            </motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              to Transform Your Dental Practice
            </motion.h2>
          </motion.div>

          <motion.div 
            className="features-grid"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 