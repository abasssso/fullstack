import { Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className="login">
      <Container className="login-container">
        <h1>Cycle</h1>
        <h2>Login</h2>
        <div>{error ? alert(error) : null}</div>
        <div className="login-container_inputs">
          <input
            placeholder="Email Address"
            // fullWidth
            // label="Email Address"
            // style={{ background: "white" }}
            className="login-inputs"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />
          <input
            placeholder="Password"
            // opacity="50%"
            // label="Password"
            // fullWidth
            // style={{ background: "white" }}
            className="login-inputs"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <button onClick={handleSave}>Sign In</button>
          <p>Forgot password?</p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
