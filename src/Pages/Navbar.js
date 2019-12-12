import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Nav-container">
      <AnchorLink className="nav-h" href="#Home">
              Home
            </AnchorLink>
            <Link to="/members" className="nav-h1">Members</Link>
            <Link 
            to="/recruitment"
            className="nav-h2"
            >Recruitment</Link>
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
            <Link to="/register" className="nav-h4">Register</Link>
            <Link to="/login" className="nav-h4">Login</Link>

        


      </div>
         );
    }
}
 
export default Navbar;