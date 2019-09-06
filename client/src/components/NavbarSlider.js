import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const NavbarSlider = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
  
      
    };
  
  
    return (
      <nav className="navbar">
        <h2>Dark</h2>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
  </nav>
    )
};

export default NavbarSlider;