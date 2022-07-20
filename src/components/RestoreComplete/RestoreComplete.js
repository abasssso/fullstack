import React, { useContext, useState } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const RestoreComplete = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [activate, setActivate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { restoreComplete } = useContext(authContext);
  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Type in!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("activation_code", activate);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      restoreComplete(formData, navigate);
    }
  }
  return (
    <div>
      Now! Check your Email for activation code.
      <div>
        <input
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
        />
        <input
          placeholder="activation_code"
          value={activate}
          onChange={e => setActivate(e.target.value)}
          type="text"
        />
        <input
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="text"
        />
        <input
          placeholder="confirm password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          type="text"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};
export default RestoreComplete;
