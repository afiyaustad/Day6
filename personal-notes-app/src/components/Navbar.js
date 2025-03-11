// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "white" }}>
      <h2>Personal Notes</h2>
      <Link to="/add-note" style={{ color: "white", textDecoration: "none", background: "#007bff", padding: "0.5rem 1rem", borderRadius: "5px" }}>
        Add Note
      </Link>
    </nav>
  );
};

export default Navbar;
