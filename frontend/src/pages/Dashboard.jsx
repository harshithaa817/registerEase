import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import '../index.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [backendResponse, setBackendResponse] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    const fetchBackend = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/test');
        const data = await response.json();
        setBackendResponse(data.message);
      } catch (error) {
        console.error('Error fetching backend:', error);
        setBackendResponse('Backend error');
      }
    };

    fetchUser();
    fetchBackend();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="logo">RegisterEase</div>
        <nav className="nav-links">
          <button className="nav-logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <main className="page-content">
        <div className="dashboard-container">
          <h1 className="dashboard-title">Welcome to the Dashboard</h1>
          {user ? (
            <>
              <p className="dashboard-text">Email: {user.email}</p>
              <p className="dashboard-text">Backend Response: {backendResponse}</p>
            </>
          ) : (
            <p className="dashboard-text">Loading...</p>
          )}
        </div>
      </main>
      <footer className="page-footer">
        <p className="footer-text">© 2025 University Registration | <a href="/terms" className="footer-link">Terms</a> | <a href="/privacy" className="footer-link">Privacy</a></p>
      </footer>
    </div>
  );
};

export default Dashboard;