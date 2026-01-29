import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="section-hero">
            <div className="hero">
                <div className="hero-text-box">
                    <h1 className="heading-primary">
                        <span className="welcome">Welcome to</span>
                        <span className="college-name">SVASC</span>
                    </h1>
                    <p className="hero-description">
                        Shree Venkateshwara Arts and Science (Co-Education) College is an institution
                        for achievers, located in a serene atmosphere at Othakuthirai, near
                        Gobichettipalayam. Founded in 2019 by Shree Venkateshwara Educational and
                        Charitable Trust, the college aims to educate students from rural
                        backgrounds by inculcating technical and innovative skills to meet the
                        demands of the present scenario.
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
