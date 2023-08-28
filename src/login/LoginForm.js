// LoginForm.js
import React from 'react';
import '../style/Akun.css';

const LoginForm = ({ onToggleForm }) => {
    return (
        <div className="login-form">
            {/* ... your login form content */}
            <p className="toggle-link" onClick={onToggleForm}>Belum punya akun? Daftar di sini</p>
        </div>
    );
};

export default LoginForm;
