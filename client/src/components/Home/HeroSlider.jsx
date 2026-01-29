import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle'; // Import all swiper styles
import './HeroSlider.css';

// Custom Icons as components or strings
const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const pauseSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5h-4z"/></svg>`;

const HeroSlider = () => {
    const sliderRef = useRef(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        if (!sliderRef.current || !paginationRef.current) return;

        let swiperInstance;
        let rafId;
        let startTime;
        let isPlaying = true;
        let progress = 0;
        const duration = 15000;

        // --- Helper Functions ---

        const updateLoader = (index, percent) => {
            if (!paginationRef.current) return;
            const bullets = paginationRef.current.querySelectorAll('.swiper-pagination-bullet');
            const bullet = bullets[index];
            const percentage = bullet?.querySelector('.percentage');
            if (percentage) {
                percentage.style.setProperty('--p', `${percent}%`);
            }
        };

        const loop = (now) => {
            if (!isPlaying) return;
            if (!startTime) startTime = now;
            const elapsed = now - startTime;
            progress = Math.min((elapsed / duration) * 100, 100);

            if (swiperInstance) {
                updateLoader(swiperInstance.realIndex, Math.round(progress));
            }

            if (progress >= 100) {
                swiperInstance.slideNext();
                progress = 0;
                startTime = performance.now();
            }
            rafId = requestAnimationFrame(loop);
        };

        const startCustomAutoplay = () => {
            startTime = performance.now();
            loop(startTime); // Start loop
        };

        const pauseAutoplay = () => {
            isPlaying = false;
            cancelAnimationFrame(rafId);
        };

        const resumeAutoplay = () => {
            isPlaying = true;
            startTime = performance.now() - (progress / 100) * duration;
            loop(performance.now());
        };

        const resetLoaders = () => {
            if (!paginationRef.current) return;
            const bullets = paginationRef.current.querySelectorAll('.swiper-pagination-bullet');

            bullets.forEach((bullet) => {
                const isActive = bullet.classList.contains('swiper-pagination-bullet-active');
                const index = bullet.dataset.index;

                if (isActive) {
                    bullet.innerHTML = `
            <div class="bullet-content">
              <button class="icon playpause-btn">${isPlaying ? pauseSVG : playSVG}</button>
              <div class="percentage" style="--p: ${progress}%"><div class="number">${Number(index) + 1}</div></div>
            </div>
          `;
                    setTimeout(() => {
                        const pct = bullet.querySelector('.percentage');
                        if (pct) pct.classList.add('show');
                    }, 100);

                    const btn = bullet.querySelector('.playpause-btn');
                    if (btn) {
                        btn.onclick = (e) => {
                            e.stopPropagation(); // prevent bubble
                            if (isPlaying) {
                                pauseAutoplay();
                                btn.innerHTML = playSVG;
                            } else {
                                resumeAutoplay();
                                btn.innerHTML = pauseSVG;
                            }
                        };
                    }
                } else {
                    bullet.innerHTML = `<span class="number">${Number(index) + 1}</span>`;
                }
            });
        };

        // --- Init Swiper ---

        swiperInstance = new Swiper(sliderRef.current, {
            modules: [EffectFade, Pagination, Autoplay],
            effect: 'fade',
            speed: 1000,
            loop: true,
            fadeEffect: { crossFade: true },
            pagination: {
                el: paginationRef.current,
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}" data-index="${index}"><span class="number">${index + 1}</span></span>`;
                }
            },
            on: {
                init() {
                    startCustomAutoplay();
                    resetLoaders();
                },
                slideChangeTransitionStart() {
                    progress = 0;
                    startTime = performance.now();
                    resetLoaders();
                },
                slideChangeTransitionEnd() {
                    // Video playback rate speed adjustment
                    const slides = swiperInstance.slides;
                    slides.forEach((slide) => {
                        const video = slide.querySelector('video');
                        if (video) {
                            video.playbackRate = slide.classList.contains('swiper-slide-active') ? 0.5 : 1.0;
                        }
                    });
                }
            }
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
                    {/* Slide 1 */}
                    <div className="swiper-slide">
                        <div className="item">
                            <div className="video">
                                <video autoPlay loop muted playsInline>
                                    <source src="./College Dron.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="parent-text">
                                <div className="info-text">
                                    <h2>Welcome to SVGI <br />Group of Institutions</h2>
                                    <p>Transforming knowledge into real-world impact, Shree Vengadeshwara empowers you with skills for a thriving career. Your future-ready education starts here..</p>
                                    <a href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="swiper-slide">
                        <div className="item">
                            <picture>
                                <img src="./WhatsApp Image 2025-07-31 at 17.54.07_0eeece1f.jpg" alt="Skill-Focused" />
                            </picture>
                            <div className="parent-text">
                                <div className="info-text">
                                    <h2>Skill-Focused & Actionable</h2>
                                    <p>"Beyond the classroom, into your career. We bridge theory with practice, ensuring you gain the essential skills employers demand."</p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="swiper-slide">
                        <div className="item">
                            <picture>
                                <img src="./sky clg.jpg" alt="Pedagogy" />
                            </picture>
                            <div className="parent-text">
                                <div className="info-text align-left">
                                    <h2>"Pedagogy" The method and practice of teaching</h2>
                                    <p>A place for higher learning, sometimes part of a university.</p>
                                    <a href="#">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="swiper-slide">
                        <div className="item">
                            <video autoPlay loop muted playsInline>
                                <source src="https://videos.pexels.com/video-files/5495781/5495781-uhd_2560_1080_30fps.mp4" type="video/mp4" />
                            </video>
                            <div className="parent-text">
                                <div className="info-text align-left">
                                    <h2>Beach Video</h2>
                                    <p>Another video slide slowed down.</p>
                                    <a href="#">Dive In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagination Container */}
                <div className="swiper-pagination" ref={paginationRef}></div>
            </div>
        </div>
    );
};

export default HeroSlider;
