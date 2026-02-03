import React from "react"; 
import "./Home.css";

export default function Home() 
{ 
  return ( <div className="app"> {/* Navbar */} <nav className="navbar"> 
  <div className="logo">LocalSolve</div>
   <ul className="nav-links">
     <li>Home</li>
      <li>Problems</li> 
      <li>Solutions</li>
       <li>Reports</li> 
       <li>About</li> 
       <li>Contact</li> </ul>
        <button className="nav-btn">Report a Problem</button> </nav>

{/* Hero Section */}
  <section className="hero">
    <div className="hero-text">
      <h1>Solving Local Problems for a Better Community</h1>
      <p>
        Report local issues like road damage, water problems, garbage,
        street lights and track solutions transparently.
      </p>
      < button className="hero-btn">Submit Your Issue</button>
    </div>
    <div className="hero-img">
    <img
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  alt="Local problem reporting"
/>
    </div>
  </section>

  <section className="about-section">
      {/* Left Side: Circular Image */}
      <div className="about-img-container">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
          alt="Our Team" 
          className="about-circle-img"
        />
      </div>

      {/* Right Side: Content */}
      <div className="about-content">
        <h2>About <span>Us</span></h2>
        <p>
          We are a specialized boutique firm providing qualified, evidence-based, 
          and compassionate services online and in person. We embrace a safe, holistic 
          and trauma-informed method that is uniquely designed to motivate you to 
          make the changes you want to make.
        </p>
       
        <button className="about-btn">
          Learn More <span>●</span>
        </button>
      </div>
    </section>


    <section className="services-container">
      <h2>Our <b>Services</b></h2>

      <div className="services-layout">
        {/* Center Logo */}
        <div className="center-circle">
          <div className="center-logo">LocalSolve.in</div>
        </div>

        {/* Nodes Left Side */}
        <div className="service-node top-left">
          <div className="node-text">
            <h3>Infrastructure Repair</h3>
            <p>Reporting and tracking of road, bridge, and public building repairs.</p>
          </div>
          <div className="node-icon bg-sage">🏗️</div>
        </div>

        <div className="service-node mid-left">
          <div className="node-text">
            <h3>Water Solutions</h3>
            <p>Immediate reporting for water leakage and supply issues.</p>
          </div>
          <div className="node-icon bg-tan">🚰</div>
        </div>

        <div className="service-node bottom-left">
          <div className="node-text">
            <h3>Sanitation Tracking</h3>
            <p>Garbage collection schedules and community cleaning reports.</p>
          </div>
          <div className="node-icon bg-light-sage">🧹</div>
        </div>

        {/* Nodes Right Side */}
        <div className="service-node top-right">
          <div className="node-icon bg-tan">💡</div>
          <div className="node-text">
            <h3>Street Light Issues</h3>
            
            <p>Quick fixes for non-functional street lights in your area.</p>
          </div>
        </div>

        <div className="service-node mid-right">
          <div className="node-icon bg-light-sage">🌳</div>
          <div className="node-text">
            <h3>Parks & Greenery</h3>
            <p>Maintenance of public parks and plantation drives.</p>
          </div>
        </div>

        <div className="service-node bottom-right">
          <div className="node-icon bg-sage">🛡️</div>
          <div className="node-text">
            <h3>Public Safety</h3>
            <p>Reporting safety hazards and emergency service coordination.</p>
          </div>
        </div>
      </div>
    </section>

  

  {/* Info Section */}
  <section className="info">
    <div className="info-img">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Community working"
      />
    </div>
    <div className="info-text">
      <h2>Your Time is Valuable. We Make Every Report Count.</h2>
      <p>
        Our platform ensures transparency, faster response and better
        communication between citizens and authorities.
      </p>
      <button className="info-btn">View All Reports</button>
    </div>
  </section>

  {/* Footer */}
  <footer className="footer">
    <p>© 2026 LocalSolve | Local Problem Reporting & Solutions</p>
  </footer>
</div>



); }

