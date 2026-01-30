import React, { useState, useEffect } from 'react';
import Hero from '../components/Common/Hero';
import './Sports.css';


const SVASCSports = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel effect
  useEffect(() => {
    const images = [
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
      'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg'
    ];

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const sportHouses = [
    {
      id: 1,
      name: 'House 1',
      subtitle: 'Warriors',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      description: 'Excellence in Athletics'
    },
    {
      id: 2,
      name: 'House 2',
      subtitle: 'Champions',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
      description: 'Mastery in Sports',
      offset: true
    },
    {
      id: 3,
      name: 'House 3',
      subtitle: 'Titans',
      image: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg',
      description: 'Victory & Pride'
    },
    {
      id: 4,
      name: 'House 4',
      subtitle: 'Legacy',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp',
      description: 'Tradition & Excellence',
      custom: true,
      offset: true
    }
  ];

  const images = [
    'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
    'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg'
  ];

  const outdoorSports = [
    'Athletics',
    'Basketball',
    'Football',
    'Volleyball',
    'Cricket',
    'Kabaddi'
  ];

  const indoorSports = [
    'Table Tennis',
    'Badminton',
    'Chess',
    'Carrom'
  ];

  return (
    <div className="svasc-sports-root">
      <Hero
        title="SVASC Sports"
        description="Excellence • Discipline • Sportsmanship"
        image="https://images.unsplash.com/photo-1438109491414-7198515b166b?q=90&fm=jpg"
      />

      {/* ABOUT SECTION */}
      <section className="svasc-sports-about">
        <div className="svasc-sports-about-container">
          <div className="svasc-sports-about-row">

            {/* TEXT CONTENT */}
            <div className="svasc-sports-about-text">
              <div className="svasc-sports-about-label">About SVASC Sports</div>

              <h2 className="svasc-sports-about-title">
                Sports Excellence at <span className="svasc-sports-gold-text">SVASC</span>
              </h2>

              <p className="svasc-sports-about-description">
                Shree Venkateshwara Arts and Science College is deeply committed to nurturing
                sporting talent alongside academic excellence.
              </p>

              <p className="svasc-sports-about-description">
                With modern infrastructure, professional coaching, and continuous support
                for university, state, and national competitions — SVASC empowers students
                to become champions in sports and life.
              </p>
            </div>

            {/* IMAGE WITH CAROUSEL */}
            <div className="svasc-sports-about-image">
              <div className="svasc-sports-image-container">
                <img
                  src={images[currentImageIndex]}
                  alt="SVASC Sports"
                  className="svasc-sports-carousel-image"
                  key={currentImageIndex}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPORTS CATEGORIES SECTION */}
      <section className="svasc-sports-categories">
        <div className="svasc-sports-categories-bg">
          <img
            src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg"
            alt="Sports Background"
          />
        </div>
        <div className="svasc-sports-categories-overlay"></div>

        <div className="svasc-sports-categories-container">
          <div className="svasc-sports-categories-grid">

            {/* OUTDOOR SPORTS */}
            <div className="svasc-sports-category-column">
              <h2 className="svasc-sports-category-title">Outdoor Sports</h2>
              <div className="svasc-sports-category-list">
                {outdoorSports.map((sport, index) => (
                  <div key={index} className="svasc-sports-category-item">
                    » {sport}
                  </div>
                ))}
              </div>
            </div>

            {/* INDOOR SPORTS */}
            <div className="svasc-sports-category-column">
              <h2 className="svasc-sports-category-title">Indoor Sports</h2>
              <div className="svasc-sports-category-list">
                {indoorSports.map((sport, index) => (
                  <div key={index} className="svasc-sports-category-item">
                    » {sport}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPORT HOUSES SECTION */}
      <section className="svasc-sports-houses">
        <div className="svasc-sports-houses-container">

          <div className="svasc-sports-houses-header">
            <span className="svasc-sports-houses-label">SVASC Sport Houses</span>
            <h2 className="svasc-sports-houses-title">The 4 houses of our College</h2>
          </div>

          <div className="svasc-sports-houses-grid">
            {sportHouses.map((house) => (
              <div
                key={house.id}
                className={`svasc-sports-house-card ${house.offset ? 'svasc-sports-house-offset' : ''}`}
              >
                <div className="svasc-sports-house-image-container">
                  {house.custom && (
                    <div className="svasc-sports-house-custom-overlay">
                      <span className="svasc-sports-house-custom-badge">Custom Build</span>
                    </div>
                  )}
                  <img
                    src={house.image}
                    alt={house.name}
                    className={`svasc-sports-house-image ${house.custom ? 'svasc-sports-house-image-grayscale' : ''}`}
                  />
                </div>
                <div className="svasc-sports-house-info">
                  <div className="svasc-sports-house-header-row">
                    <h3 className="svasc-sports-house-name">{house.name}</h3>
                    <span className="svasc-sports-house-subtitle">{house.subtitle}</span>
                  </div>
                  <div className="svasc-sports-house-footer-row">
                    <span className="svasc-sports-house-description">{house.description}</span>
                    <span className="svasc-sports-house-status">{house.custom ? 'Inquire' : 'Active'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default SVASCSports;