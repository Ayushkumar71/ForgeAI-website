import { FaCalendarCheck, FaHeadset, FaChartLine, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const featuresList = [
    {
      icon: <FaCalendarCheck />,
      title: 'Automated Scheduling',
      description: 'AI voice agents handle appointment booking, confirmations, and rescheduling, reducing no-shows and filling your calendar efficiently.'
    },
    {
      icon: <FaHeadset />,
      title: 'Intelligent Lead Management',
      description: 'Capture and nurture leads automatically with AI-powered follow-ups and personalized messaging.'
    },
    {
      icon: <FaChartLine />,
      title: 'Optimized Patient Retention',
      description: 'Maintain strong patient relationships with timely follow-ups, recall reminders, and satisfaction surveys.'
    },
    {
      icon: <FaRobot />,
      title: 'CRM Integration',
      description: 'Seamlessly connect with existing systems using VAPI, Twilio, and Make.com to create a streamlined workflow.'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section className="features section" id="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">AI Solutions for Modern Dental Practices</h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
            Our AI automation tools are specifically designed to solve key pain points for dental clinics, freeing up your staff and improving patient experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="feature-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              className="feature-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: 'var(--shadow-md)',
                transition: { duration: 0.2 } 
              }}
            >
              <motion.div 
                className="feature-icon"
                variants={iconVariants}
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 