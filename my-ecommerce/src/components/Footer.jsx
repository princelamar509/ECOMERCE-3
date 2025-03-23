import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css"
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPinterestP, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaArrowRight,
  FaHeart
} from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-content">
              <h3>Subscribe to our newsletter</h3>
              <p>Get the latest updates on new products and upcoming sales</p>
            </div>
            <form className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                />
                <button type="submit">
                  Subscribe <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-widgets">
            {/* About Widget */}
            <div className="footer-widget about-widget">
              <div className="widget-title">
                <h4>About Luna<span>Shop</span></h4>
              </div>
              <div className="widget-content">
                <p>
                  LunaShop is a premier destination for fashion enthusiasts looking for the latest trends in clothing,
                  accessories, and footwear. We provide high-quality products at affordable prices.
                </p>
                <ul className="contact-info-footer">
                  <li>
                    <FaMapMarkerAlt />
                    <span>789 Hamilton circle, Noblesville, IN 46256</span>
                  </li>
                  <li>
                    <FaPhoneAlt />
                    <span>(322) 523-4567</span>
                  </li>
                  <li>
                    <FaEnvelope />
                    <span>support@lunashop.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quick Links Widget */}
            <div className="footer-widget links-widget">
              <div className="widget-title">
                <h4>Quick Links</h4>
              </div>
              <div className="widget-content">
                <ul className="quick-links">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/shipping">Shipping & Returns</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Shop Categories Widget */}
            <div className="footer-widget categories-widget">
              <div className="widget-title">
                <h4>Shop Categories</h4>
              </div>
              <div className="widget-content">
                <ul className="category-links">
                  <li><Link to="/shop/womens">Women's Fashion</Link></li>
                  <li><Link to="/shop/mens">Men's Fashion</Link></li>
                  <li><Link to="/shop/kids">Kids Collection</Link></li>
                  <li><Link to="/shop/accessories">Accessories</Link></li>
                  <li><Link to="/shop/footwear">Footwear</Link></li>
                  <li><Link to="/shop/sale">Sale & Discounts</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Customer Service Widget */}
            <div className="footer-widget service-widget">
              <div className="widget-title">
                <h4>Customer Service</h4>
              </div>
              <div className="widget-content">
                <ul className="service-links">
                  <li><Link to="/my-account">My Account</Link></li>
                  <li><Link to="/orders">Track Your Order</Link></li>
                  <li><Link to="/wishlist">Wishlist</Link></li>
                  <li><Link to="/help-center">Help Center</Link></li>
                  <li><Link to="/size-guide">Size Guide</Link></li>
                  <li><Link to="/gift-cards">Gift Cards</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* App Download and Social */}
          <div className="footer-middle">
            <div className="app-download">
              <h4>Shop on the go</h4>
              <p>Download our mobile app for a seamless shopping experience</p>
              <div className="app-buttons">
                <a href="#" className="app-btn">
                  <img src="https://logos-world.net/wp-content/uploads/2021/03/App-Store-Logo-2017.png" alt="App Store" width={40} />
                </a>
                <a href="#" className="app-btn">
                  <img src="https://e7.pngegg.com/pngimages/296/204/png-clipart-google-play-logo-google-play-gift-card-credit-card-android-play-store-icon-miscellaneous-triangle.png" alt="Google Play" width={30} />
                </a>
              </div>
            </div>
            
            <div className="social-connect">
              <h4>Connect with us</h4>
              <ul className="social-links">
                <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
                <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
                <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
                <li><a href="#" aria-label="Pinterest"><FaPinterestP /></a></li>
                <li><a href="#" aria-label="YouTube"><FaYoutube /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Methods and Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>© {currentYear} LunaShop. All Rights Reserved. Made with <FaHeart className="heart-icon" /> for fashion lovers.</p>
          </div>
          
          <div className="payment-methods">
            <span>We accept:</span>
            <ul className="payment-icons">
              <li><FaCcVisa /></li>
              <li><FaCcMastercard /></li>
              <li><FaCcAmex /></li>
              <li><FaCcDiscover /></li>
              <li><FaPaypal /></li>
              <li><FaApplePay /></li>
              <li><FaGooglePay /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;