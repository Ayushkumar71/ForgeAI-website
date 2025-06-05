import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaCheck } from 'react-icons/fa';

const Comparison = () => {
  // Comparison data
  const withoutAI = [
    'Losing Revenue to Missed Calls',
    'Sinking Hours into Manual Follow-Ups',
    'Turning Away Patients with Slow Responses',
    'Wasting Time on Unqualified Leads',
    'Guessing Why Patients Don’t Book',
    'Feeling Overwhelmed by Admin Chaos'
  ];

  const withAI = [
    'Capture Every Call—Book More Patients Instantly',
    'Slash Follow-Up Time by 50% with Smart Automation',
    'Win Patients with 24/7 Instant Responses',
    'Focus on High-Value Patients with AI-Qualified Leads',
    'Unlock Insights from Every Call to Boost Conversions',
    'Reclaim Your Day with Seamless, Stress-Free Operations'
  ];

  // Animation variants
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="comparison">
      <div className="container">
        <motion.div 
          className="comparison-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
        <span className="section-tag"></span>
          <p className="comparison-context">
            It's the difference between the businesses that struggle to fill their calendars and those that have a <i>consistent stream of <b>high-quality appointments!</b></i>
          </p>
        </motion.div>

        <div className="comparison-columns">
          <motion.div 
            className="comparison-column without-ai"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="comparison-heading">Without AI Follow up System</h3>
            
            <motion.ul 
              className="comparison-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {withoutAI.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="comparison-item negative"
                  variants={itemVariants}
                >
                  <FaTimes className="comparison-icon negative" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="comparison-column with-ai"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="comparison-heading">With AI Follow up System</h3>
            
            <motion.ul 
              className="comparison-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {withAI.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="comparison-item positive"
                  variants={itemVariants}
                >
                  <FaCheck className="comparison-icon positive" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison; 