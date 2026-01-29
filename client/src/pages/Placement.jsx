import React from 'react';
import styles from './Placement.module.css';
import { ArrowRight, Users, TrendingUp, Mic2, MessageSquare, LineChart, Network, Bell, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Quote } from 'lucide-react';
import Hero from '../components/Common/Hero';
import LogoSpinning from './LogoSpinning';

const PlacementCell = () => {
    return (
        <div className={styles.placementApp}>
            {/* Hero Section */}
            <Hero
                title="Placement and Training Cell"
                description="At SVASC, we always believe in equipping our students with the right talent and personality to face the industry requirements. Our focus on placement centers is to create new approaches to attract the best from the industry to our campus."
                image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
            />
            <header className={styles.heroSection}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroBadge}>
                            <span className={styles.badgePulse}></span>
                            Placement and Training Cell
                        </div>
                        <h1 className={styles.heroTitle}>
                            About Placement Cell
                            <span className={styles.heroHighlight}>We Always Believe</span>
                            In Equipping Our Students With The Right Talent
                        </h1>
                        <p className={styles.heroDescription}>
                            At SVASC, we always believe in equipping our students with the right talent and personality to face the
                            industry requirements. Our focus on placement centers is to create new approaches to attract the best from the
                            industry to our campus At SVASC, Placement time is not a mere annual ritual; it is a time for showcasing the
                            very best among our young graduates to the industrial world. The Placement & Training Cell functions with the
                            primary aim of placing students in top-notch companies even before they have completed their courses.
                        </p>
                        <div className={styles.heroButtons}>
                            <a href="#events" className={`${styles.btn} ${styles.btnPrimary}`}>
                                Explore Our Events
                                <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className={`${styles.btn} ${styles.partner}`}>
                                Partner With Us
                            </a>
                        </div>
                    </div>

                    {/* Hero Visuals Grid */}
                    <div className={`${styles.heroVisuals} ${styles.delay200}`}>
                        <div className={styles.heroGridLeft}>
                            <div className={styles.heroImageLarge}>
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                                    alt="Medical Technology"
            />
                            </div>
                            <div className={styles.heroStatCard}>
                                <div className={styles.statIcon}>
                                    <Users size={20} />
                                </div>
                                <span className={styles.statLabel}>94% Placement</span>
                                <p className={styles.statDescription}>Exceptional Placement At SVASC</p>
                            </div>
                        </div>
                        <div className={styles.heroGridRight}>
                            <div className={`${styles.heroStatCard} ${styles.heroStatCardPrimary}`}>
                                <div className={styles.statIcon}>
                                    <TrendingUp size={20} />
                                </div>
                                <span className={styles.statLabel}>150+ Companies</span>
                                <p className={styles.statDescription}>Accelerating capital deployment</p>
                            </div>
                            <div className={styles.heroImageLarge}>
                                <img
                                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600"
                                    alt="Conference Panel"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <h2 className={styles.sectionTitle}>Why SVASC training Stand over</h2>
                    <p className={styles.aboutMainText}>
                        SVASC Training stands over others by delivering
                        <span className={styles.textHighlight}>Industry-focused, practical, and career-oriented learning</span>
                        that goes beyond textbooks. Our programs are designed to equip students with real-world skills through hands-on
                        training, live projects, and expert-led sessions aligned with current industry demands.
                    </p>
                    <div className={styles.divider}></div>
                    <p className={styles.aboutSecondaryText}>
                        With experienced trainers, personalized mentorship, and strong placement support, SVASC ensures every student is
                        confident, job-ready, and future-focused. This commitment to quality training and student success makes SVASC a
                        trusted choice for professional excellence.
                    </p>
                </div>
            </section>

            {/* Value Proposition */}
            <section id="services" className={styles.servicesSection}>
                <div className={styles.servicesContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Placement Training</h2>
                        <p className={styles.sectionSubtitle}>Career services offered.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Card 1 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardIcon}>
                                <Mic2 size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Career Planning & Development</h3>
                            <p className={styles.cardDescription}>
                                We prepare students with technical expertise and soft skills to meet industry standards. Career planning
                                sessions help them set goals and build well-rounded personalities.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardIcon}>
                                <MessageSquare size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Placement</h3>
                            <p className={styles.cardDescription}>
                                Our placement efforts at SVASC are designed to align students' talents with industry needs. Placement time
                                is not just an annual event; it's an opportunity to showcase our students' abilities to leading companies.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardIcon}>
                                <LineChart size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Corporate Relations</h3>
                            <p className={styles.cardDescription}>
                                SVASC fosters strong relationships with the corporate world to bridge the gap between academia and industry.
                                Through numerous partnerships and collaborations, we create opportunities for students.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className={styles.serviceCard}>
                            <div className={styles.cardIcon}>
                                <Network size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Corporate Training</h3>
                            <p className={styles.cardDescription}>
                                SVASC collaborates with industry experts to conduct impactful corporate training programs. With over 200+
                                MoUs signed with leading companies, we provide training on soft skills, life skills, and technical knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
<LogoSpinning />
            {/* Featured Events */}
            <section id="events" className={styles.eventsSection}>
                <div className={styles.eventsContainer}>
                    <div className={styles.eventsHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>Training & Placement Cell</h2>
                            <p className={styles.sectionSubtitle}>Empowering Students for the Future of Work.</p>
                        </div>
                        <a href="#" className={styles.viewAllLink}>
                            View All Events
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className={styles.eventsGrid}>
                        {/* Event 1 */}
                        <article className={styles.eventCard}>
                            <div className={styles.eventImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=600"
                                    alt="Lagos Health Summit"
                                />
                                <span className={styles.eventBadge}>LAGOS</span>
                            </div>
                            <div className={styles.eventContent}>
                                <h3 className={styles.eventTitle}>Lagos Health Summit</h3>
                                <p className={styles.eventDescription}>
                                    A premier healthcare event focused on innovation, policy reform, and system strengthening.
                                </p>
                                <a href="#" className={styles.eventLink}>Event Details</a>
                            </div>
                        </article>

                        {/* Event 2 */}
                        <article className={styles.eventCard}>
                            <div className={styles.eventImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
                                    alt="Nigeria Healthcare Investment Forum"
                                />
                                <span className={styles.eventBadge}>ABUJA</span>
                            </div>
                            <div className={styles.eventContent}>
                                <h3 className={styles.eventTitle}>Healthcare Investment Forum</h3>
                                <p className={styles.eventDescription}>
                                    Connecting investors and healthcare businesses shaping the future of health financing.
                                </p>
                                <a href="#" className={styles.eventLink}>Event Details</a>
                            </div>
                        </article>

                        {/* Event 3 */}
                        <article className={styles.eventCard}>
                            <div className={styles.eventImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                                    alt="UK-Nigeria Health-Tech Fest"
                                />
                                <span className={styles.eventBadge}>LONDON / LAGOS</span>
                            </div>
                            <div className={styles.eventContent}>
                                <h3 className={styles.eventTitle}>UK-Nigeria Health-Tech Fest</h3>
                                <p className={styles.eventDescription}>
                                    Cross-border platform advancing health-tech innovation, trade, and investment.
                                </p>
                                <a href="#" className={styles.eventLink}>Event Details</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Calendar Section */}
            <section className={styles.calendarSection}>
                <div className={styles.calendarContainer}>
                    <div className={styles.calendarHeader}>
                        <h2 className={styles.sectionTitle}>2026 Event Calendar</h2>
                        <p className={styles.sectionSubtitle}>Stay informed on upcoming summits, forums, and sector convenings.</p>
                    </div>

                    <div className={styles.calendarTimeline}>
                        {/* Item 1 */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>Q1 2026</div>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Lagos Health Summit</h4>
                                <p className={styles.timelineSubtitle}>Innovation & Policy Dialogue</p>
                                <p className={styles.timelineDescription}>Bringing together key stakeholders to set the agenda for the year.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>Q2 2026</div>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Nigeria Healthcare Investment Forum</h4>
                                <p className={styles.timelineSubtitle}>Investment & Market Access</p>
                                <p className={styles.timelineDescription}>Connecting capital with high-impact healthcare opportunities.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>Q3 2026</div>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>UK-Nigeria Health-Tech Fest</h4>
                                <p className={styles.timelineSubtitle}>Cross-Border Health-Tech Showcase</p>
                                <p className={styles.timelineDescription}>Showcasing the latest technologies bridging the gap between markets.</p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>Q4 2026</div>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4 className={styles.timelineTitle}>Special Convenings</h4>
                                <p className={styles.timelineSubtitle}>Partner Events & Roundtables</p>
                                <p className={styles.timelineDescription}>Targeted discussions on emerging trends and year-end strategic reviews.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.calendarCta}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>
                            <Bell size={18} />
                            Subscribe for Updates
                        </button>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className={styles.impactSection}>
                <div className={styles.impactContainer}>
                    <div className={styles.impactContent}>
                        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Placement highlights and opportunities</h2>
                        <p className={styles.impactDescription}>
                            SVASC takes pride in its strong placement ecosystem that connects talented students with the world's leading
                            companies. Through industry-driven training, continuous skill development, and career-focused mentoring, our
                            students are prepared to meet global professional standards and excel in competitive environments
                        </p>
                        <div className={styles.impactDivider}></div>
                        <div className={styles.impactHighlight}>
                            <div className={styles.highlightDot}></div>
                            <p>The World's Leading Company Hire Our Talent</p>
                        </div>
                    </div>

                    <div className={styles.impactStats}>
                        <div className={styles.statBox}>
                            <p className={styles.statNumber}>200+</p>
                            <p className={styles.statText}>Companies for Internship</p>
                        </div>
                        <div className={styles.statBox}>
                            <p className={`${styles.statNumber} ${styles.statNumberHighlight}`}>250+</p>
                            <p className={styles.statText}>Memorandum of Understanding</p>
                        </div>
                        <div className={styles.statBox}>
                            <p className={styles.statNumber}>300+</p>
                            <p className={styles.statText}>Number of offer letters issued as of 2024</p>
                        </div>
                        <div className={styles.statBox}>
                            <p className={`${styles.statNumber} ${styles.statNumberHighlight}`}>24LPA</p>
                            <p className={styles.statText}>LPA Highest Package</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className={styles.partnersSection}>
                <div className={styles.partnersContainer}>
                    <h3 className={styles.partnersTitle}>Organizations We Work With</h3>
                    <div className={styles.partnersGrid}>
                        <div className={styles.partnerLogo}>PARTNER LOGO</div>
                        <div className={styles.partnerLogo}>HEALTH CORP</div>
                        <div className={styles.partnerLogo}>INVEST GRP</div>
                        <div className={styles.partnerLogo}>GOV AGENCY</div>
                        <div className={styles.partnerLogo}>TECH INNOV</div>
                    </div>
                </div>
            </section>

            {/* Blog / Insights */}
            <section id="insights" className={styles.insightsSection}>
                <div className={styles.insightsContainer}>
                    <div className={styles.insightsHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>
                                Our Expert Trainers
                                <p>Our training partners and inhouse experts include</p>
                            </h2>
                        </div>
                        <a href="#" className={styles.readMoreLink}>
                            Read More Insights
                        </a>
                    </div>

                    <div className={styles.blogGrid}>
                        {/* Blog 1 */}
                        <a href="#" className={styles.blogCard}>
                            <div className={styles.blogImage}>
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                    alt="Health Tech"
                                />
                            </div>
                            <div className={styles.blogMeta}>
                                <span className={styles.blogCategory}>Analysis</span>
                                <span className={styles.blogSeparator}>•</span>
                                <span className={styles.blogReadTime}>5 min read</span>
                            </div>
                            <h3 className={styles.blogTitle}>Investment Outlook for Health-Tech in West Africa</h3>
                            <p className={styles.blogExcerpt}>
                                Analyzing the trends driving capital into digital health solutions across the region.
                            </p>
                        </a>

                        {/* Blog 2 */}
                        <a href="#" className={styles.blogCard}>
                            <div className={styles.blogImage}>
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                                    alt="Workforce"
                                />
                            </div>
                            <div className={styles.blogMeta}>
                                <span className={styles.blogCategory}>Report</span>
                                <span className={styles.blogSeparator}>•</span>
                                <span className={styles.blogReadTime}>4 min read</span>
                            </div>
                            <h3 className={styles.blogTitle}>Workforce Innovation and the Future of Health Delivery</h3>
                            <p className={styles.blogExcerpt}>
                                Strategies to retain talent and upskill healthcare workers in emerging markets.
                            </p>
                        </a>

                        {/* Blog 3 */}
                        <a href="#" className={styles.blogCard}>
                            <div className={styles.blogImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
                                    alt="PPP"
                                />
                            </div>
                            <div className={styles.blogMeta}>
                                <span className={styles.blogCategory}>Policy</span>
                                <span className={styles.blogSeparator}>•</span>
                                <span className={styles.blogReadTime}>6 min read</span>
                            </div>
                            <h3 className={styles.blogTitle}>Public-Private Partnerships in the Nigerian Health Sector</h3>
                            <p className={styles.blogExcerpt}>
                                How collaborative models are bridging the infrastructure gap effectively.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className={styles.testimonialSection}>
                <div className={styles.testimonialContainer}>
                    <Quote size={48} className={styles.quoteIcon} />
                    <blockquote className={styles.testimonialText}>
                        " Industry-Ready Students with certifications in AR/VR, Cybersecurity, Hotel Simulation Placement Support with
                        mock interviews, aptitude training, company-specific coaching Naan Mudhalvan Skill Partner – Certified under
                        Tamil Nadu Government's flagship programme 94%+ Placement Record in multiple departments Global Exposure –
                        International recruiters from the USA and UAE "
                    </blockquote>
                    <div className={styles.testimonialAuthor}>Why Recruiters Choose SVASC ?</div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contactSection}>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactCard}>
                        <div className={styles.contactBackground}></div>
                        <div className={styles.contactContent}>
                            <div className={styles.contactLeft}>
                                <h2 className={styles.contactTitle}>Partner With Us</h2>
                                <p className={styles.contactDescription}>
                                    Let's explore opportunities to collaborate, co-host events, support projects, or sponsor initiatives shaping Africa's
                                    healthcare future.
                                </p>
                                <div className={styles.contactButtons}>
                                    <button className={`${styles.btn} ${styles.btnWhite}`}>Collaborate with HCA</button>
                                    <button className={`${styles.btn} ${styles.btnSecondary}`}>Sponsor an Event</button>
                                    <button className={`${styles.btn} ${styles.btnOutline}`}>Join Mailing List</button>
                                </div>
                            </div>

                            <div className={styles.contactInfoCard}>
                                <h4 className={styles.contactInfoTitle}>Contact Information</h4>
                                <div className={styles.contactDetails}>
                                    <div className={styles.contactItem}>
                                        <Mail size={18} />
                                        <a href="mailto:info@hcaconsults.com">info@hcaconsults.com</a>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <Phone size={18} />
                                        <span>+234 (0) 123 456 7890</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <MapPin size={18} />
                                        <span>Lagos, Nigeria</span>
                                    </div>
                                </div>
                                <div className={styles.socialLinks}>
                                    <a href="#" className={styles.socialIcon}>
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="#" className={styles.socialIcon}>
                                        <Twitter size={18} />
                                    </a>
                                    <a href="#" className={styles.socialIcon}>
                                        <Instagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlacementCell;