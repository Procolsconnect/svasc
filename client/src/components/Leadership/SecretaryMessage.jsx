import React from 'react';
import Leadership from './Leadership';
import styles from './Leadership.module.css';

import Hero from '../Common/Hero';

const SecretaryMessage = () => {
    return (
        <>
            <Hero
                title="Secretary's Message"
                description="Our vision and commitment to excellence by Thiru. A. Sengottaiyan, Secretary of SVASC."
                image="https://images.unsplash.com/photo-1523050853064-8521a308975b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            />
            <Leadership
                designation="Secretary"
                name="Thiru. A. SENGOTTAIYAN"
                qualification="Educationist & Philanthropist"
                image="https://via.placeholder.com/400x500" // Placeholder image
                quote="Our mission is to provide quality education that empowers students to become responsible citizens and future leaders."
            >
                <p className={styles.introText}>
                    <span className={styles.arrow}>»</span> It gives me great pride to witness the growth and success of Shree Venkateshwara Arts and Science College. Our institution was founded with a vision to make quality education accessible to all, and today, we stand as a beacon of learning in this region.
                </p>

                <p className={styles.descriptionText}>
                    We believe that education is not just about academic excellence but also about character building and holistic development. Our dedicated faculty and state-of-the-art infrastructure ensure that every student receives the best possible environment to learn, grow, and thrive.
                </p>

                <p className={styles.descriptionText}>
                    As we continue to expand our horizons, we remain committed to our core values of discipline, integrity, and service. I encourage all our students to make the most of the opportunities available here and strive for excellence in all their endeavors.
                </p>
            </Leadership>
        </>
    );
};

export default SecretaryMessage;
