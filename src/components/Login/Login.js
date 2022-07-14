import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {authContext} from "../../Contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate()
    const {handleLogin,error, setError} = useContext(authContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handleSave() {
        let formData = new FormData();
            formData.append("email",email)
            formData.append("password",password)
        handleLogin(formData,email,navigate);
    }

    useEffect(() => {
        setError(false);
    },[])

    return (
        <div>
            <div>Login</div>
            <div>
                {error ? alert(error) : null}
            </div>
            <div>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"/>
                    <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="text"/>
            </div>
            <div>
                <button onClick={handleSave}>Login</button>
            </div>
        </div>
    );
};

export default Login;
