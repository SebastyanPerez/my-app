import React, { useState } from 'react';
import Card from '../components/common/Card';
import { mockSongs } from '../utils/mockData';
import './css/Explore.css';

const Explore = () => {
  const [filter, setFilter] = useState('all');

  const filteredSongs = filter === 'all' 
    ? mockSongs 
    : mockSongs.filter(song => song.genre === filter);

  return (
    <div className="explore-page">
      <h1>Explorar Música</h1>
      
      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button 
          className={filter === 'rock' ? 'active' : ''} 
          onClick={() => setFilter('rock')}
        >
          Rock
        </button>
        <button 
          className={filter === 'pop' ? 'active' : ''} 
          onClick={() => setFilter('pop')}
        >
          Pop
        </button>
        <button 
          className={filter === 'electronic' ? 'active' : ''} 
          onClick={() => setFilter('electronic')}
        >
          Electrónica
        </button>
      </div>

      <div className="songs-grid">
        {filteredSongs.map(song => (
          <Card
            key={song.id}
            title={song.title}
            subtitle={song.artist}
            gradient={song.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
