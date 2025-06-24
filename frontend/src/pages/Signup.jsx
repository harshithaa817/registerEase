import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Signup = () => {
  const handleGoogleSignup = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <img src="/RegEaseLogo.png" alt="uni logo" className="header-logo" />
      </header>
      <main className="page-content">
        <div className="signup-container">
          <h1 className="signup-title">Sign Up</h1>
          <form className="signup-form">
            <input type="text" className="signup-input" placeholder="Full Name" />
            <input type="email" className="signup-input" placeholder="Email" />
            <input type="password" className="signup-input" placeholder="Password" />
            <button type="submit" className="signup-submit-btn">Sign Up</button>
          </form>
          <p className="login-text" style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }} onClick={handleGoogleSignup}>Signup with Google</p>
          <p className="signup-text">Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </main>
      <footer className="page-footer">
        <p className="footer-text">© 2025 University Registration | <a href="/terms" className="footer-link">Terms</a> | <a href="/privacy" className="footer-link">Privacy</a></p>
      </footer>
    </div>
  );
};

export default Signup;