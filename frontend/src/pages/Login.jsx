import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <img src="/logo.png" alt="uni logo" className="header-logo" />
      </header>
      <main className="page-content">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <input type="email" className="login-input" placeholder="Email" />
            <input type="password" className="login-input" placeholder="Password" />
            <button type="submit" className="login-submit-btn">Login</button>
          </form>
          <p className="login-text" style={{ fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }} onClick={handleGoogleLogin}>Login with Google</p>
          <p className="login-text">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </main>
      <footer className="page-footer">
        <p className="footer-text">© 2025 University Registration | <a href="/terms" className="footer-link">Terms</a> | <a href="/privacy" className="footer-link">Privacy</a></p>
      </footer>
    </div>
  );
};

export default Login;