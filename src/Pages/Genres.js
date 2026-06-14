import React from 'react';
import './css/Genres.css';
import { FaMusic } from 'react-icons/fa';

const Genres = () => {
  const genres = [
    { id: 1, name: 'Rock', color: 'linear-gradient(to right, #8b5cf6, #a855f7)' },
    { id: 2, name: 'Pop', color: 'linear-gradient(to right, #ec4899, #f472b6)' },
    { id: 3, name: 'Electrónica', color: 'linear-gradient(to right, #3b82f6, #60a5fa)' },
    { id: 4, name: 'Hip Hop', color: 'linear-gradient(to right, #10b981, #34d399)' },
    { id: 5, name: 'Jazz', color: 'linear-gradient(to right, #f59e0b, #fbbf24)' },
    { id: 6, name: 'Clásica', color: 'linear-gradient(to right, #6366f1, #818cf8)' },
  ];

  return (
    <div className="genres-page">
      <h1>Géneros Musicales</h1>
      
      <div className="genres-grid">
        {genres.map(genre => (
          <div 
            key={genre.id} 
            className="genre-card"
            style={{ background: genre.color }}
          >
            <div className="genre-overlay">
              <FaMusic className="genre-icon" />
              <h2 className="genre-name">{genre.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
