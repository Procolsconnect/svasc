import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Activities.module.css';
import Hero from '../components/Common/Hero';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const defaultActivities = [
    {
      ID: "collegeClub",
      category: "College Club",
      bImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
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
            <li><strong>Literary Club:</strong> Promotes reading, writing, debate, elocution, and critical thinking among students. Organizes book discussions, essay competitions, and inter-collegiate literary events.</li>
            <li><strong>Fine Arts Club:</strong> Nurtures artistic talent through painting, sculpture, folk art, and cultural programs. Celebrated Teachers' Day and organized Tamil cultural events with special felicitation ceremonies.</li>
            <li><strong>Eco Club:</strong> Creates environmental awareness through plantation drives, water conservation campaigns, and nature trails. Actively promotes sustainable living practices on campus.</li>
            <li><strong>Creativity Club:</strong> Encourages students to explore innovative ideas in design, digital media, photography, and arts. Connects students with the broader creative community.</li>
            <li><strong>Consumer Protection Club:</strong> Educates students about consumer rights and participated in Mock Court competitions, winning a Special Prize.</li>
            <li><strong>Entrepreneurship Development Cell (EDC):</strong> Organized two-day workshops on Life Skills Development for all UG students. Fosters startup thinking, business planning, and self-employment skills.</li>
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
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
          title: "Literary Club",
          description: `<p>The Literary Club promotes reading, writing, debate, and elocution among students. It organizes book discussions, essay and poetry competitions, and inter-collegiate literary events to develop critical thinking and communication skills.</p>`
        },
        {
          image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400",
          title: "Entrepreneurship Development Cell",
          description: `<p>The EDC fosters startup thinking and self-employment skills. It organized a two-day workshop on "Life Skills Development" for all UG students, bridging the gap between academic knowledge and real-world entrepreneurial success.</p>`
        },
        {
          image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400",
          title: "Fine Arts Club",
          link: "/fine-arts-club"
        },
        {
          image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400",
          title: "Rotaract Club",
          link: "/rotaract-club"
        },
        {
          image: "https://images.unsplash.com/photo-1579389083395-5db4f36db01b?w=400",
          title: "Red Ribbon Club",
          link: "/red-ribbon-club"
        },
        {
          image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400",
          title: "Voter's Club",
          link: "/voter-literacy-club"
        },
        {
          image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400",
          title: "Junior JCI Wing",
          link: "/junior-jci-wing"
        },
        {
          image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400",
          title: "Consumer Protection Club",
          link: "/consumer-protection-club"
        },
        {
          image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=400",
          title: "Anti Drug Club",
          description: `
<div class="${styles.modalDescContent}">
          <h3 style="color:var(--gold);">Vision</h3>
          <p>To build a campus free from substance abuse where every student chooses health, purpose, and a drug-free future.</p>
          
          <h3 style="color:var(--gold);">Mission</h3>
          <ol style="padding-left: 20px;">
            <li>Create awareness about the harmful effects of drugs through campaigns and workshops.</li>
            <li>Empower students to make informed, healthy choices.</li>
            <li>Provide peer support and guidance for those seeking help.</li>
            <li>Collaborate with experts and authorities to promote a safe campus environment.</li>
          </ol>

          <h3 style="color:var(--gold);">Objectives of Anti Drug Club</h3>
          <ol style="padding-left: 20px;">
            <li><strong>Create Awareness:</strong> Conduct regular seminars, workshops, and campaigns to educate students about the physical, mental, and social effects of drug abuse.</li>
            <li><strong>Prevent First Use:</strong> Equip students with life skills to resist peer pressure and make informed decisions through interactive sessions and role plays.</li>
            <li><strong>Promote Healthy Alternatives:</strong> Encourage sports, arts, yoga, and cultural activities as positive outlets to reduce stress and prevent drug experimentation.</li>
            <li><strong>Build Support Systems:</strong> Establish peer support groups and confidential counseling channels for students seeking help or information.</li>
            <li><strong>Early Identification & Intervention:</strong> Train club members to identify early warning signs and guide at-risk students to professional help without stigma.</li>
          </ol>

          <div class="${styles.teamDetails}">
            <h3 style="color:var(--gold);">Committee Members</h3>
            <p><strong>Coordinator:</strong> Mr. K. Manikandan, Physical Director</p>
            <p><strong>Members:</strong></p>
            <ol style="padding-left: 20px;">
              <li>Mr. V. Ashok Kumar, AP/English</li>
              <li>Ms. M. Miruthila, AP/PG Commerce</li>
              <li>Mr. D. Shyamsundar, AP/BCA</li>
            </ol>
          </div>
        </div>
          `
        }
      ]
    },
    {
      ID: "svascCells",
      category: "SVASC Cells",
      bImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
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
            <li><strong>Women Empowerment Cell (WEC):</strong> Promotes gender equality, women's rights, leadership, and safety. Conducted awareness programs on Menstrual Hygiene Management and observed International Day of Elimination of Violence against Women.</li>
            <li><strong>Anti Drug Cell:</strong> Creates awareness about the harmful effects of substance abuse through campaigns, workshops, and peer support systems. Encourages healthy alternatives like sports and cultural activities.</li>
            <li><strong>Social Media Cell / Media Cell:</strong> Manages the college's online presence, promotes campus events, achievements, and academic milestones through professional social media content. Ensures transparent communication with students, parents, and stakeholders.</li>
            <li><strong>Career Guidance Cell:</strong> Provides career counseling, aptitude training, competitive exam guidance, and personality development to help students make informed career choices.</li>
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
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
          title: "Women Empowerment Cell",
          description: `
<div class="${styles.modalDescContent}">
          <p>The Women Empowerment Cell aims to empower girl students, enhance understanding of women's issues, and make the campus a safe place for women students. The cell creates awareness of their rights and duties.</p> 
          <p>It provides a platform for women to share experiences and views regarding their status in society and suggest ways to improve and empower themselves. The cell facilitates women's empowerment through guest lectures, seminars, and awareness programmes.</p>
          <p>The cell conducted an Awareness program on "Menstrual Hygiene Management" on 13.10.2022 and observed 'International Day of Elimination of Violence against Women' with a program for Rural Women at Naathipalayam village on 25.11.2022.</p>

          <h3 style="color:var(--gold);">Vision</h3>
          <p>To empower women with knowledge, leadership, confidence, and social responsibility, enabling them to become self-reliant individuals who contribute to an equitable and progressive society.</p>

          <h3 style="color:var(--gold);">Mission</h3>
          <ul style="padding-left: 20px;">
            <li>To promote leadership and personality development among women.</li>
            <li>To create awareness about gender equality, women's rights, and legal protection.</li>
            <li>To provide skill development and career-oriented training.</li>
            <li>To organize programs for physical, mental, and social well-being.</li>
            <li>To foster a safe, inclusive, and respectful academic environment.</li>
          </ul>

          <h3 style="color:var(--gold);">Objectives of Women Empowerment Cell</h3>
          <ol style="padding-left: 20px;">
            <li>To promote self-confidence, leadership qualities, and decision-making skills among girl students.</li>
            <li>To create awareness about gender equality, women's rights, legal literacy, health, safety, and self-defense.</li>
            <li>To enhance employability through skill development, entrepreneurship, career guidance, and personality development programmes.</li>
            <li>To encourage the active participation of women in academic, co-curricular, cultural, sports, and community service activities.</li>
            <li>To empower women to become independent, socially responsible, and confident individuals while ensuring a safe, inclusive, and supportive campus environment.</li>
          </ol>

          <h3 style="color:var(--gold);">Expected Outcomes</h3>
          <ol style="padding-left: 20px;">
            <li><strong>Enhanced Self-Confidence and Leadership:</strong> Students develop confidence, leadership qualities, communication skills, and decision-making abilities.</li>
            <li><strong>Awareness of Rights and Responsibilities:</strong> Increased understanding of gender equality, women's rights, legal provisions, cyber safety, health, hygiene, and self-defense.</li>
            <li><strong>Improved Employability and Entrepreneurship:</strong> Students acquire career-oriented skills, entrepreneurial abilities, and professional competencies that enhance employability.</li>
            <li><strong>Greater Participation:</strong> Increased involvement of women students in academic, co-curricular, cultural, sports, research, and community engagement activities.</li>
            <li><strong>Personal and Social Well-being:</strong> Improved physical, mental, and emotional well-being through health awareness, counseling, and wellness programmes.</li>
            <li><strong>Financial and Digital Literacy:</strong> Enhanced knowledge of financial management, digital literacy, and responsible use of technology.</li>
            <li><strong>Safe and Inclusive Campus Environment:</strong> Promotion of a gender-sensitive, respectful, and discrimination-free campus where women feel safe and supported.</li>
            <li><strong>Social Responsibility and Community Engagement:</strong> Students actively participate in social awareness campaigns, outreach programmes, and community development initiatives.</li>
            <li><strong>Career Readiness:</strong> Better preparedness for higher education, competitive examinations, placements, and professional careers through continuous guidance and mentoring.</li>
            <li><strong>Women Empowerment:</strong> Women students emerge as independent, responsible, ethical, and empowered individuals capable of contributing positively to society and nation-building.</li>
          </ol>

          <h3 style="color:var(--gold);">Roles & Responsibilities</h3>
          <ol style="padding-left: 20px;">
            <li>To organize awareness programmes, seminars, workshops, and skill development activities for the empowerment of women.</li>
            <li>To encourage girl students and women staff members to actively participate in academic, co-curricular, cultural, sports, and leadership activities.</li>
            <li>To promote gender equality and create awareness on women's rights, legal literacy, health, safety, cyber security, and prevention of harassment.</li>
            <li>To develop self-confidence, leadership qualities, entrepreneurial skills, and decision-making abilities among girl students.</li>
            <li>To provide counselling and guidance for students' academic, emotional, psychological, and personal well-being.</li>
            <li>To ensure a safe, secure, inclusive, and supportive campus environment that upholds the dignity, respect, and welfare of women.</li>
          </ol>

          <div class="${styles.teamDetails}">
            <h3 style="color:var(--gold);">WEC Committee Members</h3>
            <div class="${styles.tableWrapper || 'table-wrapper'}">
              <table class="${styles.ecoClubTable || 'eco-club-table'}">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name of Faculty</th>
                    <th>Designation</th>
                    <th>Mobile Number</th>
                    <th>Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Dr. R. Senthilrani</td><td>Coordinator</td><td><a href="tel:9952137812">9952137812</a></td><td><a href="mailto:senthilranir@svasc.org">senthilranir@svasc.org</a></td></tr>
                  <tr><td>2</td><td>Mrs. B. Kanchanadevi</td><td>Member</td><td><a href="tel:7904853505">7904853505</a></td><td><a href="mailto:kanchanadevibcs08@svasc.org">kanchanadevibcs08@svasc.org</a></td></tr>
                  <tr><td>3</td><td>Mrs. H. S. Prabha Shankar</td><td>Member</td><td><a href="tel:9789441141">9789441141</a></td><td><a href="mailto:Prabhahs2242@gmail.com">Prabhahs2242@gmail.com</a></td></tr>
                  <tr><td>4</td><td>Mrs. R. J. Sadhana</td><td>Member</td><td><a href="tel:6358210577">6358210577</a></td><td><a href="mailto:sadhana@svasc.org">sadhana@svasc.org</a></td></tr>
                  <tr><td>5</td><td>Gobika. S (II BBA)</td><td>Student Member</td><td><a href="tel:9344088546">9344088546</a></td><td><a href="mailto:gobika7332@gmail.com">gobika7332@gmail.com</a></td></tr>
                  <tr><td>6</td><td>Sivaranjani S (II B.Sc CDF)</td><td>Student Member</td><td><a href="tel:6382486286">6382486286</a></td><td><a href="mailto:jayarani3864@gmail.com">jayarani3864@gmail.com</a></td></tr>
                  <tr><td>7</td><td>Dharani P (II B.Sc CS (AI&DS))</td><td>Student Member</td><td><a href="tel:9600890463">9600890463</a></td><td><a href="mailto:dharadharu24@gmail.com">dharadharu24@gmail.com</a></td></tr>
                  <tr><td>8</td><td>Gracy S (II B.Sc CS (AI&DS))</td><td>Student Member</td><td><a href="tel:9360555676">9360555676</a></td><td><a href="mailto:gracygrace131@gmail.com">gracygrace131@gmail.com</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
          `
        },
        {
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
          title: "Media Cell",
          description: `
          <div class="${styles.modalDescContent}">
            <h3 style="color:var(--gold); margin-top:0;">Vision</h3>
            <p>To create a connected digital world where people can communicate, collaborate, share knowledge, and access information instantly, fostering innovation, learning, and global relationships.</p>
            <h3 style="color:var(--gold);">Mission</h3>
            <ul style="padding-left: 20px;">
              <li>To enable seamless communication among people across the world.</li>
              <li>To provide a platform for sharing information, ideas, and experiences.</li>
              <li>To support learning, collaboration, and community engagement.</li>
            </ul>
            <h3 style="color:var(--gold);">Objectives</h3>
            <p>The Social Media Cell aims to promote the college's activities, achievements, and events through various social media platforms. It serves as a bridge between the institution and students, alumni, parents, and the wider community by sharing timely and accurate information.</p>
          </div>
          `
        },
        {
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
          title: "Anti Ragging Cell",
          description: `
          <div class="${styles.modalDescContent}">
            <h3 style="color:var(--gold); margin-top:0;">Vision</h3>
            <p>To foster a safe, disciplined, inclusive, and ragging-free campus environment that promotes ethical values, mutual respect and holistic development among students.</p>
            <h3 style="color:var(--gold);">Mission</h3>
            <ul style="padding-left: 20px;">
              <li>To maintain discipline and uphold the rules and regulations of the institution.</li>
              <li>To prevent ragging through awareness, vigilance and strict implementation of anti-ragging measures.</li>
              <li>To promote self-discipline, responsibility and ethical conduct among students.</li>
            </ul>
            <h3 style="color:var(--gold);">Objectives</h3>
            <ol style="padding-left: 20px;">
              <li>To maintain discipline and ensure adherence to the rules.</li>
              <li>To prevent ragging and create awareness about its harmful effects.</li>
              <li>To provide a safe, secure, inclusive environment.</li>
            </ol>
          </div>
          `
        },
        {
          image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
          title: "R and D Cell",
          link: "/research-development-cell"
        },
        {
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
          title: "Exam Cell",
          link: "/exam-cell"
        },
        {
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
          title: "NPTEL Vision",
          link: "/swayam-nptel"
        },
        {
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
          title: "IIEDC Vision and Mission",
          link: "/innovation-entrepreneurship"
        }
      ]
    },
    {
      ID: "committee",
      category: "Committee",
      bImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
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
            <li><strong>Internal Complaints Committee (ICC):</strong> Addresses complaints related to sexual harassment, gender discrimination, and workplace misconduct. Ensures a safe and respectful environment for all students and staff as per the POSH Act 2013.</li>
            <li><strong>Grievance Redressal Committee:</strong> Provides a structured platform for students to raise academic, administrative, and personal grievances. Ensures prompt, fair, and confidential resolution of all complaints.</li>
            <li><strong>IQAC – Internal Quality Assurance Cell:</strong> Monitors and enhances academic standards, teaching quality, research initiatives, and institutional performance. Prepares the college for NAAC accreditation and quality benchmarking.</li>
            <li><strong>Anti Ragging Committee:</strong> Implements anti-ragging measures, receives complaints, investigates incidents, and promotes a ragging-free campus culture as per UGC and Tamil Nadu Government regulations.</li>
            <li><strong>Examination Committee:</strong> Oversees internal and university examination scheduling, invigilation duties, result declarations, and maintains confidentiality and integrity of the examination process.</li>
          </ol>

          <h3>Objectives</h3>
          <ol>
            <li>To ensure fair and transparent implementation of institutional policies and regulatory guidelines.</li>
            <li>To address and resolve student and staff grievances promptly and impartially.</li>
            <li>To promote gender equality, personal safety, and dignified treatment for all campus members.</li>
            <li>To continuously improve academic quality, infrastructure, and student support services.</li>
            <li>To maintain proper documentation, committee minutes, and compliance reports for statutory authorities.</li>
          </ol>

          <div class="${styles.teamDetails}">
            <h3>Discipline & Anti-Ragging Committee</h3>
            <p><strong>Chairperson:</strong> Mr. G. Gowtham, CEO</p>
            <p><strong>Coordinator:</strong> Dr. Chi. Nanjappa, Vice-Principal</p>
          </div>
        </div>
      `,
      cards: [
        {
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
          title: "Internal Grievances Committee",
          link: "/internal-grievances-committee"
        },
        {
          image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
          title: "Grievance Redressal Committee",
          description: `<p>The Grievance Redressal Committee provides a structured, confidential platform for students to raise academic, administrative, and personal concerns. All complaints are handled promptly, fairly, and impartially by the designated committee members.</p>`
        },
        {
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
          title: "IQAC – Quality Assurance Cell",
          description: `<p>The Internal Quality Assurance Cell (IQAC) monitors academic standards, teaching quality, research initiatives, and institutional performance. It prepares the college for NAAC accreditation and drives a culture of continuous quality improvement across all departments.</p>`
        },
        {
          image: "https://images.unsplash.com/photo-1574689049596-1e68e858db4c?w=400",
          title: "Youth Red Cross",
          description: `
<div class="${styles.modalDescContent}">
          <p>The Youth Red Cross (YRC) is one of the avenues for students to pursue Personality and Character Development Programme. The YRC aims to inspire humanitarian activities to minimize and alleviate human suffering.</p> 
          <p>Objectives include conducting social and health awareness programmes, encouraging humanitarian services to society, offering First Aid Training to volunteers, and developing leadership quality among students.</p>
          <p>Regular activities include Blood Donation Camps, Blood Grouping and Haemoglobin Estimation, Essay competitions, Health habits practice, and Exhibition of film shows and cultural programmes for disease prevention.</p>

          <h3 style="color:var(--gold);">Vision</h3>
          <p>To inspire and empower young people to become responsible, compassionate, and active citizens who serve humanity, promote health, uphold human dignity, and contribute to building a peaceful and resilient society.</p>

          <h3 style="color:var(--gold);">Mission</h3>
          <p>To mobilize and empower youth through voluntary service, health education, first aid training, blood donation awareness, disaster preparedness, and community welfare activities, guided by the Fundamental Principles of the Red Cross.</p>

          <h3 style="color:var(--gold);">Motto</h3>
          <p><strong>Health, Service, Friendship</strong></p>

          <h3 style="color:var(--gold);">Objectives of YRC</h3>
          <ul style="padding-left: 20px;">
            <li>Promote health and hygiene through awareness programs and healthy lifestyle practices.</li>
            <li>Develop the spirit of humanitarian service and voluntary action among youth.</li>
            <li>Provide first aid and emergency care training to prepare volunteers for emergencies.</li>
            <li>Encourage voluntary blood donation and create awareness about the importance of safe blood.</li>
            <li>Prepare youth for disaster response and support relief and rehabilitation activities.</li>
            <li>Develop leadership qualities, discipline, teamwork, and social responsibility.</li>
            <li>Serve vulnerable and needy communities without discrimination based on race, religion, caste, gender, or nationality.</li>
            <li>Promote peace, friendship, and national integration through community service.</li>
            <li>Encourage environmental protection through tree plantation, cleanliness drives, and conservation activities.</li>
            <li>Uphold the Fundamental Principles of the Red Cross—Humanity, Impartiality, Neutrality, Independence, Voluntary Service, Unity, and Universality.</li>
          </ul>

          <div class="${styles.teamDetails}">
            <h3 style="color:var(--gold);">YRC Committee Members</h3>
            <div class="${styles.tableWrapper || 'table-wrapper'}">
              <table class="${styles.ecoClubTable || 'eco-club-table'}">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                    <th>Mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Mr. C. SURESH</td><td>MATHEMATICS</td><td>COORDINATOR</td><td><a href="tel:7904617100">7904617100</a></td><td><a href="mailto:sureshc@svasc.org">sureshc@svasc.org</a></td></tr>
                  <tr><td>2</td><td>Mr. A. ARUN KUMAR</td><td>ENGLISH</td><td>MEMBER</td><td><a href="tel:9524914269">9524914269</a></td><td><a href="mailto:arunkmar@svasc.org">arunkmar@svasc.org</a></td></tr>
                  <tr><td>3</td><td>Ms. S. MYVIZHI</td><td>TAMIL</td><td>MEMBER</td><td><a href="tel:9597188105">9597188105</a></td><td><a href="mailto:myvizhi@svasc.org">myvizhi@svasc.org</a></td></tr>
                  <tr><td>4</td><td>Ms. S. SHANMUGAPRIYA</td><td>CHEMISTRY</td><td>MEMBER</td><td><a href="tel:9342465615">9342465615</a></td><td><a href="mailto:lllavenil2022@gmail.com">lllavenil2022@gmail.com</a></td></tr>
                </tbody>
              </table>
            </div>

            <h3 style="margin-top: 30px;">YRC Student Volunteers</h3>
            <div class="${styles.tableWrapper || 'table-wrapper'}">
              <table class="${styles.ecoClubTable || 'eco-club-table'}">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                    <th>Mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>M. PAVITHRAN</td><td>III B.Sc MATHS</td><td>MEMBER</td><td><a href="tel:6374534078">6374534078</a></td><td><a href="mailto:ppavi0624@gmail.com">ppavi0624@gmail.com</a></td></tr>
                  <tr><td>2</td><td>K. RITHIKA</td><td>I B.Sc MATHS</td><td>MEMBER</td><td><a href="tel:9080132843">9080132843</a></td><td><a href="mailto:rithuma2008@gmail.com">rithuma2008@gmail.com</a></td></tr>
                  <tr><td>3</td><td>S. ABI</td><td>III B.Sc CHEMISTRY</td><td>MEMBER</td><td><a href="tel:8667394661">8667394661</a></td><td><a href="mailto:abisasikumar86@gmail.com">abisasikumar86@gmail.com</a></td></tr>
                  <tr><td>4</td><td>M. KEERTHANA</td><td>III B.Sc CHEMISTRY</td><td>MEMBER</td><td><a href="tel:9952303653">9952303653</a></td><td><a href="mailto:keerthanam212007@gmail.com">keerthanam212007@gmail.com</a></td></tr>
                  <tr><td>5</td><td>K. DENCY</td><td>III B.Sc CHEMISTRY</td><td>MEMBER</td><td><a href="tel:9345333857">9345333857</a></td><td><a href="mailto:dencykumar2007@gmail.com">dencykumar2007@gmail.com</a></td></tr>
                  <tr><td>6</td><td>P. HARINI</td><td>III B.Sc CHEMISTRY</td><td>MEMBER</td><td><a href="tel:7810052964">7810052964</a></td><td><a href="mailto:harini082007@gmail.com">harini082007@gmail.com</a></td></tr>
                  <tr><td>7</td><td>S. AMARNATH</td><td>II BBA</td><td>MEMBER</td><td><a href="tel:985996477">985996477</a></td><td><a href="mailto:amarnathbk271@gmail.com">amarnathbk271@gmail.com</a></td></tr>
                  <tr><td>8</td><td>M. GREESAN</td><td>II BBA</td><td>MEMBER</td><td><a href="tel:8760884306">8760884306</a></td><td><a href="mailto:raghulgreesano@gmail.com">raghulgreesano@gmail.com</a></td></tr>
                  <tr><td>9</td><td>M. DHARANIDHARAN</td><td>II BBA</td><td>MEMBER</td><td><a href="tel:7200883235">7200883235</a></td><td><a href="mailto:dharanidharan5254350@gmail.com">dharanidharan5254350@gmail.com</a></td></tr>
                  <tr><td>10</td><td>A. LLIYOUSHPAM</td><td>II BBA</td><td>MEMBER</td><td><a href="tel:9025885221">9025885221</a></td><td><a href="mailto:nancylillynancyy@gmail.com">nancylillynancyy@gmail.com</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
          `
        },
        {
          image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
          title: "Physical Education",
          description: `
<p>Our College Students actively participate in various sports tournaments including Kabaddi, Weight Lifting, Kho-Kho, Chess, Silambam, Football, Cricket, and Volleyball at inter-collegiate and district level competitions.</p> <p>The Physical Education department provides rigorous training and coaching apart from theory classes to enlighten students about the rules of games. Students have bagged winning records at inter-departmental, inter-collegiate, University and National level.</p><p>Our college has excellent sports facilities with routine physical exercises, yoga and meditation which strengthens the concentration and contribution of players. The department strives hard to bring out the innate talents of all players.</p>
          `
        },
        {
          image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400",
          title: "National Service Scheme",
          description: `
<div class="${styles.modalDescContent}">
          <p>The National Service Scheme functions in our college as a resounding social service unit. Important programmes include sapling plantation, village adoption, medical camps, and creating awareness about hygiene and environment.</p> 
          <p>NSS organized Blood Donation Camp on 22.04.2022 jointly with Siruvalur Primary Health Care Center and Government Hospital Gobichettipalayam. Sixty One Units (61) of Blood were collected from NSS Students.</p>
          <p>On National Welfare Project Day, a three-day camp was conducted at Sanjeevirayan Hill featuring Hill Route Cleanliness, Seed Bombing in the Forest, and awareness about Swachh Bharat Mission among rural communities.</p>

          <h3 style="color:var(--gold);">Vision</h3>
          <p>The vision is to build the youth with the mind and spirit to serve the society and work for the social uplift of the down-trodden masses of our nation as a movement.</p>

          <h3 style="color:var(--gold);">Mission</h3>
          <p>The National Service Scheme has been functioning with the motto “NOT ME BUT YOU” in view of making the youth inspired in service of the people and hence NSS Aims Education through Community Service and Community Service through Education.</p>

          <h3 style="color:var(--gold);">Broad Objectives</h3>
          <ol style="padding-left: 20px;">
            <li>Understand the community in which they work.</li>
            <li>Understand themselves in relation to their community.</li>
            <li>Identify the needs and problems of the community and involve them in problem solving process.</li>
            <li>Develop among themselves a sense of social and civic responsibility.</li>
            <li>Utilize their knowledge in finding practical solution to individual and community problems.</li>
            <li>Develop competence required for group living and sharing of responsibilities.</li>
            <li>Gain skills in mobilizing community participation.</li>
            <li>Acquire leadership qualities and democratic attitude.</li>
            <li>Develop capacity to meet emergencies and natural disasters and Practice National integration and social harmony.</li>
            <li>Practice national integration and social harmony.</li>
          </ol>

          <h3 style="color:var(--gold);">Objectives of NSS</h3>
          <ol style="padding-left: 20px;">
            <li>To work with / among people.</li>
            <li>To engage in creative and constructive social action.</li>
            <li>To enhance his/her knowledge of himself / herself and the community.</li>
            <li>To put his/her scholarship to practical use in mitigating at least some of the problems.</li>
            <li>To gain skill in the exercise of democratic leadership.</li>
            <li>To gain skills in programme development to enable him/her for self-employment.</li>
            <li>To bridge the gulf between the educated and the uneducated masses.</li>
            <li>To promote the will to serve the weaker section of the community.</li>
          </ol>

          <h3 style="color:var(--gold);">Annual Action Plan for Academic Year - 2026-2027</h3>
          <div class="${styles.tableWrapper || 'table-wrapper'}">
            <table class="${styles.ecoClubTable || 'eco-club-table'}">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Month & Date</th>
                  <th>Day</th>
                  <th>Programme</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>July 11, 2026</td><td>World Population Day</td><td>Collecting data about education level, nature of employment and their life habits in one particular village.</td></tr>
                <tr><td>2</td><td>August 15, 2026</td><td>Independence Day</td><td>Conducting various competitions like Essay writing, speech contest and drawing completion about freedom fighters. (competition dates: August 5 to 10)</td></tr>
                <tr><td>3</td><td>September 15, 2026</td><td>International Peace Day</td><td>Rally for spreading peace to the world - odathurai village.</td></tr>
                <tr><td>4</td><td>September 24, 2026</td><td>NSS Day</td><td>Creating awareness to the farmers for cultivation, marketing of their products and banking habits - T.N. Palayam block.</td></tr>
                <tr><td>5</td><td>October 1, 2026</td><td>National Blood Donation Day</td><td>Blood donation camp jointly with Siruvalur Primary Health Center.</td></tr>
                <tr><td>6</td><td>October 2, 2026</td><td>Gandhi Jayanthi</td><td>Webinar on “Be the change that you wish to see in the world” to the NSS Volunteers.</td></tr>
                <tr><td>7</td><td>December 1, 2026</td><td>World AIDS Day</td><td>Awareness program about AIDS.</td></tr>
                <tr><td>8</td><td>December 25th – 31st, 2026</td><td>NSS Special Camp</td><td>7 Days Special Camp at selected village panchayat.</td></tr>
                <tr><td>9</td><td>January 12, 2027</td><td>National Youth Day</td><td>Creating awareness about Swami Vivekananda’s thoughts to empower youth of the nation and youth development through Video Clippings in Social Media platform.</td></tr>
                <tr><td>10</td><td>January 25, 2027</td><td>National Voters Day</td><td>To encourage young voters to take part in the electoral process.</td></tr>
                <tr><td>11</td><td>February 4, 2027</td><td>World Cancer Day</td><td>Creating awareness to the public for avoiding tobacco products to prevent cancer.</td></tr>
                <tr><td>12</td><td>March 22, 2027</td><td>World Water Day</td><td>A program on theme of “Save Water”.</td></tr>
                <tr><td>13</td><td>March 10, 2027</td><td>NSS Association Valediction</td><td>-</td></tr>
              </tbody>
            </table>
          </div>

          <div class="${styles.teamDetails}">
            <h3 style="color:var(--gold);">Club Coordinator & Members List</h3>
            <div class="${styles.tableWrapper || 'table-wrapper'}">
              <table class="${styles.ecoClubTable || 'eco-club-table'}">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>E Mail ID</th>
                    <th>MOB.NO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Dr. R. Ramkumar</td><td>Chairperson</td><td><a href="mailto:principal@svasc.org">principal@svasc.org</a></td><td><a href="tel:9600966086">9600966086</a></td></tr>
                  <tr><td>2</td><td>Mr. V. Naveenkumar</td><td>Member Secretary</td><td><a href="mailto:naveenkumar@svasc.org">naveenkumar@svasc.org</a></td><td><a href="tel:9578035138">9578035138</a></td></tr>
                  <tr><td>3</td><td>Mr. K. S. Sowmiyan</td><td>Member</td><td><a href="mailto:sowmiyanks@svasc.org">sowmiyanks@svasc.org</a></td><td><a href="tel:9944902202">9944902202</a></td></tr>
                  <tr><td>4</td><td>Ms. B. Priya</td><td>Member</td><td><a href="mailto:priyab@svasc.org">priyab@svasc.org</a></td><td><a href="tel:9080010034">9080010034</a></td></tr>
                  <tr><td>5</td><td>Mrs. K. V. Ranjani</td><td>Member</td><td><a href="mailto:ranjanikv@svasc.org">ranjanikv@svasc.org</a></td><td><a href="tel:9677706154">9677706154</a></td></tr>
                  <tr><td>6</td><td>Mrs. A. Revathi</td><td>Member</td><td><a href="mailto:revathia@svasc.org">revathia@svasc.org</a></td><td><a href="tel:9597677646">9597677646</a></td></tr>
                  <tr><td>7</td><td>Mrs. K. Iswarya</td><td>Member</td><td><a href="mailto:iswarya@svasc.org">iswarya@svasc.org</a></td><td><a href="tel:9597137819">9597137819</a></td></tr>
                  <tr><td>8</td><td>P. Dhanavel</td><td>Member</td><td><a href="mailto:madhandhanavel@gmail.com">madhandhanavel@gmail.com</a></td><td><a href="tel:7708156322">7708156322</a></td></tr>
                  <tr><td>9</td><td>A. Sanjai</td><td>Member</td><td><a href="mailto:sanjay241220072@gmail.com">sanjay241220072@gmail.com</a></td><td><a href="tel:6381694505">6381694505</a></td></tr>
                  <tr><td>10</td><td>K. Pavin</td><td>Member</td><td><a href="mailto:savinpavin4@gmail.com">savinpavin4@gmail.com</a></td><td><a href="tel:8072140733">8072140733</a></td></tr>
                  <tr><td>11</td><td>V. Ruban</td><td>Member</td><td><a href="mailto:Roobanr971@gmail.com">Roobanr971@gmail.com</a></td><td><a href="tel:7708132658">7708132658</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
          `
        }
      ]
    }
  ];


const ProjectsPortfolio = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(defaultActivities);
  const [selectedProject, setSelectedProject] = useState(null);
  const [highlightedContent, setHighlightedContent] = useState({ ID: "", category: "", bImage: "", copy: "", cards: [] });
  const [projectHeights, setProjectHeights] = useState({});
  const [modalCard, setModalCard] = useState(null);
  const [heroData, setHeroData] = useState({
    title: 'SVASC Campus Activities',
    description: 'Explore the comprehensive range of student support services, clubs, and developmental programs at SVASC.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400'
  });
  const scrollBackTo = useRef(0);
  const selectedAreaRef = useRef(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/page-heros/activities`).then(res => {
      if (res.data.success && res.data.data) {
        const d = res.data.data;
        const cleanImg = d.image ? d.image.replace(/^\/+/, '') : '';
        setHeroData({
          title: d.title || heroData.title,
          description: d.description || heroData.description,
          image: d.image ? (d.image.startsWith('http') ? d.image : `${BASE_URL}/${cleanImg}`) : heroData.image
        });
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/activities`);
        if (res.data.success && res.data.data.length > 0) {
          const mapped = res.data.data.map(item => {
            const cleanImg = item.bannerImage.replace(/^\/+/, '');
            return {
              ID: item._id,
              category: item.category,
              bImage: item.bannerImage.startsWith('http') ? item.bannerImage : `${BASE_URL}/${cleanImg}`,
              copy: item.description,
              cards: item.cards.map(card => {
                const cardClean = card.image.replace(/^\/+/, '');
                return {
                  title: card.title,
                  description: card.description || "No description provided.",
                  image: card.image.startsWith('http') ? card.image : `${BASE_URL}/${cardClean}`
                };
              })
            };
          });
          setProjects(mapped);
        }
      } catch (err) {
        console.error("Error fetching activities", err);
      }
    };
    fetchActivities();
  }, []);

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
      const baseWidth = (winWidth * 0.3133 - 20); // updated for 3 cards per row
      let height;

      if (midRange) {
        height = baseWidth * 0.5;
      } else if (smallRange) {
        height = baseWidth;
      } else {
        height = (winWidth * 0.23 - 20) * 1.5; // matches the exact height calculation that was used for the 3rd card previously
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

  // Reset scroll position when a project is opened
  useEffect(() => {
    if (selectedProject && selectedAreaRef.current) {
      selectedAreaRef.current.scrollTop = 0;
    }
  }, [selectedProject, highlightedContent]);

  const getProjectClass = (projectId) => {
    const classes = [styles.project];
    if (selectedProject === projectId) {
      classes.push(styles.openedProject);
    }
    if (selectedProject && selectedProject !== projectId) {
      classes.push(styles.hidden, styles.shrunk);
    }
    return classes.join(' ');
  };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0, minHeight: '100vh' }}>
      <Hero
        title={heroData.title}
        description={heroData.description}
        image={heroData.image}
      />

      <h2 className={styles.campusLifeTitle}>
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
            <h3 className={styles.beforeTitle}>{project.category}</h3>
            <div className={styles.info}>
              <h1 className={styles.fadeTitle}>{project.category}</h1>
              <hr />
            </div>
            <p className={styles.backArrow}>
              <i className="fa fa-angle-double-left" aria-hidden="true">‹‹</i>
            </p>
          </div>
        ))}
      </div>

      <div
        ref={selectedAreaRef}
        className={`${styles.selectedArea} ${selectedProject ? styles.opened : ''}`}
      >
        <h1 style={{ backgroundImage: `url(${highlightedContent.bImage})` }}>
          <span>{highlightedContent.category}</span>
        </h1>
        <div
          className={styles.copyArea}
          dangerouslySetInnerHTML={{ __html: highlightedContent.copy }}
        />

        {highlightedContent.cards && highlightedContent.cards.length > 0 && (
          <div className={styles.cardContainer}>
            <div className={styles.eventUniqueSection}>
              <div className={styles.yearContainer}>
                <span className={styles.yearPart}>20</span>
                <span className={styles.yearPart}>26</span>
              </div>
              <div className={styles.eventInfo}>
                <div className={styles.eventDate}>
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}
                </div>
                <h2 className={styles.eventCategoryTitle}>
                  {highlightedContent.category}
                </h2>
              </div>
            </div>
            {highlightedContent.cards.map((card, index) => (
              <div key={index} className={styles.gameCard}>
                <div
                  className={styles.gameCardCover}
                  style={{ backgroundImage: `url(${card.image})`, cursor: 'pointer' }}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    if (card.link) {
                      navigate(card.link);
                    } else {
                      setModalCard(card);
                    }
                  }}
                >
                  <div className={styles.cardContentOverlay}>
                    <div className={styles.cardTitle}>{card.title}</div>
                    <button className={styles.readMoreBtn}>Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalCard && (
        <div className={styles.cardModalOverlay} onClick={() => setModalCard(null)}>
          <div className={styles.cardModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModalBtn} onClick={() => setModalCard(null)}>×</button>
            <img src={modalCard.image} alt={modalCard.title} className={styles.modalImage} />
            <h2 className={styles.modalTitle}>{modalCard.title}</h2>
            <div className={styles.modalDesc} dangerouslySetInnerHTML={{ __html: modalCard.description || '' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPortfolio;
