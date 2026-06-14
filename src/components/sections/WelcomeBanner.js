import React from 'react';
import Button from '../common/Button';
import './css/WelcomeBanner.css';

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <h2>¡Bienvenido de nuevo!</h2>
      <p>Descubre nueva música y artistas emergentes en nuestra plataforma.</p>
      <Button>Explorar ahora</Button>
    </div>
  );
};

export default WelcomeBanner;