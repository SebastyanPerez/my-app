import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { mockPlaylists } from '../utils/mockData';
import './css/Playlists.css';

const Playlists = () => {
  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      const newPlaylist = {
        id: Date.now(),
        name: newPlaylistName,
        songCount: 0,
        gradient: 'linear-gradient(45deg, #8b5cf6, #a855f7)'
      };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName('');
      setShowCreateForm(false);
    }
  };

  return (
    <div className="playlists-page">
      <div className="playlists-header">
        <h1>Mis Playlists</h1>
        <Button onClick={() => setShowCreateForm(true)}>
          <i className="fas fa-plus"></i> Crear Playlist
        </Button>
      </div>

      {showCreateForm && (
        <div className="create-playlist-form">
          <input
            type="text"
            placeholder="Nombre de la playlist"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
          />
          <div className="form-actions">
            <Button onClick={handleCreatePlaylist}>Crear</Button>
            <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
              Cancelar
            </Button>
          </div>
        </div>
      )}

      <div className="playlists-grid">
        {playlists.map(playlist => (
          <Card
            key={playlist.id}
            title={playlist.name}
            subtitle={`${playlist.songCount} canciones`}
            gradient={playlist.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
