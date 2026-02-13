import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/user/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h1>Welcome, {user ? user.username : 'User'}</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </nav>
      
      <div className="dashboard-content">
        <div className="card" onClick={() => navigate('/post-complaint')}>
          <h3>Post a Complaint</h3>
          <p>Report issues in your local area with images.</p>
        </div>

        <div className="card" onClick={() => navigate('/feedback')}>
          <h3>Give Feedback</h3>
          <p>Help us improve our services.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;