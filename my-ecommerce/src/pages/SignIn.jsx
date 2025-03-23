import { useState, useEffect } from "react";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css"; // External CSS

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Check for saved email
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // Save email if remember me is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      
      // Provide more user-friendly error messages
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        setError("Invalid email or password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please try again later or reset your password.");
      } else {
        setError("Sign-in failed. Please try again later.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    
    try {
      await signInWithPopup(auth, googleProvider);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setError("Google sign-in failed. Please try again.");
    }
  };

  const handleGitHubSignIn = async () => {
    setError("");
    setLoading(true);
    
    try {
      await signInWithPopup(auth, githubProvider);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setError("GitHub sign-in failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Welcome Back!</h2>
          <p className="auth-subtext">Sign in to continue shopping with us</p>
        </div>
        
        {error && (
          <div className="auth-error">
            <svg className="error-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <p>{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          
          <div className="auth-options">
            <div className="remember-me">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to="/forgot-password" className="auth-link forgot-link">
              Forgot Password?
            </Link>
          </div>
          
          <button 
            type="submit" 
            className={`auth-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <div className="social-auth">
          <button 
            className="google-btn" 
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.787-1.676-4.139-2.701-6.735-2.701-5.522 0-10.001 4.478-10.001 10s4.478 10 10.001 10c8.396 0 10.249-7.85 9.426-11.748l-9.426 0.081z" />
            </svg>
            Sign in with Google
          </button>
          
          <button 
            className="github-btn" 
            onClick={handleGitHubSignIn}
            disabled={loading}
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Sign in with GitHub
          </button>
        </div>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup" className="auth-link signup-link">Create an Account</Link></p>
        </div>
      </div>
      
      <div className="auth-info">
        <div className="auth-features">
          <h3>Benefits of signing in:</h3>
          <ul>
            <li>
              <span className="feature-icon">✓</span>
              <span>Track your orders and delivery status</span>
            </li>
            <li>
              <span className="feature-icon">✓</span>
              <span>Access your purchase history</span>
            </li>
            <li>
              <span className="feature-icon">✓</span>
              <span>Save items to your wishlist</span>
            </li>
            <li>
              <span className="feature-icon">✓</span>
              <span>Receive exclusive offers and discounts</span>
            </li>
          </ul>
        </div>
        <div className="auth-help">
          <p>Need help? <a href="/help" className="auth-link">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;