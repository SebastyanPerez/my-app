import React from 'react';
import './css/Avatar.css';

const Avatar = ({ size = 'medium' }) => {
  return (
    <div className={`avatar avatar-${size}`}></div>
  );
};

export default Avatar;
