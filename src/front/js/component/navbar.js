// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="nav nav-pills flex-column flex-sm-row justify-content-center">
        <div className="col-12 text-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Get Help Now</Link>
        </div>
      </nav>
    </div>
  );
};