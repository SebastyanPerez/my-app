import React from 'react';
import './css/MusicPlayer.css';
import { FaHeart, FaRandom, FaStepBackward, FaPlay, FaStepForward, FaRedo, FaVolumeUp } from 'react-icons/fa';

const MusicPlayer = () => {
  // Componente estático: placeholders y valores fijos para mostrar diseño e iconos
  const currentSong = { title: 'Song Title', artist: 'Artist Name' };

  return (
    <div className="music-player">
      <div className="song-info">
        <div className="song-thumbnail" />
        <div className="song-details">
          <div className="song-name">{currentSong.title}</div>
          <div className="song-artist">{currentSong.artist}</div>
        </div>
        <div className="song-actions">
          <button type="button"><i className="far fa-heart" /></button>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <button type="button"><FaRandom /></button>
          <button type="button"><FaStepBackward /></button>
          <button type="button" className="play-button">
            <FaPlay />
          </button>
          <button type="button"><FaStepForward /></button>
          <button type="button"><FaRedo /></button>
        </div>
        <div className="progress-container">
          <span className="progress-time">0:00</span>
          <input type="range" min="0" max={100} defaultValue={50} className="progress-bar" />
          <span className="progress-time">3:30</span>
        </div>
      </div>

      <div className="extra-controls">
        <div className="volume-container">
          <FaVolumeUp className="volume-icon" />
          <input type="range" min="0" max="1" step="0.01" defaultValue={0.5} className="volume-bar" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
