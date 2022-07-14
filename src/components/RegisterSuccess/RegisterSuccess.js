import React from 'react';
import {Link} from "react-router-dom";

const RegisterSuccess = () => {
    return (
        <div>
            <div>
                Your registration successful! You can <Link to="/login">login</Link>
            </div>
        </div>
    );
};

export default RegisterSuccess;
