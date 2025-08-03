import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styles

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
