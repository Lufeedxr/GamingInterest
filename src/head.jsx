import React, { useState } from "react";
import "./Head1.css"
const Header = ({setPage}) => {
  return (
  <div className="topnav">
  <a href="Home" onClick={() => setPage("home")}>Gaming Interest</a>
  <div>
<img className="pz2" src="https://i.postimg.cc/T2psr7vW/20250205-204358.png"></img> 
    </div>
  <a href="https://www.razer.com/?srsltid=AfmBOoqHtgU3eIEZy81cah8IejxLql7_O3sMXYaI-PacvmHkyKwkUjWd">Razer</a>
  <a href="https://row.hyperx.com/th/">Hyperx</a>
  <a href="https://www.logitech.com/th-th?srsltid=AfmBOoqCPigxy6IQGZqhso3ItaKBiZ-s90XwOV_XkvRFIsu-gEQvftjA">Logitech</a>
  <a href="https://rog.asus.com/th/">Rog</a>
  <a href="https://www.corsair.com/ww/en?srsltid=AfmBOoplyFFy-u22BKwR-JE_vFtFp11EgQSQyZ7l_NHciLPQwqxu2-4I">Coirsair</a>
  <a href="https://www.endgamegear.com/en-us/">Endgame Gear</a>
  <a href="https://fantechworld.com/?srsltid=AfmBOorgcwXOmM64tWJBPTc6qasxYhCkusToVAyg5QSLwKpcfAhhbo9f">Fantech</a> 
  <a href="https://www.nubwo.co.th/?gad_source=1&gclid=Cj0KCQiAkoe9BhDYARIsAH85cDN2KrYC-LBAN5XFCFI3mtaV7S4KXAhg6NJSRi2J6IxySQ6lDW-KCrAaAmfIEALw_wcB">Nubwo</a>
  <a href="https://egazone.com/">EGA</a>
  <a href="https://global.machenike.com/collections/mice?srsltid=AfmBOopyhOH65cXYXKuAC-KGeysGx5fV_TffvVkP9P3miBW6V2KHgQNw">Machanike</a>
  <a href="https://www.lenovo.com/th/th/pc/">Lenovo</a>
  <a className ="topnav2" onClick={() => setPage("abmnext")}>About Me</a>
</div>
  );
};

export default Header;
