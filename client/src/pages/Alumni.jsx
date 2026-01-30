import React, { useState, useEffect, useRef } from 'react';
import './Alumni.css';
import { FaPlay, FaPause } from 'react-icons/fa'; // Assuming react-icons is available, else we use unicode
import { Link } from 'react-router-dom';

const Alumni = () => {
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

    // ================= RISING STARS DATA =================
    const risingStars = [
        { name: "Arun Kumar", degree: "B.Sc Computer Science", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { name: "Priya Sharma", degree: "BCA", video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
        { name: "Rahul Das", degree: "B.Sc IT", video: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
        { name: "Ananya Roy", degree: "B.Com", video: "https://media.w3.org/2010/05/bunny/trailer.mp4" },
        { name: "Karthik R", degree: "B.Sc Physics", video: "https://www.w3schools.com/html/movie.mp4" },
        { name: "Meena Lakshmi", degree: "B.Sc Mathematics", video: "https://media.w3.org/2010/05/video/movie_300.mp4" },
        { name: "Vignesh S", degree: "BCA", video: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
        { name: "Divya R", degree: "B.Sc Chemistry", video: "https://media.w3.org/2010/05/bunny/trailer.mp4" }
    ];

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
    const carouselItems = [
        { type: 'text', content: '1', id: 1 },
        { type: 'img', src: 'http://farm9.staticflickr.com/8337/8234123289_2b23aeaf06.jpg', id: 2 },
        { type: 'img', src: 'http://farm9.staticflickr.com/8337/8234711202_831b23a2b7.jpg', id: 3 },
        { type: 'iframe', src: 'https://www.youtube.com/embed/szIEr2F61DU', id: 4 },
        { type: 'iframe', src: 'https://player.vimeo.com/video/19464611', id: 5 },
        { type: 'img', src: 'http://woofie2.pixiq.com/files/cache/20030323_img_7465_3072_x_2048_619x413.jpg', id: 6 },
        { type: 'img', src: 'http://www.mishes.com/wp-content/uploads/2011/12/FlickrMonday07.jpg', id: 7 }
    ];

    // State tracks the *index* of the item that is currently in the "main-pos"
    const [mainIndex, setMainIndex] = useState(0);
    const totalItems = carouselItems.length;

    // Auto-swap effect
    useEffect(() => {
        const autoSwap = setInterval(() => {
            moveCarousel('next');
        }, 3500);
        return () => clearInterval(autoSwap);
    }, [mainIndex]); // Restart timer on interaction

    const moveCarousel = (direction) => {
        if (direction === 'next') {
            setMainIndex((prev) => (prev + 1) % totalItems);
        } else {
            setMainIndex((prev) => (prev - 1 + totalItems) % totalItems);
        }
    };

    const getPositionClass = (index) => {
        // Calculate relative position to the mainIndex
        // We want: 
        // 0 -> main-pos
        // 1 -> right-pos
        // total-1 -> left-pos
        // others -> back-pos

        const diff = (index - mainIndex + totalItems) % totalItems;

        if (diff === 0) return 'main-pos';
        if (diff === 1) return 'right-pos';
        if (diff === totalItems - 1) return 'left-pos';
        return 'back-pos';
    };

    // ================= RANK HOLDERS DATA =================
    const rankData = {
        2019: [
            { name: "KARTHIK R", degree: "B.Com", rank: "1st Rank Bharathiar University" },
            { name: "DIVYA S", degree: "B.Com", rank: "2nd Rank Bharathiar University" },
            { name: "ARUN P", degree: "B.Com", rank: "3rd Rank Bharathiar University" },
            { name: "MEENA K", degree: "B.Com", rank: "5th Rank Bharathiar University" },
            { name: "SANTHOSH V", degree: "B.Com", rank: "7th Rank Bharathiar University" }
        ],
        2020: [
            { name: "SNEHA M", degree: "B.Sc. Computer Science", rank: "1st Rank Bharathiar University" },
            { name: "RAJESH K", degree: "B.Sc. Computer Science", rank: "2nd Rank Bharathiar University" },
            { name: "POOJA R", degree: "B.Sc. Computer Science", rank: "4th Rank Bharathiar University" },
            { name: "NAVEEN S", degree: "B.Sc. Computer Science", rank: "6th Rank Bharathiar University" },
            { name: "AISWARYA P", degree: "B.Sc. Computer Science", rank: "8th Rank Bharathiar University" }
        ],
        2021: [
            { name: "RAHUL S", degree: "B.Sc. Mathematics", rank: "2nd Rank Bharathiar University" },
            { name: "KAVYA M", degree: "B.Sc. Mathematics", rank: "3rd Rank Bharathiar University" },
            { name: "MOHAN R", degree: "B.Sc. Mathematics", rank: "5th Rank Bharathiar University" },
            { name: "PRIYA S", degree: "B.Sc. Mathematics", rank: "6th Rank Bharathiar University" },
            { name: "BALAJI K", degree: "B.Sc. Mathematics", rank: "9th Rank Bharathiar University" }
        ],
        2022: [
            { name: "MEENA P", degree: "B.Sc. Physics", rank: "1st Rank Bharathiar University" },
            { name: "SURESH K", degree: "B.Sc. Physics", rank: "2nd Rank Bharathiar University" },
            { name: "LATHA R", degree: "B.Sc. Physics", rank: "4th Rank Bharathiar University" },
            { name: "ARJUN V", degree: "B.Sc. Physics", rank: "6th Rank Bharathiar University" },
            { name: "SWATHI S", degree: "B.Sc. Physics", rank: "10th Rank Bharathiar University" }
        ],
        2023: [
            { name: "ARAVIND K", degree: "B.Sc. Chemistry", rank: "3rd Rank Bharathiar University" },
            { name: "DEEPA M", degree: "B.Sc. Chemistry", rank: "4th Rank Bharathiar University" },
            { name: "PRAVEEN S", degree: "B.Sc. Chemistry", rank: "5th Rank Bharathiar University" },
            { name: "SOWMIYA R", degree: "B.Sc. Chemistry", rank: "7th Rank Bharathiar University" },
            { name: "HARISH V", degree: "B.Sc. Chemistry", rank: "9th Rank Bharathiar University" }
        ],
        2024: [
            { name: "PRIYANKA R", degree: "B.Sc. IT", rank: "1st Rank Bharathiar University" },
            { name: "MANOJ K", degree: "B.Sc. IT", rank: "2nd Rank Bharathiar University" },
            { name: "SANDHYA S", degree: "B.Sc. IT", rank: "3rd Rank Bharathiar University" },
            { name: "VINOTH P", degree: "B.Sc. IT", rank: "5th Rank Bharathiar University" },
            { name: "ANUJA M", degree: "B.Sc. IT", rank: "8th Rank Bharathiar University" }
        ],
        2025: [
            { name: "VISHNU A", degree: "B.Sc. Computer Science", rank: "2nd Rank Bharathiar University" },
            { name: "RITHIKA S", degree: "B.Sc. Computer Science", rank: "3rd Rank Bharathiar University" },
            { name: "KARAN M", degree: "B.Sc. Computer Science", rank: "4th Rank Bharathiar University" },
            { name: "SANGEETHA P", degree: "B.Sc. Computer Science", rank: "6th Rank Bharathiar University" },
            { name: "AJAY R", degree: "B.Sc. Computer Science", rank: "9th Rank Bharathiar University" }
        ]
    };

    const [selectedYear, setSelectedYear] = useState(2019);

    return (
        <div className="alumni-page">
            {/* ================= HERO SECTION ================= */}
            <div className="heroEffects">
                <div
                    className="bg"
                    style={{
                        transform: `scale(${scrollState.zoom})`,
                    }}
                >
                    <div className="arrow bouncy">
                        <svg height="25" width="50">
                            <polygon
                                points="0,0 25,10 50,0 25,25"
                                fill="rgba(255,255,255,.5)"
                                stroke="rgba(255,255,255,.3)"
                                strokeWidth="0"
                            />
                        </svg>
                    </div>

                    <div className="title">
                        <div className="text-wrapper">
                            <div
                                className="text"
                                style={{ marginTop: `-${scrollState.titleMove}px` }}
                            >
                                <h1>Alumni</h1>
                                <p>Invite alumni to share honest reflections, career advice, and lessons learned since graduation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="shade"
                    style={{ opacity: scrollState.shadeOpacity }}
                ></div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="content">

                {/* ================= RISING STARS SECTION ================= */}
                <div className="section-title">
                    <h1>Rising Stars of SVASC</h1>
                </div>

                <div className="l-container">
                    {risingStars.map((star, index) => (
                        <div key={index}>
                            <div className="b-game-card">
                                <div className="b-game-card__cover">
                                    <video id={`video-${index}`} loop muted={false}>
                                        <source src={star.video} />
                                    </video>
                                    <div
                                        className="play-btn"
                                        id={`btn-${index}`}
                                        onClick={(e) => toggleVideo(e, index)}
                                    >
                                        ▶
                                    </div>
                                </div>
                            </div>
                            <div className="student-info">
                                <h3>{star.name}</h3>
                                <p>{star.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= SUCCESS STORY CAROUSEL SECTION ================= */}
                <div className="carousel-section">
                    <div className="carousel-title">
                        <h1>Success Story</h1>
                    </div>

                    <div className="carousel-wrapper">
                        <ul className="carousel">
                            {carouselItems.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`${getPositionClass(index)}`}
                                    onClick={() => {
                                        const pos = getPositionClass(index);
                                        if (pos === 'left-pos') moveCarousel('prev');
                                        if (pos === 'right-pos') moveCarousel('next');
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

                        <div className="carousel-controls">
                            <button onClick={() => moveCarousel('prev')}>Prev</button>
                            <button onClick={() => moveCarousel('next')}>Next</button>
                        </div>
                    </div>
                </div>

                {/* ================= RANK HOLDERS SECTION ================= */}
                <div className="rank-holder-section">
                    <div className="rank-title">Rank Holders</div>

                    <div className="year-tabs">
                        {Object.keys(rankData).map((year) => (
                            <button
                                key={year}
                                className={parseInt(year) === selectedYear ? 'active' : ''}
                                onClick={() => setSelectedYear(parseInt(year))}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <div className="rank-cards" id="cards">
                        {rankData[selectedYear] && rankData[selectedYear].map((student, idx) => (
                            <div className="rank-card" key={idx}>
                                <h3>{student.name}</h3>
                                <p className="degree">{student.degree}</p>
                                <p className="rank">{student.rank}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alumni;
