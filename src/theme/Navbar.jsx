import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
      <ul className={`nav-list ${isOpen ? "show" : ""}`}>
        <li className="nav-item">
          <a href="#shop">Shop</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#stories">Stories</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
