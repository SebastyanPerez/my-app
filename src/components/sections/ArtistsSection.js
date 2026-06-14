import React from 'react';
import { mockArtists } from '../../utils/mockData';
import './css/ArtistsSection.css';

const ArtistsSection = () => {
  return (
    <section className="artists-section">
      <h2 className="section-title">
        Artistas Populares
        <a href="#" className="view-all">Ver todo</a>
      </h2>
      <div className="artist-grid">
        {mockArtists.map(artist => (
          <div key={artist.id} className="artist-card">
            <div 
              className="artist-avatar" 
              style={{ background: artist.gradient }}
            ></div>
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-listeners">{artist.listeners} oyentes</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsSection;