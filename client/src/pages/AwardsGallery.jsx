import React, { useState } from 'react';
import styles from './AwardsGallery.module.css';
import { ChevronsDown } from 'lucide-react';
import Hero from '../components/Common/Hero';

const imageCollections = {
    academic: {
        title: "Academic Certificates",
        column1: [
            { src: "https://images.unsplash.com/photo-1544652272-870025ce2528?auto=format&fit=crop&q=80&w=800", alt: "Academic Certificate 1" },
            { src: "https://images.unsplash.com/photo-1544652417-2342df328d88?auto=format&fit=crop&q=80&w=800", alt: "Academic Certificate 2" },
            { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", alt: "Academic Certificate 3" }
        ],
        column2: [
            { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", alt: "Academic Certificate 4" },
            { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", alt: "Academic Certificate 5" }
        ]
    },
    professional: {
        title: "Professional/Staff Certificates",
        column1: [
            { src: "https://images.unsplash.com/photo-1589330694653-99938966289b?auto=format&fit=crop&q=100&w=800", alt: "Professional Certificate 1" },
            { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=100&w=800", alt: "Professional Certificate 2" }
        ],
        column2: [
            { src: "https://images.unsplash.com/photo-1454165833968-4e71580bcba7?auto=format&fit=crop&q=100&w=800", alt: "Professional Certificate 3" }
        ]
    },
    achievement: {
        title: "Achievement Certificates",
        column1: [
            { src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800", alt: "Achievement Certificate 1" }
        ],
        column2: [
            { src: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=800", alt: "Achievement Certificate 2" }
        ]
    },
    industry: {
        title: "Industry/Professional Certificates",
        column1: [
            { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", alt: "Industry Certificate 1" }
        ],
        column2: [
            { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", alt: "Industry Certificate 2" }
        ]
    },
    special: {
        title: "Special Purpose Certificates",
        column1: [
            { src: "https://images.unsplash.com/photo-1507537297325-5bcc7229b991?auto=format&fit=crop&q=80&w=800", alt: "Special Purpose Certificate 1" }
        ],
        column2: [
            { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", alt: "Special Purpose Certificate 2" }
        ]
    },
    research: {
        title: "Research Certificates",
        column1: [
            { src: "https://images.unsplash.com/photo-1453722751176-809f971167d1?auto=format&fit=crop&q=80&w=800", alt: "Research Certificate 1" }
        ],
        column2: [
            { src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800", alt: "Research Certificate 2" }
        ]
    }
};

const AwardsGallery = () => {
    const [activeCategory, setActiveCategory] = useState('academic');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setIsMenuOpen(false);
    };

    const currentData = imageCollections[activeCategory];

    return (
        <>
            <Hero
                title="Awards & Recognition"
                description="Celebrating Excellence, Achievement, and Innovation"
                image="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1600"
            />
            <div className={styles.wrapper}>
                <aside className={styles.sideContent}>
                    <div className={styles.sideHeader}>
                        <h2 className={styles.logo}>SVASC</h2>
                        <div className={styles.toggleBtn} onClick={toggleMenu}>
                            <ChevronsDown size={30} />
                        </div>
                    </div>

                    <nav className={styles.navMenu}>
                        <span className={styles.navLink}>Certificate Categories</span>
                    </nav>

                    <div className={`${styles.categories} ${isMenuOpen ? styles.categoriesOpen : ''}`}>
                        {Object.keys(imageCollections).map((key) => (
                            <h2 
                                key={key}
                                className={`${styles.category} ${activeCategory === key ? styles.categoryActive : ''}`}
                                onClick={() => handleCategoryChange(key)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </h2>
                        ))}
                    </div>
                </aside>

                <main className={styles.mainContent}>
                    <h2 className={styles.categoryTitle}>{currentData.title}</h2>
                    <div className={styles.galleryColumns}>
                        <div className={styles.column}>
                            {currentData.column1.map((img, idx) => (
                                <img key={idx} src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
                            ))}
                        </div>
                        <div className={styles.column}>
                            {currentData.column2.map((img, idx) => (
                                <img key={idx} src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};


export default AwardsGallery;
