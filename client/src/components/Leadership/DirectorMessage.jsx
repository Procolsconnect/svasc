import React from 'react';
import Leadership from './Leadership';
import styles from './Leadership.module.css';

const DirectorMessage = () => {
    return (
        <Leadership
            designation="Director"
            name="Director Name"
            qualification="Qualifications"
            image="https://via.placeholder.com/400x500" // Placeholder image
            quote="Innovation in education is the key to unlocking the potential of the next generation."
        >
            <p className={styles.introText}>
                <span className={styles.arrow}>»</span> Welcome to Shree Venkateshwara Arts and Science College. As the Director, it is my privilege to be part of an institution that is dedicated to shaping the future of our students through innovative teaching methodologies and a curriculum that meets global standards.
            </p>

            <p className={styles.descriptionText}>
                In today's rapidly evolving world, adaptability and continuous learning are crucial. We strive to equip our students with not only technical knowledge but also the critical thinking and problem-solving skills necessary to navigate the challenges of the modern workforce.
            </p>

            <p className={styles.descriptionText}>
                We strongly encourage research, creativity, and entrepreneurship among our students. Our goal is to foster an environment where ideas can flourish and where students are inspired to become change-makers in their respective fields.
            </p>
        </Leadership>
    );
};

export default DirectorMessage;
