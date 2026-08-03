import React, { useState, useEffect, useRef } from 'react';
import styles from './Activities.module.css';
import Hero from '../components/Common/Hero';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const defaultActivities = [
    {
      ID: "antiRagging",
      category: "Anti Ragging Cell",
      bImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
      copy: `
        <div class="${styles.activitySection}">
          <p>Ragging is prohibited as per Tamilnadu Government Gazette. The Tamilnadu Prohibitor of Ragging Act 1997 received the assent of the Governor on 14th February 1997.</p> 
          <p>Ragging means display of noisy, disorderly conduct doing any act which causes or is likely to cause physical or psychological harm or raise apprehension or fear or shame or embarrassment to a student in any educational institution.</p>
          <p>Whoever directly or indirectly commits, participates in, abets or propagates ragging within or outside of any educational institution, shall be punished with imprisonment for a term which may extend to two years and shall also be liable to a fine which extends to ten thousand rupees.</p>

          <h3>Vision</h3>
          <p>To foster a safe, disciplined, inclusive, and ragging-free campus environment that promotes ethical values, mutual respect and holistic development among students.</p>

          <h3>Mission</h3>
          <ul>
            <li>To maintain discipline and uphold the rules and regulations of the institution.</li>
            <li>To prevent ragging through awareness, vigilance and strict implementation of anti-ragging measures.</li>
            <li>To promote self-discipline, responsibility and ethical conduct among students.</li>
            <li>To ensure a secure, respectful and conducive atmosphere for academic and personal growth.</li>
            <li>To address disciplinary and ragging-related issues promptly, fairly and transparently.</li>
          </ul>

          <h3>Objectives</h3>
          <ol>
            <li>To maintain discipline and ensure adherence to the rules, regulations, and code of conduct of the institution.</li>
            <li>To prevent ragging and create awareness about its harmful effects and legal consequences.</li>
            <li>To provide a safe, secure, inclusive, and conducive environment for teaching and learning.</li>
            <li>To receive, investigate, and address disciplinary and ragging-related complaints promptly and impartially.</li>
            <li>To promote self-discipline, mutual respect, ethical values, and harmonious relationships among students.</li>
          </ol>

          <h3>Roles and Responsibilities of the Committee Members</h3>
          <ol>
            <li>Attend all committee meetings regularly and actively participate in discussions related to maintaining discipline and preventing ragging within the institution.</li>
            <li>Assist the Chairperson, Principal and Coordinator in planning, implementing and monitoring discipline and anti-ragging initiatives across the campus.</li>
            <li>Ensure strict compliance with the institution's code of conduct, disciplinary rules and anti-ragging regulations issued by the statutory authorities.</li>
            <li>Monitor student behaviour within the campus and identify instances of indiscipline or ragging for timely intervention.</li>
            <li>Receive, examine, and maintain confidentiality of complaints related to disciplinary issues and ragging and assist in conducting fair and impartial enquiries.</li>
            <li>Organize orientation programmes, awareness campaigns, seminars and counselling sessions to educate students about discipline, ethical behaviour and the legal consequences of ragging.</li>
            <li>Promote a culture of mutual respect, inclusiveness, dignity, and harmonious relationships among students, faculty and staff.</li>
            <li>Maintain proper records of committee meetings, complaints received, enquiries conducted, actions taken and awareness programmes organized.</li>
            <li>Recommend appropriate disciplinary and corrective measures against individuals found guilty of misconduct or ragging, in accordance with institutional rules and regulatory guidelines.</li>
            <li>Submit reports and perform any additional responsibilities assigned by the Principal to ensure a safe, disciplined and ragging-free campus environment.</li>
          </ol>

          <div class="${styles.teamDetails}">
            <h3>Discipline & Anti-Ragging Committee</h3>
            <p><strong>Chairperson:</strong> Mr. G. Gowtham, CEO</p>
            <p><strong>Committee Members:</strong></p>
            <ol>
              <li>Dr. R. Ramkumar, Principal</li>
              <li>Dr. Chi. Nanjappa, Vice-Principal & Coordinator</li>
              <li>Dr. R. Senthilrani, Head, Department of Tamil</li>
              <li>Dr. V. Siva Guru Vignesh, Head, Department of English</li>
              <li>Dr. P. Rajasekar, Head, Department of Management</li>
              <li>Dr. A. Savitha, Head, Department of Commerce (UG)</li>
              <li>Dr. M. S. Gomathi, Head, Department of Commerce (CA)</li>
              <li>Mrs. B. Kanchanadevi, Head, Department of Computer Science</li>
              <li>Dr. V. Suresh Kumar, Head, Department of Computer Applications</li>
              <li>Mr. P. Arokyaraj, Head, Department of Mathematics</li>
              <li>Mrs. K. S. Malathi, Head, Department of Chemistry</li>
              <li>Dr. S. Manju, Head, Department of Microbiology</li>
              <li>Mrs. T. Ayeesha Sumaiya, Head, Department of Costume Design and Fashion</li>
              <li>Dr. P. Krishnakumari, Librarian</li>
              <li>Mr. K. Manikandan, Physical Director</li>
              <li>Mrs. S. Bhavani, Assistant Physical Director</li>
            </ol>
          </div>
        </div>
      `,
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
      copy: `
        <div class="${styles.activitySection}">
          <p>The National Service Scheme functions in our college as a resounding social service unit. Important programmes include sapling plantation, village adoption, medical camps, and creating awareness about hygiene and environment.</p> 
          <p>NSS organized Blood Donation Camp on 22.04.2022 jointly with Siruvalur Primary Health Care Center and Government Hospital Gobichettipalayam. Sixty One Units (61) of Blood were collected from NSS Students.</p>
          <p>On National Welfare Project Day, a three-day camp was conducted at Sanjeevirayan Hill featuring Hill Route Cleanliness, Seed Bombing in the Forest, and awareness about Swachh Bharat Mission among rural communities.</p>

          <h3>Vision</h3>
          <p>The vision is to build the youth with the mind and spirit to serve the society and work for the social uplift of the down-trodden masses of our nation as a movement.</p>

          <h3>Mission</h3>
          <p>The National Service Scheme has been functioning with the motto “NOT ME BUT YOU” in view of making the youth inspired in service of the people and hence NSS Aims Education through Community Service and Community Service through Education.</p>

          <h3>Broad Objectives</h3>
          <ol>
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

          <h3>Objectives of NSS</h3>
          <ol>
            <li>To work with / among people.</li>
            <li>To engage in creative and constructive social action.</li>
            <li>To enhance his/her knowledge of himself / herself and the community.</li>
            <li>To put his/her scholarship to practical use in mitigating at least some of the problems.</li>
            <li>To gain skill in the exercise of democratic leadership.</li>
            <li>To gain skills in programme development to enable him/her for self-employment.</li>
            <li>To bridge the gulf between the educated and the uneducated masses.</li>
            <li>To promote the will to serve the weaker section of the community.</li>
          </ol>

          <h3>Annual Action Plan for Academic Year - 2026-2027</h3>
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
            <h3>Club Coordinator & Members List</h3>
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
      `,
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
      copy: `
        <div class="${styles.activitySection}">
          <p>The Youth Red Cross (YRC) is one of the avenues for students to pursue Personality and Character Development Programme. The YRC aims to inspire humanitarian activities to minimize and alleviate human suffering.</p> 
          <p>Objectives include conducting social and health awareness programmes, encouraging humanitarian services to society, offering First Aid Training to volunteers, and developing leadership quality among students.</p>
          <p>Regular activities include Blood Donation Camps, Blood Grouping and Haemoglobin Estimation, Essay competitions, Health habits practice, and Exhibition of film shows and cultural programmes for disease prevention.</p>

          <h3>Vision</h3>
          <p>To inspire and empower young people to become responsible, compassionate, and active citizens who serve humanity, promote health, uphold human dignity, and contribute to building a peaceful and resilient society.</p>

          <h3>Mission</h3>
          <p>To mobilize and empower youth through voluntary service, health education, first aid training, blood donation awareness, disaster preparedness, and community welfare activities, guided by the Fundamental Principles of the Red Cross.</p>

          <h3>Motto</h3>
          <p><strong>Health, Service, Friendship</strong></p>

          <h3>Objectives of YRC</h3>
          <ul>
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
            <h3>YRC Committee Members</h3>
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
      `,
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
      copy: `
        <div class="${styles.activitySection}">
          <p>The Women Empowerment Cell aims to empower girl students, enhance understanding of women's issues, and make the campus a safe place for women students. The cell creates awareness of their rights and duties.</p> 
          <p>It provides a platform for women to share experiences and views regarding their status in society and suggest ways to improve and empower themselves. The cell facilitates women's empowerment through guest lectures, seminars, and awareness programmes.</p>
          <p>The cell conducted an Awareness program on "Menstrual Hygiene Management" on 13.10.2022 and observed 'International Day of Elimination of Violence against Women' with a program for Rural Women at Naathipalayam village on 25.11.2022.</p>

          <h3>Vision</h3>
          <p>To empower women with knowledge, leadership, confidence, and social responsibility, enabling them to become self-reliant individuals who contribute to an equitable and progressive society.</p>

          <h3>Mission</h3>
          <ul>
            <li>To promote leadership and personality development among women.</li>
            <li>To create awareness about gender equality, women's rights, and legal protection.</li>
            <li>To provide skill development and career-oriented training.</li>
            <li>To organize programs for physical, mental, and social well-being.</li>
            <li>To foster a safe, inclusive, and respectful academic environment.</li>
          </ul>

          <h3>Objectives of Women Empowerment Cell</h3>
          <ol>
            <li>To promote self-confidence, leadership qualities, and decision-making skills among girl students.</li>
            <li>To create awareness about gender equality, women's rights, legal literacy, health, safety, and self-defense.</li>
            <li>To enhance employability through skill development, entrepreneurship, career guidance, and personality development programmes.</li>
            <li>To encourage the active participation of women in academic, co-curricular, cultural, sports, and community service activities.</li>
            <li>To empower women to become independent, socially responsible, and confident individuals while ensuring a safe, inclusive, and supportive campus environment.</li>
          </ol>

          <h3>Expected Outcomes</h3>
          <ol>
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

          <h3>Roles & Responsibilities</h3>
          <ol>
            <li>To organize awareness programmes, seminars, workshops, and skill development activities for the empowerment of women.</li>
            <li>To encourage girl students and women staff members to actively participate in academic, co-curricular, cultural, sports, and leadership activities.</li>
            <li>To promote gender equality and create awareness on women's rights, legal literacy, health, safety, cyber security, and prevention of harassment.</li>
            <li>To develop self-confidence, leadership qualities, entrepreneurial skills, and decision-making abilities among girl students.</li>
            <li>To provide counselling and guidance for students' academic, emotional, psychological, and personal well-being.</li>
            <li>To ensure a safe, secure, inclusive, and supportive campus environment that upholds the dignity, respect, and welfare of women.</li>
          </ol>

          <div class="${styles.teamDetails}">
            <h3>WEC Committee Members</h3>
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
      `,
      cards: [
        { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", title: "Women Safety" },
        { image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400", title: "Awareness Programs" },
        { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400", title: "Empowerment Sessions" },
        { image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400", title: "Guest Lectures" }
      ]
    },
    {
      ID: "antiDrug",
      category: "Anti Drug Club",
      bImage: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800",
      copy: `
        <div class="${styles.activitySection}">
          <h3>Vision</h3>
          <p>To build a campus free from substance abuse where every student chooses health, purpose, and a drug-free future.</p>
          
          <h3>Mission</h3>
          <ol>
            <li>Create awareness about the harmful effects of drugs through campaigns and workshops.</li>
            <li>Empower students to make informed, healthy choices.</li>
            <li>Provide peer support and guidance for those seeking help.</li>
            <li>Collaborate with experts and authorities to promote a safe campus environment.</li>
          </ol>

          <h3>Objectives of Anti Drug Club</h3>
          <ol>
            <li><strong>Create Awareness:</strong> Conduct regular seminars, workshops, and campaigns to educate students about the physical, mental, and social effects of drug abuse.</li>
            <li><strong>Prevent First Use:</strong> Equip students with life skills to resist peer pressure and make informed decisions through interactive sessions and role plays.</li>
            <li><strong>Promote Healthy Alternatives:</strong> Encourage sports, arts, yoga, and cultural activities as positive outlets to reduce stress and prevent drug experimentation.</li>
            <li><strong>Build Support Systems:</strong> Establish peer support groups and confidential counseling channels for students seeking help or information.</li>
            <li><strong>Early Identification & Intervention:</strong> Train club members to identify early warning signs and guide at-risk students to professional help without stigma.</li>
          </ol>

          <div class="${styles.teamDetails}">
            <h3>Committee Members</h3>
            <p><strong>Coordinator:</strong> Mr. K. Manikandan, Physical Director</p>
            <p><strong>Members:</strong></p>
            <ol>
              <li>Mr. V. Ashok Kumar, AP/English</li>
              <li>Ms. M. Miruthila, AP/PG Commerce</li>
              <li>Mr. D. Shyamsundar, AP/BCA</li>
            </ol>
          </div>
        </div>
      `,
      cards: [
        { image: "https://images.unsplash.com/photo-1574689049596-1e68e858db4c?w=400", title: "Awareness Campaign" },
        { image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400", title: "Healthy Alternatives" },
        { image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400", title: "Peer Support" }
      ]
    },
    {
      ID: "mediaCell",
      category: "Media Cell",
      bImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      copy: `
        <div class="${styles.activitySection}">
          <h3>Vision</h3>
          <p>To create a connected digital world where people can communicate, collaborate, share knowledge, and access information instantly, fostering innovation, learning, and global relationships.</p>

          <h3>Mission</h3>
          <ul>
            <li>To enable seamless communication among people across the world.</li>
            <li>To provide a platform for sharing information, ideas, and experiences.</li>
            <li>To support learning, collaboration, and community engagement.</li>
          </ul>

          <h3>Objectives</h3>
          <p>The Social Media Cell aims to promote the college's activities, achievements, and events through various social media platforms. It serves as a bridge between the institution and students, alumni, parents, and the wider community by sharing timely and accurate information. The cell also works to enhance the college's visibility, strengthen its reputation, encourage student engagement, and showcase academic, cultural, and extracurricular accomplishments.</p>

          <h3>Key Responsibilities</h3>
          <ol>
            <li><strong>Content Planning and Management:</strong> Develop and maintain a social media content calendar. Create, schedule, and publish engaging posts related to academics, events, achievements, admissions, and campus life.</li>
            <li><strong>Promotion of College Activities:</strong> Publicize seminars, workshops, cultural events, sports activities, placement drives, and other college programs. Highlight student achievements, faculty accomplishments, and institutional milestones.</li>
            <li><strong>Coordination with Departments:</strong> Collect updates, photographs, videos, and announcements from various departments and clubs. Coordinate with faculty, student coordinators, and event organizers.</li>
            <li><strong>Social Media Engagement:</strong> Monitor comments, messages, and mentions on official social media accounts. Respond to queries professionally and encourage positive engagement.</li>
            <li><strong>Brand Representation:</strong> Maintain a positive and professional image of the college on all social media platforms. Ensure consistency in logos, messaging, and visual identity.</li>
            <li><strong>Compliance and Ethics:</strong> Adhere to college policies, copyright regulations, and privacy requirements. Obtain necessary permissions before posting photographs or videos.</li>
            <li><strong>Performance Monitoring:</strong> Track social media metrics such as reach, engagement, followers, and campaign performance.</li>
            <li><strong>Account Security:</strong> Maintain the confidentiality of account credentials and report any security issues immediately.</li>
          </ol>

          <h3>Expected Outcomes</h3>
          <ul>
            <li>Increased visibility of the college and its programs.</li>
            <li>Enhanced engagement with prospective students, parents, alumni, and stakeholders.</li>
            <li>Timely dissemination of accurate information.</li>
            <li>Strong and positive online reputation for the institution.</li>
          </ul>

          <div class="${styles.teamDetails}">
            <h3>Conditions & Resolution</h3>
            <p>The committee approved the above roles and responsibilities for Social Media Coordinators. All content shared on social media must be accurate, professional, and approved by the principal. Posts should uphold the college's values, respect privacy, and avoid offensive or misleading content.</p>
          </div>
        </div>
      `,
      cards: [
        { image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400", title: "Social Media Outreach" },
        { image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400", title: "Content Creation" },
        { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", title: "Analytics & Engagement" }
      ]
    },
    {
      ID: "clubs",
      category: "College Clubs",
      bImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
      copy: `<p>Our college hosts various clubs including Fine Arts Club, Eco Club, and Creativity Club. The Fine Arts Club celebrated Teachers' Day 2025 and conducted Tamil cultural programs. The Felicitation Ceremony honored school teachers who received the Tamil Nadu Government Dr. Radhakrishnan Award.</p> <p>The Eco Club creates environmental awareness through plantation drives, water conservation, waste management, and organizing nature trails in wildlife sanctuaries. The Consumer Protection Club participated in "Mock Court" competition and bagged a Special Prize.</p><p>The Creativity Club nurtures artistic skills and connects with the larger art community. The Entrepreneurship Development Cell organized a two-day workshop on "Life Skills Development" for all UG students in November 2022.</p>`,
      cards: [
        { image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400", title: "Fine Arts Club" },
        { image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400", title: "Eco Club", description: `
          <div class="${styles.modalDescContent}">
            <h3 style="color:var(--gold); margin-top:0;">Vision</h3>
            <p>To create an environmentally conscious and sustainable campus by inspiring students to protect nature, conserve resources, and promote eco-friendly practices.</p>
            <h3 style="color:var(--gold);">Mission</h3>
            <ul style="padding-left: 20px;">
              <li>To develop environmental awareness among students and staff.</li>
              <li>To encourage active participation in environmental conservation activities.</li>
              <li>To promote sustainable practices such as waste management, energy conservation, and tree plantation.</li>
              <li>To create responsible citizens committed to protecting the environment.</li>
            </ul>
            <h3 style="color:var(--gold);">Objectives</h3>
            <ol style="padding-left: 20px;">
              <li>To create awareness about environmental issues such as pollution, climate change, and biodiversity.</li>
              <li>To encourage students to participate in tree plantation and campus greening.</li>
              <li>To promote waste segregation, recycling, and proper waste management.</li>
              <li>To conserve natural resources like water and electricity.</li>
              <li>To organize seminars, rallies, and awareness campaigns.</li>
            </ol>
            <h3 style="color:var(--gold);">Composition of Eco Club</h3>
            <ul style="padding-left: 20px;">
              <li><strong>Coordinator:</strong> Mrs. K.S. MALATHI (6383021694)</li>
              <li><strong>Members:</strong> Mrs. M. KAVITHA, Mr. P. KARTHIKEYAN, Mrs. K. GAYATHRI, L. MOHAN, M. SUBINRAJ, R. SUDHARSHAN, T. MUNEESHWARAN</li>
            </ul>
          </div>
        ` },
        { image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400", title: "Creativity Club" },
        { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400", title: "Life Skills Workshop" }
      ]
    }
  ];

const ProjectsPortfolio = () => {
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
                  onClick={(e) => { e.stopPropagation(); setModalCard(card); }}
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
