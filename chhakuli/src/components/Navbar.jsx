import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyApp</div>

      {/* Hamburger for mobile */}
      <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Nav Links */}
      <ul
        style={{
          ...styles.navLinks,
          ...(menuOpen ? styles.navLinksOpen : {}),
        }}
      >
        <li>
          <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: "60px",
    backgroundColor: "#1e1e2e",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#7c3aed",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "24px",
    margin: 0,
    padding: 0,
  },
  navLinksOpen: {
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    backgroundColor: "#1e1e2e",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "16px 0",
    display: "flex",
  },
  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",
  },
  hamburger: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    display: "block", // Show hamburger by default
  },
};
