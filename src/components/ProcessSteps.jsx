import React from 'react';
import { motion } from 'framer-motion';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Free Discovery Call',
      description: "We start with a no-obligation call to understand your clinic's unique challenges and goals."
    },
    {
      number: 2,
      title: 'Analysis & Strategy',
      description: 'We analyze your operations, identify gaps, and propose a customized AI automation strategy.'
    },
    {
      number: 3,
      title: 'Prototype & Testing',
      description: 'We develop and test an initial prototype of the AI solution tailored to your practice.'
    },
    {
      number: 4,
      title: 'Onboarding',
      description: 'Once approved, we implement the full solution and provide comprehensive onboarding.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 } 
    }
  };

  return (
    <section id="process" className="process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">The Roadmap</span>
          <h2 className="section-title">
            Our Simple 4-Step Process
          </h2>
           <p className="section-subtitle">
            From initial consultation to full implementation, we make integrating AI into your dental practice seamless.
          </p>
        </motion.div>

        <motion.div 
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              variants={itemVariants}
            >
              <div className="step-number">{step.number}</div>
              <br />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps; 