import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCheck} from "react-icons/fa";
import { CartContext } from "../context/CartProvider";  
import "../styles/ProductCard.css";

const ProductCard = ({ product, variant }) => {
  const { addToCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!product) return;

    setIsAdding(true);

    // Simulate network request delay
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
      setShowMessage(true);

      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }, 600);
  };

  return (
    <div className={`product-card ${variant}`}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.badge && (
          <span className={`product-badge ${product.badgeClass}`}>{product.badge}</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "filled" : ""}>★</span>
            ))}
          </div>
          <span className="review-count">({product.reviewCount})</span>
        </div>

        <div className="product-price">
          {product.discountPrice ? (
            <>
              <span className="current-price">${product.discountPrice.toFixed(2)}</span>
              <span className="original-price">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="current-price">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* ✅ Add to Cart Button */}
        <button
          className={`btn-hero-add-to-cart ${isAdding ? 'loading' : ''} ${showMessage ? 'success' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
          title="Add to cart"
          type="button"
        >
          {isAdding ? (
            <span className="loading-spinner">Adding...</span>
          ) : showMessage ? (
            <FaCheck className="btn-icon" />
          ) : (
            <>
              <FaShoppingCart /> Add to Cart
            </>
          )}
        </button>

   {/* FOR FUTURE USE
        <div className="product-actions">

  <button className="action-btn wishlist-btn" title="Add to Wishlist">
    <FaHeart />
  </button>


  <Link to={`/product/${product.id}`} className="action-btn quick-view-btn" title="Quick View">
    <FaEye />
  </Link>

</div>
*/}



      </div>
    </div>
  );
};

export default ProductCard;
