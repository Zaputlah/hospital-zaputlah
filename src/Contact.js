import React from 'react';
import "./style/contact.css"

const Contact = () => {
    return (
        <section id='contact' className="contact">
            <h2 className="section-title">Hubungi Kami</h2>
            <div className="contact-form">
                <h3>Formulir Kontak</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <input type="text" id="name" name="name" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Pesan</label>
                        <textarea id="message" name="message" rows="4" autoComplete="off"></textarea>
                    </div>
                    <button type="submit">Kirim</button>
                </form>
            </div>
            <div className="contact-map">
                <h3>Lokasi</h3>
                <iframe
                    title="Lokasi Rumah Sakit"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.473660507611!2d106.82131711532494!3d-6.200395062089706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee64689f66f7%3A0x3b0ae567052d6821!2sContoh%20Hospital!5e0!3m2!1sen!2sid!4v1661763412263!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
