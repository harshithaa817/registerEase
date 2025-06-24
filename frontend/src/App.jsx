import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CourseList from './components/courses/CourseList';
import LectureList from './components/lectures/LectureList';
import StudentDashboard from './pages/StudentDashboard';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    if (token) {
      console.log('Token received in callback:', token);
      // Store token in localStorage or context (e.g., for authenticated requests)
      localStorage.setItem('authToken', token);
      navigate('/dashboard');
    } else {
      console.error('No token in callback URL');
      navigate('/login'); // Redirect to login on failure
    }
  }, [location, navigate]);

  return <div>Loading...</div>; // Placeholder while redirecting
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/callback" element={<Callback />} />
        <Route path="/dashboard/courses" element={<CourseList />} />
        <Route path="/dashboard/lectures" element={<LectureList />} />
        <Route path="/dashboard/registrations" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;