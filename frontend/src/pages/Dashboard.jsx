import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import '../styles/dashboard.css';
import { FaBook, FaChalkboardTeacher, FaUserCheck } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="RegEaseLogo.png" alt="uni logo" className="header-logo" />
        <CgProfile
          className="profile-icon"
          onClick={() => navigate('/dashboard/profile')}
          aria-label="View Profile"
        />
      </header>
      <div className="dashboard-main">
        <nav className="dashboard-sidenav">
          <Link to="/dashboard/courses" className="sidenav-item">
            <FaBook className="sidenav-icon" /> View Courses
          </Link>
          <Link to="/dashboard/lectures" className="sidenav-item">
            <FaChalkboardTeacher className="sidenav-icon" /> View Guest Lectures
          </Link>
          <Link to="/dashboard/registrations" className="sidenav-item">
            <FaUserCheck className="sidenav-icon" /> My Registrations
          </Link>
        </nav>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>

      <footer className="dashboard-footer">
        <p className="footer-text">
          © 2025 University Registration |{' '}
          <a href="/terms" className="footer-link">
            Terms
          </a>{' '}
          |{' '}
          <a href="/privacy" className="footer-link">
            Privacy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;