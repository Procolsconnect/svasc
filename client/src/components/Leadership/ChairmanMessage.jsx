import React from 'react';
import Leadership from './Leadership';
import styles from './Leadership.module.css';

import Hero from '../Common/Hero';

const DirectorMessage = () => {
    return (
        <>
            <Hero
                title="Chairman's Message"
                description="Innovation in education and shaping the future of our students."
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            />
            <Leadership
                designation="Chairman"
                name="Thiru. P. VENKATACHALAM"
                qualification="Qualifications"
                image="https://via.placeholder.com/400x500" // Placeholder image
                quote="Innovation in education is the key to unlocking the potential of the next generation."
            >
                <p className={styles.introText}>
                    <span className={styles.arrow}>»</span> Shree Venkateshwara group of institutions set to take the mission of implementation of the newest educational methodologies which enables the innovative thinking of students and initiative performance . It also encourages independent thinking and decision making of students,thus enabling them to develop wholesome personalities.
                </p>

                <p className={styles.descriptionText}>
                   Shree Venkateshwara Group of Institutions takes keen interest in updating its infrastructures to meet the technological revolution and new challenges of the modern era. SVASC has a reputation as an innovative and dynamic educational institution that maintains the highest standards of norms and provides complete student support systems using latest developments in instructional technology with utmost care.
                </p>

                <p className={styles.descriptionText}>
                SVASC’s strong vocational emphasis and its close links with business and industry ensure that our undergraduate programmes keep pace with change and remain firmly linked to the needs of the future. Experience education that works on both the counts only at Shree Venkateshwara Arts and Science (Co – Education) College.
                </p>
            </Leadership>
        </>
    );
};

export default DirectorMessage;
