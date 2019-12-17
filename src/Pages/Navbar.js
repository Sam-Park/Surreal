import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Discord from "../img/Discord-Logo-White.png"
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Nav-container">
              <div className="nav-link-box">

            <Link to="/" className="nav-h">Home</Link>
            <Link to="/members" className="nav-h2">Members</Link>
            <Link to="/recruitment" className="nav-h2">Recruitment</Link>
            {/* <Link to="/news" className="nav-h2">News</Link> */}
            <Link to="/contact" className="nav-h2">Contact Us</Link>
            <Link to="/sales" className="nav-h4">Sales</Link>
            <a className="nav-h4" href="https://classic.warcraftlogs.com/guild/us/pagle/surreal" target="_blank" rel="noopener noreferrer">
              Warcraft Logs
            </a>

              <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Click here to Join our Discord!</Typography>
          </React.Fragment>
        }
      >
        <a className="nav-discord-logo-a" target="_blank" rel="noopener"  href="https://discord.gg/9yqkRuz">
        <img className="nav-discord-logo"src={Discord}></img>
        </a>
        
      </HtmlTooltip>
              </div>
      </div>
         );
    }
}
 
export default Navbar;