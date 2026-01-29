import React, { useEffect, useState } from 'react';
import './AlumniSlider.css';

const AlumniSlider = () => {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        // Load fonts
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        // Load Swiper 3.4.2 CSS
        const swiperCss = document.createElement('link');
        swiperCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css';
        swiperCss.rel = 'stylesheet';
        document.head.appendChild(swiperCss);

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const existingScript = document.querySelector(`script[src="${src}"]`);
                if (existingScript) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        // Load jQuery then Swiper
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
            .then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.min.js"))
            .then(() => {
                setScriptsLoaded(true);
            })
            .catch(err => console.error("Failed to load slider scripts", err));
    }, []);

    useEffect(() => {
        if (!scriptsLoaded) return;

        // Execute the exact jQuery logic from the snippet
        if (window.$ && window.Swiper) {
            const $ = window.$;

            $(document).ready(function () {
                "use strict";

                // Initialize Swiper (using the selector inside our wrapper)
                // Note: We use .swiper-container inside #alumni-slider-root
                // Using exact params from snippet
                var mySwiper = new window.Swiper("#alumni-slider-root .swiper-container", {
                    nextButton: "#alumni-slider-root .swiper-button-next",
                    prevButton: "#alumni-slider-root .swiper-button-prev",
                    slidesPerView: 2.7,
                    centeredSlides: true,
                    breakpoints: {
                        1440: { slidesPerView: 2.6 },
                        1439: { slidesPerView: 1.45 },
                        1024: { slidesPerView: 1.45 },
                        1023: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        568: { slidesPerView: 1.5, spaceBetween: 10 },
                        414: { slidesPerView: 1.09, spaceBetween: 3 },
                        320: { slidesPerView: 1.09, spaceBetween: 3 }
                    }
                });

                // Scoped helper lookup to find elements ONLY within our root.
                // This is safer than $(selector) which might technically find other things,
                // but we must use the exact user class structure.
                var $root = $("#alumni-slider-root");

                // User code: var $revealCardContentBtn = $(".sl--card-nav-container");
                var $revealCardContentBtn = $root.find(".sl--card-nav-container");

                // User code: var $contentContainer = $(".sl-card-wrapper .sl--content-wrapper .sl--content-container");
                // We use a selector relative to the found slide, but we need the selector string for find() inside the handler
                var contentContainerSelector = ".sl-card-wrapper .sl--content-wrapper .sl--content-container";

                // User code: var $navGFX = $(".sl-card-wrapper .sl--content-wrapper .sl--card-nav-container .sl--content-btn .card-nav-gfx");
                var navGFXSelector = ".sl-card-wrapper .sl--content-wrapper .sl--card-nav-container .sl--content-btn .card-nav-gfx";

                // Unbind to prevent duplicate listeners if react re-runs this effect
                $revealCardContentBtn.off("click");

                $revealCardContentBtn.on("click", function () {
                    var parent = $(this).closest(".swiper-slide");

                    // User Code:
                    // parent.siblings().find($contentContainer).removeClass("sl--card-reveal").addClass("sl--card-hide");
                    // Note: find($contentContainer) in jQuery works if $contentContainer is an Object by matching elements.
                    // But here we use selector strings for clarity in our scoped context.
                    parent.siblings().find(contentContainerSelector).removeClass("sl--card-reveal").addClass("sl--card-hide");

                    // parent.find($contentContainer).toggleClass("sl--card-hide sl--card-reveal");
                    parent.find(contentContainerSelector).toggleClass("sl--card-hide sl--card-reveal");

                    // parent.siblings().find(".sl--content-wrapper").removeClass("sl--content-wrapper-active").addClass("sl--content-wrapper-inactive");
                    parent.siblings().find(".sl--content-wrapper").removeClass("sl--content-wrapper-active").addClass("sl--content-wrapper-inactive");

                    // parent.find(".sl--content-wrapper").toggleClass("sl--content-wrapper-inactive sl--content-wrapper-active");
                    parent.find(".sl--content-wrapper").toggleClass("sl--content-wrapper-inactive sl--content-wrapper-active");

                    // parent.siblings().find($navGFX).removeClass("sl--close-card-info").addClass("sl--show-card-info");
                    parent.siblings().find(navGFXSelector).removeClass("sl--close-card-info").addClass("sl--show-card-info");

                    // parent.find($navGFX).toggleClass("sl--show-card-info sl--close-card-info");
                    parent.find(navGFXSelector).toggleClass("sl--show-card-info sl--close-card-info");
                });

                mySwiper.on("onSlideChangeStart", function () {
                    // User Logic: if ($contentContainer.hasClass("sl--card-reveal")) { ... }
                    // We check if *any* inside our root is revealed to be safe
                    if ($root.find(".sl--card-reveal").length > 0) {
                        var $CI_ContentWrapper = $root.find(".sl--content-wrapper");

                        // $contentContainer.removeClass("sl--card-reveal").addClass("sl--card-hide");
                        $root.find(contentContainerSelector).removeClass("sl--card-reveal").addClass("sl--card-hide");

                        // $navGFX.removeClass("sl--close-card-info").addClass("sl--show-card-info");
                        $root.find(navGFXSelector).removeClass("sl--close-card-info").addClass("sl--show-card-info");

                        // $CI_ContentWrapper.removeClass("sl--content-wrapper-active").addClass("sl--content-wrapper-inactive");
                        $CI_ContentWrapper.removeClass("sl--content-wrapper-active").addClass("sl--content-wrapper-inactive");
                    }
                });
            });
        }
    }, [scriptsLoaded]);

    return (
        <div id="alumni-slider-root">
            <div className="main-wrapper">
                <div className="sl-main-container">
                    <div className="sl-header-wrapper">
                        <h4>SVASC ALUMNI</h4>

                        <h3>
                            Their<br />
                            Journey,
                            Their<br />
                            Story
                        </h3>

                        <p>
                            Far from being damsels in distress, these warrior women are often the ones doing the rescuing,
                            and kicking butt in the process.
                        </p>

                        <div className="sl-nav">
                            <div className="swiper-button-next">
                                <svg id="nextBtn" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65">
                                    <path d="M32.5 0A32.5 32.5 0 1 0 65 32.5 32.5 32.5 0 0 0 32.5 0zm0 62A29.5 29.5 0 1 1 62 32.5 29.53 29.53 0 0 1 32.5 62zm-5.22-40.28L38.06 32.5 27.28 43.28l2.12 2.12 12.9-12.9-12.9-12.9z" style={{ fill: '#ffd700' }} />
                                </svg>
                            </div>
                            <div className="swiper-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" id="prevBtn" data-name="Layer 1" viewBox="0 0 65 65">
                                    <path d="M0 32.5A32.5 32.5 0 1 0 32.5 0 32.5 32.5 0 0 0 0 32.5zm3 0A29.5 29.5 0 1 1 32.5 62 29.53 29.53 0 0 1 3 32.5zm32.6-12.9L22.7 32.5l12.9 12.9 2.12-2.12L26.94 32.5l10.78-10.78z" style={{ fill: '#ffd700' }} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="sl-wrapper">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* Slide 1 */}
                                <div className="swiper-slide sl--slide">
                                    <div className="slide-cover"></div>
                                    <div className="sl-card-wrapper">
                                        <div className="sl-gradient"></div>
                                        <div className="sl-img-1 sl-bkg-img"></div>
                                        <div className="sl--content-wrapper sl--content-wrapper-inactive">
                                            <div className="sl--content-container sl--card-hide">
                                                <p className="sl--sub-text">Powerful Women</p>
                                                <h2>Wonder Woman</h2>
                                                <p className="sl--card-content">Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere.</p>
                                                <div className="sl--link">LINK</div>
                                            </div>
                                            <div className="sl--card-nav-container">
                                                <div className="sl--content-btn content-reveal-btn">
                                                    <svg className="card-nav-gfx sl--show-card-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.63 113.63">
                                                        <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="swiper-slide">
                                    <div className="slide-cover"></div>
                                    <div className="sl-card-wrapper">
                                        <div className="sl-gradient"></div>
                                        <div className="sl-img-2 sl-bkg-img"></div>
                                        <div className="sl--content-wrapper sl--content-wrapper-inactive">
                                            <div className="sl--content-container sl--card-hide">
                                                <p className="sl--sub-text">Powerful Women</p>
                                                <h2>General Leia Organa</h2>
                                                <p className="sl--card-content">Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time.</p>
                                                <div className="sl--link">LINK</div>
                                            </div>
                                            <div className="sl--card-nav-container">
                                                <div className="sl--content-btn content-reveal-btn">
                                                    <svg className="card-nav-gfx sl--show-card-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.63 113.63">
                                                        <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 3 */}
                                <div className="swiper-slide">
                                    <div className="slide-cover"></div>
                                    <div className="sl-card-wrapper">
                                        <div className="sl-gradient"></div>
                                        <div className="sl-img-3 sl-bkg-img"></div>
                                        <div className="sl--content-wrapper sl--content-wrapper-inactive">
                                            <div className="sl--content-container sl--card-hide">
                                                <p className="sl--sub-text">Powerful Women</p>
                                                <h2>Lara Croft</h2>
                                                <p className="sl--card-content">This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures.</p>
                                                <div className="sl--link">LINK</div>
                                            </div>
                                            <div className="sl--card-nav-container">
                                                <div className="sl--content-btn content-reveal-btn">
                                                    <svg className="card-nav-gfx sl--show-card-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.63 113.63">
                                                        <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniSlider;
