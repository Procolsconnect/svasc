import React, { useEffect } from 'react';
import './SvascEvents.css';

const SvascEvents = () => {
    useEffect(() => {
        // Load Google Font: Poppins
        const loadFont = () => {
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap';
            link.rel = 'stylesheet';
            if (!document.querySelector(`link[href="${link.href}"]`)) {
                document.head.appendChild(link);
            }
        };

        // Load Font Awesome 4.7.0
        const loadIcons = () => {
            const link = document.createElement('link');
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
            link.rel = 'stylesheet';
            if (!document.querySelector(`link[href="${link.href}"]`)) {
                document.head.appendChild(link);
            }
        };

        loadFont();
        loadIcons();
    }, []);

    return (
        <div id="svasc-events-section">
            <div className="section-header">
                <h1>SVASC Events</h1>
                <h2>Expert Insights and Success Celebrations</h2>
            </div>

            <div className="blog-card-grid">
                <div className="blog-card">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg')" }}></div>
                        <div className="details">
                            <ul>
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p className="read-more"><a href="#">Read More</a></p>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg')" }}></div>
                        <div className="details">
                            <ul>
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p className="read-more"><a href="#">Read More</a></p>
                    </div>
                </div>

                <div className="blog-card alt">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg')" }}></div>
                        <div className="details">
                            <ul>
                                <li className="author"><a href="#">Jane Doe</a></li>
                                <li className="date">July. 15, 2015</li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        <h1>Mastering JS</h1>
                        <h2>Not Java</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p className="read-more"><a href="#">Read More</a></p>
                    </div>
                </div>

                <div className="blog-card alt">
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg')" }}></div>
                        <div className="details">
                            <ul>
                                <li className="author"><a href="#">Jane Doe</a></li>
                                <li className="date">July. 15, 2015</li>
                            </ul>
                        </div>
                    </div>
                    <div className="description">
                        <h1>Mastering JS</h1>
                        <h2>Not Java</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p className="read-more"><a href="#">Read More</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SvascEvents;
