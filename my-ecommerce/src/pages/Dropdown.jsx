import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Dropdown.css'; // We'll create this CSS file next

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button 
        className={`dropdown-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <span className="dropdown-arrow">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      
      {isOpen && (
        <ul className="dropdown">
          {items.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="dropdown-item"
              >
                {item.icon && <span className="item-icon">{item.icon}</span>}
                {item.label}
                {item.badge && (
                  <span className={`badge ${item.badgeType || ''}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.node,
      badge: PropTypes.string,
      badgeType: PropTypes.string
    })
  ).isRequired
};

export default Dropdown;