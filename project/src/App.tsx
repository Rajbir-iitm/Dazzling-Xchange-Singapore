import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SettingsModal from './components/SettingsModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PortalWalkthrough from './pages/PortalWalkthrough';
import SalesModal from './components/SalesModal';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-black w-full overflow-x-hidden min-w-[280px] font-primary flex flex-col md:flex-row m-0 p-0">
        {/* Sidebar Component — top bar on mobile, left rail on desktop */}
        <div className="shrink-0 w-full md:w-auto">
          <Sidebar onOpenSettings={openSettings} />
        </div>
        
        {/* Main Content — padding for mobile top bar, offset by sidebar on desktop */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden bg-black pt-16 md:pt-0 md:ml-[60px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/walkthrough" element={<PortalWalkthrough />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* Settings Modal */}
        <SettingsModal isOpen={isSettingsOpen} onClose={closeSettings} />
        
        {/* Sales Modal */}
        <SalesModal />
      </div>
    </Router>
  );
}

export default App;