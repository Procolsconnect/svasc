import React, { useEffect } from 'react';
import styles from './Events.module.css';
import { ArrowDown, Star, ExternalLink } from 'lucide-react';
import Eventhero from './Eventhero'
import Hero from '../components/Common/Hero';

const Events = () => {

    // Intersection Observer for Reveal Animation
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(`.${styles.revealOnScroll}`);
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleEventClick = (title, date, desc) => {
        alert(`Event: ${title}\nDate: ${date}\nDescription: ${desc}\n\nRegistration details will be announced soon!`);
    };

    const handleMarqueeClick = (e, title, date, desc) => {
        e.preventDefault();
        alert(`Event: ${title}\nDate: ${date}\nDescription: ${desc}\n\nClick to view more details!`);
    };

    const marqueeItems = [
        {
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg",
            day: "28",
            month: "Apr",
            title: "Abstract Heading",
            desc: "Which is worse, that everyone has his price."
        },
        {
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample21.jpg",
            day: "17",
            month: "May",
            title: "Down with this sort",
            desc: "I'm killing time while I wait for life."
        },
        {
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg",
            day: "08",
            month: "Jun",
            title: "The World Ended",
            desc: "The only skills I have patience to learn."
        },
        {
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
            day: "21",
            month: "Jul",
            title: "Creative Thoughts",
            desc: "Ideas are the currency of the future."
        },
        {
            image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800",
            day: "02",
            month: "Aug",
            title: "Dream Bigger",
            desc: "Every journey starts with a single step."
        }
    ];

    // Double the items for seamless loop
    const marqueeList = [...marqueeItems, ...marqueeItems];

    return (
        <div className={`${styles.wrapper} text-[18px] leading-relaxed text-stone-800`}>
            {/* Hero Section */}
            <Hero
            title={"Events"}
            description={"Stay updated with the latest events and activities at SVASC."}
            image={"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"} />
            <Eventhero />

            {/* Events Grid Section */}
            <section id="events" className={styles.eventsGridSection}>
                <div className={styles.gridWrapper}>
                    <div className={`${styles.gridHeader} ${styles.revealOnScroll}`}>
                        <div className=''>
                            <span className={styles.upcomingLabel}>Upcoming Events</span>
                            <h2 className={styles.gridTitle}>5 Major Campus Events</h2>
                        </div>
                        <a href="#" className={styles.viewAllLink}>View All Events</a>
                    </div>

                    <div className={`${styles.eventsGrid} ${styles.revealOnScroll}`}>
                        {/* Event 1 */}
                        <div className={styles.eventCard} onClick={() => handleEventClick('TechVortex 2024', 'Mar 15-17', 'CS Department - Annual Tech Fest')}>
                            <div className={styles.cardImageContainer}>
                                <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=80" className={styles.cardImage} alt="TechVortex" />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.dateTag}>Mar 15-17</div>
                            </div>
                            <h3 className={styles.eventTitle}>TechVortex 2024</h3>
                            <p className={styles.eventDesc}>CS Department - Annual Tech Fest</p>
                        </div>

                        {/* Event 2 */}
                        <div className={styles.eventCard} style={{ transitionDelay: '50ms' }} onClick={() => handleEventClick('Rhythm & Raga', 'Apr 5-7', 'Arts Department - Cultural Fest')}>
                            <div className={styles.cardImageContainer}>
                                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" className={styles.cardImage} alt="Rhythm" />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.dateTag}>Apr 5-7</div>
                            </div>
                            <h3 className={styles.eventTitle}>Rhythm & Raga</h3>
                            <p className={styles.eventDesc}>Arts Department - Cultural Fest</p>
                        </div>

                        {/* Event 3 */}
                        <div className={styles.eventCard} style={{ transitionDelay: '100ms' }} onClick={() => handleEventClick('Champions League', 'Feb 20-25', 'Sports Department - Tournament')}>
                            <div className={styles.cardImageContainer}>
                                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80" className={styles.cardImage} alt="Champions" />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.dateTag}>Feb 20-25</div>
                            </div>
                            <h3 className={styles.eventTitle}>Champions League</h3>
                            <p className={styles.eventDesc}>Sports Department - Tournament</p>
                        </div>

                        {/* Event 4 */}
                        <div className={styles.eventCard} style={{ transitionDelay: '150ms' }} onClick={() => handleEventClick('AI in Education', 'Mar 10', 'Seminar - CS Department')}>
                            <div className={styles.cardImageContainer}>
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" className={styles.cardImage} alt="AI Seminar" />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.dateTag}>Mar 10</div>
                            </div>
                            <h3 className={styles.eventTitle}>AI in Education</h3>
                            <p className={styles.eventDesc}>Seminar - CS Department</p>
                        </div>

                        {/* Event 5 */}
                        <div className={`${styles.eventCard} ${styles.span2Cols}`} style={{ transitionDelay: '200ms' }} onClick={() => handleEventClick('Homecoming 2024', 'Apr 15', 'Alumni Meet - All Departments')}>
                            <div className={styles.cardImageContainer}>
                                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80" className={styles.cardImage} alt="Homecoming" />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.dateTag}>Apr 15</div>
                            </div>
                            <h3 className={styles.eventTitle}>Homecoming 2024</h3>
                            <p className={styles.eventDesc}>Alumni Meet - All Departments</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Marquee Events Section */}
            <section className={styles.eventsSection}>
                <div className={styles.eventsHeading}>Events at SVASC</div>

                <div className={styles.marquee}>
                    <div className={styles.marqueeTrack}>
                        {/* Render Marquee Items */}
                        {marqueeList.map((item, index) => (
                            <figure key={index} className={styles.snip1529} onClick={(e) => handleMarqueeClick(e, item.title, `${item.day} ${item.month}`, item.desc)}>
                                <img src={item.image} alt={item.title} />
                                <div className={styles.date}><span>{item.day}</span><span className={styles.month}>{item.month}</span></div>
                                <figcaption><h3>{item.title}</h3><p>{item.desc}</p></figcaption>
                                <div className={styles.hover}><ExternalLink color="white" size={32} /></div>
                                <a href="#"></a>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
