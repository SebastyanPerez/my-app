import React from 'react';
import Card from '../common/Card';
import { mockPlaylists } from '../../utils/mockData';
import './css/RecommendedSection.css';

const RecommendedSection = () => {
  return (
    <section className="recommended-section">
      <h2 className="section-title">
        Recomendado para ti
        <a href="#" className="view-all">Ver todo</a>
      </h2>
      <div className="card-grid">
        {mockPlaylists.map(playlist => (
          <Card
            key={playlist.id}
            title={playlist.name}
            subtitle={`${playlist.songCount} canciones`}
            gradient={playlist.gradient}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;