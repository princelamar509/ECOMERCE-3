import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field when user types
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Show success message for 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      borderColor: "#8e2de2",
    },
    error: {
      scale: 1,
      boxShadow: "0 0 0 2px rgba(255, 0, 0, 0.2)",
    },
    normal: {
      scale: 1,
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(142, 45, 226, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="contact-title" variants={itemVariants}>
        Get In Touch
      </motion.h1>

      <motion.p className="contact-subtitle" variants={itemVariants}>
        Have questions or want to learn more about our products? We're here to help!
      </motion.p>

      <div className="contact-content">
        <motion.div className="contact-form-container" variants={formVariants}>
          {submitted ? (
            <motion.div
              className="success-message"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="success-icon">
                <FaCheck />
              </div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon!</p>
            </motion.div>
          ) : (
            <>
              <h2 className="msg">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    variants={inputVariants}
                    animate={
                      focused === 'name'
                        ? 'focused'
                        : formErrors.name
                        ? 'error'
                        : 'normal'
                    }
                    required
                  />
                  {formErrors.name && (
                    <motion.span 
                      className="error-message"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {formErrors.name}
                    </motion.span>
                  )}
                </div>

                <div className="form-group">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    variants={inputVariants}
                    animate={
                      focused === 'email'
                        ? 'focused'
                        : formErrors.email
                        ? 'error'
                        : 'normal'
                    }
                    required
                  />
                  {formErrors.email && (
                    <motion.span 
                      className="error-message"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {formErrors.email}
                    </motion.span>
                  )}
                </div>

                <div className="form-group">
                  <motion.input
                    type="text"
                    name="subject"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    variants={inputVariants}
                    animate={focused === 'subject' ? 'focused' : 'normal'}
                  />
                </div>

                <div className="form-group">
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    variants={inputVariants}
                    animate={
                      focused === 'message'
                        ? 'focused'
                        : formErrors.message
                        ? 'error'
                        : 'normal'
                    }
                    required
                    rows={6}
                  />
                  {formErrors.message && (
                    <motion.span 
                      className="error-message"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {formErrors.message}
                    </motion.span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="send-button"
                >
                  Send Message
                </motion.button>
              </form>
            </>
          )}
        </motion.div>

        <motion.div className="contact-info" variants={infoVariants}>
          <h2>Contact Information</h2>
          <motion.div className="info-item" variants={itemVariants}>
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+1 (322) 523-4567</p>
              <p className="text-muted">Monday-Friday, 9am-6pm EST</p>
            </div>
          </motion.div>

          <motion.div className="info-item" variants={itemVariants}>
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>support@lunashop.com</p>
              <p className="text-muted">We'll respond within 24 hours</p>
            </div>
          </motion.div>

          <motion.div className="info-item" variants={itemVariants}>
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>789 Hamilton circle</p>
              <p>Noblesville, IN 46256</p>
            </div>
          </motion.div>

          <motion.div className="info-item" variants={itemVariants}>
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-content">
              <h3>Business Hours</h3>
              <p>Monday-Friday: 9am-6pm EST</p>
              <p>Weekend: Closed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="contact-map" variants={itemVariants}>
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.7044170520085!2d-85.931561!3d39.9927104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ca00028f51db%3A0xd3f01fe5636eae3a!2sHamilton%20Town%20Center!5e0!3m2!1sen!2sus!4v1741744821052!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Luna SHOP Location"
          ></iframe>
        </div>
      </motion.div>

      <motion.div className="contact-faq" variants={itemVariants}>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What are your shipping options?</h3>
            <p>We offer standard (3-5 business days), express (1-2 business days), and international shipping options. Shipping costs are calculated at checkout.</p>
          </div>
          <div className="faq-item">
            <h3>How can I track my order?</h3>
            <p>Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.</p>
          </div>
          <div className="faq-item">
            <h3>What is your return policy?</h3>
            <p>We offer a 30-day return policy on most items. Products must be returned in original condition with all packaging and tags.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer international shipping?</h3>
            <p>Yes, we ship to over 30 countries worldwide. International shipping times vary by location.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;