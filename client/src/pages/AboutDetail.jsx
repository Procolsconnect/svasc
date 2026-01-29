import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { CheckCircle, Layout, Users, BookOpen, Clock, Box, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './AboutDetail.module.css';
import Hero from '../components/Common/Hero';

const AboutDetail = () => {
    const [prevEl, setPrevEl] = React.useState(null);
    const [nextEl, setNextEl] = React.useState(null);

    const testimonials = [
        {
            text: "SVASC has provided me with the perfect platform to grow both academically and personally. The faculty is incredibly supportive and the infrastructure is top-notch.",
            name: "Rahul Kumar",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&h=128"
        },
        {
            text: "The industry-aligned curriculum and placement assistance helped me land a job at a top MNC. I'm grateful for the opportunities provided by the college.",
            name: "Priyanka Sharma",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128"
        },
        {
            text: "Participating in various clubs and fests at SVASC made my college life memorable. It's truly a place where passion meets purpose.",
            name: "Anish Varma",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=128&h=128"
        }
    ];

    const hiringPartners = [
        { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
        { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
        { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Cognizant_logo_2022.svg' },
        { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
        { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg' },
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Infosys_logo.svg' },
        { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/HCL_Technologies_logo.svg' },
        { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Accenture_logo.svg' },
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/IBM_logo.svg' },
        { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Capgemini_Logo.svg' },
    ];

    return (
        <div className={styles.aboutDetailContainer}>
            <Hero
                title="Why SVASC?"
                description="Located in ERODE, SVASC College of Arts and Science is a NAAC-accredited institution known for its industry-aligned programs and student-centric approach."
                image="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            />
            {/* ================= HERO SECTION ================= */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroImages}>
                            <div className={`${styles.imageWrapper} ${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
                                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=900&fit=crop" alt="Students studying" />
                            </div>
                            <div className={`${styles.imageWrapper} ${styles.fadeInUp}`} style={{ animationDelay: '0.3s' }}>
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Student working" />
                            </div>
                            <div className={`${styles.imageWrapper} ${styles.fadeInUp}`} style={{ animationDelay: '0.5s' }}>
                                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop" alt="Students collaborating" />
                            </div>
                        </div>

                        <div className={`${styles.heroText} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }}>
                            <h2>
                                <span>About Us</span>
                                More than a college, a launchpad for your dreams.
                            </h2>
                            <p>
                                SVASC - Located in ERODE, SVASC College of Arts and Science is a NAAC-accredited institution
                                known for its industry-aligned programs, modern infrastructure, and outcome-based education.
                                With a strong focus on placements, innovation, and global exposure, SVASC empowers students to
                                lead with confidence in their careers and beyond.
                            </p>
                            <button className={styles.ctaButton}>Call for Admissions</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY SVASC SECTION ================= */}
            <section className={styles.whySection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Why SVASC? Where your passion meets purpose</h2>

                    <div className={styles.cardsGrid}>
                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <CheckCircle />
                                </div>
                                <h3 className={styles.cardTitle}>NAAC Accreditation</h3>
                            </div>
                            <p className={styles.cardDescription}>Recognized for academic excellence and quality education standards.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }}>
                            <div className={styles.cardPercentage}>94%</div>
                            <h3 className={styles.cardTitle}>Placement Assistance</h3>
                            <p className={styles.cardDescription}>Graduates secure positions in top MNCs like Infosys, TCS, Wipro & Zoho.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.3s' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <Layout />
                                </div>
                                <h3 className={styles.cardTitle}>Modern Campus</h3>
                            </div>
                            <p className={styles.cardDescription}>Smart classrooms, hi-tech labs, seminar halls, Wi-Fi campus & digital library.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.4s' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <Users />
                                </div>
                                <h3 className={styles.cardTitle}>Industry-Driven</h3>
                            </div>
                            <p className={styles.cardDescription}>Courses designed to meet current industry requirements and future skills.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.5s' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <BookOpen />
                                </div>
                                <h3 className={styles.cardTitle}>Experienced Faculty</h3>
                            </div>
                            <p className={styles.cardDescription}>Ph.D. holders, industry professionals & student-focused mentors.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.6s' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <Box />
                                </div>
                                <h3 className={styles.cardTitle}>Skill Certifications</h3>
                            </div>
                            <p className={styles.cardDescription}>Value-added certifications in AI, Data Science, Python, Tally & more.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.7s' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <Clock />
                                </div>
                                <h3 className={styles.cardTitle}>Student-Centric</h3>
                            </div>
                            <p className={styles.cardDescription}>Personalized mentoring, clubs, fests, and hands-on projects.</p>
                        </div>

                        <div className={`${styles.infoCard} ${styles.fadeInUp}`} style={{ animationDelay: '0.8s' }}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>Ready to turn your passion into a profession</h3>
                            </div>
                            <button className={styles.ctaButton}>Get a Free Quote</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS SECTION ================= */}
            <div className={styles.curveMask}>
                <div className={styles.curveDown} id={styles.curve1}>
                    <section className={styles.curveContentWrap}>
                        <div className={styles.curveContent}>
                            <h1 className={styles.curveTitle}>Student Testimonials</h1>
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles.descSection}>
                <div className={styles.quoteCarousel}>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}" style="background-image: url(${testimonials[index].image})"></span>`;
                            }
                        }}
                        autoplay={{ delay: 5000 }}
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        loop={true}
                        className={styles.testimonialSwiper}
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i} className={styles.testimonialItem}>
                                <blockquote>
                                    <p>{t.text}</p>
                                    <small>{t.name}</small>
                                </blockquote>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Manual Navigation Buttons */}
                    <button ref={(node) => setPrevEl(node)} className={styles.prevBtn}>
                        <ChevronLeft />
                    </button>
                    <button ref={(node) => setNextEl(node)} className={styles.nextBtn}>
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* ================= STATISTICS SECTION ================= */}
            <div className={styles.curveMask}>
                <div className={styles.curveUp} id={styles.curve2}>
                    <section className={styles.curveContentWrap}>
                        <div className={styles.curveContent}>
                            <div className={styles.statsContainer}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>100%</div>
                                    <div className={styles.statLabel}>Placement Assistance</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>25 +</div>
                                    <div className={styles.statLabel}>Academic Programme</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>40 +</div>
                                    <div className={styles.statLabel}>Prestigious Awards</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>25 +</div>
                                    <div className={styles.statLabel}>Advanced Labs</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* ================= HIRING PARTNERS ================= */}
            <div className={styles.descSection}>
                <section className={styles.hiringSection}>
                    <h2>Our Prestigious Hiring Partners</h2>
                    <div className={styles.logoSlider}>
                        <div className={styles.logoTrack}>
                            {/* Original Set */}
                            {hiringPartners.map((partner, i) => (
                                <div key={i} className={styles.logo}>
                                    <img src={partner.logo} alt={partner.name} />
                                </div>
                            ))}
                            {/* Cloned Set for seamless loop */}
                            {hiringPartners.map((partner, i) => (
                                <div key={`clone-${i}`} className={styles.logo}>
                                    <img src={partner.logo} alt={partner.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* ================= PROGRAMS SECTION ================= */}
            <main className={styles.wrapper}>
                <section className={styles.programsSection}>
                    <ul className={styles.programsGrid}>
                        <li className={styles.programItem}>
                            <figure className={styles.programFigure}>
                                <img src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e" alt="Academics" />
                                <figcaption className={styles.programFigcaption}>
                                    <h3>Billions upon billions</h3>
                                </figcaption>
                            </figure>
                            <p className={styles.programText}>
                                Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon
                                billions Drake Equation brain is the seed of intelligence?
                            </p>
                            <button className={styles.programLink}>Visit Website</button>
                        </li>

                        <li className={styles.programItem}>
                            <figure className={styles.programFigure}>
                                <img src="https://images.unsplash.com/photo-1513309914637-65c20a5962e1" alt="Life at SVASC" />
                                <figcaption className={styles.programFigcaption}>
                                    <h3>Drake Equation</h3>
                                </figcaption>
                            </figure>
                            <p className={styles.programText}>
                                Another world citizens of distant epochs from which we spring descended from astronomers Orion's
                                sword shores of the cosmic ocean.
                            </p>
                            <button className={styles.programLink}>Visit Website</button>
                        </li>

                        <li className={styles.programItem}>
                            <figure className={styles.programFigure}>
                                <img src="https://images.unsplash.com/photo-1535359056830-d4badde79747" alt="Campus Arena" />
                                <figcaption className={styles.programFigcaption}>
                                    <h3>Vast cosmic arena</h3>
                                </figcaption>
                            </figure>
                            <p className={styles.programText}>
                                Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas
                                brain is the seed of intelligence.
                            </p>
                            <button className={styles.programLink}>Visit Website</button>
                        </li>
                    </ul>
                </section>

                <section className={styles.programsHero}>
                    <h1>Ready to start?</h1>
                    <article>
                        <p>
                            Explore our programs with just one click and join a community dedicated to your success and excellence.
                        </p>
                        <button className={styles.programLink}>Browse Programs</button>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default AboutDetail;
