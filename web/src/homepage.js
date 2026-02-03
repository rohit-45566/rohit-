import React from "react";
import "./homepage.css";
import heroImage from "./hero.png";

const Home = () => {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <h2>📍 LocalHelp</h2>
        <div>
          <a href="/login">Login</a>
          <a href="/register" className="btn">Register</a>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-text">
            <h1>Report Local Problems Easily</h1>
            <p>
              Your voice matters. Report issues like roads, water,
              garbage & street lights and get solutions faster.
            </p>

            <div className="hero-buttons">
              <a href="/report" className="btn-primary">
                🚨 Report Problem
              </a>
              <a href="/problems" className="btn-secondary">
                📋 View Problems
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="Local problem reporting" />
          </div>

        </div>
      </section>
      {/* ===== STATS SECTION ===== */}
<section className="stats-section">
  <div className="stat-card">
    <h3>1200+</h3>
    <p>Problems Reported</p>
  </div>
  <div className="stat-card">
    <h3>870+</h3>
    <p>Problems Solved</p>
  </div>
  <div className="stat-card">
    <h3>50+</h3>
    <p>Active Areas</p>
  </div>
</section>

{/* ===== CATEGORIES ===== */}
<section className="category-section">
  <h2>Problem Categories</h2>

  <div className="category-grid">
    <div className="category-card">🛣 Road Issues</div>
    <div className="category-card">💧 Water Supply</div>
    <div className="category-card">🗑 Garbage</div>
    <div className="category-card">💡 Street Lights</div>
    <div className="category-card">🚦 Traffic</div>
    <div className="category-card">🏘 Drainage</div>
  </div>
</section>
[]
      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="card">
            <h3>📝 Report</h3>
            <p>Submit a problem with details & location.</p>
          </div>

          <div className="card">
            <h3>📍 Track</h3>
            <p>Track problem status in real time.</p>
          </div>

          <div className="card">
            <h3>✅ Resolve</h3>
            <p>Authorities resolve & update status.</p>
          </div>
        </div>
      </section>


      {/* ===== FOOTER ===== */}
      <footer>
        <p>© 2026 LocalHelp | Made for Social Good ❤️</p>
      </footer>
    </>
  );
};

export default Home;
