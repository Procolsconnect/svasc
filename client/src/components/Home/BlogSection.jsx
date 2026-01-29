import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BlogSection.css';

const BlogSection = () => {
    return (
        <section className="blog-section-wrapper">
            {/* Decorative Background */}
            <div className="blog-background">
                {/* Using a lighter, texture-like image or gradient for performance */}
                <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Background Texture" loading="lazy" />
            </div>

            <div className="blog-content-container">
                {/* Header */}
                <div className="blog-header">
                    <h2>
                        SVASC <br />
                        <span>Insightful Blogs</span>
                    </h2>
                    <a href="#">View All Stories</a>
                </div>

                {/* Slider */}
                <div className="news-slider">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        loopedSlides={5} /* Added to ensure smooth looping since we have 5 slides */
                        speed={800} /* Smoother transition speed */
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100, /* Added depth for 3D effect */
                            modifier: 2.5,
                            slideShadows: false, /* Disabled shadows for performance */
                        }}
                        pagination={{
                            el: '.news-slider__pagination',
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        spaceBetween={30} /* Explicit space between slides */
                        className="swiper-container"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide className="news-slider__item">
                            <div className="news__item">
                                <div className="news-date">
                                    <span className="news-date__title">24</span>
                                    <span>May</span>
                                </div>
                                <div className="news__title">Campus Life & Student Growth</div>
                                <p className="news__txt">Insights into student achievements, campus culture, and the vibrant academic excellence that defines us.</p>
                                <div className="news__img">
                                    <img src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Campus Life" loading="lazy" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide className="news-slider__item">
                            <div className="news__item">
                                <div className="news-date">
                                    <span className="news-date__title">25</span>
                                    <span>May</span>
                                </div>
                                <div className="news__title">Innovative Learning</div>
                                <p className="news__txt">Exploring modern teaching methods and technology that are shaping the future of education at SVASC.</p>
                                <div className="news__img">
                                    <img src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Innovation" loading="lazy" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide className="news-slider__item">
                            <div className="news__item">
                                <div className="news-date">
                                    <span className="news-date__title">26</span>
                                    <span>May</span>
                                </div>
                                <div className="news__title">Student Activities</div>
                                <p className="news__txt">From cultural fests to leadership camps, see how we encourage creativity and teamwork on campus.</p>
                                <div className="news__img">
                                    <img src="https://images.pexels.com/photos/5212336/pexels-photo-5212336.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Activities" loading="lazy" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide className="news-slider__item">
                            <div className="news__item">
                                <div className="news-date">
                                    <span className="news-date__title">27</span>
                                    <span>May</span>
                                </div>
                                <div className="news__title">Career Pathways</div>
                                <p className="news__txt">Expert guidance on internships, placements, and building a strong professional portfolio for the future.</p>
                                <div className="news__img">
                                    <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Career" loading="lazy" />
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide className="news-slider__item">
                            <div className="news__item">
                                <div className="news-date">
                                    <span className="news-date__title">28</span>
                                    <span>May</span>
                                </div>
                                <div className="news__title">Alumni Success</div>
                                <p className="news__txt">Celebrating the remarkable journeys of our graduations who are making waves in their industries.</p>
                                <div className="news__img">
                                    <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Alumni" loading="lazy" />
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                    <div className="news-slider__pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
