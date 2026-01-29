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
                    <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
                        alt="UGC Recognition"
                    />
                    <div className="card-content">
                        <h3>UGCRecognition</h3>
                        <p> SVASC – (University Grants Commission) UGCrecognized colleges in coimbatore,under the sections of 2(f) & 12(B)</p>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
                        alt="Affiliated to Bharathiar University"
                    />
                    <div className="card-content">
                        <h3>Under Bharathiar University</h3>
                        <p> SVASC College Of Arts And Science- Affiliated to Bharathiar University College in Coimbatore</p>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                        alt="NAAC A+ Accreditation"
                    />
                    <div className="card-content">
                        <h3>NAAC A+ Accreditation</h3>
                        <p> SVASC has been accredited by the National Assessment and Accreditation Counci with an A+ grade</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accreditation;
