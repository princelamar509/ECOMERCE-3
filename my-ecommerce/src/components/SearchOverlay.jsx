import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import '../styles/SearchOverlay.css';

// Sample products - replace with your actual product data
const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 199.99, path: '/product/1' },
  { id: 2, name: 'Summer Dress', category: 'Women\'s Clothing', price: 59.99, path: '/product/2' },
  { id: 3, name: 'Men\'s Watch', category: 'Accessories', price: 129.99, path: '/product/3' },
  { id: 4, name: 'Running Shoes', category: 'Footwear', price: 89.99, path: '/product/4' }
];

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchInputRef = useRef(null);

  // Focus search input when overlay opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key to close overlay
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    
    if (searchTerm.trim().length > 2) {
      // Filter products that match the search term
      const filteredResults = sampleProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-container" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="search-form">
        <div className="search-input-wrapper">
  <input
    type="text"
    placeholder="Search for products..."
    value={query}
    onChange={handleSearch}
    ref={searchInputRef}
    className="search-input"
  />
  <FaSearch className="search-icon" />
</div>
        </div>
        
        <div className="search-results">
          {query.trim().length > 2 && (
            results.length > 0 ? (
              <div>
                <h3>Search Results</h3>
                <ul className="results-list">
                  {results.map(product => (
                    <li key={product.id}>
                      <Link to={product.path} onClick={onClose} className="product-link">
                        <span className="product-name">{product.name}</span>
                        <span className="product-category">{product.category}</span>
                        <span className="product-price">${product.price.toFixed(2)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="no-results">
                <p>No products found matching "{query}"</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;