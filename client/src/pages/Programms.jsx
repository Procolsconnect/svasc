import React, { useState } from 'react';
import styles from './Programms.module.css';
import { ArrowRight, ChevronRight, GraduationCap, BookOpen, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Common/Hero';

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')       // Remove all non-word chars
        .replace(/--+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')               // Trim - from start of text
        .replace(/-+$/, '');              // Trim - from end of text
};

const Schools = () => {

    const [activeTab, setActiveTab] = useState("UG Programmes");
    const [activeSchoolIndex, setActiveSchoolIndex] = useState(0);

    // Mock Data Structure
    const programsData = {
        "UG Programmes": [
            {
                name: "School of Computer Science & IT",
                acronym: "SCSIT",
                programs: [
                    { title: "B.Sc. Computer Science", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "Bachelor of Computer Applications (BCA)", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Sc. Information Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Sc. Data Science", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            },
            {
                name: "School of Commerce",
                acronym: "SOC",
                programs: [
                    { title: "B.Com General", image: "https://images.unsplash.com/photo-1454165833762-02ad50c748e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Com Computer Applications", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Com Professional Accounting", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            },
            {
                name: "School of Management",
                acronym: "SOM",
                programs: [
                    { title: "BBA Business Administration", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "BBA Computer Applications", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            },
            {
                name: "School of Humanities & Sciences",
                acronym: "SOHS",
                programs: [
                    { title: "B.A. English Literature", image: "https://images.unsplash.com/photo-1457369804590-52c65a46227d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Sc. Physics", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Sc. Visual Communication", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "B.Sc. Psychology", image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            }
        ],
        "PG Programmes": [
            {
                name: "School of Computer Science",
                acronym: "SCS",
                programs: [
                    { title: "M.Sc. Computer Science", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "M.Sc. Data Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            },
            {
                name: "School of Commerce & Management",
                acronym: "SCM",
                programs: [
                    { title: "M.Com General", image: "https://images.unsplash.com/photo-1454165833762-02ad50c748e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "Master of Business Administration (MBA)", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            }
        ],
        "Ph.D": [
            {
                name: "Research & Development",
                acronym: "R&D",
                programs: [
                    { title: "Ph.D. Computer Science", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "Ph.D. Commerce", image: "https://images.unsplash.com/photo-1454165833762-02ad50c748e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
                    { title: "Ph.D. Management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
                ]
            }
        ]
    };

    const currentSchools = programsData[activeTab] || [];
    const activeSchoolData = currentSchools[activeSchoolIndex] || {};

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveSchoolIndex(0); // Reset to first school when tab changes
    };

    return (
        <div className={styles.wrapper}>

            {/* HERO SECTION */}
            <Hero
                title="ACADEMIC PROGRAMS"
                description="Discover world-class education and gain the skills to shape the future."
                image="https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c"
            />

            {/* NEW PROGRAM SECTION */}
            <section className={styles.programSection}>
                <div className={styles.container}>
                    <div className={styles.gridContainer}>
                        {/* Images */}
                        <div className={styles.imagesOrder}>
                            <div className={styles.imageGrid}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
                                        alt="SVASC Campus"
                                        className={styles.sectionImage}
                                    />
                                </div>
                                <div className={`${styles.imageWrapper} ${styles.mt8}`}>
                                    <img
                                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop"
                                        alt="SVASC Students"
                                        className={styles.sectionImage}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className={styles.contentOrder}>
                            <h2 className={styles.sectionTitle}>
                                SVASC Academic Programs & Learning Opportunities
                            </h2>
                            <p className={styles.sectionDescription}>
                                SVASC offers a wide range of career-focused academic programs designed to prepare students for higher education, research, and professional success through quality teaching and modern infrastructure.
                            </p>
                            <p className={styles.sectionSubDescription}>
                                Undergraduate, Postgraduate, and Doctoral programs are delivered by experienced faculty with a strong emphasis on skill development, research, and industry relevance.
                            </p>
                            {/* Highlights */}
                            <div className={styles.highlights}>
                                <div className={styles.iconGroup}>
                                    <div className={styles.iconCircle}>
                                        <GraduationCap size={20} className="text-slate-500" color="#64748b" />
                                    </div>
                                    <div className={styles.iconCircle}>
                                        <BookOpen size={20} className="text-slate-500" color="#64748b" />
                                    </div>
                                    <div className={styles.iconCircle}>
                                        <BadgeCheck size={20} className="text-slate-500" color="#64748b" />
                                    </div>
                                </div>
                                <span className={styles.highlightText}>
                                    UG • PG • PhD Programs with Academic Excellence
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className={styles.headerSection}>
                {/* Tabs */}
                <div className={styles.tabContainer}>
                    {Object.keys(programsData).map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.splitLayout}>
                {/* Left Side: School List */}
                <div className={styles.listSide}>
                    <ul className={styles.schoolList}>
                        {currentSchools.map((school, index) => (
                            <li
                                key={index}
                                className={`${styles.listItem} ${index === activeSchoolIndex ? styles.activeItem : ''}`}
                                onClick={() => setActiveSchoolIndex(index)}
                            >
                                <span className={styles.schoolName}>{school.name}</span>
                                {index === activeSchoolIndex && <ArrowRight className={styles.activeArrow} size={18} />}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Program Cards Grid */}
                <div className={styles.contentSide}>
                    <div className={styles.programsGrid}>
                        {activeSchoolData.programs && activeSchoolData.programs.map((program, idx) => (
                            <Link to={`/program/${slugify(program.title)}`} key={idx} className={styles.programCard}>
                                <img src={program.image} alt={program.title} className={styles.cardImage} />
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>{program.title}</h3>
                                    <div className={styles.cardFooter}>
                                        <div className={styles.arrowCircle}>
                                            <ArrowRight size={20} color="white" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {/* Fallback if no programs */}
                        {(!activeSchoolData.programs || activeSchoolData.programs.length === 0) && (
                            <div className={styles.noData}>No programs listed for this school.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schools;