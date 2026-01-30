import React, { useState, useEffect, useRef } from 'react';
import './Activities.css';
import Hero from '../components/Common/Hero';

const ProjectsPortfolio = () => {
  const [projects] = useState([
    {
      ID: "antiRagging",
      category: "Anti Ragging Cell",
      bImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
      copy: `<p>Ragging is prohibited as per Tamilnadu Government Gazette. The Tamilnadu Prohibitor of Ragging Act 1997 received the assent of the Governor on 14th February 1997.</p> <p>Ragging means display of noisy, disorderly conduct doing any act which causes or is likely to cause physical or psychological harm or raise apprehension or fear or shame or embarrassment to a student in any educational institution.</p><p>Whoever directly or indirectly commits, participates in, abets or propagates ragging within or outside of any educational institution, shall be punished with imprisonment for a term which may extend to two years and shall also be liable to a fine which extends to ten thousand rupees.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400", title: "Anti Ragging Committee" },
        { image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400", title: "Student Safety" },
        { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400", title: "Campus Security" },
        { image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400", title: "Legal Framework" }
      ]
    },
    {
      ID: "physicalEducation",
      category: "Physical Education",
      bImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      copy: `<p>Our College Students actively participate in various sports tournaments including Kabaddi, Weight Lifting, Kho-Kho, Chess, Silambam, Football, Cricket, and Volleyball at inter-collegiate and district level competitions.</p> <p>The Physical Education department provides rigorous training and coaching apart from theory classes to enlighten students about the rules of games. Students have bagged winning records at inter-departmental, inter-collegiate, University and National level.</p><p>Our college has excellent sports facilities with routine physical exercises, yoga and meditation which strengthens the concentration and contribution of players. The department strives hard to bring out the innate talents of all players.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400", title: "Kabaddi Tournament" },
        { image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400", title: "Football & Cricket" },
        { image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400", title: "Athletics" },
        { image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400", title: "Sports Facilities" }
      ]
    },
    {
      ID: "nss",
      category: "National Service Scheme",
      bImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
      copy: `<p>The National Service Scheme functions in our college as a resounding social service unit. Important programmes include sapling plantation, village adoption, medical camps, and creating awareness about hygiene and environment.</p> <p>NSS organized Blood Donation Camp on 22.04.2022 jointly with Siruvalur Primary Health Care Center and Government Hospital Gobichettipalayam. Sixty One Units (61) of Blood were collected from NSS Students.</p><p>On National Welfare Project Day, a three-day camp was conducted at Sanjeevirayan Hill featuring Hill Route Cleanliness, Seed Bombing in the Forest, and awareness about Swachh Bharat Mission among rural communities.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400", title: "Blood Donation Camp" },
        { image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400", title: "Environmental Activities" },
        { image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400", title: "Community Service" },
        { image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400", title: "Village Adoption" }
      ]
    },
    {
      ID: "yrc",
      category: "Youth Red Cross",
      bImage: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800",
      copy: `<p>The Youth Red Cross (YRC) is one of the avenues for students to pursue Personality and Character Development Programme. The YRC aims to inspire humanitarian activities to minimize and alleviate human suffering.</p> <p>Objectives include conducting social and health awareness programmes, encouraging humanitarian services to society, offering First Aid Training to volunteers, and developing leadership quality among students.</p><p>Regular activities include Blood Donation Camps, Blood Grouping and Haemoglobin Estimation, Essay competitions, Health habits practice, and Exhibition of film shows and cultural programmes for disease prevention.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400", title: "Blood Donation" },
        { image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400", title: "First Aid Training" },
        { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400", title: "Health Awareness" },
        { image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400", title: "Humanitarian Service" }
      ]
    },
    {
      ID: "womenEmpowerment",
      category: "Women Empowerment Cell",
      bImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      copy: `<p>The Women Empowerment Cell aims to empower girl students, enhance understanding of women's issues, and make the campus a safe place for women students. The cell creates awareness of their rights and duties.</p> <p>It provides a platform for women to share experiences and views regarding their status in society and suggest ways to improve and empower themselves. The cell facilitates women's empowerment through guest lectures, seminars, and awareness programmes.</p><p>The cell conducted an Awareness program on "Menstrual Hygiene Management" on 13.10.2022 and observed 'International Day of Elimination of Violence against Women' with a program for Rural Women at Naathipalayam village on 25.11.2022.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", title: "Women Safety" },
        { image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400", title: "Awareness Programs" },
        { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400", title: "Empowerment Sessions" },
        { image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400", title: "Guest Lectures" }
      ]
    },
    {
      ID: "clubs",
      category: "College Clubs",
      bImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
      copy: `<p>Our college hosts various clubs including Fine Arts Club, Eco Club, and Creativity Club. The Fine Arts Club celebrated Teachers' Day 2025 and conducted Tamil cultural programs. The Felicitation Ceremony honored school teachers who received the Tamil Nadu Government Dr. Radhakrishnan Award.</p> <p>The Eco Club creates environmental awareness through plantation drives, water conservation, waste management, and organizing nature trails in wildlife sanctuaries. The Consumer Protection Club participated in "Mock Court" competition and bagged a Special Prize.</p><p>The Creativity Club nurtures artistic skills and connects with the larger art community. The Entrepreneurship Development Cell organized a two-day workshop on "Life Skills Development" for all UG students in November 2022.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400", title: "Fine Arts Club" },
        { image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400", title: "Eco Club" },
        { image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400", title: "Creativity Club" },
        { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400", title: "Life Skills Workshop" }
      ]
    }
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [highlightedContent, setHighlightedContent] = useState({ ID: "", category: "", bImage: "", copy: "", cards: [] });
  const [projectHeights, setProjectHeights] = useState({});
  const scrollBackTo = useRef(0);

  const selectProject = (projectId) => {
    const project = projects.find(p => p.ID === projectId);

    if (selectedProject === projectId) {
      setSelectedProject(null);
      setTimeout(() => {
        window.scrollTo({ top: scrollBackTo.current, behavior: 'smooth' });
      }, 1600);
    } else {
      scrollBackTo.current = window.scrollY;
      setSelectedProject(projectId);
      setHighlightedContent(project);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 800);
    }
  };

  const calculateHeights = () => {
    const winWidth = window.innerWidth;
    const midRange = winWidth < 920 && winWidth > 620;
    const smallRange = winWidth < 720;

    const heights = {};
    projects.forEach((project, index) => {
      const baseWidth = index < 2 ? (winWidth * 0.48 - 20) : (winWidth * 0.23 - 20);
      let height;

      if (index < 2) {
        height = baseWidth;
      } else {
        if (midRange) {
          height = baseWidth * 0.5;
        } else if (smallRange) {
          height = baseWidth;
        } else {
          height = baseWidth * 1.5;
        }
      }
      heights[project.ID] = height;
    });

    setProjectHeights(heights);
  };

  useEffect(() => {
    calculateHeights();
    window.addEventListener('resize', calculateHeights);
    return () => window.removeEventListener('resize', calculateHeights);
  }, []);

  const getProjectClass = (projectId) => {
    const classes = ['project'];
    if (selectedProject === projectId) {
      classes.push('openedProject');
    }
    if (selectedProject && selectedProject !== projectId) {
      classes.push('hidden', 'shrunk');
    }
    return classes.join(' ');
  };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0, minHeight: '100vh' }}>
      <Hero
        title="SVASC Campus Activities"
        description="Explore the comprehensive range of student support services, clubs, and developmental programs at SVASC that foster holistic growth and create a safe, enriching campus environment."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
      />

      <h2 className="campus-life-title">
        Campus Life
      </h2>

      <div style={{ width: '100%', float: 'left', clear: 'both' }}>
        {projects.map((project) => (
          <div
            key={project.ID}
            className={getProjectClass(project.ID)}
            style={{
              backgroundImage: `url(${project.bImage})`,
              height: projectHeights[project.ID] || '50px'
            }}
            onClick={() => selectProject(project.ID)}
          >
            <h3 className="beforeTitle">{project.category}</h3>
            <div className="info">
              <h1 className="fadeTitle">{project.category}</h1>
              <hr />
            </div>
            <p className="backArrow">
              <i className="fa fa-angle-double-left" aria-hidden="true">‹‹</i>
            </p>
          </div>
        ))}
      </div>

      <div className={`selectedArea ${selectedProject ? 'opened' : ''}`}>
        <h1 style={{ backgroundImage: `url(${highlightedContent.bImage})` }}>
          <span>{highlightedContent.category}</span>
        </h1>
        <div
          className="copyArea"
          dangerouslySetInnerHTML={{ __html: highlightedContent.copy }}
        />

        {highlightedContent.cards && highlightedContent.cards.length > 0 && (
          <div className="card-container">
            {highlightedContent.cards.map((card, index) => (
              <div key={index} className="game-card">
                <div
                  className="game-card__cover"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="card-title">{card.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPortfolio;