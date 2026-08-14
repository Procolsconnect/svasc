
import Exam from './pages/Exam';
import Home from './pages/Home';
import CampusLife from './pages/CampusLife';
import Sports from './pages/Sports';
import Alumni from './pages/Alumni';
import UserLayout from './pages/UserLayout';
import Blogs from './pages/Blogs';
import Programms from './pages/Programms';
import ProgramDetails from './pages/ProgramDetails';
import Events from './pages/Events';
import Activities from './pages/Activities';
import Placement from './pages/Placement';
import Statistics from './pages/Statistics';
import AboutSVASC from './pages/AboutSVASC';
import Vision from './pages/Vision';
import Timeline from './pages/Timeline';
import PrincipalMessage from './components/Leadership/PrincipalMessage';
import SecretaryMessage from './components/Leadership/SecretaryMessage';
import ChairmanMessage from './components/Leadership/ChairmanMessage';
import AwardsGallery from './pages/AwardsGallery';
import NewsLetter from './pages/NewsLetter';
import WhySvasc from './pages/WhySvasc';
import Admission from './pages/Admission';
import AdminDashboard from './pages/AdminDashboard';
import Cafeteria from './components/Facilities/Cafeteria';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Common/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LMS from './components/Facilities/LMS';
import Hostel from './components/Facilities/Hostel';
import SmartClass from './components/Facilities/SmartClass';
import Transport from './components/Facilities/Transport';
import Laboratory from './components/Facilities/Laboratory';
import LibraryPortal from './components/Facilities/LibraryPortal';
import VoterLiteracyClub from './routes/voter-literacy-club';
import RotaractClub from './routes/rotaract-club';
import SwayamNptel from './routes/swayam-nptel';
import ResearchDevelopmentCell from './routes/research-development-cell';
import JuniorJciWing from './routes/junior-jci-wing';
import InternalGrievancesCommittee from './routes/internal-grievances-committee';
import InnovationEntrepreneurship from './routes/innovation-entrepreneurship';
import FineArtsClub from './routes/fine-arts-club';
import ConsumerProtectionClub from './routes/consumer-protection-club';
import PlacementTrainingCell from './routes/placement-training-cell';
import Iqac from './routes/iqac';
import Nss from './routes/nss';
import ExamCell from './routes/exam-cell';
import RedRibbonClub from './routes/red-ribbon-club';
import LiteraryClub from './routes/literary-club';
import EcoClub from './routes/eco-club';
import AntiDrugClub from './routes/anti-drug-club';
import YouthRedCross from './routes/youth-red-cross';
import WomenEmpowermentCell from './routes/women-empowerment-cell';
import MediaCell from './routes/media-cell';
import AntiRaggingCell from './routes/anti-ragging-cell';
import GrievanceRedressalCommittee from './routes/grievance-redressal-committee';
import PhysicalEducation from './routes/physical-education';
import EntrepreneurshipDevelopmentCell from './routes/entrepreneurship-development-cell';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/programms" element={<Programms />} />
            <Route path="/program/:id" element={<ProgramDetails />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/about" element={<AboutSVASC />} />
            <Route path="/vision-mission" element={<Vision />} />
            <Route path="/milestones" element={<Timeline />} />
            <Route path="/principal" element={<PrincipalMessage />} />
            <Route path="/secretary" element={<SecretaryMessage />} />
            <Route path="/chairman" element={<ChairmanMessage />} />
            <Route path="/awards" element={<AwardsGallery />} />
            <Route path="/news" element={<NewsLetter />} />
            <Route path="/why-svasc" element={<WhySvasc />} />
            <Route path="/cafeteria" element={<Cafeteria />} />
            <Route path="/lms" element={<LMS />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/smart-class" element={<SmartClass />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/library" element={<LibraryPortal />} />
            <Route path="/voter-literacy-club" element={<VoterLiteracyClub />} />
            <Route path="/rotaract-club" element={<RotaractClub />} />
            <Route path="/swayam-nptel" element={<SwayamNptel />} />
            <Route path="/research-development-cell" element={<ResearchDevelopmentCell />} />
            <Route path="/junior-jci-wing" element={<JuniorJciWing />} />
            <Route path="/internal-grievances-committee" element={<InternalGrievancesCommittee />} />
            <Route path="/innovation-entrepreneurship" element={<InnovationEntrepreneurship />} />
            <Route path="/fine-arts-club" element={<FineArtsClub />} />
            <Route path="/consumer-protection-club" element={<ConsumerProtectionClub />} />
            <Route path="/placement-training-cell" element={<PlacementTrainingCell />} />
            <Route path="/iqac" element={<Iqac />} />
            <Route path="/nss" element={<Nss />} />
            <Route path="/exam-cell" element={<ExamCell />} />
            <Route path="/red-ribbon-club" element={<RedRibbonClub />} />
            <Route path="/literary-club" element={<LiteraryClub />} />
            <Route path="/eco-club" element={<EcoClub />} />
            <Route path="/anti-drug-club" element={<AntiDrugClub />} />
            <Route path="/youth-red-cross" element={<YouthRedCross />} />
            <Route path="/women-empowerment-cell" element={<WomenEmpowermentCell />} />
            <Route path="/media-cell" element={<MediaCell />} />
            <Route path="/anti-ragging-cell" element={<AntiRaggingCell />} />
            <Route path="/grievance-redressal-committee" element={<GrievanceRedressalCommittee />} />
            <Route path="/physical-education" element={<PhysicalEducation />} />
            <Route path="/entrepreneurship-development-cell" element={<EntrepreneurshipDevelopmentCell />} />
          </Route>
          <Route path="/admission" element={<Admission />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
