import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Siege from "../img/landing-page-left.png";
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

            <div className="Top-Container">

            <div className="landing-arch-container">
                <div className="landing-img-container">
                    <img src={Siege}></img>
                    <img src={Treasure}></img>
                </div>
                <div className="landing-bottom-home"></div>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Landing;