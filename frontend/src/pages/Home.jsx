import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <img src="/logo.png" alt="uni logo" className="header-logo" />
      </header>
      <main className="page-content">
        <div className="home-container">
          <p className="home-text">Access your courses and lectures with ease.</p>
          <div className="home-buttons">
            <Link to="/login" className="home-button">Login</Link>
            <Link to="/signup" className="home-button">Sign up</Link>
          </div>
        </div>
      </main>
      <footer className="page-footer">
        <p className="footer-text">© 2025 University Registration | <a href="/terms" className="footer-link">Terms</a> | <a href="/privacy" className="footer-link">Privacy</a></p>
      </footer>
    </div>
  );
};

export default Home;