import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import './Exam.css';
import Hero from '../components/Common/Hero';


const SVASCExamination = () => {
  const [activeSection, setActiveSection] = useState('bu');
  const [typedText, setTypedText] = useState('');

  // Typing animation effect
  useEffect(() => {
    const text = 'SVASC Examination';
    let index = 0;
    const speed = 120;

    const typeEffect = () => {
      if (index < text.length) {
        setTypedText(text.substring(0, index + 1));
        index++;
        setTimeout(typeEffect, speed);
      }
    };

    typeEffect();
  }, []);

  // Lucide icons initialization
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const handleCardClick = (filePath) => {
    window.open(filePath, '_blank');
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const buExams = [
    {
      id: 1,
      icon: '📄',
      title: 'Model Examination – October 2025',
      file: 'files/model_exam_october_2025.pdf',
    },
    {
      id: 2,
      icon: '📄',
      title: 'Seating Arrangement – 28-10-2025',
      file: 'files/seating_28_10_2025.pdf',
    },
    {
      id: 3,
      icon: '📄',
      title: 'Seating Arrangement – 29-10-2025',
      file: 'files/seating_29_10_2025.pdf',
    },
  ];

  const ciaExams = [
    {
      id: 1,
      icon: '📄',
      title: 'CIA Test – I (September 2025)',
      file: 'files/cia_test1_sep_2025.pdf',
    },
    {
      id: 2,
      icon: '📄',
      title: 'PG CIA Schedule – October 2025',
      file: 'files/pg_cia_oct_2025.pdf',
    },
  ];

  return (
    <div className="svasc-root">
      {/* Jumbotron Section */}
     <Hero 
     title="SVASC Examination"
     description="Stay updated with examination schedules, notifications, and important announcements."
     image="https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c"
     />

      {/* Hero Section */}
      <section className="svasc-hero-section">
        <div className="svasc-hero-container">
          {/* Left Content */}
          <div className="svasc-hero-left">
            {/* Pill Badge */}
            <div className="svasc-pill-badge">
              <span className="svasc-badge-dot"></span>
              Academic Year 2024-25
            </div>

            {/* Headline */}
            <h1 className="svasc-hero-title ">
              SVASC College <br />
              <span className="svasc-hero-subtitle">Examination Portal.</span>
            </h1>

            {/* Description */}
            <p className="svasc-hero-description">
              Access your examination schedules, results, and academic resources all in one place.
              Streamlined examination management for students and faculty.
            </p>
          </div>

          {/* Right Visuals Grid */}
          <div className="svasc-hero-right">
            <div className="svasc-image-grid">
              {/* Tall Image Left */}
              <div className="svasc-image-container svasc-image-tall">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop"
                  alt="Students in Classroom"
                  className="svasc-image"
                />
                <div className="svasc-image-overlay"></div>
                <div className="svasc-image-label">
                  <span className="svasc-image-label-tag">Academic</span>
                  <p className="svasc-image-label-text">Examination Hall</p>
                </div>
              </div>

              {/* Top Right Image */}
              <div className="svasc-image-container">
                <div className="svasc-image-badge">
                  <div className="svasc-image-badge-dot"></div>
                  <span>Active</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
                  alt="Study Materials"
                  className="svasc-image"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="svasc-image-container">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop"
                  alt="Library"
                  className="svasc-image"
                />
              </div>
            </div>

            {/* Floating Exam Info Card */}
            <div className="svasc-floating-card">
              <div className="svasc-floating-card-header">
                <span className="svasc-floating-card-label">Exam Schedule</span>
                <MoreHorizontal size={16} />
              </div>

              <div className="svasc-floating-card-content">
                <div className="svasc-floating-card-item">
                  <div className="svasc-floating-card-icon">
                    <Calendar size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="svasc-floating-card-title">Semester Exams</h4>
                    <span className="svasc-floating-card-date">Jan 20 - Feb 05</span>
                  </div>
                </div>

                <div className="svasc-floating-card-box ">
                  <span className="svasc-floating-card-label-text">Total Subjects</span>
                  <span className="svasc-floating-card-value">6 Papers</span>
                </div>

                <div className="svasc-floating-card-status">
                  <CheckCircle2 size={14} />
                  <span>Scheduled</span>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="svasc-decorative-circle">
              <svg viewBox="0 0 100 100" className="svasc-circle-svg">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                ></path>
                <text>
                  <textPath href="#circlePath" className="svasc-circle-text">
                    • Excellence • Education
                  </textPath>
                </text>
              </svg>
              <div className="svasc-circle-center">
                <ArrowUpRight size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <div className="svasc-header">
        <div className="svasc-header-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/86/Sri_Vasavi_College_logo.png"
            alt="SVASC Logo"
            className="svasc-header-logo"
          />

          <div className="svasc-header-content">
            <h1 className="svasc-header-title">SVASC Examination</h1>
            <h2 className="svasc-header-subtitle">Bharathiyar University – Coimbatore</h2>
            <a href="#" className="svasc-header-link">
              https://svasc.ac.in/examinations
            </a>
            <p className="svasc-header-description">
              Official examination portal for Bharathiyar University and Autonomous examinations
              including Continuous Internal Assessment, model examinations, schedules and seating arrangements.
            </p>
          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/3b/Bharathiar_University_logo.png"
            alt="BU Logo"
            className="svasc-header-logo"
          />
        </div>

        {/* Button Bar */}
        <div className="svasc-buttons-container">
          <button
            className={`svasc-button ${activeSection === 'bu' ? 'svasc-button-active' : ''}`}
            onClick={() => handleSectionChange('bu')}
          >
            Bharathiyar University
          </button>
          <button
            className={`svasc-button ${activeSection === 'cia' ? 'svasc-button-active' : ''}`}
            onClick={() => handleSectionChange('cia')}
          >
            Continuous Internal Assessment
          </button>
        </div>
      </div>

      {/* Time Table Heading */}
      <h1 className="svasc-time-table-heading">Time Table</h1>

      {/* Exam Sections */}
      <div className="svasc-sections-wrapper">
        {/* Bharathiyar University Section */}
        <div
          className={`svasc-section ${activeSection === 'bu' ? 'svasc-section-active' : ''}`}
          id="bu"
        >
          {buExams.map((exam) => (
            <div
              key={exam.id}
              className="svasc-card"
              onClick={() => handleCardClick(exam.file)}
            >
              <div className="svasc-card-icon">{exam.icon}</div>
              <div className="svasc-card-title">{exam.title}</div>
            </div>
          ))}
        </div>

        {/* CIA Section */}
        <div
          className={`svasc-section ${activeSection === 'cia' ? 'svasc-section-active' : ''}`}
          id="cia"
        >
          {ciaExams.map((exam) => (
            <div
              key={exam.id}
              className="svasc-card"
              onClick={() => handleCardClick(exam.file)}
            >
              <div className="svasc-card-icon">{exam.icon}</div>
              <div className="svasc-card-title">{exam.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam Cell Overview Section */}
      <section className="svasc-examcell-section">
        <h1 className="svasc-examcell-title">About the Exam Cell</h1>

        <div className="svasc-examcell-motto">
          <h3>Motto</h3>
          <p>"Upholding Integrity, Ensuring Transparency, Driving Excellence"</p>
        </div>

        <div className="svasc-examcell-container">
          {/* Vision & Mission */}
          <div className="svasc-examcell-card">
            <h3>Vision</h3>
            <p>We strive to conduct examinations fairly and efficiently, supporting the development of knowledgeable, ethical, and responsible graduates.</p>
          </div>

          <div className="svasc-examcell-card">
            <h3>Mission</h3>
            <ol>
              <li>To conduct examinations in a transparent and systematic manner.</li>
              <li>To provide timely examination services and publish results promptly.</li>
              <li>To maintain confidentiality and accuracy in all examination activities.</li>
              <li>To use modern technology for effective examination management.</li>
              <li>To uphold ethics and academic integrity in the examination process.</li>
            </ol>
          </div>

          {/* Objectives */}
          <div className="svasc-examcell-card">
            <h3>Objectives</h3>
            <ul>
              <li>To conduct internal and external examinations smoothly.</li>
              <li>To ensure fairness and transparency in examinations.</li>
              <li>To publish timetables and results on time.</li>
              <li>To maintain examination records properly.</li>
              <li>To provide quick and effective services to students and staff.</li>
              <li>To encourage discipline and prevent malpractices.</li>
              <li>To support continuous learning and academic excellence.</li>
              <li>To follow university rules and regulations effectively.</li>
            </ul>
          </div>

          {/* Functionality */}
          <div className="svasc-examcell-card">
            <h3>Functionality</h3>
            <ul>
              <li>Planning and conducting internal and university examinations.</li>
              <li>Preparing examination timetables and seating arrangements.</li>
              <li>Maintaining confidentiality of examination records.</li>
              <li>Processing examination applications and related documents.</li>
              <li>Issuing hall tickets and examination notifications.</li>
              <li>Maintaining student examination records and documents.</li>
              <li>Preventing malpractices and ensuring discipline during examinations.</li>
              <li>Coordinating with Bharathiar University regarding examination matters.</li>
            </ul>
          </div>
        </div>

        {/* Roles & Responsibilities */}
        <div className="svasc-examcell-card" style={{ marginBottom: '40px' }}>
          <h3>Roles and Responsibilities</h3>
          <ul>
            <li>Conduct internal and university examinations smoothly and efficiently.</li>
            <li>Ensure transparency, confidentiality, and fairness in all examination processes.</li>
            <li>Prepare and maintain examination records and reports.</li>
            <li>Coordinate with departments regarding examination activities.</li>
            <li>Distribute examination-related information to students and staff.</li>
            <li>Ensure compliance with university rules and regulations.</li>
            <li>Address examination-related grievances and provide necessary support.</li>
            <li>Promote ethical practices and academic integrity.</li>
          </ul>
        </div>

        {/* Members */}
        <div className="svasc-examcell-card">
          <h3>Exam Cell Members</h3>
          <div className="svasc-table-wrapper">
            <table className="svasc-table">
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>Name of the Staff</th>
                  <th>Department</th>
                  <th>E-mail ID</th>
                  <th>Mobile No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><strong>Dr. P. Rajasekar</strong></td>
                  <td>Management</td>
                  <td><a href="mailto:rajasekar@svasc.org">rajasekar@svasc.org</a></td>
                  <td><a href="tel:7871111105">7871111105</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>Dr. A. Savitha</strong></td>
                  <td>Commerce</td>
                  <td><a href="mailto:savitha@svasc.org">savitha@svasc.org</a></td>
                  <td><a href="tel:9788654463">9788654463</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>Mr. L. Sridhar</strong></td>
                  <td>Mathematics</td>
                  <td><a href="mailto:sridhar@svasc.org">sridhar@svasc.org</a></td>
                  <td><a href="tel:6369870746">6369870746</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>Ms. D. Sathyaruba</strong></td>
                  <td>BCA</td>
                  <td><a href="mailto:sathyaruba@svasc.org">sathyaruba@svasc.org</a></td>
                  <td><a href="tel:7395881163">7395881163</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SVASCExamination;