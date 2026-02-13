import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserSignup.css";

const UserSignup = () => {
  const navigate = useNavigate();

  // 📍 Dhule Areas
  const dhuleAreas = [
    "Deopur",
    "Sakri Road",
    "Mohadi",
    "Avdhan",
    "Nakane",
    "Fagne",
    "Chitod Road",
    "Wadala",
    "MIDC",
    "Laling",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    state: "Maharashtra",
    district: "Dhule",
    city: "Dhule City",
    area: "",
    pincode: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") validateEmail(value);
    if (name === "password") validatePassword(value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setErrors((prev) => ({
      ...prev,
      email: isValid ? "" : "Invalid email format.",
    }));

    return isValid;
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    const isValid = passwordRegex.test(password);

    setErrors((prev) => ({
      ...prev,
      password: isValid
        ? ""
        : "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.",
    }));

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);

    if (!isEmailValid || !isPasswordValid) {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration successful! Please login.");
        navigate("/user/login");
      } else {
        alert(result.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="user-signup-container">
      <div className="user-signup-box">
        <h2>Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            name="mobile"
            type="text"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          {/* Fixed State */}
          <input
            type="text"
            value="Maharashtra"
            disabled
          />

          {/* Fixed District */}
          <input
            type="text"
            value="Dhule"
            disabled
          />

          {/* Fixed City */}
          <input
            type="text"
            value="Dhule City"
            disabled
          />

          {/* Area Dropdown */}
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          >
            <option value="">Select Area</option>
            {dhuleAreas.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>

          <input
            name="pincode"
            type="text"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}

          <button
            type="submit"
            className="signup-button"
            disabled={errors.email || errors.password}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
