import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      text: "Implementing ForgeAI has transformed our dental practice. Our appointment bookings increased by 30% and staff can focus on patient care instead of admin tasks.",
      name: "Dr. Sarah Johnson",
      role: "Dentist, Bright Smile Dental",
      location: "Boston, MA"
    },
    {
      text: "The AI voice agent is incredible! It handles all our scheduling, follow-ups, and reminders without our front desk having to lift a finger. Patients love it too.",
      name: "Michael Torres",
      role: "Practice Manager",
      location: "Miami, FL"
    },
    {
      text: "I was skeptical about AI for our practice, but after seeing how seamlessly it integrated with our existing systems, I'm a believer. Best investment we've made.",
      name: "Dr. James Chen",
      role: "Orthodontist",
      location: "San Francisco, CA"
    },
    {
      text: "Our no-show rate has dropped by 65% since implementing ForgeAI. The automated reminders and rescheduling features have been a game-changer for us.",
      name: "Emily Parker",
      role: "Office Manager",
      location: "Chicago, IL"
    },
    {
      text: "We've tried several scheduling solutions, but ForgeAI's integration with our practice management software made it the clear winner. Highly recommend!",
      name: "Dr. Robert Williams",
      role: "Dental Practice Owner",
      location: "Denver, CO"
    },
    {
      text: "The lead qualification system has dramatically improved our conversion rate. We're getting better patients who are ready to commit to treatment.",
      name: "Jessica Thompson",
      role: "Marketing Director",
      location: "Austin, TX"
    }
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
    <section id="testimonials" className="testimonials">
      <div className="container">
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
          className="success-stories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="stories-heading">Success Stories</h3>
          <p className="stories-subheading">Explore how ForgeAI has transformed dental practices for our clients.</p>
          
          <motion.div 
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="testimonial-card"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
              >
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 