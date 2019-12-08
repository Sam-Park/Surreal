import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './App.css';
import SurrealHeader from './img/Surreal-Header.png';
function App() {
  return (
    <div className="App">
      <div className="Top-Container">

      <div className="Header">
      <img className="Header-Img" src={SurrealHeader} alt="Header"></img>
      </div>
      <div className="Nav-container">
      <AnchorLink className="nav-h" href="#projects">
              Home
            </AnchorLink>
            <AnchorLink className="nav-h1">Members</AnchorLink>
            <AnchorLink className="nav-h2">Recruitment</AnchorLink>
            <AnchorLink className="nav-h3" href="#aboutme">
              Gallery
            </AnchorLink>
            <AnchorLink className="nav-h4" href="#contact">
            Contact Us
            </AnchorLink>
            <AnchorLink className="nav-h4" href="#sales">
            Sales
            </AnchorLink>
            <a className="nav-h4" href="https://classic.warcraftlogs.com/guild/us/pagle/surreal" target="_blank" rel="noopener noreferrer">
              Warcraft Logs
            </a>
      </div>
      </div>
      <div className="Landing-Container">
        
      </div>
    </div>
  );
}

export default App;
