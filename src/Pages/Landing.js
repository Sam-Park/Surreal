import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Siege from "../img/landing-page-left.png";
import Button from '@material-ui/core/Button';
import Treasure from "../img/landing-page-right.png"
import '../App.css';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="App-landing"> 

            <div >

            <div className="landing-arch-container">
                <div className="landing-img-container">
                    <div className="landing-inner">
                        <div className="landing-inner-left">

                    <Link style={{ textDecoration: "none"}}to="/recruitment">
                    <button  className="left-button" >Join Us</button>
                    </Link>
                    <Link style={{ textDecoration: "none"}}to="/recruitment">
                    <button  className="right-button" >Join Us</button>
                    </Link>
                        </div>
                    </div>
                    <img className="landing-left-img" src={Siege}></img>
                    
                    <img className="landing-right-img" src={Treasure}></img>
                </div>
                <div className="landing-bottom-home"></div>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Landing;