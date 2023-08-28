import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faTwitter, faInstagram, faBootstrap, faCss3, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SiFirebase } from 'react-icons/si';
import "./style/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-grid">
                <div className="contact-section">
                    <h3>Kontak dan Lokasi</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>Jl. Contoh No. 123, Kota Contoh, Indonesia</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+62 123 4567 890</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>info@rumahsakit.com</p>
                        </div>
                    </div>
                </div>
                <div className="operational-hours">
                    <h3>Jam Operasional</h3>
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 08:00 - 12:00</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Rumah Sakit zaputlah. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
