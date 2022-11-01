import React, { useState } from 'react';

// components
import InputField from "../components/_common/InputField";
import Button from "../components/_common/Button";

// third party
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        fullname: '',
        username: '',
        email: '',
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
        <div className="section-container signup-container">
            <div className="signup-block">
                <div className="form-container">
                    <div className="header">Sign Up</div>
                    <InputField 
                        label="Full Name"
                        value={data.fullname}
                        onChange={(e) => handleForm('fullname', e.target.value)}
                        validationMessage={validations.fullname || ''}
                    />
                    <InputField 
                        label="Username"
                        value={data.username}
                        onChange={(e) => handleForm('username', e.target.value)}
                        validationMessage={validations.username || ''}
                    />
                    <InputField 
                        label="Email"
                        value={data.email}
                        onChange={(e) => handleForm('email', e.target.value)}
                        validationMessage={validations.email || ''}
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
                        Sign Up
                    </Button>
                    <div className="sign-up">Already have an account? <Link to="/login">Log In</Link></div>
                </div>
                <div className="stock-img">
                    <img src="/stock/signup2.png" alt="" />
                </div>
            </div>
        </div>
    );
}
export default Login;