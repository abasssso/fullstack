import "./Header.css";
import "./media.css";
import React, { useContext, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { authContext } from "../../Contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  const { currentUser, checkAuth, loading, handleLogout } =
    useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }

    return (
        <div>
            {currentUser ? (<div className="container">
                <div className="navbar-container">
                    <MenuIcon
                        className="navbar-container_burger"
                        style={{display: "none"}}
                    />
                    <div className="navbar-container_logo">
                        <h1 onClick={() => navigate("/")}>Cycle</h1>
                    </div>
                    <div className="navbar-right">
                        <p onClick={() => navigate("/products")}>Bicycles</p>
                        <p onClick={() => navigate("/insurance")}>Insurance</p>
                        <p onClick={() => navigate("/contact")}>Contact</p>
                        <PersonIcon/>
                        <div>
                            <p>{currentUser}</p>
                        </div>
                        <button className="logout-btn" onClick={() => handleLogout(navigate)}>Logout
                        </button>
                        <ShoppingCartIcon onClick={() => navigate("/cart")}/>
                    </div>
                </div>
            </div>) : (<div className="container">
                <div className="navbar-container">
                    <MenuIcon
                        className="navbar-container_burger"
                        style={{display: "none"}}
                    />
                    <div className="navbar-container_logo">
                        <h1 onClick={() => navigate("/")}>Cycle</h1>
                    </div>
                    <div className="navbar-right">
                        <p onClick={() => navigate("/login/products")}>Bicycles</p>
                        <p onClick={() => navigate("/insurance")}>Insurance</p>
                        <p onClick={() => navigate("/contact")}>Contact</p>
                        <PersonIcon onClick={() => navigate("/register")}/>
                        <ShoppingCartIcon onClick={() => navigate("/cart")}/>
                    </div>
                </div>
            </div>)}

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
