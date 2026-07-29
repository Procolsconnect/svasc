import React, { useState, useEffect, useRef } from 'react';
import styles from './Alumni.module.css';
import { FaPlay, FaPause } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const fallbackHero = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/jungleBG.jpg',
    title: 'Alumni',
    description: 'Invite alumni to share honest reflections, career advice, and lessons learned since graduation'
};

const fallbackRisingStars = [
    { name: "Arun Kumar", degree: "B.Sc Computer Science", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { name: "Priya Sharma", degree: "BCA", video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { name: "Rahul Das", degree: "B.Sc IT", video: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
    { name: "Ananya Roy", degree: "B.Com", video: "https://media.w3.org/2010/05/bunny/trailer.mp4" },
    { name: "Karthik R", degree: "B.Sc Physics", video: "https://www.w3schools.com/html/movie.mp4" },
    { name: "Meena Lakshmi", degree: "B.Sc Mathematics", video: "https://media.w3.org/2010/05/video/movie_300.mp4" },
    { name: "Vignesh S", degree: "BCA", video: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
    { name: "Divya R", degree: "B.Sc Chemistry", video: "https://media.w3.org/2010/05/bunny/trailer.mp4" }
];

const fallbackSuccessStories = [
    { type: 'text', content: '1', id: 1 },
    { type: 'img', src: 'http://farm9.staticflickr.com/8337/8234123289_2b23aeaf06.jpg', id: 2 },
    { type: 'img', src: 'http://farm9.staticflickr.com/8337/8234711202_831b23a2b7.jpg', id: 3 },
    { type: 'iframe', src: 'https://www.youtube.com/embed/szIEr2F61DU', id: 4 },
    { type: 'iframe', src: 'https://player.vimeo.com/video/19464611', id: 5 },
    { type: 'img', src: 'http://woofie2.pixiq.com/files/cache/20030323_img_7465_3072_x_2048_619x413.jpg', id: 6 },
    { type: 'img', src: 'http://www.mishes.com/wp-content/uploads/2011/12/FlickrMonday07.jpg', id: 7 }
];

const fallbackRankData = {
    2019: [
        { name: "KARTHIK R", degree: "B.Com", rank: "1st Rank Bharathiar University" },
        { name: "DIVYA S", degree: "B.Com", rank: "2nd Rank Bharathiar University" },
        { name: "ARUN P", degree: "B.Com", rank: "3rd Rank Bharathiar University" }
    ],
    2020: [
        { name: "SNEHA M", degree: "B.Sc. Computer Science", rank: "1st Rank Bharathiar University" },
        { name: "RAJESH K", degree: "B.Sc. Computer Science", rank: "2nd Rank Bharathiar University" }
    ]
};

const Alumni = () => {
    // ================= DYNAMIC DATA LOADING =================
    const [heroData, setHeroData] = useState(fallbackHero);
    const [risingStars, setRisingStars] = useState([]);
    const [successStories, setSuccessStories] = useState([]);
    const [rankData, setRankData] = useState({});
    const [yearsList, setYearsList] = useState([2019]);
    const [selectedYear, setSelectedYear] = useState(2019);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                // 1. Fetch Page Hero
                try {
                    const heroRes = await axios.get(`${BASE_URL}/api/page-heros/alumni`);
                    if (heroRes.data.success && heroRes.data.data) {
                        const hero = heroRes.data.data;
                        const cleanImg = hero.image.replace(/^\/+/, '');
                        setHeroData({
                            title: hero.title || fallbackHero.title,
                            description: hero.description || fallbackHero.description,
                            image: hero.image.startsWith('http') ? hero.image : `${BASE_URL}/${cleanImg}`
                        });
                    }
                } catch (e) {
                    console.log("Using fallback page hero for alumni");
                }

                // 2. Fetch Rising Stars
                try {
                    const starsRes = await axios.get(`${BASE_URL}/api/alumni/rising-stars`);
                    if (starsRes.data.success && starsRes.data.data.length > 0) {
                        const stars = starsRes.data.data.map(star => {
                            const cleanVid = star.video.replace(/^\/+/, '');
                            return {
                                ...star,
                                video: star.video.startsWith('http') ? star.video : `${BASE_URL}/${cleanVid}`
                            };
                        });
                        setRisingStars(stars);
                    } else {
                        setRisingStars(fallbackRisingStars);
                    }
                } catch (e) {
                    setRisingStars(fallbackRisingStars);
                }

                // 3. Fetch Success Stories
                try {
                    const storiesRes = await axios.get(`${BASE_URL}/api/alumni/success-stories`);
                    if (storiesRes.data.success && storiesRes.data.data.length > 0) {
                        const stories = storiesRes.data.data.map((item, idx) => {
                            if (item.type === 'image' && item.image) {
                                const cleanImg = item.image.replace(/^\/+/, '');
                                return {
                                    type: 'img',
                                    src: item.image.startsWith('http') ? item.image : `${BASE_URL}/${cleanImg}`,
                                    id: item._id || idx
                                };
                            } else if (item.type === 'video') {
                                return {
                                    type: 'iframe',
                                    src: item.content,
                                    id: item._id || idx
                                };
                            } else {
                                return {
                                    type: 'text',
                                    content: item.content,
                                    id: item._id || idx
                                };
                            }
                        });
                        setSuccessStories(stories);
                    } else {
                        setSuccessStories(fallbackSuccessStories);
                    }
                } catch (e) {
                    setSuccessStories(fallbackSuccessStories);
                }

                // 4. Fetch Rank Holders
                try {
                    const ranksRes = await axios.get(`${BASE_URL}/api/alumni/rank-holders`);
                    if (ranksRes.data.success && ranksRes.data.data.length > 0) {
                        // Group by year
                        const grouped = {};
                        ranksRes.data.data.forEach(item => {
                            const yr = item.year;
                            if (!grouped[yr]) grouped[yr] = [];
                            grouped[yr].push(item);
                        });
                        setRankData(grouped);
                        const yrs = Object.keys(grouped).map(Number).sort((a, b) => b - a);
                        setYearsList(yrs);
                        if (yrs.length > 0) {
                            setSelectedYear(yrs[0]);
                        }
                    } else {
                        setRankData(fallbackRankData);
                        const yrs = Object.keys(fallbackRankData).map(Number).sort((a, b) => b - a);
                        setYearsList(yrs);
                        setSelectedYear(yrs[0]);
                    }
                } catch (e) {
                    setRankData(fallbackRankData);
                    const yrs = Object.keys(fallbackRankData).map(Number).sort((a, b) => b - a);
                    setYearsList(yrs);
                    setSelectedYear(yrs[0]);
                }

            } catch (err) {
                console.error("Error loading alumni page data", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    // ================= HERO SCROLL EFFECT =================
    const [scrollState, setScrollState] = useState({
        shadeOpacity: 0,
        zoom: 1,
        titleMove: 0
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shadeOpacity = Math.min(scrollTop / 500, 0.8);
            const zoom = scrollTop * 0.0004 + 1;
            const titleMove = scrollTop * 0.2;

            setScrollState({
                shadeOpacity,
                zoom,
                titleMove
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ================= VIDEO PLAY LOGIC =================
    const toggleVideo = (e, index) => {
        e.stopPropagation();
        const video = document.getElementById(`video-${index}`);
        const btn = document.getElementById(`btn-${index}`);

        if (video.paused) {
            video.play();
            btn.textContent = '⏸';
        } else {
            video.pause();
            btn.textContent = '▶';
        }
    };

    // ================= CAROUSEL LOGIC =================
    const [mainIndex, setMainIndex] = useState(0);
    const totalItems = successStories.length;

    // Auto-swap effect
    useEffect(() => {
        if (totalItems === 0) return;
        const autoSwap = setInterval(() => {
            moveCarousel('next');
        }, 3500);
        return () => clearInterval(autoSwap);
    }, [mainIndex, totalItems]);

    const moveCarousel = (direction) => {
        if (totalItems === 0) return;
        if (direction === 'next') {
            setMainIndex((prev) => (prev + 1) % totalItems);
        } else {
            setMainIndex((prev) => (prev - 1 + totalItems) % totalItems);
        }
    };

    const getPositionClass = (index) => {
        if (totalItems === 0) return '';
        const diff = (index - mainIndex + totalItems) % totalItems;
        if (diff === 0) return styles.mainPos;
        if (diff === 1) return styles.rightPos;
        if (diff === totalItems - 1) return styles.leftPos;
        return styles.backPos;
    };

    if (loading) {
        return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#111' }}>Loading Alumni Page...</div>;
    }

    return (
        <div className={styles.alumniPage}>
            {/* ================= HERO SECTION ================= */}
            <div className={styles.heroEffects}>
                <div
                    className={styles.bg}
                    style={{
                        transform: `scale(${scrollState.zoom})`,
                        backgroundImage: `url(${heroData.image})`
                    }}
                >
                    <div className={`${styles.arrow} ${styles.bouncy}`}>
                        <svg height="25" width="50">
                            <polygon
                                points="0,0 25,10 50,0 25,25"
                                fill="rgba(255,255,255,.5)"
                                stroke="rgba(255,255,255,.3)"
                                strokeWidth="0"
                            />
                        </svg>
                    </div>

                    <div className={styles.title}>
                        <div className={styles.textWrapper}>
                            <div
                                className={styles.text}
                                style={{ marginTop: `-${scrollState.titleMove}px` }}
                            >
                                <h1>{heroData.title}</h1>
                                <p>{heroData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={styles.shade}
                    style={{ opacity: scrollState.shadeOpacity }}
                ></div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className={styles.content}>

                {/* ================= RISING STARS SECTION ================= */}
                <div className={styles.sectionTitle}>
                    <h1>Rising Stars of SVASC</h1>
                </div>

                <div className={styles.container}>
                    {risingStars.map((star, index) => (
                        <div key={star._id || index}>
                            <div className={styles.gameCard}>
                                <div className={styles.gameCardCover}>
                                    <video id={`video-${index}`} loop muted={false} key={star.video}>
                                        <source src={star.video} />
                                    </video>
                                    <div
                                        className={styles.playBtn}
                                        id={`btn-${index}`}
                                        onClick={(e) => toggleVideo(e, index)}
                                    >
                                        ▶
                                    </div>
                                </div>
                            </div>
                            <div className={styles.studentInfo}>
                                <h3>{star.name}</h3>
                                <p>{star.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= SUCCESS STORY CAROUSEL SECTION ================= */}
                {successStories.length > 0 && (
                    <div className={styles.carouselSection}>
                        <div className={styles.carouselTitle}>
                            <h1>Success Story</h1>
                        </div>

                        <div className={styles.carouselWrapper}>
                            <ul className={styles.carousel}>
                                {successStories.map((item, index) => (
                                    <li
                                        key={item.id || index}
                                        className={getPositionClass(index)}
                                        onClick={() => {
                                            const posClass = getPositionClass(index);
                                            if (posClass === styles.leftPos) moveCarousel('prev');
                                            if (posClass === styles.rightPos) moveCarousel('next');
                                        }}
                                    >
                                        {item.type === 'text' && (
                                            <p style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '5em',
                                                textAlign: 'center',
                                                marginTop: '1.15em'
                                            }}>{item.content}</p>
                                        )}
                                        {item.type === 'img' && <img src={item.src} alt="Success Story" />}
                                        {item.type === 'iframe' && (
                                            <iframe
                                                src={item.src}
                                                frameBorder="0"
                                                allowFullScreen
                                                title={`video-${index}`}
                                            ></iframe>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.carouselControls}>
                                <button onClick={() => moveCarousel('prev')}>Prev</button>
                                <button onClick={() => moveCarousel('next')}>Next</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= RANK HOLDERS SECTION ================= */}
                {yearsList.length > 0 && (
                    <div className={styles.rankHolderSection}>
                        <div className={styles.rankTitle}>Rank Holders</div>

                        <div className={styles.yearTabs}>
                            {yearsList.map((year) => (
                                <button
                                    key={year}
                                    className={year === selectedYear ? styles.active : ''}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        <div className={styles.rankCards} id="cards">
                            {rankData[selectedYear] && rankData[selectedYear].map((student, idx) => (
                                <div className={styles.rankCard} key={student._id || idx}>
                                    <h3>{student.name}</h3>
                                    <p className={styles.degree}>{student.degree}</p>
                                    <p className={styles.rank}>{student.rank}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Alumni;
