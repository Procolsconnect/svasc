import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle'; // Import all swiper styles
import './HeroSlider.css';

// Custom Icons as components or strings
const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const pauseSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5h-4z"/></svg>`;

const heroSlides = [
    {
        type: 'video',
        src: './College Dron.mp4',
        title: 'Welcome to SVGI <br />Group of Institutions',
        description: 'Transforming knowledge into real-world impact, Shree Vengadeshwara empowers you with skills for a thriving career. Your future-ready education starts here..',
        link: '#',
        linkLabel: 'Explore'
    },
    {
        type: 'image',
        src: './WhatsApp Image 2025-07-31 at 17.54.07_0eeece1f.jpg',
        title: 'Skill-Focused & Actionable',
        description: '"Beyond the classroom, into your career. We bridge theory with practice, ensuring you gain the essential skills employers demand."',
        link: '#',
        linkLabel: 'Learn More'
    },
    {
        type: 'image',
        src: './sky clg.jpg',
        title: '"Pedagogy" The method and practice of teaching',
        description: 'A place for higher learning, sometimes part of a university.',
        link: '#',
        linkLabel: 'See More',
        alignLeft: true
    },
    {
        type: 'video',
        src: 'https://videos.pexels.com/video-files/5495781/5495781-uhd_2560_1080_30fps.mp4',
        title: 'Beach Video',
        description: 'Another video slide slowed down.',
        link: '#',
        linkLabel: 'Dive In',
        alignLeft: true
    }
];

const HeroSlider = () => {
    const sliderRef = useRef(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        let swiperInstance = null;
        let rafId = null;
        let lastTime = 0;
        const duration = 10000; // 10 seconds per slide

        const updateLoader = (index, percent) => {
            const paginationEl = paginationRef.current;
            if (!paginationEl) return;
            const bullets = paginationEl.querySelectorAll('.swiper-pagination-bullet');
            const bullet = bullets[index];
            const percentage = bullet?.querySelector('.percentage');
            if (percentage) {
                percentage.style.setProperty('--p', `${percent}%`);
            }
        };

        const loop = (now) => {
            if (!lastTime) lastTime = now;
            // Swiper's autoplay logic handles the timing, we just update the UI
            if (swiperInstance && swiperInstance.autoplay && !swiperInstance.autoplay.paused) {
                const elapsed = (duration - swiperInstance.autoplay.timeLeft);
                const progress = (elapsed / duration) * 100;
                updateLoader(swiperInstance.activeIndex, Math.round(progress));
            }
            rafId = requestAnimationFrame(loop);
        };

        const startCustomAutoplay = () => {
            rafId = requestAnimationFrame(loop);
        };

        const pauseAutoplay = () => {
            if (swiperInstance && swiperInstance.autoplay) swiperInstance.autoplay.pause();
        };

        const resumeAutoplay = () => {
            if (swiperInstance && swiperInstance.autoplay) swiperInstance.autoplay.resume();
        };

        const resetLoaders = (s) => {
            const swiper = s || swiperInstance;
            if (!swiper || !swiper.autoplay) return;

            const paginationEl = paginationRef.current;
            if (!paginationEl) return;

            const bullets = paginationEl.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach((bullet, idx) => {
                const isActive = bullet.classList.contains('swiper-pagination-bullet-active');

                if (isActive) {
                    bullet.innerHTML = `
                        <div class="bullet-content">
                            <button class="icon playpause-btn">${swiper.autoplay.paused ? playSVG : pauseSVG}</button>
                            <div class="percentage" style="--p: 0%"><div class="number">${idx + 1}</div></div>
                        </div>
                    `;

                    // Add "show" class after a small delay for animation
                    setTimeout(() => {
                        const pct = bullet.querySelector('.percentage');
                        if (pct) pct.classList.add('show');
                    }, 50);

                    const btn = bullet.querySelector('.playpause-btn');
                    if (btn) {
                        btn.onclick = (e) => {
                            e.stopPropagation();
                            if (swiper.autoplay.paused) {
                                resumeAutoplay();
                                btn.innerHTML = pauseSVG;
                            } else {
                                pauseAutoplay();
                                btn.innerHTML = playSVG;
                            }
                        };
                    }
                } else {
                    bullet.innerHTML = `<span class="number">${idx + 1}</span>`;
                }
            });
        };

        swiperInstance = new Swiper(sliderRef.current, {
            modules: [EffectFade, Pagination, Autoplay],
            effect: 'fade',
            speed: 1000,
            loop: true,
            autoplay: {
                delay: duration,
                disableOnInteraction: false,
            },
            pagination: {
                el: paginationRef.current,
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}"><span class="number">${index + 1}</span></span>`;
                },
            },
            on: {
                init: (s) => {
                    startCustomAutoplay();
                    resetLoaders(s);
                },
                slideChangeTransitionStart: (s) => {
                    resetLoaders(s);
                },
                slideChangeTransitionEnd: (s) => {
                    // Video playback rate speed adjustment
                    const slides = s.slides;
                    if (slides) {
                        slides.forEach((slide) => {
                            const video = slide.querySelector('video');
                            if (video) {
                                video.playbackRate = slide.classList.contains('swiper-slide-active') ? 0.5 : 1.0;
                            }
                        });
                    }
                    resetLoaders(s);
                },
            },
        });

        // Cleanup
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (swiperInstance) swiperInstance.destroy();
        };
    }, []);

    return (
        <div className="wrapper-slider">
            <div className="swiper main-slider" ref={sliderRef}>
                <div className="swiper-wrapper">
                    {heroSlides.map((slide, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="item">
                                {slide.type === 'video' ? (
                                    <div className="video">
                                        <video autoPlay loop muted playsInline>
                                            <source src={slide.src} type="video/mp4" />
                                        </video>
                                    </div>
                                ) : (
                                    <picture>
                                        <img src={slide.src} alt={slide.title} />
                                    </picture>
                                )}
                                <div className="parent-text">
                                    <div className={`info-text ${slide.alignLeft ? 'align-left' : ''}`}>
                                        <h2 dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
                                        <p>{slide.description}</p>
                                        <a href={slide.link}>{slide.linkLabel}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination Container */}
                <div className="swiper-pagination" ref={paginationRef}></div>
            </div>
        </div>
    );
};

export default HeroSlider;
