import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation'; // We are using custom navigation buttons

import './InfoCardSlider.css';

const slidesData = [
    {
        id: 1,
        title: 'Wonder Woman',
        subtitle: 'Powerful Women',
        content: "Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere.",
        imgClass: 'sl-img-1'
    },
    {
        id: 2,
        title: 'General Leia Organa',
        subtitle: 'Powerful Women',
        content: "Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time.",
        imgClass: 'sl-img-2'
    },
    {
        id: 3,
        title: 'Lara Croft',
        subtitle: 'Powerful Women',
        content: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures.",
        imgClass: 'sl-img-3'
    },
    {
        id: 4,
        title: 'Lara Croft',
        subtitle: 'Powerful Women',
        content: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures.",
        imgClass: 'sl-img-3'
    }
];

const InfoCardSlider = () => {
    // State to track which card is currently "revealed" (showing full details)
    const [revealedCardId, setRevealedCardId] = useState(null);
    const swiperRef = useRef(null);

    const handleRevealClick = (id) => {
        setRevealedCardId(prev => (prev === id ? null : id));
    };

    const handleSlideChange = () => {
        // Close any revealed card when sliding
        if (revealedCardId !== null) {
            setRevealedCardId(null);
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="main-wrapper info-card-slider-wrapper">
            <div className="sl-main-container">

                {/* Header Section */}
                <div className="sl-header-wrapper">
                    <h4>SVASC ALUMNI</h4>
                    <h3>
                        Their<br />
                        Journey,<br />
                        Their<br />
                        Story
                    </h3>
                    <p>
                        Far from being damsels in distress, these warrior women are often the ones doing the rescuing,
                        and kicking butt in the process.
                    </p>

                    {/* Navigation Buttons */}
                    <div className="sl-nav">

                        <div className="sl-prev-btn" onClick={handlePrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="prevBtn" data-name="Layer 1" viewBox="0 0 65 65">
                                <style>{`
                  #prevBtn { fill: #ffd700; }
                `}</style>
                                <path d="M0 32.5A32.5 32.5 0 1 0 32.5 0 32.5 32.5 0 0 0 0 32.5zm3 0A29.5 29.5 0 1 1 32.5 62 29.53 29.53 0 0 1 3 32.5zm32.6-12.9L22.7 32.5l12.9 12.9 2.12-2.12L26.94 32.5l10.78-10.78z" />
                            </svg>
                        </div>
                        <div className="sl-next-btn" onClick={handleNext}>
                            <svg id="nextBtn" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65">
                                <style>{`
                  #nextBtn { fill: #ffd700; }
                `}</style>
                                <path d="M32.5 0A32.5 32.5 0 1 0 65 32.5 32.5 32.5 0 0 0 32.5 0zm0 62A29.5 29.5 0 1 1 62 32.5 29.53 29.53 0 0 1 32.5 62zm-5.22-40.28L38.06 32.5 27.28 43.28l2.12 2.12 12.9-12.9-12.9-12.9z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="sl-wrapper">
                    <Swiper
                        className="swiper-container"
                        modules={[Navigation]}
                        ref={swiperRef}
                        slidesPerView={2.7}
                        centeredSlides={false} // Default false, overrides in breakpoints if needed
                        spaceBetween={0} // Default logic from jQuery seemed to rely on CSS or defaults
                        onSlideChange={handleSlideChange}
                        breakpoints={{
                            1440: { slidesPerView: 2.6, centeredSlides: false }, // Desktop: Left align
                            1024: { slidesPerView: 1.45, centeredSlides: false }, // Desktop: Left align
                            1023: { slidesPerView: 2, centeredSlides: true }, // Tablet: Center
                            768: { slidesPerView: 2, centeredSlides: true },
                            568: { slidesPerView: 1.5, spaceBetween: 10, centeredSlides: true },
                            320: { slidesPerView: 1.09, spaceBetween: 3, centeredSlides: true }
                        }}
                    >
                        {slidesData.map((slide) => {
                            const isRevealed = revealedCardId === slide.id;

                            return (
                                <SwiperSlide key={slide.id} className="swiper-slide sl--slide">
                                    <div className="slide-cover"></div>
                                    <div className="sl-card-wrapper">
                                        <div className="sl-gradient"></div>
                                        <div className={`sl-bkg-img ${slide.imgClass}`}></div>

                                        {/* Content Wrapper */}
                                        <div className={`sl--content-wrapper ${isRevealed ? 'sl--content-wrapper-active' : 'sl--content-wrapper-inactive'}`}>
                                            <div className={`sl--content-container ${isRevealed ? 'sl--card-reveal' : 'sl--card-hide'}`}>
                                                <p className="sl--sub-text">{slide.subtitle}</p>
                                                <h2>{slide.title}</h2>
                                                <p className="sl--card-content">{slide.content}</p>
                                                <div className="sl--link">LINK</div>
                                            </div>

                                            {/* Reveal Toggle Button */}
                                            <div className="sl--card-nav-container">
                                                <div
                                                    className="sl--content-btn content-reveal-btn"
                                                    onClick={() => handleRevealClick(slide.id)}
                                                >
                                                    <svg
                                                        className={`card-nav-gfx ${isRevealed ? 'sl--close-card-info' : 'sl--show-card-info'}`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 113.63 113.63"
                                                    >
                                                        <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default InfoCardSlider;
