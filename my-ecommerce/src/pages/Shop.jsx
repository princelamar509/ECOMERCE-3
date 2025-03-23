import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="shop-container">
      <h2>Shop Clothing</h2>
      
      <div className="coming-soon-message">
        <h3>Our Shop is Being Upgraded</h3>
        <p>We apologize for the current appearance of our shop items. We're currently in the process of enhancing our product catalog with higher quality images and detailed descriptions.</p>
        <p>What you see below is temporary data from a third-party API that we're using while we complete our product database. Soon you'll experience our beautifully curated collection with:</p>
        <ul>
          <li>High-resolution product images</li>
          <li>Detailed specifications</li>
          <li>Customer reviews</li>
          <li>Improved filtering options</li>
        </ul>
        <p>Thank you for your patience as we work to provide you with the best shopping experience possible!</p>
        <div className="coming-soon-badge2">ENHANCED SHOP COMING SOON</div>
      </div>

      {loading ? (
        <div className="loading2">Loading products...</div>
      ) : (
        <div className="products-grid2">
          {products.map((product) => (
            <div key={product.id} className="product-card2">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;