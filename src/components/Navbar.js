import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Etusivu", link: "#home" },
    { name: "Projektit", link: "#projects" },
    { name: "Minusta", link: "#about" },
    { name: "Yhteystiedot", link: "#contact" },
  ];

  return (
    <nav className="navbar">
      <h1>Oskarin Portfolio</h1>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        {navItems.map((item, idx) => (
          <li key={idx}>
            <a 
              href={item.link} 
              onClick={() => setMenuOpen(false)}
              className="nav-button"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li><ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /></li>
      </ul>
    </nav>
  );
}
