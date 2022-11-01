import React, { useState } from 'react';

// components
import InputField from "../components/_common/InputField";
import Button from "../components/_common/Button";

// third party
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const [validations, setValidations] = useState({});

    const handleForm = (field, value) => {
        setData({
            ...data,
            [field]: value,
        });
    }

    const handleSubmit = () => {

    }

    return (
        <div className="section-container login-container">
            <div className="login-block">
                <div className="stock-img">
                    <img src="/stock/login2.png" alt="" />
                </div>
                <div className="form-container">
                    <div className="header">Login</div>
                    <InputField 
                        label="Username"
                        value={data.username}
                        onChange={(e) => handleForm('username', e.target.value)}
                        validationMessage={validations.username || ''}
                    />
                    <InputField 
                        label="Password"
                        type="password"
                        value={data.password}
                        onChange={(e) => handleForm('password', e.target.value)}
                        validationMessage={validations.password || ''}
                    />
                    <Button
                        handleOnClick={handleSubmit}
                    >
                        Login
                    </Button>
                    <div className="sign-up">Don't have an account? <Link to="/signup">Sign Up</Link></div>
                </div>
            </div>
        </div>
    );
}
export default Login;