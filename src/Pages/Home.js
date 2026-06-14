import React from 'react';
import WelcomeBanner from '../components/sections/WelcomeBanner';
import RecommendedSection from '../components/sections/RecommendedSection';
import ArtistsSection from '../components/sections/ArtistsSection';

import './css/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <WelcomeBanner />
      <RecommendedSection />
      <ArtistsSection />
    </div>
  );
};

export default Home;
