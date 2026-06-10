import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="site-container contact-grid">
                <div className="contact-copy">
                    <span className="eyebrow">Hubungi kami</span>
                    <h2>Kami siap membantu kebutuhan kesehatan Anda.</h2>
                    <p>Hubungi tim kami untuk informasi jadwal dokter, layanan, atau pembuatan janji temu.</p>

                    <div className="contact-details">
                        <a href="tel:+62215550119"><FontAwesomeIcon icon={faPhone} /><span><small>Telepon</small>(021) 555-0119</span></a>
                        <a href="mailto:halo@zaputlahhospital.id"><FontAwesomeIcon icon={faEnvelope} /><span><small>Email</small>halo@zaputlahhospital.id</span></a>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /><span><small>Alamat</small>Jl. Sehat Bersama No. 19, Jakarta</span></div>
                        <div><FontAwesomeIcon icon={faClock} /><span><small>Poliklinik</small>Senin - Sabtu, 08.00 - 20.00</span></div>
                    </div>
                </div>

                <div className="appointment-card">
                    <div>
                        <span className="form-kicker">Janji temu</span>
                        <h3>Ceritakan kebutuhan Anda</h3>
                        <p>Tim kami akan menghubungi kembali untuk konfirmasi jadwal.</p>
                    </div>
                    <form onSubmit={(event) => event.preventDefault()}>
                        <div className="form-row">
                            <label htmlFor="name">Nama lengkap</label>
                            <input type="text" id="name" name="name" placeholder="Masukkan nama" autoComplete="name" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="phone">Nomor telepon</label>
                            <input type="tel" id="phone" name="phone" placeholder="08xx xxxx xxxx" autoComplete="tel" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="service-select">Layanan yang dibutuhkan</label>
                            <select id="service-select" name="service" defaultValue="">
                                <option value="" disabled>Pilih layanan</option>
                                <option>Poliklinik spesialis</option>
                                <option>Pemeriksaan kesehatan</option>
                                <option>Laboratorium</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                        <button className="button button-primary submit-button" type="submit">Kirim permintaan</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
