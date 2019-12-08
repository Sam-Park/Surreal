import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Members from "./Members"
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../App.css';
import SurrealHeader from '../img/Surreal-Header.png';
class Home extends Component {
  render() {

    return (
      <div className="App">
      <div className="Top-Container" id="Home">

      <div className="Header">
      <img className="Header-Img" src={SurrealHeader} alt="Header"></img>
      </div>
      <div className="Nav-container">
      <AnchorLink className="nav-h" href="#Home">
              Home
            </AnchorLink>
            <Link to="/members" className="nav-h1">Members</Link>
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
        aaa
      </div>
    </div>


);
}
}

export default Home;
