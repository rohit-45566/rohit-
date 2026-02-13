import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewStatus.css';

const ViewStatus = () => {
  const [statuses, setStatuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-status');
        const data = await response.json();
        setStatuses(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="view-status-container">
      <div className="header">
        <h1>Complaint Progress</h1>
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </div>

      <div className="status-grid">
        {statuses.length > 0 ? (
          statuses.map((item, index) => (
            <div key={index} className="status-row">
              <div className="details">
                <h3>{item.complaintText}</h3>
                <p>Location: {item.location} {item.subLocation && `(${item.subLocation})`}</p>
                <span className="date">Updated: {new Date(item.updatedAt).toLocaleString()}</span>
              </div>
              <div className={`badge ${item.status.replace(/\s/g, '')}`}>
                {item.status}
              </div>
            </div>
          ))
        ) : (
          <p className="empty">No active complaints tracked.</p>
        )}
      </div>
    </div>
  );
};

export default ViewStatus;