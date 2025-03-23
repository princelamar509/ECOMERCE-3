import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import Logo from "../assets/Logo.png";
import {useState, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import ProductCard from "../components/ProductCard";  // Ensure correct path




const Hero = () => {
  // Changed categories to just trending and bestsellers
  const categories = ["trending", "new arrivals", "bestsellers", "deals"];
  const [activeTab, setActiveTab] = useState(categories[0]);
  const { addToCart } = useContext(CartContext);
 const [showMessage, setShowMessage] = useState(false);
 const [isAdding, setIsAdding] = useState(false);


const handleAddToCart = (product,event) => {
  event.preventDefault();
  event.stopPropagation();
  if(!product) return;
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


  // Variants for parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.3
      }
    }
  };

  // Variants for child elements with slide up animation
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  // Variants for image with scale animation
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.3
      }
    }
  };

  // Variants for badges and tags with pop-in effect
  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.8
      }
    }
  };

  // Variants for hero bottom with fade-in effect
  const bottomVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        delay: 1.2,
        duration: 0.8 
      }
    }
  };

 
  

  
  // Sample trending items data
  const trendingItems = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      discountPrice: 199.99,
      image: "https://nonstopnewcomer.com/wp-content/uploads/2017/02/monoprice-noise-cancelling-headphones.jpg",
      badge: "Trending",
      badgeClass: "sale",
      rating: 4.8,
      reviewCount: 324,
      category:"trending"
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 399.99,
      discountPrice: 349.99,
      image: "https://image-us.samsung.com/us/galaxy-watch7/designstudio/SM-L300NZG_ET-SNL30SK.jpg?$product-details-jpg$",
      badge: "New arrivals",
      badgeClass: "new arrivals",
      rating: 4.6,
      reviewCount: 156,
      category: "new arrivals"
    },
    {
      id: 3,
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      discountPrice: 199.99,
      image: "https://nonstopnewcomer.com/wp-content/uploads/2017/02/monoprice-noise-cancelling-headphones.jpg",
      badge: "Trending",
      badgeClass: "sale",
      rating: 4.8,
      reviewCount: 324,
      category:"trending"
    },
    {
      id: 4,
      name: "Smart Watch Series 5",
      price: 399.99,
      discountPrice: 349.99,
      image: "https://image-us.samsung.com/us/galaxy-watch7/designstudio/SM-L300NZG_ET-SNL30SK.jpg?$product-details-jpg$",
      badge: "New arrivals",
      badgeClass: "new arrivals",
      rating: 4.6,
      reviewCount: 156,
      category: "new arrivals"
    },
    {
      id: 5,
      name: "Ultralight Laptop Pro",
      price: 1299.99,
      discountPrice: null,
      image: "https://www.umassstore.com/site/product-images/6001250_1.default.jpeg?resizeid=2&resizeh=600&resizew=600",
      badge: "Bestseller",
      badgeClass: "bestseller",
      rating: 4.9,
      reviewCount: 427,
      category: "bestsellers"
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      price: 59.99,
      discountPrice: 39.99,
      image: "https://cdn.shopify.com/s/files/1/1520/4366/products/trio-wireless-charging-pad-charging-stations-satechi-868975.jpg?v=1578378985",
      badge: "Trending",
      badgeClass: "sale",
      rating: 4.5,
      reviewCount: 218,
      category: "trending"
    },
    {
      id: 7,
      name: "Premium Leather Wallet",
      price: 89.99,
      discountPrice: 69.99,
      image: "https://patimont.com/cdn/shop/files/AirTagwalletpremiumLeather-front-min.jpg?v=1713019238",
      badge: "Trending",
      badgeClass: "sale",
      rating: 4.7,
      reviewCount: 192,
      category: "trending"
    },
    {
      id: 8,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      discountPrice: 99.99,
      image: "https://betanews.com/wp-content/uploads/2023/09/IMG_5043.jpeg",
      badge: "Bestseller",
      badgeClass: "bestseller",
      rating: 4.9,
      reviewCount: 310,
      category: "bestsellers"
    },
    {
      id: 9,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      discountPrice: 99.99,
      image: "https://resource.ultimateears.com/w_242,h_303,ar_4:5,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/ue/en/homepage/ue-megaboom4-desktop.png",
      badge: "Deals",
      badgeClass: "deals",
      rating: 4.9,
      reviewCount: 310,
      category: "deals"
    },
    {
      id: 10,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      discountPrice: 99.99,
      image: "https://i5.walmartimages.com/seo/Aursear-Waterproof-Bluetooth-Speaker-Portable-Wireless-Speaker-with-Loud-Stereo-Sound-Blue_faec33c2-73ae-4b9a-802d-81a6ad8301c2.b423cc0557aed173b11639c1ffedc91b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      badge:"New arrivals",
      badgeClass: "new arrivals",
      rating: 4.9,
      reviewCount: 310,
      category:"new arrivals"
    },
    {
      id: 11,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      discountPrice: 99.99,
      image: "https://ecoxgear.com/cdn/shop/files/Defender_Front_Camo.jpg?v=1724247525",
      badge: "Trending",
      badgeClass: "trending",
      rating: 4.9,
      reviewCount: 310,
      category:"trending"
    },
    {
      id: 12,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      discountPrice: 99.99,
      image: "https://m.media-amazon.com/images/I/81xdSODir-L.jpg",
      badge: "New arrivals",
      badgeClass: "new arrivals",
      rating: 4.9,
      reviewCount: 310,
      category:"new arrivals"
    },
    {
      id: 13,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      discountPrice: 99.99,
      image: "https://ihome.com/cdn/shop/files/bluetooth-speaker-boombox-with-fm-radio-color-changing-lights-and-remote-control-ibt920bexv24-920975.jpg?v=1737410886",
      badge: "Trending",
      badgeClass: "trending",
      rating: 4.9,
      reviewCount: 310,
      category:"trending"
    },
    {
      id: 14,
      name: "Portable Bluetooth Speaker",
      price: 49.99,
      discountPrice:45.89,
      image: "https://i5.walmartimages.com/seo/5-Nutrition-Rich-Piana-Loyalty-Tee-100-Cotton-Black-T-Shirt-Short-Sleeve-Muscle-Fit-Shirt-Workout-Mens-Gym-Clothes-Men-Exercise-Fitness-Gear-3X-Large_c488307e-2e8d-433d-8f74-c1decd3c3849.a1b79707393c6ce8d6d5093be4d9c356.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      badge: "Trending",
      badgeClass: "trending",
      rating: 4.9,
      reviewCount: 310,
      category:"trending"
    },
    {
      id: 15,
      name: "Red Dawn living the dream",
      price: 60.89,
      discountPrice: 55.38,
      image: "https://i5.walmartimages.com/seo/5-Nutrition-Rich-Piana-Livin-The-Dream-100-Cotton-Red-T-Shirt-Short-Sleeve-Muscle-Fit-Shirt-Workout-Mens-Gym-Clothes-Men-Exercise-Fitness-Gear-Medium_f281b1dc-218a-4017-b759-386478cf02b9.ad5e2a8545978b0a400a48bf332a8be9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      badge: "trending",
      badgeClass: "trending",
      rating: 4.9,
      reviewCount: 310,
      category:"trending"
    },
    {
      id: 16,
      name: "Apparan Elie Metalic Dress",
      price: 70.99,
      discountPrice: 50.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0JuTmSxJ8sKImFSkgBej1jT6wBQ7_1Xf5Q&s",
      badge: "Trending",
      badgeClass: "trending",
      rating: 4.9,
      reviewCount: 310,
      category:"trending"
    },
    {
      id: 17,
      name: "Inferno 2 shin red dress",
      price: 100.99,
      discountPrice: 80.99,
      image: "https://sonotsizezero.com/cdn/shop/files/singles-inferno-2-shin-seul-ki-inspired-dress-005-xs-uk-size-4-red-100-and-above-allcollections-blue-clothes-collectionsingleinferno2-dresses-240.png?v=1706232592",
      badge: "Trending",
      badgeClass: "trending",
      rating: 4.9,
      reviewCount: 310,
      category:"trending"
    }
  ];

  // Filter items based on active tab
  const filteredItems = trendingItems.filter(item => item.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="home" id="home">
  

        <motion.div 
          className="hero-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
         
        

          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Elevate Your Style <span>This Season</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Discover our latest collection of premium fashion and accessories with
              up to 30% off on selected items.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              variants={itemVariants}
            >
              <Link to="/shop" className="btn btn-primary">
                Shop Now <FaArrowRight className="btn-icon" />
              </Link>
              <Link to="/collections/new" className="btn btn-outline">
                New Arrivals
              </Link>
            </motion.div>
            
            <motion.div 
              className="hero-features"
              variants={itemVariants}
            >
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Free Shipping</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">30-Day Returns</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Secure Checkout</span>
              </div>
            </motion.div>
          </div>
          
          {/* New coupon banner on the left */}
          <motion.div 
            className="coupon-banner-left"
            variants={badgeVariants}
          >      
            <span className="coupon-title">Special Offer</span>
            <span className="coupon-text">SPRING SALE</span>
            <span className="coupon-code">SAVE25</span>
          </motion.div>
          
          <div className="hero-image">
            <motion.img
              src="https://img.freepik.com/premium-photo/black-paper-shopping-bag-dark-surface_947498-24995.jpg"
              alt="Shopping bag"
              className="main-image"
              variants={imageVariants}
            />
            
            <motion.div 
              className="discount-badge"
              variants={badgeVariants}
            >
              <span className="discount-text">30% OFF</span>
              <span className="discount-subtext">Limited Time</span>
            </motion.div>
            
            <motion.div 
              className="trending-tag"
              variants={badgeVariants}
            >
              <span>Trending</span>
              <span className="dot"></span>
              <span>2025</span>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-bottom"
          variants={bottomVariants}
          initial="hidden"
          animate="visible"
        >
         </motion.div>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-line">
              <div className="scroll-dot"></div>
            </div>
          </div>
        
      </section>

      {/* Featured Brands Section */}
      <div className="featured-brands">
        <motion.div
          className="marquee"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        >
          <div className="brand-logos">
            <img src={Logo} alt="Brand logo" /> {/*import within */}
            <img src="https://i0.wp.com/skyje.com/wp-content/uploads/2019/04/7-800x712.png?resize=720%2C641" alt="Brand logo" />
            <img src="https://i0.wp.com/skyje.com/wp-content/uploads/2019/04/1-2.jpg?resize=500%2C500" alt="Brand logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-yRhFU6OOviT01i-Uk1y8YPI2XKqIJD7xg&s" alt="Brand logo" />
            <img src="https://dqr1c0kunih5r.cloudfront.net/Uploaded/2018/8/20/85ed0a91ddea4cfa993d7b021e01863b/56f5fd96cce24386b8b64d191943c5b0.jpg" alt="Brand logo" />
            <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nivea.png" alt="Brand logo" />
            <img src="https://www.zarla.com/images/pepsi-logo-2400x2400-20220513-1.png?crop=1:1,smart&width=150&dpr=2" alt="Brand logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb45cCW_QV8cEKuYcTaYLyQuyPVQgAOE6jAQ&s" alt="Brand logo" />
          </div>
        </motion.div>
      </div>
      <div className="featured-brands">
        <motion.div
          className="marquee"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
        >
          <div className="brand-logos">
            <img src={Logo} alt="Brand logo" /> {/*import within */}
            <img src="https://i0.wp.com/skyje.com/wp-content/uploads/2019/04/7-800x712.png?resize=720%2C641" alt="Brand logo" />
            <img src="https://i0.wp.com/skyje.com/wp-content/uploads/2019/04/1-2.jpg?resize=500%2C500" alt="Brand logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-yRhFU6OOviT01i-Uk1y8YPI2XKqIJD7xg&s" alt="Brand logo" />
            <img src="https://dqr1c0kunih5r.cloudfront.net/Uploaded/2018/8/20/85ed0a91ddea4cfa993d7b021e01863b/56f5fd96cce24386b8b64d191943c5b0.jpg" alt="Brand logo" />
            <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nivea.png" alt="Brand logo" />
            <img src="https://www.zarla.com/images/pepsi-logo-2400x2400-20220513-1.png?crop=1:1,smart&width=150&dpr=2" alt="Brand logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb45cCW_QV8cEKuYcTaYLyQuyPVQgAOE6jAQ&s" alt="Brand logo" />
          </div>
        </motion.div>
      </div>

      {/* Trending Products Section */}
      <div className="trending-section">
        <div className="section-header">
          <h2>Shop What's Hot</h2>
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`tab-btn ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid hero-products">
  {filteredItems.map((item) => (
    <ProductCard key={item.id} product={item} variant="hero" />
  ))}
</div>

        <div className="view-all">
          <Link to="/shop" className="view-all-link">
            View All Products <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
