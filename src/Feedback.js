import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    description: '',
    rating: 5
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', { //
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your feedback!");
        navigate('/user/dashboard');
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="feedback-form-container">
      <div className="form-card">
        <h2>Submit Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label>Date</label>
          <input 
            type="date" 
            value={formData.date} 
            onChange={(e) => setFormData({...formData, date: e.target.value})} 
            required 
          />

          <label>Rating (1-5)</label>
          <select 
            value={formData.rating} 
            onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>

          <label>Description</label>
          <textarea 
            placeholder="Tell us about your experience..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />

          <button type="submit" className="submit-btn">Submit Feedback</button>
          <button type="button" onClick={() => navigate(-1)} className="cancel-btn">Back</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;