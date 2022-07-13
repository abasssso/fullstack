import "./Header.css";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="navbar-container">
        <p className="logo" onClick={() => navigate("/home")}>
          Bikraft
        </p>
        <div className="navbar-right">
          <p onClick={() => navigate("/products")}>Bicycles</p>
          <p onClick={() => navigate("/insurance")}>Insurance</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
          <PersonIcon onClick={() => navigate("/account")} />
        </div>
      </div>
    </div>
  );
};

export default Header;
