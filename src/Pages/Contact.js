import React, { Component } from 'react';
import Navbar from './Navbar';
import Discord from '../img/Discord-Logo-White.png'
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SurrealHeader from '../img/Surreal-Header-1440.png';

const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="App-contact">
                <div className="Top-Container" id="Home">

<div className="Header">
<img className="Header-Img" src={SurrealHeader} alt="Header"></img>
</div>
<Navbar />
</div>
                
                <div className="contact-div">
                    <p className="contact-why">Have a question about the guild? Is the website giving you
                    problems? Or maybe something about buying an item from us is confusing?</p>
                <h1 className="contact-h1">Contact Us</h1>

                <p className="contact-p">
                    <li className="contact-li">Option 1: &nbsp; Discord. 
                    </li> 
                <HtmlTooltip
            title={
                <React.Fragment>
            <Typography color="inherit">Click here to Join our Discord!</Typography>
            </React.Fragment>
                  }
                  >
                <a className="contact-img" target="_blank" rel="noopener"  href="https://discord.gg/9yqkRuz">
                <img className="contact-img"src={Discord}></img>
                </a>
            </HtmlTooltip>
                  
                </p>
                  <li className="contact-li">Option 2: Whisper one of our Members in Game.</li>
                  </div>
                  <li className="contact-li">For all website related questions, contact Tempesst in game or on discord.</li>
            </div>
         );
    }
}
 
export default Contact;