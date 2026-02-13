import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Local Area Complaint Management System</h1>
        <p>Your platform to report local issues and track resolutions in real-time.</p>
        
        <div className="auth-options">
          <div className="auth-card user-card">
            <h2>Citizens</h2>
            <p>Report issues, track status, and view local events.</p>
            <div className="button-group">
              <button onClick={() => navigate('/user/login')} className="btn login-btn">User Login</button>
              <button onClick={() => navigate('/user/signup')} className="btn signup-btn">User Sign Up</button>
            </div>
          </div>

          <div className="auth-card admin-card">
            <h2>Administrators</h2>
            <p>Manage complaints, update progress, and post announcements.</p>
            <div className="button-group">
              <button onClick={() => navigate('/admin/login')} className="btn admin-btn">Admin Login</button>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <h3>Easy Reporting</h3>
          <p>Submit complaints with images and location details instantly.</p>
        </div>
        <div className="feature">
          <h3>Live Tracking</h3>
          <p>Monitor the progress of your complaints from "Yet to Begin" to "Resolved".</p>
        </div>
        <div className="feature">
          <h3>Community Updates</h3>
          <p>Stay informed about local events and departmental announcements.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;