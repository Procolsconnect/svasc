import React, { useEffect } from 'react';
import styles from './Statistics.module.css';
import Hero from '../components/Common/Hero';

const Statistics = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const placementData = [
        { year: '2020-21', companies: 84, registered: 612, placed: 584, offers: 642 },
        { year: '2019-20', companies: 76, registered: 580, placed: 556, offers: 598 },
        { year: '2018-19', companies: 72, registered: 545, placed: 521, offers: 565 },
        { year: '2017-18', companies: 68, registered: 512, placed: 498, offers: 530 },
        { year: '2016-17', companies: 65, registered: 480, placed: 462, offers: 495 },
        { year: '2015-16', companies: 60, registered: 450, placed: 435, offers: 460 },
        { year: '2014-15', companies: 55, registered: 420, placed: 405, offers: 425 },
        { year: '2013-14', companies: 50, registered: 390, placed: 375, offers: 390 },
        { year: '2012-13', companies: 45, registered: 360, placed: 342, offers: 355 },
        { year: '2011-12', companies: 40, registered: 320, placed: 305, offers: 315 },
        { year: '2010-11', companies: 35, registered: 280, placed: 265, offers: 275 },
        { year: '2009-10', companies: 30, registered: 240, placed: 228, offers: 235 },
    ];

    const recruiters = [
        { name: 'Tech Mahindra', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tech_Mahindra_Logo.svg/512px-Tech_Mahindra_Logo.svg.png' },
        { name: 'Axis Bank', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/512px-Axis_Bank_logo.svg.png' },
        { name: 'HDFC Bank', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png' },
        { name: 'Sutherland', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Sutherland_Global_Services_Logo.svg/512px-Sutherland_Global_Services_Logo.svg.png' },
        { name: 'Allsec Technologies', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Allsec_Technologies_logo.png/512px-Allsec_Technologies_logo.png' },
        { name: 'Infosys', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/512px-Infosys_logo.svg.png' },
        { name: 'TCS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png' },
        { name: 'Wipro', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Logo.svg/512px-Wipro_Logo.svg.png' },
        { name: 'Cognizant', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/512px-Cognizant_logo_2022.svg.png' },
        { name: 'Capgemini', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/512px-Capgemini_201x_logo.svg.png' },
        { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png' },
        { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png' }
    ];

    const starPerformers = [
        { name: 'Rahul Kumar', dept: 'DCFS', company: 'Crowe', domain: 'Cyber Security' },
        { name: 'Priya Dharshini', dept: 'CSHM', company: 'Marriott', domain: 'Hospitality' },
        { name: 'Sanjay S', dept: 'BCA', company: 'TCS', domain: 'ITES' },
        { name: 'Anitha R', dept: 'B.Com', company: 'HDFC', domain: 'Banking' },
        { name: 'Vijay A', dept: 'B.Sc CS', company: 'Infosys', domain: 'IT' },
    ];

    return (
        <div className={styles.statisticsApp}>
            {/* Hero Section */}
            <Hero
                title="Statistics"
                description="Excellence • Discipline • Sportsmanship"
                image="https://images.unsplash.com/photo-1438109491414-7198515b166b?q=90&fm=jpg"
            />

            {/* Focus Section */}
            <section className={styles.focusSection}>
                <div className={`${styles.container} ${styles.focusContent}`}>
                    <div className={styles.focusImageContent}>
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                            alt="Student Excellence"
                        />
                    </div>
                    <div className={styles.focusTextContent}>
                        <h2>Bridging Ambition with Opportunity</h2>
                        <p>
                            At Shree Venkateshwara Arts and Science College, our commitment to professional excellence is reflected in our robust placement statistics and industry partnerships. We provide a holistic environment where students are nurtured with both academic rigor and industry-specific skills.
                        </p>
                        <p>
                            Our career development initiatives ensure that every student is equipped to meet the challenges of the global job market, resulting in consistently high placement records across diverse sectors.
                        </p>
                    </div>

                </div>
            </section>

            {/* Placement Statistics Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Placement Statistics</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Academic Year</th>
                                    <th>No. of Companies Visited</th>
                                    <th>No. of Students Registered for Placement</th>
                                    <th>No. of Students Placed</th>
                                    <th>No. of Placement Offer Letters Received</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placementData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.year}</td>
                                        <td>{data.companies}</td>
                                        <td>{data.registered}</td>
                                        <td>{data.placed}</td>
                                        <td>{data.offers}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Top Recruiters Section */}
            <section className={`${styles.section} ${styles.bgSurface}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Top Recruiters (2018–2025)</h2>
                    <div className={styles.recruitersGrid}>
                        {recruiters.map((recruiter, index) => (
                            <div key={index} className={styles.recruiterCard}>
                                <img src={recruiter.src} alt={recruiter.name} className={styles.recruiterLogo} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Star Performers Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Star Performers – Student Highlights</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Department</th>
                                    <th>Hiring Company</th>
                                    <th>Domain</th>
                                </tr>
                            </thead>
                            <tbody>
                                {starPerformers.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.dept}</td>
                                        <td>{student.company}</td>
                                        <td>{student.domain}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Recruiter Categories Section */}
            <section className={styles.section}>
                <div className={`${styles.container} ${styles.recruiterCategories}`}>
                    <div className={styles.focusImageContent}>
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                            alt="Student Group"
                        />
                    </div>
                    <div className={styles.categoryList}>
                        <h2>Recruiter Categories</h2>

                        <div className={styles.categoryItem}>
                            <div className={styles.categoryIcon}>»</div>
                            <div className={styles.categoryText}>
                                <strong>IT & ITES:</strong> Infosys, TCS, Allsec, Hexaware, Wipro, Cognizant
                            </div>
                        </div>

                        <div className={styles.categoryItem}>
                            <div className={styles.categoryIcon}>»</div>
                            <div className={styles.categoryText}>
                                <strong>Banking & Finance:</strong> Axis Bank, HDFC Bank, ICICI Bank, IDBI
                            </div>
                        </div>

                        <div className={styles.categoryItem}>
                            <div className={styles.categoryIcon}>»</div>
                            <div className={styles.categoryText}>
                                <strong>Hospitality:</strong> Hyatt, Radisson, Vivanta, Sterling, Hard Rock
                            </div>
                        </div>

                        <div className={styles.categoryItem}>
                            <div className={styles.categoryIcon}>»</div>
                            <div className={styles.categoryText}>
                                <strong>BPO/KPO & EdTech:</strong> Sutherland, [24]7.ai, Focus Edumatics
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Statistics;
