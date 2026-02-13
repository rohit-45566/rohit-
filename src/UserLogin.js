import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blackBackground from "./images/cgpt.png"; // Import black background

const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.removeItem("userRole");
    if (userRole === 'admin') {
      alert('You are already logged in as an admin. Please log out to access user.');
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert(result.message);
        localStorage.setItem('userRole', 'user');
        navigate('/user/dashboard');
      } else {
        alert(result.error || 'Login failed. Please check your credentials.');
      }

    } catch (error) {
      console.error('Login Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div
      className="user-login-container"
      style={{
        backgroundImage: `url(${blackBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="user-login-box">
        <h2 style={{ textAlign: "center", color: "#1a73e8" }}>
          Citizen Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="common-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;