import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import { useDarkMode2 } from "../hooks/useDarkModeRed";

const NavbarSlider = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
  
    };


      // DarkMode Red
  const [darkMode2, setDarkMode2] = useDarkMode2(false);
  const toggleMode2 = e => {
    e.preventDefault();
    setDarkMode2(!darkMode2);
    
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
  


        {/* Dark Mode Red */}
        <h2>Red</h2>
        <div className="dark-mode__toggle">
          <div
          onClick={toggleMode2}
          className={darkMode2 ? 'toggle toggled' : 'toggle'}
          />
        </div>

  </nav>



    )

    







};

export default NavbarSlider;