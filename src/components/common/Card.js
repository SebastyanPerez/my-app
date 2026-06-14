import React from 'react';
import './css/Card.css';

const Card = ({ title, subtitle, gradient, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img" style={{ background: gradient }}>
        <div className="card-play">
          <i className="fas fa-play"></i>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
