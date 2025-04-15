import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonialData = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Practice Owner',
      clinic: 'Bright Smile Dental',
      stars: 5,
      quote: 'The AI scheduling system has reduced our no-shows by 45% and saved our front desk staff hours of phone time each day. Absolutely worth the investment!'
    },
    {
      name: 'Mark Williams',
      role: 'Office Manager',
      clinic: 'Advanced Dental Care',
      stars: 5,
      quote: 'Implementing this AI solution has streamlined our entire patient communication process. Our team can now focus on providing better care instead of administrative tasks.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Dentist',
      clinic: 'Chen Family Dentistry',
      stars: 5,
      quote: 'The AI chatbot has improved our lead conversion rate significantly. New patients appreciate the quick responses and easy scheduling, even outside business hours.'
    }
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<FaStar key={i} style={{ color: 'var(--warning-color)' }} />);
    }
    return stars;
  };

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
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section className="section" id="testimonials" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center">What Our Clients Say</h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>
            Read how our AI automation solutions have transformed these dental practices.
          </p>
        </motion.div>
        
        <motion.div 
          className="feature-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialData.map((testimonial, index) => (
            <motion.div 
              className="feature-card" 
              key={index} 
              style={{ textAlign: 'left' }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: 'var(--shadow-md)',
                transition: { duration: 0.2 } 
              }}
            >
              <FaQuoteLeft style={{ fontSize: '1.5rem', color: 'var(--primary-color)', opacity: 0.3, marginBottom: 'var(--spacing-md)' }} />
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: 'var(--spacing-lg)' }}>
                "{testimonial.quote}"
              </p>
              <motion.div 
                style={{ display: 'flex', marginBottom: 'var(--spacing-xs)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {renderStars(testimonial.stars)}
              </motion.div>
              <p style={{ fontWeight: 'var(--body-weight-medium)', fontSize: '1.1rem' }}>
                {testimonial.name}
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                {testimonial.role}, {testimonial.clinic}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 