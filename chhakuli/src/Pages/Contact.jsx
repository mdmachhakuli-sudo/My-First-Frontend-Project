//Contact.jsx
import { useState } from "react";
import "./Pages.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page">
      <div className="page-header">
        <span className="badge">Contact</span>
        <h1>Get in <span className="highlight">touch</span></h1>
        <p>Have a question or want to work together? We'd love to hear from you.</p>
      </div>

      <div className="contact-wrapper">
        {sent ? (
          <div className="success-msg">
            <span>✅</span>
            <h3>Message sent!</h3>
            <p>Thanks {form.name}, we'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="What's on your mind?"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", border: "none", cursor: "pointer" }}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}