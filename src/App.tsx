import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './pages/Home';
import Works from './pages/Works';
import Bio from './pages/Bio';
import ProjectPage from './pages/ProjectPage';
import CustomScrollbar from './components/CustomScrollbar';
import ScrollToTop from './components/ScrollToTop';
import DevelopmentNotice from './components/DevelopmentNotice';
import { useScrollDirection } from './hooks/useScrollDirection';

function AppContent() {
  const location = useLocation();
  const { visible } = useScrollDirection();
  const showBackground = location.pathname === '/';

  return (
    <>
      {showBackground && <Background />}
      <DevelopmentNotice />
      <Navbar />
      <div className="pb-32">
        {!visible && <SideNav />}
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <CustomScrollbar />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black overflow-hidden">
        <AppContent />
      </div>
    </Router>
  );
}