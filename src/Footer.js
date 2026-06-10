import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-container footer-grid">
                <div className="footer-brand">
                    <div className="brand brand-footer">
                        <img src={logo} alt="" />
                        <span><strong>Zaputlah</strong><small>Hospital</small></span>
                    </div>
                    <p>Merawat dengan keahlian, mendampingi dengan kepedulian.</p>
                </div>
                <div className="footer-column">
                    <h3>Layanan</h3>
                    <span>Poliklinik spesialis</span>
                    <span>Rawat inap</span>
                    <span>Laboratorium</span>
                    <span>Instalasi gawat darurat</span>
                </div>
                <div className="footer-column">
                    <h3>Kontak</h3>
                    <span><FontAwesomeIcon icon={faPhone} /> (021) 555-0119</span>
                    <span><FontAwesomeIcon icon={faEnvelope} /> halo@zaputlahhospital.id</span>
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Jakarta, Indonesia</span>
                </div>
            </div>
            <div className="site-container footer-bottom">
                <p>&copy; 2026 Zaputlah Hospital. Seluruh hak dilindungi.</p>
                <div><span>Kebijakan privasi</span><span>Syarat layanan</span></div>
            </div>
        </footer>
    );
};

export default Footer;
