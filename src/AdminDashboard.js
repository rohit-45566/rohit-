import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem('admin'));

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h1>Admin Panel: {admin ? admin.username : 'Administrator'}</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </nav>

      <div className="admin-grid">
        <div className="admin-card" onClick={() => navigate('/view-complaints')}>
          <div className="card-icon">📋</div>
          <h3>Manage Complaints</h3>
          <p>View and update the status of citizen complaints.</p>
        </div>

        <div className="admin-card" onClick={() => navigate('/admin/post-event')}>
          <div className="card-icon">📅</div>
          <h3>Post New Event</h3>
          <p>Announce local programs, meetings, or maintenance.</p>
        </div>

        <div className="admin-card" onClick={() => navigate('/view-feedback')}>
          <div className="card-icon">💬</div>
          <h3>User Feedback</h3>
          <p>Review ratings and suggestions from the community.</p>
        </div>

        <div className="admin-card" onClick={() => navigate('/admin/manage-status')}>
          <div className="card-icon">🔄</div>
          <h3>Update Progress</h3>
          <p>Modify real-time status updates for active issues.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;