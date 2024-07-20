import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li onClick={() => navigate("/employee-info")}>Employee Info</li>
          <li onClick={() => navigate("/core-capabilities")}>
            Core Capabilities
          </li>
          <li onClick={() => navigate("/competency-tracking")}>
            Competency Tracking
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
