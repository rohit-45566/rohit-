import React from "react";
import LandingImage from "./images/cgpt.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Local Area Complaint Management System</h1>
            <p className="hero-subtext">
              A smart digital platform to report and track local civic issues 
              like road damage, water supply problems, garbage collection, street lights and more.
            </p>
            <div className="hero-buttons">
              <button
                className="cta-button"
                onClick={() => navigate("/user/signup")}
              >
                Get Started
              </button>
              
            </div>
          </div>

          <div className="hero-image">
            <img src={LandingImage} alt="Local Area Support System" />
          </div>
        </div>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features-cards">
            <div className="feature-card">
              <p>✓ Easy complaint submission</p>
            </div>
            <div className="feature-card">
              <p>✓ Real-time complaint tracking</p>
            </div>
            <div className="feature-card">
              <p>✓ Location-based issue reporting</p>
            </div>
            <div className="feature-card">
              <p>✓ Direct communication with authorities</p>
            </div>
            <div className="feature-card">
              <p>✓ Transparent and accountable resolutions</p>
            </div>
          </div>
        </section>

        {/* Callout Section */}
        <section className="callout-section">
          <h2>Empowering Citizens, Improving Cities</h2>
          <p>
            Join thousands of users who are making their neighborhoods better 
            by reporting issues efficiently and transparently.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
