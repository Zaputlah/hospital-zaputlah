import React, { useState } from 'react';
import "./style/Akun.css";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa'; // Impor ikon-ikon
import 'bootstrap/dist/css/bootstrap.min.css';

const Akun = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Lakukan validasi
        if (username === 'admin' && password === 'admin') {
            if (showLogin) {
                // Redirect to the dashboard page for admin
                window.location.href = '/dashboard/superadmin';
            }
        } else if (username === 'dokter' && password === 'dokter') {
            if (showLogin) {
                // Redirect to the superadmin page for superadmin
                window.location.href = '/dashboard/dokter';
            }
        } else if (username === 'pasien' && password === 'pasien') {
            if (showLogin) {
                // Redirect to the superadmin page for superadmin
                window.location.href = '/dashboard/pasien';
            }
        } else {
            // Menampilkan pesan error jika username dan password tidak valid
            alert('Username or password is incorrect');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Lakukan validasi dan proses registrasi
    };

    const toggleView = () => {
        setShowLogin(!showLogin);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className='bg-akun'>
            <h2 className='judul'>{showLogin ? 'Login' : 'Register'}</h2>
            <form className='form-login' onSubmit={showLogin ? handleLogin : handleRegister}>
                <div className="icon-input">
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        className="form-control"
                        placeholder={showLogin ? 'Username' : 'Full Name'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="password-input">
                    <FaLock className="input-icon" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {showLogin && ( // Hanya tampilkan ikon mata jika sedang login
                        <span className="password-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    )}
                </div>
                {showLogin ? null : (
                    <div className="icon-input">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{showLogin ? 'Login' : 'Register'}</button>
            </form>
            <p className='login-register'>
                {showLogin
                    ? "Don't have an account? "
                    : 'Already have an account? '}
                <a href="#" onClick={toggleView}>
                    {showLogin ? 'Register' : 'Login'}
                </a>
            </p>
        </div>
    );
};

export default Akun;
