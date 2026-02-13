import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewFeedback.css';

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/feedback'); //
        const data = await response.json();
        setFeedbacks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feedback:", error);
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div className="view-feedback-container">
      <div className="feedback-header">
        <h1>User Feedback & Ratings</h1>
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </div>

      {loading ? (
        <p className="loading">Loading feedback...</p>
      ) : (
        <div className="feedback-grid">
          {feedbacks.length > 0 ? (
            feedbacks.map((item, index) => (
              <div key={index} className="feedback-card">
                <div className="card-top">
                  <span className="feedback-date">{item.date}</span>
                  <div className="rating-badge">★ {item.rating}/5</div>
                </div>
                <p className="description">{item.description}</p>
                <div className="card-footer">
                  <span className="timestamp">Received: {new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data">No feedback submitted yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewFeedback;