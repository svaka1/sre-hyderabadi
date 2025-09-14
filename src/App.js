import React from 'react';
import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-left">
            <img src={logo} alt="SRE@Hyderabadi Logo" className="logo" />
            <span className="site-title">SRE<span className="at">@</span>Hyderabadi</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#join">Join</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to SRE<span className="at">@</span>Hyderabadi</h1>
        <p>
          Connecting Site Reliability Engineers in Hyderabad.<br/>
          Learn, share, and grow with a passionate technical community.
        </p>
        <a href="#join" className="cta-btn">Join the Community</a>
      </header>

      {/* Highlights Section */}
      <section className="highlights" id="events">
        <div className="highlight-card">
          <h3>Meetups & Events</h3>
          <p>
            Regular meetups, workshops, and webinars to connect and learn from industry experts.
          </p>
        </div>
        <div className="highlight-card">
          <h3>Knowledge Sharing</h3>
          <p>
            Technical talks, blogs, and discussions on SRE practices, DevOps, and cloud reliability.
          </p>
        </div>
        <div className="highlight-card">
          <h3>Community Support</h3>
          <p>
            Collaborate, ask questions, and get support from fellow SREs in Hyderabad.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners" id="partners">
        <h2>Our Partners</h2>
        <div className="partners-logos">
          {/* Replace with your own partner logos */}
          <img src="https://via.placeholder.com/120x60?text=Partner+1" alt="Partner 1"/>
          <img src="https://via.placeholder.com/120x60?text=Partner+2" alt="Partner 2"/>
          <img src="https://via.placeholder.com/120x60?text=Partner+3" alt="Partner 3"/>
        </div>
      </section>

      {/* Join Section */}
      <section className="join" id="join">
        <h2>Become a Member</h2>
        <p>
          Ready to join? Connect with us and stay updated on all community activities!
        </p>
        <a href="mailto:sre.hyderabadi@gmail.com" className="cta-btn">Join via Email</a>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-social">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sre.hyderabadi@gmail.com">Email</a>
        </div>
        <p>&copy; {new Date().getFullYear()} SRE@Hyderabadi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;