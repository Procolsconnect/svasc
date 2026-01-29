import React from 'react';
import './CollegeAboutSection.css';

const CollegeAboutSection = () => {
    return (
        <section className="svasc-about-wrapper">
            <div className="container-fluid">

                <div className="svasc-about-flex">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">
                        <h2 className="svasc-about-heading">
                            Best UG College in Erode With<br />
                            Excellence in Education & Innovation
                        </h2>

                        <p className="svasc-about-description">
                            SVASC College of Arts and Science, an autonomous college in Erode is dedicated
                            to shaping future-ready professionals through academic excellence, industry-driven
                            curriculum, and global exposure. As one of the private arts and science college in
                            Coimbatore, we offer a dynamic learning environment that fosters innovation,
                            research, and skill development.
                        </p>

                        {/* FEATURE 1 */}
                        <div className="svasc-feature-box">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                            </svg>
                            <p>
                                The First College in Tamil Nadu to offer a Ph.D. programme in
                                Catering Science and AR & VR
                            </p>
                        </div>

                        {/* FEATURE 2 */}
                        <div className="svasc-feature-box">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5zm-7 20v-2a7 7 0 0114 0v2" />
                            </svg>
                            <p>
                                Top college of arts and science with Tech-driven learning with strong
                                industry ties for global careers. Best College Of Arts And Science Coimbatore
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg"
                            className="svasc-about-image"
                            alt="College Students" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CollegeAboutSection;
