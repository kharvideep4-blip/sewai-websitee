import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'  // Make sure this file exists at src/components/Navbar.jsx
import Footer from './components/Footer'  // Make sure this file exists at src/components/Footer.jsx

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import KnowledgeBase from './pages/KnowledgeBase'
import Media from './pages/Media'
import TempleEnquiry from './pages/TempleEnquiry'
import TemplePlatformRegistration from './pages/TemplePlatformRegistration'
import BackgroundMusicPlayer from './components/BackgroundMusicPlayer'
import DevoteeMembership from './pages/DevoteeMembership'
import MembershipCard from './pages/MembershipCard'
import Members from './pages/Members'
import './index.css'

// ===== FEATURES =====
import SettingUp from './pages/features/SettingUp'
import DevoteeConnect from './pages/features/DevoteeConnect'
import PaymentGateway from './pages/features/PaymentGateway'
import Inventory from './pages/features/Inventory'
import AIFeatures from './pages/features/AIFeatures'
import Procedures from './pages/features/Procedures'
import SmartDonations from './pages/features/SmartDonations'
import DevaProgram from './pages/features/DevaProgram'
import TempleMerchandise from './pages/features/TempleMerchandise'
import TempleTrueNoms from './pages/services/TempleTrueNoms'
import TempleEMarketPlace from './pages/features/TempleEMarketPlace'
import Capital from './pages/features/Capital'
import TempleEducation from './pages/features/TempleEducation'
import TempleHiring from './pages/features/TempleHiring'
import HallBooking from './pages/features/HallBooking'

// ===== TEMPLE SERVICES =====
import PrasadAutomation from './pages/services/PrasadAutomation'
import TempleSecurity from './pages/services/TempleSecurity'
import TempleMaps from './pages/services/TempleMaps'
import TempleVisitorManagement from './pages/services/TempleVisitorManagement'
import TempleTimeSchedule from './pages/services/TempleTimeSchedule'
import TempleDelicateMoments from './pages/services/TempleDelicateMoments'
import TempleTourism from './pages/services/TempleTourism'
import KeyTempleEvent from './pages/services/KeyTempleEvent'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/media" element={<Media />} />
        <Route path="/temple-enquiry" element={<TempleEnquiry />} />
        <Route path="/temple-platform-registration" element={<TemplePlatformRegistration />} />
        <Route path="/features/setting-up" element={<SettingUp />} />
        <Route path="/features/devotee-connect" element={<DevoteeConnect />} />
        <Route path="/features/payment-gateway" element={<PaymentGateway />} />
        <Route path="/features/Inventory" element={<Inventory />} />
        <Route path="/features/ai-features" element={<AIFeatures />} />
        <Route path="/features/procedures" element={<Procedures />} />
        <Route path="/features/smart-donations" element={<SmartDonations />} />
        <Route path="/features/deva-program" element={<DevaProgram />} />
        <Route path="/features/temple-merchandise" element={<TempleMerchandise />} />
        <Route path="/features/temple-services/prasad-automation" element={<PrasadAutomation />} />
        <Route path="/features/temple-services/temple-security" element={<TempleSecurity />} />
        <Route path="/features/temple-services/temple-maps" element={<TempleMaps />} />
        <Route path="/features/temple-services/temple-visitor-management" element={<TempleVisitorManagement />} />
        <Route path="/features/temple-services/temple-time-schedule" element={<TempleTimeSchedule />} />
        <Route path="/features/temple-services/temple-delicate-moments" element={<TempleDelicateMoments />} />
        <Route path="/features/temple-services/temple-tourism" element={<TempleTourism />} />
        <Route path="/features/temple-services/temple-true-noms" element={<TempleTrueNoms />} />
        <Route path="/features/temple-services/key-temple-event" element={<KeyTempleEvent />} />
        <Route path="/features/temple-e-marketplace" element={<TempleEMarketPlace />} />
        <Route path="/features/capital" element={<Capital />} />
        <Route path="/features/temple-education" element={<TempleEducation />} />
        <Route path="/features/temple-hiring" element={<TempleHiring />} />
        <Route path="/features/hall-booking" element={<HallBooking />} />
        <Route path="/devotee-membership" element={<DevoteeMembership />} />
        <Route path="/devotee-membership/card" element={<MembershipCard />} />
        <Route path="/devotee-membership/members" element={<Members />} />
      </Routes>
      <Footer />
      <BackgroundMusicPlayer />
    </BrowserRouter>
  )
}

export default App