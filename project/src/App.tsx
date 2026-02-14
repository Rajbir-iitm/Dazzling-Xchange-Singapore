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
      <div className="min-h-screen bg-black w-full overflow-x-hidden min-w-[320px] font-primary flex m-0 p-0">
        {/* Sidebar Component */}
        <Sidebar onOpenSettings={openSettings} />
        
        {/* Main Content — offset by collapsed sidebar width (60px) */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden bg-black md:ml-[60px]">
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