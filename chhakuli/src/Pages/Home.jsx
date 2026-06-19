//Home.jsx
import "./Pages.css";

export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <span className="badge">Welcome 👋</span>
        <h1>Build something <span className="highlight">amazing</span></h1>
        <p>A modern React starter with clean design and smooth navigation. Start building your next big idea today.</p>
        <div className="btn-group">
          <a href="/about" className="btn-primary">Learn More</a>
          <a href="/contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className="cards">
        {[
          { icon: "⚡", title: "Fast", desc: "Built with Vite for lightning fast development and builds." },
          { icon: "🎨", title: "Beautiful", desc: "Clean UI with Poppins font and a modern dark palette." },
          { icon: "📱", title: "Responsive", desc: "Looks great on mobile, tablet, and desktop screens." },
        ].map(({ icon, title, desc }) => (
          <div className="card" key={title}>
            <div className="card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}