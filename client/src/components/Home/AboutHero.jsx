import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="section-hero">
            <div className="hero">
                <h1 className="heading-primary">
                    <span className="welcome">Welcome to</span>
                    <span className="college-name">SVASC</span>
                </h1>
                <div className="hero-text-box">
                    <p className="hero-description">
                        Shree Venkateshwara Arts and Science (Co-Education) College (SVASC) is an institution for achievers, located in the serene surroundings of Othakuthirai, near Gobichettipalayam. Founded in 2019 by the Shree Venkateshwara Educational and Charitable Trust, the institution is committed to providing quality education and fostering academic excellence, holistic development, and the empowerment of young minds.
                        We strive to create an inspiring, inclusive, and supportive learning environment where students can discover their potential, develop essential skills, nurture their talents, and prepare confidently for a successful future.
                    </p>
                    <a href="#" className="btn btn--outline">Learn more ↓</a>
                </div>
                <div className="hero-img-box">
                    <img
                        src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png"
                        alt="Campus Life"
                        className="hero-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
