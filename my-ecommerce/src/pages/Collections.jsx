import React from "react";
import { Link } from "react-router-dom";
import "../styles/coming-soon.css";

const Collections = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>Collections Coming Soon</h1>
        
        <div className="coming-soon-badge">UNDER CONSTRUCTION</div>
        
        <p className="coming-soon-description">
          Our Collections page is being carefully crafted to showcase our products in themed categories,
          making it easier for you to discover items that match your unique style and preferences.
        </p>
        
        <div className="collections-preview">
          <div className="collection-item">
            <div className="collection-placeholder"></div>
            <h3>Summer Essentials</h3>
          </div>
          
          <div className="collection-item">
            <div className="collection-placeholder"></div>
            <h3>Office Elegance</h3>
          </div>
          
          <div className="collection-item">
            <div className="collection-placeholder"></div>
            <h3>Casual Comfort</h3>
          </div>
          
          <div className="collection-item">
            <div className="collection-placeholder"></div>
            <h3>Luxury Edition</h3>
          </div>
        </div>
        
        <div className="timeline">
          <h3>Our Launch Timeline</h3>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="timeline-marker completed"></div>
              <div className="timeline-info">
                <h4>Planning Phase</h4>
                <p>Completed</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-marker completed"></div>
              <div className="timeline-info">
                <h4>Design Phase</h4>
                <p>Completed</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-marker active"></div>
              <div className="timeline-info">
                <h4>Development</h4>
                <p>In Progress</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-marker"></div>
              <div className="timeline-info">
                <h4>Testing</h4>
                <p>Coming Up</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-marker"></div>
              <div className="timeline-info">
                <h4>Launch</h4>
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="alternative-action">
          <p>While you wait, explore our available products:</p>
          <Link to="/shop" className="alternative-button">
            Visit Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;