import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaCheck } from 'react-icons/fa';

const Comparison = () => {
  // Comparison data
  const withoutAI = [
    'Inconsistent Lead Follow-Up',
    'Missed Opportunities',
    'Time-Consuming Manual Processes',
    'Frustration and Stress',
    'Constant back and forth with prospects',
    'Wasted time on Unqualified leads'
  ];

  const withAI = [
    'Leads instantly contacted',
    'Automatically Qualified Pipeline',
    'No more email chains going back and forth',
    '24/7 Lead support',
    'Objections handled instantly',
    'No more Hiring and Training',
    'Peace of Mind to Grow'
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
          <p className="comparison-context">
            It's the difference between the businesses that struggle to fill their calendars and those that have a consistent stream of high-quality appointments!
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

        <motion.div 
          className="comparison-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h2 className="cta-heading">
            Do You Want To Experience Freedom in Business Growth?
          </h2>
          <h3 className="cta-subheading">
            Then Book a demo to see the AI Follow up System in action
          </h3>
          <a href="#booking" className="cta-button">
            Book Live Demo »
          </a>
          <p className="cta-note">Get Started In Less Than 60 Seconds • Cancel Anytime</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison; 