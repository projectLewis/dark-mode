import React, { useState } from "react";

const Navbar = ({ handleTheme }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    // e.preventDefault();
    handleTheme();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
