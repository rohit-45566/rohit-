import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logout from './logout'; // Import the logout function
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    logout(navigate); // Call the logout function
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const userRole = localStorage.getItem("userRole");

  if (userRole) return null; // If logged in, don't show navbar

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/user/login">User Login</a>
      <a href="/admin/login">Admin Login</a>
    </nav>
  );
};
export default Navbar;