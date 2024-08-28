// src/components/DarkModeToggle.js
import React from 'react';
import { useTheme } from '../ThemeContext';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
