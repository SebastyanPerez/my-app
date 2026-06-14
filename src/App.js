import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Siderbar';
import MusicPlayer from './components/layout/MusicPlayer';
import { PlayerProvider } from './context/PlayerContext';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Genres from './Pages/Genres';
import Artists from './Pages/Artists';
import Playlists from './Pages/Playlists';
import './Styles/variables.css';
import './Styles/global.css';
import './Styles/responsive.css';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <PlayerProvider>
      <Router>
        <div className="app-container">
          <Header onMenuToggle={toggleSidebar} isOpen={isSidebarOpen} />
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/playlists" element={<Playlists />} />
            </Routes>
          </main>
          <MusicPlayer />
        </div>
      </Router>
    </PlayerProvider>
  );
}

export default App;
