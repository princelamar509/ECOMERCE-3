import React from "react";
import { Link } from "react-router-dom";
import "../styles/coming-soon.css";

const NewArrivals = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>New Arrivals Coming Soon</h1>
        
        <div className="coming-soon-badge">LAUNCHING SOON</div>
        
        <p className="coming-soon-description">
          We're working hard to bring you the latest and trendiest products in our New Arrivals collection.
          Our team is curating an exclusive selection of premium items that will elevate your style to the next level.
        </p>
        
        <div className="features-grid2">
          <div className="feature-item2">
            <div className="feature-icon2">🌟</div>
            <h3>Exclusive Products</h3>
            <p>Handpicked items you won't find anywhere else</p>
          </div>
          
          <div className="feature-item2">
            <div className="feature-icon2">🎁</div>
            <h3>Special Launch Offers</h3>
            <p>Early access deals for our loyal customers</p>
          </div>
          
          <div className="feature-item2">
            <div className="feature-icon2">🔄</div>
            <h3>Weekly Updates</h3>
            <p>Fresh new items added every week</p>
          </div>
        </div>
        
        <div className="coming-soon-notification">
          <h3>Want to be notified when we launch?</h3>
          <div className="notification-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="notification-input"
            />
            <button className="notification-button">Notify Me</button>
          </div>
          <p className="privacy-note">We respect your privacy and will only use your email to notify you about our launch.</p>
        </div>
        
        <div className="alternative-action">
          <p>In the meantime, check out our current collection:</p>
          <Link to="/shop" className="alternative-button">
            Shop Current Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;