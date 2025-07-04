import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" header  ">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-6 d-flex align-items-center">
          <h2 className="mb-0 Magath">Magath Cleaning Solutions</h2>
        </div>

        {/* Desktop Nav */}
        <div className="col-6 d-none d-md-block   nav-menu">
          <nav>
            <ul className="nav-list d-flex flex-row justify-content-end align-items-center gap-4 list-unstyled m-0 p-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Toggle Button */}
        <div className="col-6 d-md-none text-end">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Side Menu */}
      <div className={`mobile-side-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>
          ✕
        </button>
        <ul className="nav-list">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
