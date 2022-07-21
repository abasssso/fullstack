import React from 'react';
import {Link} from "react-router-dom";

const RegisterSuccess = () => {
    return (
        <div>
            <div>
                Your registration successful! Check your email to activate account
            </div>
            <div>Then try to <Link to="/login">login</Link></div>
        </div>
    );
};

export default RegisterSuccess;
