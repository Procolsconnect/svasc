import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ title, description, image, animateTitle = true }) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        if (!animateTitle) {
            setTypedText(title);
            return;
        }

        let i = 0;
        const text = title || '';

        const typeWriter = () => {
            if (i < text.length) {
                setTypedText(text.substring(0, i + 1));
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        typeWriter();
    }, [title, animateTitle]);

    return (
        <div className="svasc-common-hero" style={{ backgroundImage: `url(${image})` }}>
            <div className="svasc-common-hero-overlay"></div>
            <div className="svasc-common-hero-content">
                <h1 className="svasc-common-hero-title">
                    <span className="svasc-common-gold-text">{typedText}</span>
                    {animateTitle && <span className="svasc-common-cursor"></span>}
                </h1>
                {description && <p className="svasc-common-hero-description">{description}</p>}
            </div>
        </div>
    );
};

export default Hero;
