import React from "react";
import "./Head1.css";

const Header = ({ setPage }) => {
  const handleNavClick = (e, page) => {
    e.preventDefault(); 
    setPage(page);
  };

  return (
    <div className="topnav">
      <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
        Gaming Interest
      </a>

      <div>
        <img
          className="pz2"
          src="https://i.postimg.cc/T2psr7vW/20250205-204358.png"
          alt="logo"
        />
      </div>

      <a href="https://www.razer.com/" target="_blank" rel="noopener noreferrer">Razer</a>
      <a href="https://row.hyperx.com/th/" target="_blank" rel="noopener noreferrer">Hyperx</a>
      <a href="https://www.logitech.com/th-th" target="_blank" rel="noopener noreferrer">Logitech</a>
      <a href="https://rog.asus.com/th/" target="_blank" rel="noopener noreferrer">Rog</a>
      <a href="https://www.corsair.com/ww/en" target="_blank" rel="noopener noreferrer">Corsair</a>
      <a href="https://www.endgamegear.com/en-us/" target="_blank" rel="noopener noreferrer">Endgame Gear</a>
      <a href="https://fantechworld.com/" target="_blank" rel="noopener noreferrer">Fantech</a>
      <a href="https://www.nubwo.co.th/" target="_blank" rel="noopener noreferrer">Nubwo</a>
      <a href="https://egazone.com/" target="_blank" rel="noopener noreferrer">EGA</a>
      <a href="https://global.machenike.com/collections/mice" target="_blank" rel="noopener noreferrer">Machanike</a>
      <a href="https://www.lenovo.com/th/th/pc/" target="_blank" rel="noopener noreferrer">Lenovo</a>

      <a
        href="#about"
        className="topnav2"
        onClick={(e) => handleNavClick(e, "abmnext")}
      >
        About Me
      </a>
    </div>
  );
};

export default Header;
