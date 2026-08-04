import React from 'react';
import './AcademicsCards.css';

const AcademicsCards = () => {
    return (
        <React.Fragment>
            {/* ================= ACADEMICS SECTION ================= */}
            <div className="academics-section-container">
                <section className="academics-section">
                    <div className="academics-wrapper">

                        <div className="academics-left">
                            <div className="shape-bg"></div>
                            <div className="academics-content">
                                <div className="academics-tag">Academics</div>
                                <h2 className="academics-title">
                                    Shree Venkateshwara
                                    <span>ARTS AND SCIENCE</span>
                                    College
                                </h2>
                            </div>
                        </div>

                        <div className="academics-right">
                            <p className="academics-text">
                                SVASC College is one of the top-ranked arts and science colleges in Erode that focuses on practical learning and building critical thinking skills. We provide an inclusive and supportive environment where students from all backgrounds can succeed. Our strong emphasis on ethical values, leadership, and overall development prepares students for successful and meaningful careers. With a commitment to sustainability and community growth, SVASC offers a welcoming campus for your higher education journey.
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            {/* ================= CREATIVE CARDS SECTION ================= */}
            <div className="creative-cards-wrapper">
                <section className="creative-cards style-one">
                    <div className="container">
                        <div className="cc-row">

                            {/* Card 1 — Bharathiar University Affiliation */}
                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                                            <path d="M32 6L4 20l28 14 28-14L32 6z"/>
                                            <path d="M4 20v18"/>
                                            <path d="M12 24v14c0 5 8 10 20 10s20-5 20-10V24"/>
                                            <circle cx="4" cy="38" r="2" fill="#111" stroke="none"/>
                                            <path d="M4 40l2 6"/>
                                        </svg>
                                    </div>
                                    <h3><a href="/about">Bharathiar University Affiliated</a></h3>
                                    <p>Proudly affiliated to Bharathiar University, Coimbatore — one of Tamil Nadu's premier universities — ensuring nationally recognized degrees and strong academic credibility.</p>
                                    <a className="read-more-btn" href="/about"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                            {/* Card 2 — UGC 2(f) Recognition */}
                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                                            <rect x="8" y="8" width="48" height="36" rx="3"/>
                                            <path d="M20 44v8"/>
                                            <path d="M44 44v8"/>
                                            <path d="M14 52h36"/>
                                            <polyline points="22,24 28,30 42,18"/>
                                        </svg>
                                    </div>
                                    <h3><a href="/about">UGC Recognized u/s 2(f)</a></h3>
                                    <p>Recognized under Section 2(f) of the UGC Act, 1956 — affirming institutional credibility, eligibility for central government grants, and commitment to quality higher education standards.</p>
                                    <a className="read-more-btn" href="/about"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                            {/* Card 3 — Placement Support */}
                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                                            <rect x="8" y="22" width="48" height="34" rx="3"/>
                                            <path d="M22 22V16a10 10 0 0120 0v6"/>
                                            <line x1="32" y1="34" x2="32" y2="44"/>
                                            <line x1="27" y1="39" x2="37" y2="39"/>
                                        </svg>
                                    </div>
                                    <h3><a href="/placement">100% Placement Support</a></h3>
                                    <p>Our dedicated Placement Cell connects students with top industry recruiters through career guidance, mock interviews, skill development workshops, and strong corporate tie-ups.</p>
                                    <a className="read-more-btn" href="/placement"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>

    );
}

export default AcademicsCards;
