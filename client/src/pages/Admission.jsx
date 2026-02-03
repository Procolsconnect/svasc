import React, { useState } from 'react';
import {
    GraduationCap,
    Smartphone,
    Phone,
    Mail,
    ArrowRight,
    Menu,
    ChevronDown,
    Briefcase,
    Building2,
    Award,
    FlaskConical,
    Globe,
    Users,
    Check,
    Plus,
    X,
    Calendar,
    MessageCircle
} from 'lucide-react';
import styles from './Admission.module.css';

const Admission = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        programme: '',
        specialization: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Admission Form Data:', formData);
        alert('Application Submitted Successfully!');
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const services = [
        { id: 1, title: "Placement Support", icon: <Briefcase />, desc: "Comprehensive placement assistance with tie-ups with top companies like TCS, Zoho, Infosys, and more to ensure excellent career opportunities for our students." },
        { id: 2, title: "World-Class Facilities", icon: <Building2 />, desc: "Modern infrastructure with 25+ well-equipped labs, spacious classrooms, digital libraries, and state-of-the-art learning resources to enhance the educational experience." },
        { id: 3, title: "Training & Skill Development", icon: <Award />, desc: "Industry-focused training programs, workshops, and certifications to develop practical skills and make students industry-ready from day one." },
        { id: 4, title: "Research & Innovation", icon: <FlaskConical />, desc: "Encouraging research culture with dedicated research centers and opportunities for students to engage in innovative projects and publications." },
        { id: 5, title: "Global Internships", icon: <Globe />, desc: "International exposure through global internship programs with partner institutions worldwide, providing students with invaluable cross-cultural experience." },
        { id: 6, title: "Expert Faculty", icon: <Users />, desc: "Highly qualified and experienced faculty members dedicated to providing personalized attention and mentorship to every student for their academic success." }
    ];

    const faqs = [
        { q: "What programs does SVASC Group of Institutions offer?", a: "We offer 25+ programs across Arts, Science, and Nursing streams at UG, PG, and Ph.D levels. Our programs include BCA, BBA, B.Com, BSc, BA, B.Tech, B.Sc Nursing, MCA, MBA, M.Com, MSc, and doctoral programs with NAAC A+ accreditation." },
        { q: "What is the placement record of SVASC Group of Institutions?", a: "We maintain an excellent 98% placement record with partnerships with top companies like TCS, Zoho, Infosys, Wipro, and HCL Technologies. Our dedicated placement cell provides comprehensive support to ensure students secure rewarding career opportunities." },
        { q: "What facilities are available on campus?", a: "Our campus features 25+ modern laboratories, digital libraries, spacious classrooms with smart boards, sports facilities, hostel accommodation, cafeteria, medical facilities, and high-speed internet connectivity across campus." },
        { q: "How can I apply for admission?", a: "You can apply online through our admission portal. Fill out the application form with your details, select your program and specialization, and submit the required documents. The application fee is non-refundable." },
        { q: "Does SVASC offer international opportunities?", a: "Yes! We offer global internship programs with partner institutions worldwide, providing students with international exposure and cross-cultural learning experiences." },
        { q: "What makes SVASC different from other institutions?", a: "SVASC stands out with its NAAC A+ accreditation, 98% placement record, expert faculty, modern infrastructure, industry-focused training, and research opportunities." }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* CUSTOM NAVBAR */}
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.navInner}>
                        {/* Logo Section */}
                        <div className={styles.logoContainer}>
                            <div className={styles.logoIconBg}>
                                <GraduationCap size={24} color="white" />
                            </div>
                            <div className={styles.logoText}>
                                <span className={styles.logoMain}>Shree Venkateshwara</span>
                                <span className={styles.logoSub}>Arts & Science College</span>
                            </div>
                        </div>

                        {/* Desktop Contact Info */}
                        <div className={styles.navContactInfo}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <Smartphone size={16} />
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>Mobile</span>
                                    <div className={styles.contactNumbers}>
                                        <span>+91 63845 55533</span>
                                        <span className={styles.vDivider}>|</span>
                                        <span>+91 63845 55511</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dividerGlow}></div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={16} />
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>Phone</span>
                                    <div className={styles.contactNumbers}>
                                        <span>+91 422 3501700</span>
                                        <span className={styles.vDivider}>|</span>
                                        <span>+91 422 2363400</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dividerGlow}></div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={16} />
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>Email</span>
                                    <a href="mailto:admission@svasc.com" className={styles.contactLink}>
                                        admission@svasc.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className={styles.navCta}>
                            <span>Contact Us</span>
                            <ArrowRight size={16} />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Side Menu */}
                <div className={`${styles.mobileSideMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <div className={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)}></div>
                    <div className={styles.mobileMenuContent}>
                        <div className={styles.mobileMenuHeader}>
                            <div className={styles.logoContainer}>
                                <div className={styles.logoIconBg}>
                                    <GraduationCap size={20} color="white" />
                                </div>
                                <div className={styles.logoText}>
                                    <span className={styles.logoMain}>SVASC</span>
                                </div>
                            </div>
                            <button className={styles.closeMenuBtn} onClick={() => setIsMenuOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className={styles.mobileMenuBody}>
                            <h3 className={styles.sectionTitle}>Get in Touch</h3>

                            <div className={styles.mobileContactList}>
                                {/* Mobile Numbers */}
                                <div className={styles.mobileContactListItem}>
                                    <div className={styles.mobileIconWrapper}>
                                        <Smartphone size={20} />
                                    </div>
                                    <div className={styles.mobileContactDetails}>
                                        <span className={styles.mobileContactLabel}>Mobile</span>
                                        <div className={styles.mobileNumbers}>
                                            <a href="tel:+916384555533">+91 63845 55533</a>
                                            <a href="tel:+916384555511">+91 63845 55511</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Numbers */}
                                <div className={styles.mobileContactListItem}>
                                    <div className={styles.mobileIconWrapper}>
                                        <Phone size={20} />
                                    </div>
                                    <div className={styles.mobileContactDetails}>
                                        <span className={styles.mobileContactLabel}>Phone</span>
                                        <div className={styles.mobileNumbers}>
                                            <a href="tel:+914223501700">+91 422 3501700</a>
                                            <a href="tel:+914222363400">+91 422 2363400</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className={styles.mobileContactListItem}>
                                    <div className={styles.mobileIconWrapper}>
                                        <Mail size={20} />
                                    </div>
                                    <div className={styles.mobileContactDetails}>
                                        <span className={styles.mobileContactLabel}>Email</span>
                                        <a href="mailto:admission@svasc.com" className={styles.mobileEmailLink}>
                                            admission@svasc.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button className={styles.mobileCta}>
                                <span>Contact Us</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className={styles.heroSection}>
                <div className={styles.heroBg}>
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
                        alt="College Campus"
                        className={styles.heroImg}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={styles.heroContainer}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>
                                Prepare for a Bright<br />Future
                            </h1>
                            <p className={styles.heroDesc}>
                                Equip yourself with the knowledge, skills, and experiences needed to succeed in your career and beyond, paving the way for a promising future.
                            </p>
                        </div>

                        <div className={styles.glassPanel}>
                            <h3 className={styles.formHeading}>Admissions 2026</h3>
                            <form className={styles.form} onSubmit={handleFormSubmit}>
                                <div className={styles.inputGroup}>
                                    <label>Enter Name *</label>
                                    <input type="text" name="name" onChange={handleInputChange} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Enter Email Address *</label>
                                    <input type="email" name="email" onChange={handleInputChange} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Enter Mobile Number *</label>
                                    <div className={styles.mobileInput}>
                                        <span>+91</span>
                                        <input type="tel" name="mobile" onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Select Programme *</label>
                                    <div className={styles.selectWrapper}>
                                        <select name="programme" onChange={handleInputChange} required>
                                            <option value="">Select Programme</option>
                                            <option>UG</option>
                                            <option>PG</option>
                                            <option>Ph.D</option>
                                        </select>
                                        <ChevronDown className={styles.selectIcon} />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Select Specialization *</label>
                                    <div className={styles.selectWrapper}>
                                        <select name="specialization" onChange={handleInputChange} required>
                                            <option value="">Select Specialization</option>
                                            <option>BCA - Bachelor of Computer Applications</option>
                                            <option>BBA - Bachelor of Business Administration</option>
                                            <option>BSc - Bachelor of Science</option>
                                            <option>BSc CS - Computer Science</option>
                                            <option>BSc IT - Information Technology</option>
                                            <option>B.Com - Bachelor of Commerce</option>
                                            <option>B.Com CA - Computer Applications</option>
                                            <option>BA - Bachelor of Arts</option>
                                            <option>B.Tech - Bachelor of Technology</option>
                                            <option>B.Sc Nursing</option>
                                            <option>MCA - Master of Computer Applications</option>
                                            <option>MBA - Master of Business Administration</option>
                                            <option>MSc - Master of Science</option>
                                            <option>M.Com - Master of Commerce</option>
                                            <option>PhD - Doctor of Philosophy</option>
                                        </select>
                                        <ChevronDown className={styles.selectIcon} />
                                    </div>
                                </div>
                                <div className={styles.checkboxGroup}>
                                    <input type="checkbox" required />
                                    <span>I agree to receive information regarding my submitted application by signing up on SVASC College of Arts and Nursing *</span>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    APPLY NOW →
                                </button>
                            </form>
                            <div className={styles.formFooter}>
                                <a href="#">Already have an Account? Login</a>
                                <a href="#">RESEND VERIFICATION EMAIL</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* BRAND BANNER */}
            <div className={styles.brandBanner}>
                <div className={styles.scrollWrapper}>
                    <div className={styles.scrollContent}>
                        {[1, 2].map((i) => (
                            <div key={i} className={styles.logoSet}>
                                <div className={styles.logoItem}>
                                    <div className={styles.logoBox}><span style={{ color: '#2563eb' }}>TCS</span></div>
                                    <span>Tata Consultancy Services</span>
                                </div>
                                <span className={styles.dot}>•</span>
                                <div className={styles.logoItem}>
                                    <div className={styles.logoBox}><span style={{ color: '#ea580c' }}>ZOHO</span></div>
                                    <span>Zoho Corporation</span>
                                </div>
                                <span className={styles.dot}>•</span>
                                <div className={styles.logoItem}>
                                    <div className={styles.logoBox}><span style={{ color: '#1d4ed8' }}>INFOSYS</span></div>
                                    <span>Infosys</span>
                                </div>
                                <span className={styles.dot}>•</span>
                                <div className={styles.logoItem}>
                                    <div className={styles.logoBox}><span style={{ color: '#dc2626' }}>WIPRO</span></div>
                                    <span>Wipro</span>
                                </div>
                                <span className={styles.dot}>•</span>
                                <div className={styles.logoItem}>
                                    <div className={styles.logoBox}><span style={{ color: '#7c3aed' }}>HCL</span></div>
                                    <span>HCL Technologies</span>
                                </div>
                                <span className={styles.dot}>•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* STATS SECTION */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statBox}>
                            <p className={styles.statNum}>98<span>%</span></p>
                            <p className={styles.statLabel}>Placement Records</p>
                        </div>
                        <div className={styles.statBox}>
                            <p className={styles.statNum}>25<span>+</span></p>
                            <p className={styles.statLabel}>Academic Programme</p>
                        </div>
                        <div className={styles.statBox}>
                            <p className={styles.statNum}>40<span>+</span></p>
                            <p className={styles.statLabel}>Awards</p>
                        </div>
                        <div className={styles.statBox}>
                            <p className={styles.statNum}>25<span>+</span></p>
                            <p className={styles.statLabel}>Labs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className={styles.whySection}>
                <div className={styles.container}>
                    <div className={styles.whyGrid}>
                        <div>
                            <span className={`${styles.badge} ${styles.badgeSky}`}>OUR VALUES</span>
                            <h2 className={styles.sectionHeading}>A Tradition of Excellence, A Future of Innovation.</h2>
                            <p className={styles.sectionText}>
                                Experience world-class education at SVASC Group of Institutions, where knowledge meets opportunity, shaping leaders of tomorrow with passion and purpose.
                            </p>
                        </div>
                        <div className={styles.whyImgWrapper}>
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                alt="Campus"
                                className={styles.whyImg}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.servicesHeader}>
                        <span className={`${styles.badge} ${styles.badgeYellow}`}>OUR SERVICES</span>
                        <h2 className={styles.sectionHeading}>SVASC Group of Institutions</h2>
                        <p className={styles.sectionText}>
                            SVASC Group of Institutions, located in Coimbatore, offers 25+ programmes across Arts, Science and Nursing. Our educational institution holds the prestigious NAAC A+ accreditation for its Arts and Science streams.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {services.map((s) => (
                            <div key={s.id} className={styles.serviceCard}>
                                <span className={styles.serviceId}>0{s.id}.</span>
                                <div className={styles.serviceIcon}>{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <div className={styles.faqContainer}>
                    <div className={styles.faqHeader}>
                        <span className={`${styles.badge} ${styles.badgeYellow}`}>FAQ</span>
                        <h2 className={styles.sectionHeading}>Frequently asked questions</h2>
                        <p>Find clear answers to common questions about our programs, admissions, and facilities.</p>
                    </div>
                    <div className={styles.faqList}>
                        {faqs.map((f, i) => (
                            <div key={i} className={`${styles.faqItem} ${expandedFaq === i ? styles.expanded : ''}`}>
                                <button onClick={() => toggleFaq(i)}>
                                    <h3>{f.q}</h3>
                                    {expandedFaq === i ? <X size={20} /> : <Plus size={20} />}
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{f.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOG SECTION */}
            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <div className={styles.blogHeader}>
                        <span className={`${styles.badge} ${styles.badgeOrange}`}>BLOG</span>
                        <h2 className={styles.sectionHeading}>Check Our Latest Blogs</h2>
                        <p>Explore expert tips and helpful guides in our latest posts.</p>
                    </div>
                    <div className={styles.blogScroll}>
                        <div className={styles.blogLoop}>
                            {[1, 2, 3, 1, 2, 3].map((b, i) => (
                                <div key={i} className={styles.blogCard}>
                                    <img
                                        src={`https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${i % 3 === 0 ? '5bab247f-35d9-400d-a82b-fd87cfe913d2' : i % 3 === 1 ? '30104e3c-5eea-4b93-93e9-5313698a7156' : '917d6f93-fb36-439a-8c48-884b67b35381'}_1600w.${i % 3 === 2 ? 'jpg' : 'webp'}`}
                                        alt="Blog"
                                    />
                                    <div className={styles.blogOverlay}>
                                        <div className={styles.blogMeta}>
                                            <Calendar size={12} /> 18 Jan 2025 | <MessageCircle size={12} /> Comments
                                        </div>
                                        <h3>Step into your future career</h3>
                                        <a href="#">Read Full Article</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTRUCTIONS SECTION */}
            <section className={styles.instructionsSection}>
                <div className={styles.container}>
                    <div className={styles.instrHeader}>
                        <span className={`${styles.badge} ${styles.badgeYellow}`}>ADMISSION</span>
                        <h2 className={styles.sectionHeading}>Admission Instructions</h2>
                    </div>
                    <div className={styles.instrCard}>
                        <ul className={styles.instrList}>
                            {[
                                "The online application is for admission to programmes offered in SVASC Group of Institutions.",
                                "Application Form Fee is Non-Refundable.",
                                "Email ID submitted at the time of registration will be used for all correspondences until enrolment is completed.",
                                "Change in Email ID will NOT be permitted under any circumstances.",
                                "Applicants are strongly advised to use the Query Management System rather than an email to get a quick response."
                            ].map((text, i) => (
                                <li key={i}>
                                    <div className={styles.checkIcon}><Check size={16} /></div>
                                    <p>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* RECRUITERS SECTION */}
            <section className={styles.recruitersSection}>
                <div className={styles.container}>
                    <div className={styles.recruitersHeader}>
                        <h2 className={styles.sectionHeading}>Our Prestigious Recruiters</h2>
                        <p className={styles.sectionText}>
                            SVASC provides an outstanding environment for academic excellence and holistic development. Our Career Development Cell guides students to top-tier companies.
                        </p>
                    </div>
                    <div className={styles.recruitersGrid}>
                        {[
                            { name: "IBM", color: "#0530ad", fs: "32px" },
                            { name: "24/7.ai", color: "#7c3aed", fs: "24px" },
                            { name: "COGNIZANT", color: "#1a365d", fs: "18px" },
                            { name: "WIPRO", color: "#f97316", fs: "28px" },
                            { name: "TCS", color: "#2563eb", fs: "32px" },
                            { name: "TECH MAHINDRA", color: "#dc2626", fs: "14px" },
                            { name: "INFOSYS", color: "#1d4ed8", fs: "20px" },
                            { name: "Accenture", color: "#7c3aed", fs: "22px" },
                            { name: "HCL", color: "#6d28d9", fs: "32px" },
                            { name: "Capgemini", color: "#2563eb", fs: "20px" },
                            { name: "amazon", color: "#f97316", fs: "30px" },
                            { name: "Microsoft", color: "#4b5563", fs: "24px" }
                        ].map((r, i) => (
                            <div key={i} className={styles.recruiterBox}>
                                <span style={{ color: r.color, fontSize: r.fs, fontWeight: 700 }}>{r.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admission;
