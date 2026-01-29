import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './SVCAS-Logo.jpg';
import { navData } from './navData';

const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = (index) => {
        if (window.innerWidth > 768) {
            setActiveDropdown(index);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        if (window.innerWidth <= 768) {
            setActiveDropdown(activeDropdown === index ? null : index);
        }
    };

    return (
        <header className={`header ${className || ''}`}>
            <div className="header-wrap">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    {/* LEFT */}
                    <div className="left">
                        <img src={Logo} alt="SVASC Logo" />
                        <div className="college-text">
                            <h1>SHREE VENKATESHWARA</h1>
                            <h2>ARTS & SCIENCE (Co-Education)</h2>
                            <span>COLLEGE</span>
                        </div>
                    </div>
                </Link>

                {/* HAMBURGER MENU BUTTON - Mobile Only */}
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={isMenuOpen ? 'open' : ''}></span>
                    <span className={isMenuOpen ? 'open' : ''}></span>
                    <span className={isMenuOpen ? 'open' : ''}></span>
                </button>

                {/* RIGHT */}
                <div className={`right ${isMenuOpen ? 'menu-open' : ''}`}>
                    {/* TOP ROW */}
                    <div className="top-nav">
                        {navData.topNav.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={item.type === 'pill' ? 'top-pill' : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="bottom-nav">
                        {navData.bottomNav.map((item, index) => (
                            <div
                                key={index}
                                className={`nav-item-container ${item.dropdown ? 'has-dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.dropdown ? (
                                    <>
                                        <div
                                            className="nav-link dropdown"
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            {item.label} <span>▾</span>
                                        </div>
                                        <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    className="dropdown-item"
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setActiveDropdown(null);
                                                    }}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="nav-link"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="cta">
                            {navData.cta.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={`btn-${item.type}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

