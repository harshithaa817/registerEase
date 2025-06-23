import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <img src="/logo.png" alt="uni logo" className="header-logo" />
          <div className="header-text">
          </div>
        </div>
      </header>
      <main className="page-content">
        <div className="home-container">
          <p className="home-text">Access your courses and lectures with ease.</p>
          <div className="home-buttons">
            <Link to="/login" className="home-button">login</Link>
            <Link to="/signup" className="home-button">sign up</Link>
          </div>
        </div>
      </main>
      <footer className="page-footer">
        <p className="footer-text">© 2025 university registration | <a href="/terms" className="footer-link">terms</a> | <a href="/privacy" className="footer-link">privacy</a></p>
      </footer>
    </div>
  );
};

export default Home;