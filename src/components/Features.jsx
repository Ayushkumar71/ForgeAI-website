import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaFilter, FaUserCheck, FaAngleDoubleUp } from 'react-icons/fa';
import { MdFaceRetouchingNatural } from "react-icons/md";


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
      icon: <MdFaceRetouchingNatural />,
      title: '24/7 Instant Response',
      description: 'Answer 100% of the calls that come your way.'
    },
    {
      icon: <FaComments />,
      title: 'Customizable AI Assistant with Brand Tone',
      description: 'Matches your practice’s voice for a seamless patient experience.'
    },
    {
      icon: <FaAngleDoubleUp />,
      title: 'Intelligent Upselling and Service Suggestions',
      description: 'Boost revenue by suggesting treatments during interactions.'
    },
    {
      icon: <FaUserCheck />,
      title: 'HIPAA-Compliant Solutions',
      description: 'Protect patient data with industry-standard security.'
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
              What you Get
            </motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              >
              We <i>don't just talk–</i> This is how we deliver on <b>Our Promise</b>
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
                What Seperates
                <span className="highlight">&nbsp;&nbsp;ForgeAI</span>
              </motion.h2>
    
              {/* <motion.div 
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
              </motion.div> */}

              {/* Edit request by @ayush */}
              <h6><b>Al-Powered Call Transcript Analysis –</b> 
              <i>
              &nbsp;&nbsp;Turning each Missed sale into an Learning Opportunity.
              </i>
              </h6>
            </motion.div>
      </div>
    </section>
  );
};

export default Features; 