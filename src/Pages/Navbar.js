import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Nav-container">
            <Link to="/" className="nav-h">Home</Link>
            <Link to="/members" className="nav-h2">Members</Link>
            <Link to="/recruitment" className="nav-h2">Recruitment</Link>
            {/* <Link to="/news" className="nav-h2">News</Link> */}
            <Link to="/contact" className="nav-h2">Contact Us</Link>
            <Link to="/sales" className="nav-h4">Sales</Link>
            <a className="nav-h4" href="https://classic.warcraftlogs.com/guild/us/pagle/surreal" target="_blank" rel="noopener noreferrer">
              Warcraft Logs
            </a>
           

        


      </div>
         );
    }
}
 
export default Navbar;