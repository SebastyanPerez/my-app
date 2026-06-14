import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, USER_MENU } from '../../utils/constants';
import './css/Siderbar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <i className="fas fa-music"></i>
          <h1>MusicFlow</h1>
        </div>

        <div className="nav-section">
          <ul>
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <NavLink to={item.path} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} onClick={onClose}>
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Tu biblioteca</h3>
          <ul>
            {USER_MENU.map(item => (
              <li key={item.id}>
                {item.path ? (
                  <NavLink to={item.path} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} onClick={onClose}>
                    <i className={`fas fa-${item.icon}`}></i>
                    <span>{item.name}</span>
                  </NavLink>
                ) : (
                  <button type="button" className="nav-item" onClick={() => { /* acción local */ }}>
                    <i className={`fas fa-${item.icon}`}></i>
                    <span>{item.name}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {isOpen && <div className="overlay active" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;
