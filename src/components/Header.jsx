import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>+512-522-1798</span>
            <span>VVPRODUCTIONSATX@gmail.com</span>
          </div>

          <div className="topbar-right">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="nav">
        <div className="nav-inner">
          <div className="logo">
            <img src="/images/vibe-logo.png" alt="Vibe Vision Productions" />
          </div>

          {/* Desktop Menu */}
          <nav className="menu">
            <a href="#">CORPORATE EVENTS</a>
            <a href="#">SOCIAL EVENTS</a>
            <a href="#">WEDDINGS</a>
          </nav>

          {/* Hamburger (MOBILE ONLY) */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#">CORPORATE EVENTS</a>
        <a href="#">SOCIAL EVENTS</a>
        <a href="#">WEDDINGS</a>

        <div className="mobile-divider"></div>

        <span>+512-522-1798</span>
        <span>VVPRODUCTIONSATX@gmail.com</span>

        <div className="mobile-socials">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </header>
  );
}
