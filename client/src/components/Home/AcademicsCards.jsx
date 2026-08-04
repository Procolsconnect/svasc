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

                            {/* Card 1 — Skill-Focused Learning */}
                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                                            <circle cx="32" cy="20" r="10"/>
                                            <path d="M14 54c0-9.9 8.1-18 18-18s18 8.1 18 18"/>
                                            <path d="M44 10l4-4m0 0l4 4m-4-4v12"/>
                                            <path d="M28 20h8"/>
                                            <path d="M32 16v8"/>
                                        </svg>
                                    </div>
                                    <h3><a href="/academics">Skill-Focused Learning</a></h3>
                                    <p>Industry-aligned curriculum, hands-on training, and expert mentorship help students build real-world skills that make them job-ready from day one of graduation.</p>
                                    <a className="read-more-btn" href="/academics"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                            {/* Card 2 — Hi-Tech Laboratories */}
                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                                            <path d="M24 8v20L10 50a4 4 0 003.6 5.7h36.8A4 4 0 0054 50L40 28V8"/>
                                            <line x1="20" y1="8" x2="44" y2="8"/>
                                            <circle cx="26" cy="44" r="3" fill="#111" stroke="none"/>
                                            <circle cx="36" cy="38" r="2" fill="#111" stroke="none"/>
                                            <circle cx="40" cy="48" r="2" fill="#111" stroke="none"/>
                                        </svg>
                                    </div>
                                    <h3><a href="/facilities">Hi-Tech Laboratories</a></h3>
                                    <p>State-of-the-art computer labs, science labs, and a fully automated digital library give students access to the latest tools and technology for practical, research-driven education.</p>
                                    <a className="read-more-btn" href="/facilities"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                            {/* Card 3 — Campus Life & Placements */}
                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                                            <path d="M16 8h32l-6 18H22L16 8z"/>
                                            <path d="M22 26c0 5.5 4.5 10 10 10s10-4.5 10-10"/>
                                            <path d="M32 36v12"/>
                                            <path d="M20 48h24"/>
                                            <path d="M28 48l-4 8"/>
                                            <path d="M36 48l4 8"/>
                                        </svg>
                                    </div>
                                    <h3><a href="/placement">Vibrant Campus & Placements</a></h3>
                                    <p>A lively campus with sports, cultural clubs, and annual events — combined with a dedicated Placement Cell that actively connects students with top companies across Tamil Nadu and beyond.</p>
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
