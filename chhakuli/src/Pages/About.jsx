//About.jsx
import "./Pages.css";

export default function About() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="badge">About Us</span>
        <h1>Who we <span className="highlight">are</span></h1>
        <p>We're a team of passionate developers building tools that make life easier.</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Started in 2024, we set out to create clean, fast, and user-friendly web applications. We believe great software should be both powerful and beautiful.</p>
          <p>Our focus is on modern React development, clean architecture, and delivering real value to users.</p>
        </div>
        <div className="stats-grid">
          {[
            { number: "10+", label: "Projects Built" },
            { number: "500+", label: "Users Served" },
            { number: "99%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map(({ number, label }) => (
            <div className="stat-card" key={label}>
              <span className="stat-number">{number}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}