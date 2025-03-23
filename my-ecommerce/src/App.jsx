import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import { CartProvider } from "./context/CartProvider";  // ✅ Correct Name
import NewArrivals from "./pages/NewArrivals";
import Collections from "./pages/Collections";
import CartPage from "./pages/CartPage";




function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
       <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;