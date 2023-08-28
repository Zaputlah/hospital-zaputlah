// Akun.js
import React, { useState } from 'react';
import './style/Akun.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Akun = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [formAnimation, setFormAnimation] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State untuk menampilkan atau menyembunyikan password

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleToggleForm = () => {
        if (isLogin) {
            setFormAnimation('slide-left');
        } else {
            setFormAnimation('slide-right');
        }

        setTimeout(() => {
            setIsLogin(!isLogin);
            setFormAnimation('');
        }, 300);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginOrRegister = () => {
        // Handle login or register logic here
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">List akses yang bisa masuk</Popover.Header>
            <Popover.Body>
                Note: Menu login ini blm berfungsi
                {/* Username & password = SuperAdmin
                Username & password = Dokter
                Username & password = Perawat
                Username & password = Apoteker */}

            </Popover.Body>
        </Popover>
    );

    return (
        <div className={`login-menu ${formAnimation}`}>
            <h2>{isLogin ? 'Login to Your Account' : 'Create an Account'}</h2>
            <div className="input-container">
                <FaUser className="input-icon" />
                <input
                    type="text"
                    placeholder={isLogin ? 'Username' : 'Full Name'}
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            {!isLogin && (
                <div className="input-container">
                    <FaUser className="input-icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
            )}
            <div className="input-container">
                <FaLock className="input-icon" />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <span className="password-icon" onClick={handleTogglePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            <button className="login-button" onClick={handleLoginOrRegister}>
                {isLogin ? 'Login' : 'Register'}
            </button>
            <p className={`form-toggle ${isLogin ? 'zoom-in' : 'zoom-out'}`}>
                {isLogin
                    ? "Don't have an account? "
                    : 'Already have an account? '}
                <span onClick={handleToggleForm} className="form-link">
                    {isLogin ? 'Register here' : 'Login here'}
                </span>
            </p>
            <div>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success">List akses masuk</Button>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Akun;
