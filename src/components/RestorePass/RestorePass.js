import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {authContext} from "../../Contexts/AuthContext";

const RestorePass = () => {
    const navigate = useNavigate();

    const {restorePass, error, setError} = useContext(authContext);

    const [email, setEmail] = useState("")

    function handleSave() {
        let formData = new FormData();
        formData.append("email", email);
        restorePass(formData, email, navigate);
        navigate("/restore-complete")
    }

    useEffect(() => {
        setError(false)
    },[])

    return (
        <div>
            <div>
                <div>{error ? alert(error) : null}</div>
                <input
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                />
            </div>
            <div>
                <button onClick={handleSave}>Send</button>
            </div>
        </div>
    );
};

export default RestorePass;
