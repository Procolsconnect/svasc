import styles from '../pages/Activities.module.css';
import clubImg from '../assets/club.jpg';
import cellImg from '../assets/cell.JPG';
import commitiesImg from '../assets/commities.JPG';
import sportheroImg from '../assets/sporthero1.jpg';
import examImg from '../assets/exam1.jpg';

export const defaultActivities = [
  {
    ID: "collegeClub",
    category: "College Club",
    bImage: cellImg,
    copy: `
      <div class="${styles.activitySection}">
        <p>SVASC College Clubs provide a vibrant platform for students to explore their interests, develop leadership skills, and engage in holistic learning beyond the classroom. Each club is student-driven with faculty mentorship, fostering creativity, teamwork, and personal growth.</p>

        <h3>Vision</h3>
        <p>To nurture well-rounded students who excel academically and contribute meaningfully to society through active club participation, peer learning, and community engagement.</p>

        <h3>Mission</h3>
        <ul>
          <li>To provide platforms for students to discover and develop their talents.</li>
          <li>To foster leadership, teamwork, communication, and organizational skills.</li>
          <li>To encourage innovation, creativity, and entrepreneurial thinking.</li>
          <li>To bridge the gap between academics and real-world experience.</li>
        </ul>

        <h3>Our Clubs</h3>
        <ol>
          <li><strong>Literary Club:</strong> Promotes reading, writing, debate, elocution, and critical thinking among students.</li>
          <li><strong>Fine Arts Club:</strong> Nurtures artistic talent through painting, sculpture, folk art, and cultural programs.</li>
          <li><strong>Eco Club:</strong> Creates environmental awareness through plantation drives, water conservation campaigns, and nature trails.</li>
          <li><strong>Consumer Protection Club:</strong> Educates students about consumer rights and civic responsibility.</li>
          <li><strong>Entrepreneurship Development Cell (EDC):</strong> Fosters startup thinking, business planning, and self-employment skills.</li>
          <li><strong>Rotaract Club & Red Ribbon Club:</strong> Drives social service, community health, and youth volunteerism.</li>
        </ol>

        <h3>Objectives</h3>
        <ol>
          <li>To provide a co-curricular platform for students to develop skills beyond academics.</li>
          <li>To cultivate leadership, communication, creativity, and problem-solving abilities.</li>
          <li>To conduct inter-departmental and inter-collegiate competitions, seminars, and workshops.</li>
          <li>To promote cultural awareness, environmental responsibility, and social consciousness.</li>
          <li>To encourage student-led initiatives, events, and community outreach programs.</li>
        </ol>
      </div>
    `,
    cards: [
      {
        image: "/commerce(ca)/CAREER GUIDANCE PROGRAM 19.09.2025.jpg",
        title: "Literary Club",
        description: "Promotes reading, writing, debate, and elocution among students.",
        link: "/literary-club"
      },
      {
        image: "/ugcommerce/PERSONALITY DEVELOPMENT AND CAREER GUIDANCE PROGRAM  18.09.2025.jpg",
        title: "Entrepreneurship Development Cell",
        description: "Fosters startup thinking, business planning, and self-employment skills.",
        link: "/entrepreneurship-development-cell"
      },
      {
        image: "/Bca/Aytha Poojai Celebration - 10-10-2024/IMG_20241010_153153-1024x461.jpg",
        title: "Fine Arts Club",
        description: "Nurtures artistic talent, visual and performing arts, and cultural pride.",
        link: "/fine-arts-club"
      },
      {
        image: "/commerce(ca)/EXTENSION ACTIVITY 19.12.2025.jpg",
        title: "Rotaract Club",
        description: "Transforming student leaders through community service and global impact.",
        link: "/rotaract-club"
      },
      {
        image: "/wec/health awareness program 24.9.24.jpg 2.jpg",
        title: "Red Ribbon Club",
        description: "Empowering youth through public health awareness and voluntary blood donation.",
        link: "/red-ribbon-club"
      },
      {
        image: "/wec/SAFETY AND AWARENESS  18.10. 2024 -1.jpg",
        title: "Voter's Club",
        description: "Transforming eligible students into informed, ethical, and empowered voters.",
        link: "/voter-literacy-club"
      },
      {
        image: "/ugcommerce/Training Programme entitled Achievement is possible on 04.03.2026.jpg",
        title: "Junior JCI Wing",
        description: "Developing active leadership, communication skills, and social responsibility.",
        link: "/junior-jci-wing"
      },
      {
        image: "/ugcommerce/Awareness on banking, saving and Investment on 23.01.2026.jpg",
        title: "Consumer Protection Club",
        description: "Educating students about legal consumer rights, FSSAI quality, and digital safety.",
        link: "/consumer-protection-club"
      },
      {
        image: "/ugcommerce/Legal Awareness Programme on Consequences of Drug Abuse on 10.03.2026.jpg",
        title: "Anti Drug Club",
        description: "Building a campus free from substance abuse with health and purpose.",
        link: "/anti-drug-club"
      },
      {
        image: "/chemistry/ASSOCIATION INAUGURATION & GUEST LECTURE- CHEMISTRY FOR A SUSTAINABLE FUTURE(1).jpeg",
        title: "Eco Club",
        description: "Creating an environmentally conscious campus with green initiatives.",
        link: "/eco-club"
      }
    ]
  },
  {
    ID: "svascCells",
    category: "SVASC Cells",
    bImage: clubImg,
    copy: `
      <div class="${styles.activitySection}">
        <p>SVASC Cells are specialized institutional bodies designed to address specific student welfare, social, and developmental needs. Each cell operates with a dedicated team of faculty coordinators and student volunteers to implement focused programs and initiatives.</p>

        <h3>Vision</h3>
        <p>To build a safe, inclusive, empowered, and digitally connected campus community through specialized institutional cells that address the diverse needs of students, faculty, and the broader society.</p>

        <h3>Mission</h3>
        <ul>
          <li>To empower women with knowledge, leadership, and social responsibility.</li>
          <li>To promote a drug-free campus through awareness and peer support programs.</li>
          <li>To enhance the college's digital presence and community engagement through social media.</li>
          <li>To provide a responsive grievance mechanism for all campus stakeholders.</li>
        </ul>

        <h3>Our Cells</h3>
        <ol>
          <li><strong>Women Empowerment Cell (WEC):</strong> Promotes gender equality, women's rights, leadership, and safety.</li>
          <li><strong>Anti Drug Cell:</strong> Creates awareness about the harmful effects of substance abuse through campaigns and peer support systems.</li>
          <li><strong>Social Media Cell / Media Cell:</strong> Manages the college's online presence and promotes campus events and achievements.</li>
          <li><strong>Research and Development Cell:</strong> Cultivates research inquiry, patents, publications, and interdisciplinary innovation.</li>
          <li><strong>Exam Cell:</strong> Ensures smooth, transparent, and fair evaluation and examination operations.</li>
        </ol>

        <h3>Objectives</h3>
        <ol>
          <li>To promote gender equality, student safety, and inclusive education on campus.</li>
          <li>To create drug-free awareness and provide confidential peer support mechanisms.</li>
          <li>To enhance the institution's digital reputation and community outreach.</li>
          <li>To guide students in academic and career decision-making through mentoring and counseling.</li>
          <li>To ensure timely reporting and resolution of student welfare concerns.</li>
        </ol>
      </div>
    `,
    cards: [
      {
        image: "/wec/wec1.jpg",
        title: "Women Empowerment Cell",
        description: "Empowering women with leadership, rights awareness, and self-reliance.",
        link: "/women-empowerment-cell"
      },
      {
        image: "/Bca/InterCollegiate Meet - Digital Dynamo2K25/post.jpg",
        title: "Media Cell",
        description: "Managing campus digital communications, achievements, and social media outreach.",
        link: "/media-cell"
      },
      {
        image: "/commerce(ca)/Legal Awareness Programme on Cyberbullying and online Harassment on 10.03.2026.jpg",
        title: "Anti Ragging Cell",
        description: "Fostering a safe, disciplined, inclusive, and ragging-free campus environment.",
        link: "/anti-ragging-cell"
      },
      {
        image: "/chemistry/INTERNATIONAL SEMINAR-17.07.2026  (4).jpeg",
        title: "R and D Cell",
        description: "Promoting scholarly inquiry, research funding, publications, and patents.",
        link: "/research-development-cell"
      },
      {
        image: examImg,
        title: "Exam Cell",
        description: "Managing internal and university evaluation, timetables, and academic integrity.",
        link: "/exam-cell"
      },
      {
        image: "/Bca/Workshop on IoT Masterclass Connect, Innovate, Automate/WhatsApp-Image-2025-01-21-at-12.19.59-PM-1024x576.jpeg",
        title: "SWAYAM / NPTEL",
        description: "IIT/IISc digital education chapter empowering online certification excellence.",
        link: "/swayam-nptel"
      },
      {
        image: "/wec/infosys trainning 1.9.25-13.9.25-1.png",
        title: "Innovation & Entrepreneurship Cell",
        description: "Transforming students into job creators through incubation, mentorship, and startups.",
        link: "/innovation-entrepreneurship"
      }
    ]
  },
  {
    ID: "committee",
    category: "Committee",
    bImage: commitiesImg,
    copy: `
      <div class="${styles.activitySection}">
        <p>SVASC College constitutes various statutory and institutional committees in accordance with UGC guidelines and Tamil Nadu government regulations. These committees ensure transparency, accountability, student welfare, and institutional quality across all departments and functions.</p>

        <h3>Vision</h3>
        <p>To establish a fair, transparent, and student-centric institution governed by effective committees that uphold academic integrity, student welfare, gender equality, and continuous quality improvement.</p>

        <h3>Mission</h3>
        <ul>
          <li>To ensure compliance with statutory guidelines and regulatory requirements.</li>
          <li>To provide a fair and confidential mechanism for addressing student grievances.</li>
          <li>To maintain institutional quality and promote continuous improvement.</li>
          <li>To uphold discipline, ethics, and a safe campus environment for all stakeholders.</li>
        </ul>

        <h3>Key Committees</h3>
        <ol>
          <li><strong>Internal Grievances Committee:</strong> Ensures fair, impartial, and confidential resolution of complaints.</li>
          <li><strong>Grievance Redressal Committee:</strong> Provides structured channels for academic and administrative feedback.</li>
          <li><strong>IQAC – Quality Assurance Cell:</strong> Monitors academic standards, teaching quality, and NAAC accreditation.</li>
          <li><strong>Youth Red Cross (YRC):</strong> Promotes humanitarian service, blood donation, and emergency care.</li>
          <li><strong>Physical Education:</strong> Drives sports coaching, athletic tournaments, and physical fitness.</li>
          <li><strong>NSS – National Service Scheme:</strong> Community service and rural development volunteer movement.</li>
        </ol>

        <h3>Objectives</h3>
        <ol>
          <li>To ensure fair and transparent implementation of institutional policies and regulatory guidelines.</li>
          <li>To address and resolve student and staff grievances promptly and impartially.</li>
          <li>To promote gender equality, personal safety, and dignified treatment for all campus members.</li>
          <li>To continuously improve academic quality, infrastructure, and student support services.</li>
          <li>To maintain proper documentation, committee minutes, and compliance reports for statutory authorities.</li>
        </ol>
      </div>
    `,
    cards: [
      {
        image: "/wec/SAFETY AND AWARENESS  18.10. 2024 -1.jpg",
        title: "Internal Grievances Committee",
        description: "Ensuring every voice is heard with fairness, dignity, and confidential redressal.",
        link: "/internal-grievances-committee"
      },
      {
        image: "/commerce(ca)/Legal Awareness Programme on Cyberbullying and online Harassment on 10.03.2026.jpg",
        title: "Grievance Redressal Committee",
        description: "Structured platform for prompt resolution of academic and administrative concerns.",
        link: "/grievance-redressal-committee"
      },
      {
        image: "/chemistry/ASSOCIATION INAUGURATION & GUEST LECTURE- CHEMISTRY FOR A SUSTAINABLE FUTURE(2).jpg",
        title: "IQAC – Quality Assurance Cell",
        description: "Driving academic excellence, institutional benchmarking, and NAAC quality standards.",
        link: "/iqac"
      },
      {
        image: "/wec/Health Awareness Program 10.7.25.png",
        title: "Youth Red Cross",
        description: "Humanitarian service, first aid training, blood donation, and youth empowerment.",
        link: "/youth-red-cross"
      },
      {
        image: sportheroImg,
        title: "Physical Education",
        description: "Rigorous sports training, tournaments, yoga, meditation, and athletic facilities.",
        link: "/physical-education"
      },
      {
        image: "/wec/wec3.jpg",
        title: "National Service Scheme",
        description: "Building youth character through community service, rural immersion, and patriotism.",
        link: "/nss"
      }
    ]
  }
];
