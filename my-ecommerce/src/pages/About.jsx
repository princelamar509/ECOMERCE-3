import React from "react";
import { FaShoppingBag, FaLeaf, FaShippingFast, FaHeart } from "react-icons/fa";
import "../styles/About.css";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";



const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // For non-integer values like "24/7", we need special handling
        if (typeof end === 'string' && end.includes('/')) {
          setCount(end); // Just set the full string immediately
        } else {
          // For numeric values, we animate the count
          const currentCount = Math.floor(percentage * end);
          setCount(currentCount);
        }
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };
      
      animationFrame = requestAnimationFrame(updateCount);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);
  
  return (
    <span ref={countRef}>
      {typeof end === 'string' && end.includes('/') ? end : count}
    </span>
  );
};

const About = () => {
const statsRef = useRef(null);
const isInView = useInView(statsRef, { once: true, amount: 0.5 });

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
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  }
};


  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p className="about-subtitle">Where Style Meets Innovation</p>
        </div>
      </section>

      <section className="about-story">
        <div className="section-container">
          <h2>Our Story</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Founded in 2018, Luna SHOP began with a simple mission: to create a shopping experience as enchanting as the moonlight. Our journey started when our founder, Sophia Luna, recognized a gap in the market for tech products that combined functionality with stunning aesthetics.
              </p>
              <p>
                What began as a small online store operated from Sophia's apartment has grown into a global brand trusted by thousands of customers worldwide. Today, Luna SHOP stands as a testament to our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p>
                Our name "Luna" reflects our philosophy of illuminating the shopping experience, bringing light to your tech journey, and constantly evolving—just like the moon's phases—to meet our customers' changing needs.
              </p>
            </div>
            <div className="about-image">
  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Luna SHOP secure payment options" />
</div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="section-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaShoppingBag className="value-icon" />
              <h3>Quality First</h3>
              <p>We never compromise on quality. Each product in our catalog undergoes rigorous testing to ensure it meets our high standards before reaching your doorstep.</p>
            </div>
            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h3>Sustainability</h3>
              <p>We're committed to reducing our environmental footprint. From eco-friendly packaging to partnering with manufacturers who share our green values, sustainability is at our core.</p>
            </div>
            <div className="value-card">
              <FaShippingFast className="value-icon" />
              <h3>Efficiency</h3>
              <p>We value your time. Our streamlined ordering and delivery processes ensure you get your tech essentials quickly and without hassle.</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Customer Care</h3>
              <p>Our customers are at the heart of everything we do. We're dedicated to providing exceptional service and building lasting relationships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="section-container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">Behind Luna SHOP is a diverse team of tech enthusiasts, design lovers, and customer service experts united by our passion for bringing you the best shopping experience.</p>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Team member" />
              <h3>Sophia Luna</h3>
              <p className="member-title">Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Team member" />
              <h3>Michael Chen</h3>
              <p className="member-title">Head of Product Development</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="Team member" />
              <h3>Elena Rodriguez</h3>
              <p className="member-title">Customer Experience Director</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Team member" />
              <h3>James Wilson</h3>
              <p className="member-title">Technology Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="about-stats">
      <div className="section-container" ref={statsRef}>
        <h2>Luna SHOP By Numbers</h2>
        <AnimatePresence>
          {isInView && (
            <motion.div
              className="stats-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end={50000} />+</h3>
                <p>Happy Customers</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end={1000} />+</h3>
                <p>Products</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end={30} />+</h3>
                <p>Countries Served</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end="24/7" /></h3>
                <p>Customer Support</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
 */}

      <section className="about-testimonials">
        <div className="section-container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Luna Shop has been my go-to tech store for years. Their product range and customer service are unmatched!"</p>
              <p className="testimonial-author">- Sarah J., Los Angeles</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"I love how Luna SHOP combines tech and aesthetics. Every purchase feels special, from browsing to unboxing."</p>
              <p className="testimonial-author">- Marcus T., Berlin</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Fast shipping, high-quality products, and excellent support. What more could you ask for?"</p>
              <p className="testimonial-author">- Aisha K., Dubai</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-stats">
      <div className="section-container" ref={statsRef}>
        <h2>Happy  Customer Stats</h2>
        <AnimatePresence>
          {isInView && (
            <motion.div
              className="stats-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end={50000} />+</h3>
                <p>Happy Customers</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end={1000} />+</h3>
                <p>Products</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end={30} />+</h3>
                <p>Countries Served</p>
              </motion.div>
              <motion.div className="stat-card" variants={itemVariants}>
                <h3><CountUp end="24/7" /></h3>
                <p>Customer Support</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>

      <div className="about-cta">
        <div className="section-container">
          <h2>Join the Luna  Family</h2>
          <p>Discover the perfect blend of technology and style. Start your Luna SHOP experience today!</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;