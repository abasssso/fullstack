import "./Header.css";
import "./media.css";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="navbar-container">
        <MenuIcon
          className="navbar-container_burger"
          style={{ display: "none" }}
        />
        <div className="navbar-container_logo">
          <h1 onClick={() => navigate("/home")}>Cycle</h1>
        </div>
        <div className="navbar-right">
          <p onClick={() => navigate("/products")}>Bicycles</p>
          <p onClick={() => navigate("/insurance")}>Insurance</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
          <PersonIcon onClick={() => navigate("/login")} />
          <ShoppingCartIcon onClick={() => navigate("/cart")} />
        </div>
      </div>
    </div>
  );
};

export default Header;
