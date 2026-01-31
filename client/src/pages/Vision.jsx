import React, { useEffect, useRef } from 'react';
import styles from './Vision.module.css';

const Vision = () => {
    const contentRef = useRef(null);
    const blocksRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;

            blocksRef.current.forEach((block, i) => {
                if (!block) return;
                const rect = block.getBoundingClientRect();
                const contentNode = block.querySelector(`.${styles.itemParallaxContent}`);
                const imgNode = block.querySelector('img');

                // Calculate parallax value based on position relative to viewport
                const yPos = rect.top;

                // Only animate if somewhat visible to save resources
                if (yPos > -window.innerHeight && yPos < window.innerHeight * 2) {
                    if (contentNode) {
                        // Different speed for content
                        contentNode.style.transform = `translateY(${yPos * 0.5}px)`;
                    }
                    if (imgNode) {
                        // Different speed for image
                        imgNode.style.transform = `translateY(${yPos * 0.1}px)`;
                    }
                }
            });
        };

        // Add global scroll listener for the parallax effect if the page scrolls naturally
        // Or if we want to mimic the logic from the HTML which seemed to use a loop

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addToBlocks = (el) => {
        if (el && !blocksRef.current.includes(el)) {
            blocksRef.current.push(el);
        }
    };

    return (
        <div className={styles.visionPageWrapper}>
            <div className={styles.visionContent} ref={contentRef}>

                {/* 1. VISION LANDING */}
                <section className={`${styles.visionBlock} ${styles.sectionLanding}`} ref={addToBlocks}>
                    <figure className={styles.itemParallaxMedia}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/luca-bravo-189272.jpg" alt="Vision Background" />
                    </figure>
                    <div className={`${styles.itemParallaxContent} ${styles.flexContainer}`}>
                        <div className={`${styles.landingContent} ${styles.centeredContent}`}>
                            <h1 className={styles.headLarge}>VISION</h1>
                        </div>
                    </div>
                </section>

                {/* 2. VISION TEXT */}
                <section className={`${styles.visionBlock} ${styles.sectionIntro}`} ref={addToBlocks}>
                    <div className={`${styles.itemParallaxContent} ${styles.flexContainer}`}>
                        <div className={styles.centeredContent}>
                            <h2 className={`${styles.headSmall} ${styles.headCentered}`}>Our Aspiration</h2>
                            <p className={styles.copy}>
                                To emerge as a center of excellence in arts and science education by nurturing
                                intellectually competent, socially responsible, and ethically strong individuals.
                            </p>
                            <p className={styles.copy}>
                                Empowering students with knowledge, creativity, critical thinking,
                                and lifelong learning for global contribution.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. MISSION */}
                <section className={styles.visionBlock} ref={addToBlocks}>
                    <figure className={styles.itemParallaxMedia}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/roberta-sorge-138285.jpg" alt="Mission Background" />
                    </figure>
                    <div className={`${styles.itemParallaxContent} ${styles.flexContainer}`}>
                        <div className={styles.centeredContent}>
                            <h1 className={`${styles.headLarge} ${styles.headCentered}`}>MISSION</h1>
                            <p className={`${styles.copy} ${styles.missionText}`}>
                                Providing quality education through innovative teaching, experiential learning,
                                industry-aligned curriculum, and holistic student development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. CORE VALUES IMAGES */}
                <section className={styles.visionBlock} ref={addToBlocks}>
                    <div className={`${styles.itemParallaxContent} ${styles.flexContainer} ${styles.imgGrid}`}>

                        <figure className={`${styles.imgGridItem} ${styles.typeRight}`}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/andrew-branch-139678.jpg" alt="Integrity" />
                            <figcaption className={styles.imgCaption}>
                                <h2 className={styles.headSmall}>Integrity & Ethics</h2>
                                <p className={styles.captionText}>
                                    Commitment to honesty, moral values, accountability,
                                    and ethical conduct in all academic pursuits.
                                </p>
                            </figcaption>
                        </figure>

                        <figure className={`${styles.imgGridItem} ${styles.typeLeft}`}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/peter-hershey-112799.jpg" alt="Excellence" />
                            <figcaption className={styles.imgCaption}>
                                <h2 className={styles.headSmall}>Excellence & Inclusion</h2>
                                <p className={styles.captionText}>
                                    Fostering innovation, inclusivity, research culture,
                                    social responsibility, and academic excellence.
                                </p>
                            </figcaption>
                        </figure>

                    </div>
                </section>

                {/* 5. END SECTION */}
                <section className={`${styles.visionBlock} ${styles.sectionEnd}`} ref={addToBlocks}>
                    <figure className={styles.itemParallaxMedia}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/noah-silliman-141979.jpg" alt="Values Background" />
                    </figure>
                    <div className={`${styles.itemParallaxContent} ${styles.flexContainer}`}>
                        <div className={`${styles.landingContent} ${styles.centeredContent}`}>
                            <h1 className={styles.headLarge}>SVASC <br /> Core Values</h1>
                        </div>
                    </div>
                </section>

                {/* 6. DETAILED CORE VALUES */}
                <section className={styles.coreSection}>
                    <div className={styles.smallHeading}>Our Core Values</div>
                    <div className={styles.mainHeading}>Core Values & Beliefs</div>

                    <div className={styles.valuesWrapper}>
                        <div className={styles.valueCircle}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M22 10L12 5 2 10l10 5 10-5z" />
                                    <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                                </svg>
                            </div>
                            <p>Academic<br />Excellence</p>
                        </div>

                        <div className={styles.valueCircle}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M4 4h16v16H6.5A2.5 2.5 0 0 0 4 22z" />
                                </svg>
                            </div>
                            <p>Access to Education<br />in Rural Areas</p>
                        </div>

                        <div className={styles.valueCircle}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2C7 6 5 9 5 13a7 7 0 0 0 14 0c0-4-2-7-7-11z" />
                                </svg>
                            </div>
                            <p>Environmental<br />Sustainability</p>
                        </div>

                        <div className={styles.valueCircle}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                                    <path d="M6 22v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <p>Inclusiveness, Service<br />and Empathy</p>
                        </div>

                        <div className={styles.valueCircle}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3" />
                                    <path d="M8 11c-1.7 0-3-1.3-3-3s1.3-3 3-3" />
                                    <path d="M12 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
                                </svg>
                            </div>
                            <p>Social<br />Responsibility</p>
                        </div>

                        <div className={styles.valueCircle}>
                            <div className={styles.icon}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 3v18" />
                                    <path d="M5 7h14" />
                                    <path d="M7 7l-2 7a4 4 0 0 0 4 4" />
                                    <path d="M17 7l2 7a4 4 0 0 1-4 4" />
                                </svg>
                            </div>
                            <p>Ethicality</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Vision;
