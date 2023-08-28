import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faStethoscope, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import "./style/appointments.css"

const Appointments = () => {
    return (
        <section className="appointments" id='appointments'>
            <h2 className="section-title">Dokter</h2>
            <div className="doctor-list">
                <div className="doctor">
                    <FontAwesomeIcon icon={faUserMd} size="3x" />
                    <h3>Dr. John Doe</h3>
                    <p>Spesialis Penyakit Dalam</p>
                </div>
                <div className="doctor">
                    <FontAwesomeIcon icon={faStethoscope} size="3x" />
                    <h3>Dr. Jane Smith</h3>
                    <p>Spesialis Bedah</p>
                </div>
                <div className="doctor">
                    <FontAwesomeIcon icon={faHeartbeat} size="3x" />
                    <h3>Dr. Michael Johnson</h3>
                    <p>Spesialis Jantung</p>
                </div>
                {/* Tambahkan dokter lainnya sesuai kebutuhan */}
            </div>
        </section>
    );
};

export default Appointments;
