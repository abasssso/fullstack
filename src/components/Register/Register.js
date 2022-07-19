
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert, Box } from "@mui/material";
import Back from "./back.jpeg";
import "./Register.css";




const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  console.log(loading);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Type in!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData, navigate);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div
      //   style={{ backgroundImage: `url(${Back})` }}
      className="register-container">
      <div className="container_register-form">
        <h1>Cycle</h1>
        <h2>Create An Account</h2>
        {error ? (
          <Box>
            {error.map((item, index) => (
              <Alert severity="error" key={item + index}>
                {item}
              </Alert>
            ))}
          </Box>
        ) : null}
        <p>
          Create an account to enjoy all the services without any ads for free!
        </p>
        <input
          className="register-form_inputs"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="name"
          type="text"
        />
        <input
          className="register-form_inputs"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          type="text"
        />
        <input
          className="register-form_inputs"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          type="text"
        />
        <input
          className="register-form_inputs"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          placeholder="confirm password"
          type="text"
        />


        <button className="register-btn" onClick={handleSave}>
          Create Account
        </button>
        <p>
          Already Have An Account?
          <p onClick={() => navigate("/login")}>Sign In</p>
        </p>
      </div>
    </div>
  );

};

export default Register;
