import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CourseList from './components/courses/CourseList';
import CourseDetails from './components/courses/CourseDetails';
import LectureList from './components/lectures/LectureList';
import LectureDetails from './components/lectures/LectureDetails';
import StudentProfile from './pages/StudentProfile'; // ✅ This is your profile component

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('authToken', token);
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

const DashboardLayout = () => (
  <>
    <Dashboard />
    <div className="p-4 flex-grow">
      <Outlet />
    </div>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/callback" element={<Callback />} />
        
        {/* ✅ Add the profile route */}
        <Route path="/profile" element={<StudentProfile />} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="courses" element={<CourseList />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="lectures" element={<LectureList />} />
          <Route path="lectures/:id" element={<LectureDetails />} />
          <Route path="profile" element={<StudentProfile />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
