import React from 'react';
import './css/Header.css';
import SearchBar from '../common/SearchBar';
import Avatar from '../common/Avatar';
import { FaBars, FaTimes, FaUpload, FaBell } from 'react-icons/fa';

const Header = ({ onMenuToggle, isOpen }) => {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onMenuToggle} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <SearchBar />
      <div className="user-actions">
        <button><FaUpload /></button>
        <button><FaBell /></button>
        <div className="user-profile">
          <Avatar size="small" />
          <span className="user-name">UsuarioEjemplo</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
