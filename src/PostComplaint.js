import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostComplaint.css';

const PostComplaint = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [subLocation, setSubLocation] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUsername(user.username || '');
      setEmail(user.email || '');
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('complaintText', complaintText);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('subLocation', subLocation);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/submit-complaint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Complaint submitted successfully!');
        navigate('/user/dashboard');
      } else {
        setError('Failed to submit complaint');
      }
    } catch (err) {
      setError('Server error: ' + err.message);
    }
  };

  return (
    <div className="post-container">
      <div className="form-box">
        <h2>Post a Complaint</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} readOnly />
          <input type="email" placeholder="Email" value={email} readOnly />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          
          <select value={location} onChange={(e) => setLocation(e.target.value)} required>
            <option value="">Select Location</option>
            <option value="college">College</option>
            <option value="hostel">Hostel</option>
            <option value="library">Library</option>
          </select>

          {location === 'college' && (
            <select value={subLocation} onChange={(e) => setSubLocation(e.target.value)} required>
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          )}

          <textarea 
            placeholder="Describe your issue..." 
            value={complaintText} 
            onChange={(e) => setComplaintText(e.target.value)} 
            required 
          />

          <div className="file-input">
            <label>Upload Proof (Image):</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && <img src={preview} alt="Preview" className="img-preview" />}
          </div>

          <button type="submit" className="submit-btn">Submit Complaint</button>
          <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
        </form>
      </div>
    </div>
  );
};

export default PostComplaint;