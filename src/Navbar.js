import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  
  // Check login status from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ComplaintSystem</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        
        {/* User Specific Links */}
        {user && (
          <>
            <li><Link to="/user/dashboard">Dashboard</Link></li>
            <li><Link to="/post-complaint">Post Complaint</Link></li>
            <li><Link to="/view-status">Track Status</Link></li>
          </>
        )}

        {/* Admin Specific Links */}
        {admin && (
          <>
            <li><Link to="/admin/dashboard">Admin Panel</Link></li>
            <li><Link to="/view-complaints">Manage Complaints</Link></li>
            <li><Link to="/view-feedback">View Feedback</Link></li>
          </>
        )}

        {/* General Auth Links */}
        {!user && !admin ? (
          <>
            <li><Link to="/user/login">User Login</Link></li>
            <li><Link to="/admin/login">Admin Login</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout} className="logout-nav-btn">Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;