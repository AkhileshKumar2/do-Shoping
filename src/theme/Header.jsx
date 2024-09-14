import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

import "./Header.css"; // For styling

const Header = () => {
  return (
    <header className="header">
      {/* Left: Circle */}
      <div className="header-left">
        <div className="circle"></div>
      </div>

      {/* Center: Logo */}
      <div className="header-center">
        <h1>Logo</h1>
      </div>

      {/* Right: Icons and Language */}
      <div className="header-right">
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <FaShoppingBag className="icon" />
        <FaUser className="icon" />

        {/* Language Dropdown */}
        <div className="dropdown">
          <span>ENG</span>
          <span className="dropdown-arrow">▼</span>
          <ul className="dropdown-menu">
            <li>ENG</li>
            <li>ESP</li>
            <li>FRA</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
