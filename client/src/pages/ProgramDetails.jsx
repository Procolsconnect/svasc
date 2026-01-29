import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { programDetailsData } from '../data/programDetailsData';
import styles from './ProgramDetails.module.css';
import { ChevronRight, MessageSquare, ChevronsRight } from 'lucide-react';

const ProgramDetails = () => {
    const { id } = useParams();
    const program = programDetailsData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!program) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.notFound}>
                        <h1>Program Not Found</h1>
                        <Link to="/programms" className={styles.backButton}>Back to Programs</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            {/* HERO SECTION */}
            <header className={styles.hero} style={{ backgroundImage: `url(${program.heroImage})` }}>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>
                        <h1>{program.title}</h1>
                        <div className={styles.breadcrumbs}>
                            <Link to="/">Home</Link> <ChevronRight size={14} />
                            <Link to="/programms">Programmes</Link> <ChevronRight size={14} />
                            <span>{program.title}</span>
                        </div>
                    </div>
                </div>
                {/* TICKER */}
                <div className={styles.ticker}>
                    <div className={styles.tickerContent}>
                        <span>Admissions Open for {new Date().getFullYear() + 1} - {new Date().getFullYear() + 2}</span>
                        <span>•</span>
                        <span>Apply Online Today!</span>
                        <span>•</span>
                        <span>Latest results announced</span>
                    </div>
                </div>
            </header>

            <div className={styles.mainContent}>
                {/* ABOUT SECTION (Card Style) */}
                <section className={styles.aboutWrapper}>
                    <div className={styles.container}>
                        <div className={styles.aboutCard}>
                            <div className={styles.aboutGrid}>
                                <div className={styles.aboutText}>
                                    <p>{program.about}</p>
                                    <button className={styles.distinctivenessBtn}>
                                        Distinctiveness <ChevronsRight size={18} />
                                    </button>
                                </div>
                                <div className={styles.aboutImage}>
                                    <img src={program.aboutImage} alt="Program Intro" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VISION & MISSION */}
                <section className={styles.visionMissionSection}>
                    <div className={styles.container}>
                        <div className={styles.gridTwo}>
                            <div className={styles.vmCard}>
                                <h2>Vision</h2>
                                <p>{program.vision}</p>
                            </div>
                            <div className={styles.vmCard}>
                                <h2>Mission</h2>
                                <p>{program.mission}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FACILITIES SECTION (Split Color) */}
                {program.facilities && (
                    <section className={styles.facilitiesSection}>
                        <div className={styles.facilitiesFlex}>
                            <div className={styles.facilitiesContent}>
                                <h2>Department Facilities</h2>
                                <ul className={styles.facilitiesList}>
                                    {program.facilities.map((item, idx) => (
                                        <li key={idx}>
                                            <ChevronsRight className={styles.doubleArrow} size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.facilitiesImage}>
                                <img src={program.facilitiesImage} alt="Facilities" />
                            </div>
                        </div>
                    </section>
                )}

                {/* CAREER OPPORTUNITIES */}
                <section className={styles.careerSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Career Opportunities</h2>
                        <div className={styles.careerGrid}>
                            {program.careerOpportunities.map((career, idx) => (
                                <div key={idx} className={styles.careerBox}>
                                    {career.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <div className={styles.faqFlex}>
                            <div className={styles.faqLeftImage}>
                                <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=800" alt="FAQ Illustration" />
                            </div>
                            <div className={styles.faqRight}>
                                <h2>FAQ</h2>
                                <div className={styles.faqList}>
                                    {program.faqs.map((faq, index) => (
                                        <details key={index} className={styles.faqItem}>
                                            <summary>
                                                {faq.question}
                                                <MessageSquare size={18} className={styles.faqIcon} />
                                            </summary>
                                            <div className={styles.faqAnswer}>{faq.answer}</div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* STICKY ADMISSION SIDEBAR */}
            <div className={styles.admissionSticky}>
                Admission Enquiry <span></span>
            </div>
        </div>
    );
};

export default ProgramDetails;
