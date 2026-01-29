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

                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <img src="https://i.ibb.co/fV0GzDqj/construction.png" alt="icon" />
                                    </div>
                                    <h3><a href="#">Core Planning</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.</p>
                                    <a className="read-more-btn" href="#"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <img src="https://i.ibb.co/KjGz3dmZ/skyline.png" alt="icon" />
                                    </div>
                                    <h3><a href="#">Traditional Designs</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.</p>
                                    <a className="read-more-btn" href="#"><i className="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>

                            <div className="card-column">
                                <div className="card-details">
                                    <div className="card-icons">
                                        <img src="https://i.ibb.co/whkhVgQz/best-practice.png" alt="icon" />
                                    </div>
                                    <h3><a href="#">Quality Materials</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.</p>
                                    <a className="read-more-btn" href="#"><i className="fa-solid fa-angles-right"></i></a>
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
