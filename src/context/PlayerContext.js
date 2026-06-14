import React, { createContext, useContext, useReducer } from 'react';

const PlayerContext = createContext(null);

const initialState = {
  currentSong: null,
  isPlaying: false,
  volume: 0.5,
  currentTime: 0,
  duration: 0,
};

function playerReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_CURRENT_TIME':
      return { ...state, currentTime: action.payload };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload };
    case 'SET_CURRENT_SONG':
      return { ...state, currentSong: action.payload, currentTime: 0, duration: action.payload?.duration || 0 };
    case 'SET_DURATION':
      return { ...state, duration: action.payload };
    default:
      return state;
  }
}

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return <PlayerContext.Provider value={{ state, dispatch }}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return ctx;
};

export default PlayerContext;
