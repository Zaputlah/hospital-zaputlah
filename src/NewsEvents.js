import React from 'react';
import "./style/newsEvents.css"

const NewsEvents = () => {
    return (
        <section className="news-events" id='news'>
            <h2 className="section-title">Berita & Acara Terbaru</h2>
            <div className="news-list">
                <div className="news-item">
                    <h3>Webinar Kesehatan Minggu Ini</h3>
                    <p>Rumah Sakit zaputlah mengadakan webinar kesehatan tentang pola makan sehat.</p>
                    <span className="date">15 Agustus 2023</span>
                </div>
                <div className="news-item">
                    <h3>Penghargaan Kualitas Pelayanan</h3>
                    <p>Rumah Sakit zaputlah meraih penghargaan kualitas pelayanan terbaik.</p>
                    <span className="date">10 Agustus 2023</span>
                </div>
                <div className="news-item">
                    <h3>Donor Darah Massal</h3>
                    <p>Rumah Sakit zaputlah bekerja sama dengan PMI mengadakan donor darah massal.</p>
                    <span className="date">5 Agustus 2023</span>
                </div>
                {/* Tambahkan berita dan acara lainnya sesuai kebutuhan */}
            </div>
        </section>
    );
};

export default NewsEvents;
