import React from 'react';

const updates = [
    { category: 'Edukasi', title: 'Mengenali tanda awal hipertensi sebelum terlambat', text: 'Langkah sederhana untuk memantau tekanan darah dan menjaga kesehatan jantung.' },
    { category: 'Program', title: 'Pemeriksaan kesehatan keluarga', text: 'Paket pemeriksaan berkala untuk membantu keluarga tetap sehat dan aktif.' },
    { category: 'Kegiatan', title: 'Donor darah bersama PMI', text: 'Kegiatan rutin yang terbuka bagi masyarakat dan komunitas sekitar rumah sakit.' }
];

const NewsEvents = () => {
    return (
        <section className="section news-section" id="news">
            <div className="site-container">
                <div className="section-heading compact">
                    <div>
                        <span className="eyebrow">Informasi kesehatan</span>
                        <h2>Kabar dan edukasi terbaru.</h2>
                    </div>
                </div>
                <div className="news-grid">
                    {updates.map((item, index) => (
                        <article className={`news-card news-card-${index + 1}`} key={item.title}>
                            <span className="news-category">{item.category}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <span className="read-more">Baca informasi</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
