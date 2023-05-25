import React, { useState } from 'react';

function Navbar() {
  const [mode, setMode] = useState('light');

  const handleModeChange = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (newMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <nav className={`navbar ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <div className="navbar-title"><h1><i>Matea Chat App </i> </h1>
        <div className="navbar-item navbar-toggle">
          <button id="dark-mode-toggle" className="dark-mode-button" onClick={handleModeChange}>
            Change mode
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;