import React, {useContext, useState} from 'react';
import {authContext} from "../../Contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const {handleRegister,error,loading} =useContext(authContext);
    console.log(loading)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    function handleSave() {
        if  (!email.trim() || !password.trim() || !passwordConfirm.trim()){
            alert("Type in!")
        }else{
            let formData = new FormData();
            formData.append("email",email);
            formData.append("password",password);
            formData.append("passwordConfirm",passwordConfirm);
            handleRegister(formData,navigate);
        }
    }
    if (loading) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <div>Register</div>
            {error ? (
                <div>{error.map((item,index) => (
                    alert(item)
                ))}</div>
            ) : null}

            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
                type="text"/>
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                type="text"/>
                <input
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                placeholder="confirm password"
                type="text"/>
                <button onClick={handleSave}>Register</button>
        </div>
    );
};

export default Register;
