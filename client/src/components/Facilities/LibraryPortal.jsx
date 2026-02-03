import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import styles from './LibraryPortal.module.css';

const LibraryPortal = () => {
    // Book grid focus state
    const [activeBook, setActiveBook] = useState(null);

    // Slider state
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderImages = [
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    const books = [
        { id: 0, src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop", rotation: "-rotate-6", translateY: "translate-y-4" },
        { id: 1, src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", rotation: "rotate-3", translateY: "translate-y-8" },
        { id: 2, src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", rotation: "-rotate-2", translateY: "-translate-y-2" },
        { id: 3, src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop", rotation: "rotate-6", translateY: "translate-y-3" },
        { id: 4, src: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop", rotation: "-rotate-3", translateY: "translate-y-6" },
        { id: 5, src: "https://images.unsplash.com/photo-1629196914168-3a9644388fb3?q=80&w=800&auto=format&fit=crop", rotation: "rotate-2", translateY: "-translate-y-1" },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Global Background Texture */}
            <div className={styles.bgNoise}></div>

            {/* HERO SECTION - READFLOW LIBRARY */}
            <section id="hero" className={styles.heroSection}>
                <div className={styles.bgGrid}></div>
                <div className={styles.meshBg}>
                    <div className={styles.meshOrange}></div>
                    <div className={styles.meshStone}></div>
                </div>

                <div className={styles.heroContentContainer}>
                    <div className={styles.heroTextCenter}>
                        <h1 className={styles.heroHeadline}>
                            Curate your mental library.
                        </h1>
                        <p className={styles.heroSubDescription}>
                            Transform scattered reading into structured knowledge. Visualize your progress and build a legacy of ideas.
                        </p>
                    </div>

                    {/* Gallery Rail */}
                    <div className={styles.libraryRail}>
                        {/* Floating Tags */}
                        <div className={`${styles.floatingTag} ${styles.tagFiction}`}>
                            <span className={styles.tagBadge}>
                                <span className={styles.dotBlue}></span>
                                Fiction
                            </span>
                        </div>
                        <div className={`${styles.floatingTag} ${styles.tagPhilosophy}`}>
                            <span className={styles.tagBadge}>
                                <span className={styles.dotOrange}></span>
                                Philosophy
                            </span>
                        </div>

                        {/* Book Grid */}
                        <div className={styles.bookGridContainer}>
                            <div className={styles.bookGrid}>
                                {books.map((book) => (
                                    <div
                                        key={book.id}
                                        className={`${styles.bookCard} ${book.rotation} ${book.translateY} ${activeBook !== null && activeBook !== book.id ? styles.cardBlur : ''} ${activeBook === book.id ? styles.cardFocus : ''}`}
                                        onClick={() => setActiveBook(activeBook === book.id ? null : book.id)}
                                    >
                                        <div className={styles.bookAspect}>
                                            <img src={book.src} alt="Book Cover" className={styles.bookImg} />
                                            <div className={styles.bookOverlay}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className={styles.heroActions}>
                        <button className={styles.ctaPrimary}>
                            <span className={styles.ctaContent}>
                                Start Tracking
                                <ChevronRight className={styles.ctaIcon} />
                            </span>
                        </button>
                        <a href="#cafe-about" className={styles.ctaSecondary}>
                            Explore Café
                            <ExternalLink size={16} className={styles.ctaSecondaryIcon} />
                        </a>
                    </div>
                </div>
            </section>

            {/* CAFÉ ABOUT SECTION */}
            <section id="cafe-about" className={styles.cafeSection}>
                <div className={styles.container}>
                    <div className={styles.cafeGrid}>
                        <div className={styles.cafeImages}>
                            <div className={styles.imageColumn}>
                                <div className={`${styles.imageWrapper} ${styles.aspect34}`}>
                                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=533&fit=crop" alt="Café Interior" />
                                </div>
                                <div className={`${styles.imageWrapper} ${styles.aspectSquare}`}>
                                    <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop" alt="Coffee Art" />
                                </div>
                            </div>
                            <div className={`${styles.imageColumn} ${styles.pt8}`}>
                                <div className={`${styles.imageWrapper} ${styles.aspectSquare}`}>
                                    <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop" alt="Café Ambiance" />
                                </div>
                                <div className={`${styles.imageWrapper} ${styles.aspect34}`}>
                                    <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&h=533&fit=crop" alt="Food Plating" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.cafeInfo}>
                            <span className={styles.sectionLabel}>Our Story</span>
                            <h2 className={styles.sectionTitle}>
                                Where Every Cup<br />Tells a Story
                            </h2>
                            <div className={styles.sectionCms}>
                                <p>
                                    Nestled in the heart of Civil Lines, Raipur, <span className={styles.textHighlight}>More Over Coffee (MOC)</span> is more than just a café—it's a sanctuary for coffee lovers, food enthusiasts, and anyone seeking a cozy escape from the everyday hustle.
                                </p>
                                <p>
                                    Since our doors opened, we've been committed to creating an Instagram-worthy space where great conversations flow as freely as our artisanal coffee. Our menu features everything from sizzling hot plates to delicate croissants, each dish crafted with care and passion.
                                </p>
                                <p>
                                    With over <span className={styles.textHighlight}>1,068+ reviews</span> and a strong <span className={styles.textHighlight}>4.1-star rating</span>, our community of regulars keeps coming back for the warm ambiance, friendly service, and unforgettable flavors.
                                </p>
                            </div>

                            <div className={styles.statsGrid}>
                                <div>
                                    <p className={styles.statValue}>4.1★</p>
                                    <p className={styles.statLabel}>Google Rating</p>
                                </div>
                                <div>
                                    <p className={styles.statValue}>1K+</p>
                                    <p className={styles.statLabel}>Happy Reviews</p>
                                </div>
                                <div>
                                    <p className={styles.statValue}>100+</p>
                                    <p className={styles.statLabel}>Menu Items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className={styles.howItWorksSection}>
                <div className={styles.tornEdge}></div>
                <div className={styles.max4xl}>
                    <h2 className={styles.howItWorksTitle}>How It Works</h2>
                    <div className={styles.timelineContainer}>
                        <div className={styles.timelineLine}></div>
                        <div className={styles.timelineSpace}>
                            {[
                                { title: "Add to Library", desc: "Import your physical and digital books.", side: "right" },
                                { title: "Start Session", desc: "Set a goal and start the focus timer.", side: "left" },
                                { title: "Capture Insights", desc: "Jot down thoughts as they emerge.", side: "right" },
                                { title: "Review", desc: "See your knowledge base grow.", side: "left" }
                            ].map((step, i) => (
                                <div key={i} className={`${styles.timelineStep} ${step.side === 'left' ? styles.stepLeft : styles.stepRight}`}>
                                    <div className={styles.stepContent}>
                                        <h4 className={styles.stepTitle}>{step.title}</h4>
                                        <p className={styles.stepDesc}>{step.desc}</p>
                                    </div>
                                    <div className={styles.stepDot}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 className={styles.valuesTitle}>Values</h2>
                    <p className={styles.valuesSubtitle}>
                        We believe the library is central to the intellectual and creative lives of the students.
                    </p>
                    <div className={styles.valuesGrid}>
                        {["Access", "Service", "Life-Long Learning", "Intellectual And Academic Freedom", "Collaboration", "Mutual Respect And Civility", "Responsible Stewardship"].map((val, i) => (
                            <div key={i} className={`${styles.valueCard} ${val === 'Responsible Stewardship' ? styles.colSpan2 : ''}`}>
                                <p className={styles.valueText}>{val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FACILITIES SECTION */}
            <section className={styles.facilitiesSection}>
                <div className={styles.container}>
                    <h2 className={styles.facilitiesTitle}>Facilities</h2>
                    <div className={styles.facilitiesGrid}>
                        {["Library Automation", "Auto-Lib Software", "Number of computers for public access", "Multimedia Learning Resources", "Participation in Resource Sharing Networks / Consortia", "DELNET Service", "INFLIBNET Service", "Soul 3.0 software"].map((fac, i) => (
                            <div key={i} className={styles.facilityCard}>
                                <p className={styles.facilityText}>{fac}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIBRARY RESOURCES SECTION */}
            <section className={styles.resourcesSection}>
                <div className={styles.container}>
                    <h2 className={styles.resourcesTitle}>Library Resources</h2>
                    <div className={styles.resourcesLayout}>
                        <div className={styles.sliderContainer}>
                            {sliderImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className={`${styles.sliderImg} ${currentSlide === i ? styles.active : ''}`}
                                    alt="Library"
                                />
                            ))}
                        </div>
                        <div className={styles.resourcesText}>
                            <p>The library has more than 11000 volumes of books, print journals, magazines, project reports, training reports, educational CDs, newspapers, Knimbus and electronic resources like e-journals, INFLIBNET & DELNET.</p>
                            <p>General books, encyclopedias, year books are available. Books for placement readiness, competitive examinations and entrance examinations are also available for the students.</p>
                            <p>AutoLib / SOUL 3.0 integrated library management software developed by INFLIBNET Centre has been installed in the library.</p>
                            <p>Department libraries also function to cater to the additional needs of students and faculty members.</p>
                        </div>
                    </div>

                    <h3 className={styles.sectionsTitle}>Sections</h3>
                    <div className={styles.sectionsGrid}>
                        {[
                            "Reading Section", "Reference Book Section", "Journals and Magazines Section",
                            "TV and NewsPaper Section", "Reprography and Printing Section",
                            "Rare Book Section", "Digital Library", "Trending Book Section"
                        ].map((sec, i) => (
                            <div key={i} className={styles.sectionItem}>
                                <div className={styles.sectionIcon}>▦</div>
                                <span className={styles.sectionName}>{sec}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.sectionsTitle}>Online Resources</h3>
                    <div className={styles.onlineResources}>
                        {[
                            "Knimbus – complete digital library platform (anywhere, anytime)",
                            "INFLIBNET Centre (UGC – Ministry of Education, Govt. of India)",
                            "DELNET – resource sharing network among libraries",
                            "N-LIST – access to scholarly e-resources for colleges"
                        ].map((res, i) => (
                            <div key={i} className={styles.onlineItem}>
                                <div className={styles.onlineIcon}>⧉</div>
                                <span>{res}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AJCAS TABLES SECTION */}
            <div className={styles.ajcasContainer}>
                {/* Library Details */}
                <h2 className={styles.ajcasH2}>Library Details</h2>
                <div className={styles.tableCard}>
                    <table className={styles.ajcasTable}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Library Details</th>
                                <th>Counts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td className={styles.textLeft}>Total No. of Seating Capacity</td><td>160</td></tr>
                            <tr><td>2</td><td className={styles.textLeft}>Total No. of Text Books (Till Date)</td><td>11832</td></tr>
                            <tr><td>3</td><td className={styles.textLeft}>Total No. of E-Books</td><td>27900+</td></tr>
                            <tr><td>4</td><td className={styles.textLeft}>Total No. of E-Journals</td><td>6000+</td></tr>
                            <tr><td>5</td><td className={styles.textLeft}>Total No. of Dissertation / Projects</td><td>201</td></tr>
                            <tr><td>6</td><td className={styles.textLeft}>Total No. of Back Volumes</td><td>159</td></tr>
                            <tr><td>7</td><td className={styles.textLeft}>Total No. of Rare Books</td><td>150</td></tr>
                            <tr><td>8</td><td className={styles.textLeft}>Total No. of Database</td><td>02 (DELNET, N-LIST)</td></tr>
                            <tr><td>9</td><td className={styles.textLeft}>Integrated Library Management System</td><td>01 (SOUL 3.0)</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Library Book Count */}
                <h2 className={styles.ajcasH2}>Library Book Count</h2>
                <div className={styles.tableCard}>
                    <table className={styles.ajcasTable}>
                        <thead>
                            <tr>
                                <th>Particulars</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className={styles.textLeft}>Text Books</td><td>11185</td></tr>
                            <tr><td className={styles.textLeft}>Reference Books</td><td>1815</td></tr>
                            <tr><td className={styles.textLeft}>e-Books</td><td>27918</td></tr>
                            <tr><td className={styles.textLeft}>Journals</td><td>73</td></tr>
                            <tr><td className={styles.textLeft}>e-Journals</td><td>3018</td></tr>
                            <tr><td className={styles.textLeft}>Digital Databases</td><td>3</td></tr>
                            <tr><td className={styles.textLeft}>CD & Video</td><td>6152</td></tr>
                            <tr><td className={styles.textLeft}>Library Automation Software</td><td>2</td></tr>
                            <tr><td className={styles.textLeft}>Weeding (Hard & Soft)</td><td>232</td></tr>
                            <tr><td className={styles.textLeft}>Rare Book Collections</td><td>81</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* E-Journals */}
                <h2 className={styles.ajcasH2}>List of E-Journals</h2>
                <div className={styles.tableCard}>
                    <table className={styles.ajcasTable}>
                        <thead>
                            <tr>
                                <th>S No</th>
                                <th>E-Journal Subscription</th>
                                <th>Web Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["AICTE - IEEE - IEI Explore", "ASME Explore", "British Library Online Membership", "National Digital Library (NDL)", "Knimubus is cloud based elibrary"].map((name, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td className={styles.textLeft}>{name}</td>
                                    <td><a href="#" className={styles.tableBtn}>Click Here</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* E-Newspapers */}
                <h2 className={styles.ajcasH2}>List of Newspapers (E-Newspapers)</h2>
                <div className={styles.tableCard}>
                    <table className={styles.ajcasTable}>
                        <thead>
                            <tr>
                                <th>S No</th>
                                <th>Newspaper Name</th>
                                <th>Web Site (E-Newspaper)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["Times of India", "Indian Express", "Employment News", "Reader Digest", "C.S.R"].map((name, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td className={styles.textLeft}>{name}</td>
                                    <td><a href="#" className={styles.tableBtn}>Click Here</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* LIBRARY RULES SECTION */}
            <div className={styles.rulesContainer}>
                <h2 className={styles.rulesTitle}>Library Rules & Regulations</h2>
                <div className={styles.rulesGrid}>
                    {[
                        "Each student can use the Computer in Digital Library for a specified period only.",
                        "Students must make a compulsory entry in the log book before switching on the terminal.",
                        "Use of computers is not allowed during class hours except Library hours.",
                        "Students are not allowed to use their own floppies/CDs.",
                        "Playing games on library computers is strictly prohibited.",
                        "Students should shutdown the system properly. If unable, contact the staff-in-charge.",
                        "Students are responsible for any damage to systems or CDs.",
                        "Copying files from CDs to Hard-disk or deleting files in Hard-disks is strictly prohibited."
                    ].map((rule, i) => (
                        <div key={i} className={styles.ruleCard}>
                            <p>{rule}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LibraryPortal;
