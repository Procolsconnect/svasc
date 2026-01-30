import React, { useState, useEffect, useRef } from 'react';
import styles from './CampusLife.module.css';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Common/Hero';

const CampusLife = () => {
    const { setIsNavbarVisible } = useOutletContext();
    const [galleryHoverPos, setGalleryHoverPos] = useState({ x: 0, y: 0 });
    const observerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for Navbar visibility
        const observerOptions = {
            threshold: 0,
            rootMargin: '-10% 0px 0px 0px' // Trigger slightly before reaching the section
        };

        const handleIntersect = (entries) => {
            const isMobile = window.innerWidth <= 768;

            entries.forEach((entry) => {
                if (isMobile) {
                    setIsNavbarVisible(true);
                    return;
                }

                if (entry.isIntersecting) {
                    setIsNavbarVisible(false);
                } else if (entry.boundingClientRect.top > 0) {
                    setIsNavbarVisible(true);
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
        const target = scrollRef.current;
        if (target) observerRef.current.observe(target);

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
            // Reset visibility when leaving the page
            setIsNavbarVisible(true);
        };
    }, [setIsNavbarVisible]);

    useEffect(() => {
        // Gallery hover tracking
        const handleMouseMove = (e) => {
            setGalleryHoverPos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const galleryItems = [
        { id: 1, img: "https://assets.codepen.io/1159990/smart-watch.jpg", title: "Smart Watch", category: "Showcase" },
        { id: 2, img: "https://assets.codepen.io/1159990/camera-film.jpg", title: "Camera Film", category: "Showcase" },
        { id: 3, img: "https://assets.codepen.io/1159990/coffee.jpg", title: "Coffee", category: "Showcase" },
        { id: 4, img: "https://assets.codepen.io/1159990/phone.jpg", title: "Phone", category: "Showcase" },
        { id: 5, img: "https://assets.codepen.io/1159990/keyboard.jpg", title: "Keyboard", category: "Showcase" },
        { id: 6, img: "https://assets.codepen.io/1159990/wrist-watch.jpg", title: "Wrist Watch", category: "Showcase" },
    ];

    const scrollItems = [
        {
            img: 'https://unsplash.it/450/800?image=508',
            title: 'Scrolling half by half',
            text: 'Made in pure #CSS and almost all is "old properties" method. And a bit imagination. Yes, the flexbox is old now.',
        },
        {
            img: 'https://unsplash.it/450/800?image=817',
            title: "I'm Kseso, a #obCSServer",
            text: 'Ramajero Argonauta, Enredique Amanuense de #CSS.',
        },
        {
            img: 'https://unsplash.it/450/800?image=948',
            title: 'ξsCSS Blog',
            text: '#impoCSSible inside EsCSS. A Spanish #CSS blog where the borders & limits of #CSS disappear.',
            link: 'https://escss.blogspot.com',
        },
        {
            img: 'https://unsplash.it/450/800?image=737',
            title: '#impoCSSible is nothing',
            text: 'You don´t need Javascript or #CSS processors either for almost 100% of what you want to do.',
        },
        {
            img: 'https://unsplash.it/450/800?image=870',
            title: 'Idea from E.Bouças´s pen',
            text: 'Without jQuery or Javascript, nor fixed position (bye IOs problems)',
            link: 'https://codepen.io/eduardoboucas/full/qdaOWv/',
        },
        {
            img: 'https://unsplash.it/450/800?image=743',
            title: 'Images from unsplash.it',
            text: 'Because it´s the best for demos. Thanks, guys!',
        },
        {
            img: 'https://unsplash.it/450/800?image=452',
            title: 'show the PEN. link the POST',
            text: 'Por una web con mucho estilo, para argonautas con buen gusto.',
            link: 'https://escss.blogspot.com/2017/08/scroll-half-by-half-pure-css.html',
        },
    ];

    return (
        <div className={styles.campusLifePage}>
            <Hero
                title="CAMPUS LIFE"
                description="Experience the vibrant student life, culture, sports, and activities on campus."
                image="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200"
            />

            {/* INTRO SECTION */}
            <section className={styles.section}>
                <h1>
                    <span className={styles.blue}>Campus Life</span>{' '}
                    <span className={styles.green}>at SVASC College of Arts and Science, Erode</span>
                </h1>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>
                            Nestled amidst lush coconut groves, SVASC College of Arts and Science, Coimbatore,
                            is an eco-friendly campus that offers a vibrant and enriching experience for students.
                            The college remains lively throughout the year, seamlessly blending academic and cultural
                            programs that provide students with hands-on learning experiences while sharpening their skills.
                        </p>

                        <p>
                            At SVASC, celebrations go hand in hand with academics. The various clubs, committees,
                            and cells play a crucial role in shaping students' learning curves, offering them
                            a platform to showcase their talents, leadership, and organizational skills.
                            The Rising Star Cultural Club is particularly active, organizing inter-departmental
                            and intercollegiate events that bring together a diverse mix of talent and creativity.
                        </p>
                    </div>

                    <div className={styles.imageBox}>
                        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200" alt="Campus Life" />
                    </div>
                </div>

                <div className={styles.extraContent}>
                    <p>
                        The academic year begins with a warm welcome to freshers through Freshers' Day,
                        setting the stage for a year filled with excitement and engagement. Traditional
                        festivals like Onam and Pongal are celebrated with great enthusiasm, fostering
                        a deep-rooted sense of cultural belonging.
                    </p>

                    <p>
                        Adding to the grandeur of campus life, SVASC Diwas, an interdepartmental fest,
                        and Miracle, a prestigious intercollegiate competition, attract participants
                        from over 350+ colleges, turning the campus into a hub of creativity and energy.
                        These events culminate in the much-anticipated Star Night.
                    </p>
                </div>

                <div className={styles.bigNumber}>1</div>
            </section>

            {/* GALLERY SECTION */}
            <nav className={styles.galleryNav}>
                <div className={styles.container}>
                    <h1 className={styles.mainHeading}>SVASC GALLERY</h1>
                </div>
            </nav>

            <section className={styles.gallery}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {galleryItems.map((item) => (
                            <div key={item.id} className={`${styles.columnXs12} ${styles.columnMd4}`}>
                                <figure className={styles.imgContainer}>
                                    <img src={item.img} alt={item.title} />
                                    <figcaption className={styles.imgContent}>
                                        <h2 className={styles.title}>{item.title}</h2>
                                        <h3 className={styles.category}>{item.category}</h3>
                                    </figcaption>
                                    <span
                                        className={styles.imgContentHover}
                                        style={{
                                            transform: `translate3d(${galleryHoverPos.x}px, ${galleryHoverPos.y}px, 0)`
                                        }}
                                    >
                                        <h2 className={styles.title}>{item.title}</h2>
                                        <h3 className={styles.category}>{item.category}</h3>
                                    </span>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <article className={styles.scrollArticle} ref={scrollRef}>
                {scrollItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <figure className={styles.scrollFigure}>
                            <img src={item.img} alt={item.title} />
                        </figure>
                        <section className={styles.scrollSection}>
                            <div>
                                {item.title.includes('show the PEN') ? (
                                    <h2>
                                        show the PEN.<br />
                                        <a href={item.link}>{item.title.split('. ')[1]}</a>
                                    </h2>
                                ) : item.link ? (
                                    <h2><a href={item.link}>{item.title}</a></h2>
                                ) : (
                                    <h1>{item.title}</h1>
                                )}
                                <p>{item.text}</p>
                            </div>
                        </section>
                    </React.Fragment>
                ))}
            </article>
        </div>
    );
};

export default CampusLife;
