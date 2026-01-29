import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './Alumni.css';

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

const Alumni = () => {
    const [selectedYear, setSelectedYear] = useState(2019);

    useEffect(() => {
        // Load fonts dynamically
        const link1 = document.createElement('link');
        link1.href = "https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap";
        link1.rel = "stylesheet";
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap";
        link2.rel = "stylesheet";
        document.head.appendChild(link2);

        // HERO SCROLL EFFECTS
        const handleScroll = () => {
            const scrollTop = $(window).scrollTop();
            const shadeOpacity = scrollTop / 500;
            const zoom = scrollTop * 0.0004 + 1;
            const titleMove = scrollTop * 0.2 + 1;

            $('.shade').css('opacity', shadeOpacity);
            $('.bg').css('transform', 'scale(' + zoom + ')');
            $('.text').css('margin-top', '-' + titleMove + 'px');
        };

        $(window).on("scroll", handleScroll);

        // VIDEO CARD INTERACTIONS
        const handleVideoClick = (e) => {
            e.stopPropagation();
            const btn = e.target;
            const card = btn.parentElement;
            const video = card.querySelector('video');

            if (video) {
                // The 'play-btn' is a sibling of video in the provided HTML structure, but covered by CSS.
                // Actually in the HTML: 
                // <div class="b-game-card__cover"> <video>...</video> <div class="play-btn">▶</div> </div>
                // So e.target is .play-btn. Sibling logic:
                const vidFn = ele => ele.previousElementSibling;
                // Using closest or specific selectors is safer.
                // Let's stick to jQuery style logic provided or pure JS
            }
        };

        // Re-implementing Video Interaction using jQuery as per original script
        $('.b-game-card .play-btn').on('click', function (e) {
            e.stopPropagation();
            const btn = $(this);
            const video = btn.siblings('video')[0];

            if (video.paused) {
                video.play();
                btn.text('⏸');
            } else {
                video.pause();
                btn.text('▶');
            }
        });


        // CAROUSEL FUNCTIONALITY
        let autoSwap = setInterval(() => swap(), 3500);

        $('.carousel, .carousel-controls').hover(
            function () { clearInterval(autoSwap); },
            function () { autoSwap = setInterval(() => swap(), 3500); }
        );

        let items = [];
        let startItem = 1;
        let position = 0;
        let itemCount = $('.carousel li.items').length;
        let resetCount = itemCount;

        $('.carousel li.items').each(function (index) {
            items[index] = $(this).text();
        });

        function swap(action) {
            const direction = action;

            if (direction === 'counter-clockwise') {
                let leftitem = $('.left-pos').attr('id') - 1;
                if (leftitem === 0) leftitem = itemCount;

                $('.right-pos').removeClass('right-pos').addClass('back-pos');
                $('.main-pos').removeClass('main-pos').addClass('right-pos');
                $('.left-pos').removeClass('left-pos').addClass('main-pos');
                $('#' + leftitem).removeClass('back-pos').addClass('left-pos');

                startItem--;
                if (startItem < 1) startItem = itemCount;
            }

            if (direction === 'clockwise' || !direction) {
                function pos(positionvalue) {
                    if (positionvalue !== 'leftposition') {
                        position++;
                        if ((startItem + position) > resetCount) {
                            position = 1 - startItem;
                        }
                    }
                    if (positionvalue === 'leftposition') {
                        position = startItem - 1;
                        if (position < 1) position = itemCount;
                    }
                    return position;
                }

                $('#' + startItem).removeClass('main-pos').addClass('left-pos');
                $('#' + (startItem + pos())).removeClass('right-pos').addClass('main-pos');
                $('#' + (startItem + pos())).removeClass('back-pos').addClass('right-pos');
                $('#' + pos('leftposition')).removeClass('left-pos').addClass('back-pos');

                startItem++;
                position = 0;
                if (startItem > itemCount) startItem = 1;
            }
        }

        $('#next').on('click', () => swap('clockwise'));
        $('#prev').on('click', () => swap('counter-clockwise'));

        $('.carousel li').on('click', function () {
            $(this).hasClass('left-pos')
                ? swap('counter-clockwise')
                : swap('clockwise');
        });

        return () => {
            document.head.removeChild(link1);
            document.head.removeChild(link2);
            $(window).off("scroll", handleScroll);
            clearInterval(autoSwap);
            $('.b-game-card .play-btn').off('click');
            $('#next').off('click');
            $('#prev').off('click');
            $('.carousel li').off('click');
        };
    }, []);

    return (
        <div id="alumni-page-root">
            {/* HERO SECTION */}
            <div className="heroEffects">
                <div className="bg">
                    <div className="arrow bouncy">
                        <svg height="25" width="50">
                            <polygon points="0,0 25,10 50,0 25,25"
                                fill="rgba(255,255,255,.5)"
                                stroke="rgba(255,255,255,.3)"
                                strokeWidth="0" />
                        </svg>
                    </div>

                    <div className="title centerV">
                        <div>
                            <div className="text">
                                <h1>Alimni</h1>
                                <p>Invite alumni to share honest reflections, career advice, and lessons learned since graduation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shade"></div>
            </div>

            {/* MAIN CONTENT */}
            <div className="content">

                {/* RISING STARS SECTION */}
                <div className="section-title">
                    <h1>Rising Stars of SVASC</h1>
                </div>

                <div className="l-container">
                    {[
                        { name: "Arun Kumar", degree: "B.Sc Computer Science", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
                        { name: "Priya Sharma", degree: "BCA", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
                        { name: "Rahul Das", degree: "B.Sc IT", src: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
                        { name: "Ananya Roy", degree: "B.Com", src: "https://media.w3.org/2010/05/bunny/trailer.mp4" },
                        { name: "Karthik R", degree: "B.Sc Physics", src: "https://www.w3schools.com/html/movie.mp4" },
                        { name: "Meena Lakshmi", degree: "B.Sc Mathematics", src: "https://media.w3.org/2010/05/video/movie_300.mp4" },
                        { name: "Vignesh S", degree: "BCA", src: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
                        { name: "Divya R", degree: "B.Sc Chemistry", src: "https://media.w3.org/2010/05/bunny/trailer.mp4" }
                    ].map((item, index) => (
                        <div key={index}>
                            <div className="b-game-card">
                                <div className="b-game-card__cover">
                                    <video loop playsInline>
                                        <source src={item.src} />
                                    </video>
                                    <div className="play-btn">▶</div>
                                </div>
                            </div>
                            <div className="student-info">
                                <h3>{item.name}</h3>
                                <p>{item.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SUCCESS STORY CAROUSEL SECTION */}
                <div className="carousel-section">
                    <div className="carousel-title">
                        <h1>Success Story</h1>
                    </div>

                    <div className="carousel-wrapper">
                        <ul className="carousel">
                            <li className="items main-pos" id="1"><p>1</p></li>
                            <li className="items right-pos" id="2">
                                <img src="http://farm9.staticflickr.com/8337/8234123289_2b23aeaf06.jpg" alt="" />
                            </li>
                            <li className="items back-pos" id="3">
                                <img src="http://farm9.staticflickr.com/8337/8234711202_831b23a2b7.jpg" alt="" />
                            </li>
                            <li className="items back-pos" id="4">
                                <iframe src="https://www.youtube.com/embed/szIEr2F61DU" frameBorder="0" allowFullScreen title="video1"></iframe>
                            </li>
                            <li className="items back-pos" id="5">
                                <iframe src="https://player.vimeo.com/video/19464611" frameBorder="0" allowFullScreen title="video2"></iframe>
                            </li>
                            <li className="items back-pos" id="6">
                                <img src="http://woofie2.pixiq.com/files/cache/20030323_img_7465_3072_x_2048_619x413.jpg" alt="" />
                            </li>
                            <li className="items left-pos" id="7">
                                <img src="http://www.mishes.com/wp-content/uploads/2011/12/FlickrMonday07.jpg" alt="" />
                            </li>
                        </ul>

                        <span className="carousel-controls">
                            <input type="button" value="Prev" id="prev" />
                            <input type="button" value="Next" id="next" />
                        </span>
                    </div>
                </div>

                {/* RANK HOLDERS SECTION */}
                <div className="rank-holder-section">
                    <div className="rank-title">Rank Holders</div>

                    <div className="year-tabs">
                        {Object.keys(rankData).map(y => (
                            <button
                                key={y}
                                className={parseInt(y) === selectedYear ? 'active' : ''}
                                onClick={() => setSelectedYear(parseInt(y))}
                            >
                                {y}
                            </button>
                        ))}
                    </div>

                    <div className="rank-cards" id="cards">
                        {rankData[selectedYear] && rankData[selectedYear].map((item, idx) => (
                            <div className="rank-card" key={idx}>
                                <h3>{item.name}</h3>
                                <p className="degree">{item.degree}</p>
                                <p className="rank">{item.rank}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Alumni;
