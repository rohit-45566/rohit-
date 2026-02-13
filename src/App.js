import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import UserDashboard from './UserDashboard';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import PostComplaint from './PostComplaint';
import ViewComplaints from './ViewComplaints';
import StatusPage from './StatusPage';
import ViewStatus from './ViewStatus';
import Feedback from './Feedback';
import ViewFeedback from './ViewFeedback';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/post-complaint" element={<PostComplaint />} />
          <Route path="/view-status" element={<ViewStatus />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/view-complaints" element={<ViewComplaints />} />
          <Route path="/view-feedback" element={<ViewFeedback />} />
          <Route path="/update-status/:date" element={<StatusPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;