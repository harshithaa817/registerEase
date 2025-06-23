import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './services/supabase';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './index.css';

const RedirectIfAuthenticated = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) navigate('/dashboard');
    };
    checkUser();
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><RedirectIfAuthenticated /><Home /></>} />
        <Route path="/login" element={<><RedirectIfAuthenticated /><Login /></>} />
        <Route path="/signup" element={<><RedirectIfAuthenticated /><Signup /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;