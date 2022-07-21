import "./Header.css";
import "./media.css";
import React, { useContext, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { authContext } from "../../Contexts/AuthContext";
import { Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
const Header = () => {
  const navigate = useNavigate();
  const { currentUser, checkAuth, loading, handleLogout } =
    useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {currentUser ? (
        <div className="container">
          <div className="navbar-container">
            <div class="hamburger-menu" style={{ display: "none" }}>
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul class="menu__box">
                <h1 style={{ marginBottom: "20px" }}>Cycle</h1>
                <li>
                  <p
                    className="menu_item"
                    onClick={() => navigate("/products")}>
                    Bicycles
                  </p>
                </li>
                <li>
                  <p
                    className="menu_item"
                    onClick={() => navigate("/insurance")}>
                    Insurance
                  </p>
                </li>
                <li>
                  <p className="menu_item" onClick={() => navigate("/contact")}>
                    Contact
                  </p>
                </li>
              </ul>
            </div>
            <div className="navbar-container_logo">
              <h1 onClick={() => navigate("/")}>Cycle</h1>
            </div>
            <div className="navbar-right">
              <p className="menu_item" onClick={() => navigate("/products")}>
                Bicycles
              </p>
              <p className="menu_item" onClick={() => navigate("/insurance")}>
                Insurance
              </p>
              <p className="menu_item" onClick={() => navigate("/contact")}>
                Contact
              </p>
              <div className="navbar-right_user">
                <PersonIcon />

                <p>{currentUser}</p>

                <Button
                  className="logout-btn"
                  onClick={() => handleLogout(navigate)}>
                  Logout
                </Button>
              </div>

              <ShoppingCartIcon onClick={() => navigate("/cart")} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="navbar-container">
            <MenuIcon
              className="navbar-container_burger"
              style={{ display: "none" }}
            />
            <div className="navbar-container_logo">
              <h1 onClick={() => navigate("/")}>Cycle</h1>
            </div>
            <div className="navbar-right">
              <p onClick={() => navigate("/login/products")}>Bicycles</p>
              <p onClick={() => navigate("/insurance")}>Insurance</p>
              <p onClick={() => navigate("/contact")}>Contact</p>
              <PersonIcon onClick={() => navigate("/register")} />
              <ShoppingCartIcon onClick={() => navigate("/cart")} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
