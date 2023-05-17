import React, { useState } from 'react';

function Navbar() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <nav className={`navbar ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <ul className="navbar-title"><h1><i>Matea Chat App </i> </h1>
        <div className="navbar-item navbar-toggle">
          <button id="dark-mode-toggle" className="dark-mode-button" onClick={handleThemeChange}>
            Change the theme
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;