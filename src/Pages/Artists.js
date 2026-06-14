import React from 'react';
import { mockArtists } from '../utils/mockData';
import './css/Artists.css';
import { FaPlayCircle } from 'react-icons/fa';

const Artists = () => {
  return (
    <div className="artists-page">
      <div className="artists-header">
        <h1>Artistas</h1>
        <p className="artists-sub">Explora artistas populares y emergentes</p>
      </div>

      <div className="artists-grid">
        {mockArtists.map(artist => (
          <div key={artist.id} className="artist-card">
            <div 
              className="artist-avatar" 
              style={{ background: artist.gradient }}
            >
              <button className="play-overlay" type="button"><FaPlayCircle /></button>
            </div>
            <div className="artist-info">
              <h3 className="artist-name">{artist.name}</h3>
              <p className="artist-listeners">{artist.listeners} oyentes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
