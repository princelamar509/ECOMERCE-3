import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../context/CartProvider"; // ✅ Correct Import

import '../styles/CartPage.css';

const CartPage = () => {
  const { cart, cartTotal, updateCartItemQuantity, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <div className="empty-cart-content">
            <div className="empty-cart-icon">
              <FaShoppingCart />
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop" className="continue-shopping-btn">
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <div className="product-col">Product</div>
              <div className="price-col">Price</div>
              <div className="quantity-col">Quantity</div>
              <div className="total-col">Total</div>
              <div className="action-col"></div>
            </div>
            
            {cart.map(item => {
              const itemTotal = (item.discountPrice || item.price) * item.quantity;
              
              return (
                <div className="cart-item" key={item.id}>
                  <div className="product-col">
                    <div className="cart-product">
                      <div className="product-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="product-details">
                        <h3>{item.name}</h3>
                        {item.category && <p className="product-category">{item.category}</p>}
                        {item.size && <p className="product-size">Size: {item.size}</p>}
                        {item.color && <p className="product-color">Color: {item.color}</p>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="price-col">
                    {item.discountPrice ? (
                      <>
                        <span className="current-price">${item.discountPrice.toFixed(2)}</span>
                        <span className="original-price">${item.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="current-price">${item.price.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <div className="quantity-col">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn decrease"
                        onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (!isNaN(value) && value > 0) {
                            updateCartItemQuantity(item.id, value);
                          }
                        }}
                      />
                      <button 
                        className="quantity-btn increase"
                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="total-col">
                    <span className="item-total">${itemTotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="action-col">
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              );
            })}
            
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              {/* change below / to shop later  */}
              <Link to="/" className="continue-shopping-btn">
                <FaArrowLeft /> Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row subtotal">
              <span>Subtotal</span>
              <span>${(cartTotal || 0).toFixed(2)}</span>
            </div>
            
            <div className="summary-row shipping">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row tax">
              <span>Tax</span>
              <span>${((cartTotal || 0) * 0.1).toFixed(2)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${((cartTotal || 0) + ((cartTotal || 0) * 0.1)).toFixed(2)}</span>
            </div>
            
            <div className="promo-code">
              <input type="text" placeholder="Promo Code" />
              <button>Apply</button>
            </div>
            
            <button className="checkout-btn">
              <FaCreditCard /> Proceed to Checkout
            </button>
            
            <div className="payment-methods">
              <p>We Accept:</p>
              <div className="payment-icons">
                <span className="payment-icon visa"></span>
                <span className="payment-icon mastercard"></span>
                <span className="payment-icon amex"></span>
                <span className="payment-icon paypal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
