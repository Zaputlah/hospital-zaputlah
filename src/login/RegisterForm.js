// RegisterForm.js
import React from 'react';
import '../style/Akun.css';

const RegisterForm = ({ onToggleForm }) => {
    return (
        <div className="register-form">
            {/* ... your register form content */}
            <p className="toggle-link" onClick={onToggleForm}>Sudah punya akun? Masuk di sini</p>
        </div>
    );
};

export default RegisterForm;
