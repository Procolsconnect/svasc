import React from 'react';
import './Accreditation.css';

const Accreditation = () => {
    return (
        <section className='accreditation'>
            <span className='accreditation-span'>Quality You Can Trust</span>
            <h2>Accreditation and academic Recognitions</h2>
            <p>
                SVASC College of Arts & Science is accredited by top educational bodies as a trusted and certified arts and science college , ensuring high academic standards and quality education. Our certifications reflect our commitment to excellence, innovation, and student success.,
            </p>
            <span className="bg-watermark">SVASC</span>
            <div className="cards">
                <div className="card">
                    <div className="card-img-wrapper">
                        <img
                            src="/SVCAS-Logo.jpg"
                            alt="UGC Recognition"
                        />
                    </div>
                    <div className="card-content">
                        <h3>UGC Recognition</h3>
                        <p>SVASC – (University Grants Commission) UGC recognized college in Coimbatore, under sections 2(f) &amp; 12(B)</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-wrapper">
                        <img
                            src="/bharathiar-university.png"
                            alt="Affiliated to Bharathiar University"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Under Bharathiar University</h3>
                        <p>SVASC College Of Arts And Science – Affiliated to Bharathiar University, Coimbatore</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-wrapper">
                        <img
                            src="/NACC.png"
                            alt="NAAC A+ Accreditation"
                        />
                    </div>
                    <div className="card-content">
                        <h3>NAAC A+ Accreditation</h3>
                        <p>SVASC has been accredited by the National Assessment and Accreditation Council with an A+ grade</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accreditation;
