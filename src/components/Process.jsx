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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section className="section" id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">Our Proven Process</h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
            We follow a structured approach to ensure your AI automation solution perfectly fits your dental practice's needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              className="process-step" 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 