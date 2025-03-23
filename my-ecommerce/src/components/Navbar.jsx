import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaShoppingCart, 
  FaShoppingBag, 
  FaSearch, 
  FaUser, 
  FaBars, 
  FaTimes, 
  FaHeart
} from "react-icons/fa";
import SearchOverlay from "./SearchOverlay";
import "../styles/Navbar.css";
import { useContext } from "react"; 
import { CartContext } from "../context/CartProvider";
import { clothingItems, accessoriesItems, footwearItems, saleItems } from "../data/dropdownData";

// Dropdown Component revise later
const Dropdown = ({ title, items }) => (
  <div className="dropdown">
    <span className="dropdown-title">{title} ▾</span>
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>
            {item.icon && <span className="dropdown-icon">{item.icon}</span>}
            {item.label}
            {item.badge && <span className={`badge ${item.badgeType}`}>{item.badge}</span>}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const {cartCount} = useContext(CartContext);

const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when search is open
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen]);

  // Define dropdown items
  const clothingItems = [
    { label: "Men's Clothing", path: "/shop/clothing/men" },
    { label: "Women's Clothing", path: "/shop/clothing/women" },
    { label: "Kids' Clothing", path: "/shop/clothing/kids" },
    { label: "Seasonal Collection", path: "/shop/clothing/seasonal", badge: "New", badgeType: "new" },
  ];

  const accessoriesItems = [
    { label: "Bags & Purses", path: "/shop/accessories/bags", icon: <FaShoppingBag /> },
    { label: "Jewelry", path: "/shop/accessories/jewelry" },
    { label: "Watches", path: "/shop/accessories/watches" },
    { label: "Sunglasses", path: "/shop/accessories/sunglasses" },
    { label: "Hats & Caps", path: "/shop/accessories/hats" },
  ];

  const footwearItems = [
    { label: "Men's Shoes", path: "/shop/footwear/men" },
    { label: "Women's Shoes", path: "/shop/footwear/women" },
    { label: "Kids' Shoes", path: "/shop/footwear/kids" },
    { label: "Sports Shoes", path: "/shop/footwear/sports" },
    { label: "Limited Edition", path: "/shop/footwear/limited", badge: "Hot", badgeType: "hot" },
  ];

  const saleItems = [
    { label: "Clearance", path: "/shop/sale/clearance" },
    { label: "Seasonal Offers", path: "/shop/sale/seasonal" },
    { label: "Bundle Deals", path: "/shop/sale/bundles" },
    { label: "Flash Sale", path: "/shop/sale/flash", badge: "50% OFF", badgeType: "sale" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="announcement-bar">
        <p>Free shipping on orders over $50! Use code: FREESHIP</p>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          <div className="logo">
            <Link to="/">
              <h1>Luna<span>Shop</span></h1>
            </Link>
          </div>

          <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <ul className="nav-list">

              <li className="nav-items home-dropdown" 
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                <Link to="/" className="nav-link">Home <span className="homedropdown-arrow">▾</span></Link>
                {homeDropdownOpen && (
                <div className="dropdown-menu home-dropdown-menu">
                  <Dropdown title="clothing" items={clothingItems} />
                  <Dropdown title="accessories" items={accessoriesItems} />
                  <Dropdown title="footwear" items={footwearItems} />
                  <Dropdown title="sale" items={saleItems} />

                </div>
                )}
              </li>
              <li><Link to="/newarrivals" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
              <li><Link to="/collections" onClick={() => setMenuOpen(false)}>Collections</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>

          <div className="nav-icons">
            <button 
              className="icon-btn search-toggle" 
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <FaSearch size={20} />
            </button>

            <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
              <FaHeart size={20} />
            </Link>

            <Link to="/signin" className="icon-btn" aria-label="Account">
              <FaUser size={20} />
            </Link>

            <Link to="/cart" className="icon-btn cart-icon" aria-label="Shopping cart">
              <FaShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* Simple search overlay */}
      <SearchOverlay 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      
     


      <div className="nav-links">
        <Dropdown title="Clothing" items={clothingItems} />
        <Dropdown title="Accessories" items={accessoriesItems} />
        <Dropdown title="Footwear" items={footwearItems} />
        <Dropdown title="Sale" items={saleItems} />
      </div>
    </header>
  );
};

export default Navbar;