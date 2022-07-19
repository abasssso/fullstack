import React, {useContext, useEffect, useState} from 'react';
import {authContext} from "../../Contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {Alert, Box} from "@mui/material";

const Register = () => {
    const {handleRegister, error, setError, loading} = useContext(authContext);
    console.log(loading)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    function handleSave() {
        if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
            alert("Type in!")
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
        <div>
            <div>Register</div>
            {error ? (
                <Box>
                    {error.map((item, index) => (
                        <Alert severity="error" key={item + index}>
                            {item}
                        </Alert>
                    ))}
                </Box>
            ) : null}

            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
                type="text"/>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="name"
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
            <div>
                You already have account? Try to <Link to="/login">Login</Link>
            </div>
        </div>

    );
};

export default Register;
