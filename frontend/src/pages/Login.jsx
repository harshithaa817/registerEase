import React, { useState } from 'react';
import { supabase } from '../services/supabase';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="logo">RegisterEase</div>
      </header>
      <main className="page-content">
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          {error && <p className="login-error">{error}</p>}
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>
          <p className="login-text">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </main>
      <footer className="page-footer">
        <p className="footer-text">© 2025 University Registration | <a href="/terms" className="footer-link">Terms</a> | <a href="/privacy" className="footer-link">Privacy</a></p>
      </footer>
    </div>
  );
};

export default Login;