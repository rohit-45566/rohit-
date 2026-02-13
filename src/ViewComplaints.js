import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal"; // Ensure you have the Modal component created
import BackButton from "./BackButton";
import "./ViewComplaints.css";

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-complaints"); 
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setComplaints(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="view-complaints-container">
      <div className="view-header">
        <h1>Administrative Dashboard: Complaints</h1>
        <BackButton />
      </div>

      {error && <div className="error-banner">Error: {error}</div>}

      <div className="table-wrapper">
        <table className="complaints-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Complaint Details</th>
              <th>Date</th>
              <th>Location</th>
              <th>Room/Pin</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length > 0 ? (
              complaints.map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.username}</td>
                  <td className="text-cell">{complaint.complaintText}</td>
                  <td>{new Date(complaint.date).toLocaleDateString()}</td>
                  <td>
                    <span className="location-tag">{complaint.location}</span>
                    <br />
                    <small>{complaint.subLocation || "N/A"}</small>
                  </td>
                  <td>{complaint.roomNo || "N/A"}</td>
                  <td>
                    {complaint.image ? (
                      <img
                        src={complaint.image}
                        alt="Proof"
                        className="thumbnail"
                        onClick={() => handleImageClick(complaint.image)}
                      />
                    ) : (
                      <span className="no-image">No Image</span>
                    )}
                  </td>
                  <td>
                    <button 
                      className="status-btn"
                      onClick={() => navigate(`/update-status/${complaint.date}`)}
                    >
                      Update Status
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="empty-row">No complaints found in the system.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img src={selectedImage} alt="Enlarged complaint proof" className="modal-img" />
      </Modal>
    </div>
  );
};

export default ViewComplaints;