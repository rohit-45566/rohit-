import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './StatusPage.css';

const StatusPage = () => {
  const { date } = useParams(); 
  const [status, setStatus] = useState('Yet to Begin');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/update-status/${date}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Status updated successfully!");
        navigate('/view-complaints');
      } else {
        setMessage(data.message || "Failed to update status");
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="status-page-container">
      <div className="status-card">
        <h2>Update Complaint Status</h2>
        <p className="subtitle">Managing complaint from: {new Date(date).toLocaleDateString()}</p>
        
        {message && <p className="status-msg">{message}</p>}
        
        <form onSubmit={handleUpdate} className="status-form">
          <label>Select Current Progress:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Yet to Begin">Yet to Begin</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          
          <div className="button-group">
            <button type="submit" className="save-btn">Update Status</button>
            <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StatusPage;