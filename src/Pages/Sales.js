import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Navbar from './Navbar'
import '../App.css';

class Sales extends Component {
    state = { 
        dragonstalkerLegs: false,
        giantstalkerShoulders: false,
        nightslayerShoulders: false,
        leaf: false,
        earthfury: '',
        cenarion: '',
        stomrageCover: false,
        dragonStalkerHelm: false,
        sinew: false,
        bnet: '',

     }

     onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
        setTimeout(() => {
            console.log(`State ${this.state} || `, `name ${this.state.bnet}`)
        }, 500);
    }

    onClick = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
        setTimeout(() => {
            console.log(`State molten core ${this.state.moltenCore} || `, `name ${this.state.name}`)
        }, 500);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email, this.state.name);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/users/sales',
            data: {
                dragonstalkerLegs: this.state.dragonstalkerLegs,
                giantstalkerShoulders: this.state.giantstalkerShoulders,
                nightslayerShoulders: this.state.nightslayerShoulders,
                leaf: this.state.leaf,
                earthfury: this.state.earthfury,
                cenarion: this.state.cenarion,
                stomrageCover: this.state.stomrageCover,
                dragonStalkerHelm: this.state.dragonStalkerHelm,
                sinew: this.state.sinew,
                bnet: this.state.bnet,
            }
        })
        .then()
        .catch((error) => {
            console.log("ERROR", error)
        })
        window.location.reload();
        window.scrollTo(0, 0);
    }
    render() { 
        return ( 
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Navbar></Navbar>
                </div>
                <div  className="sales-container">
                <h3 className="sales-h3">What's For Sale</h3>

                <h5 className="sales-h5">Requirements</h5>
                <p className="sales-p">We require a 25% deposit up-front prior to the raid. 
                    This is to hold your spot. 
                    If an item DOES NOT drop, 
                    you will be refunded unless you wish to 
                    wait till the following raid. 
                    We CANNOT guarantee drops from raids. 
                    All buyers must be outside the raid when it is time. 
                    We raid on Tuesdays at 9 EST for Molten Core and Onyxia is every 5 days. 
                    Failure to show up will forfeit your deposit.</p>
                <h5 className="sales-h5">Molten Core</h5>
                <span style={{display: 'flex'}}><a href="https://classic.wowhead.com/item=16938/dragonstalkers-legguards" rel="noopener noreferrer" target="_blank"> Dragonstalker's Legguards</a> &nbsp;&nbsp; -200g</span>
                <FormLabel className="sales-labels" component="legend">Current Items for Sale: </FormLabel>
                    <br />
                <div className="sales-checkboxes" >
                   <FormControl component="fieldset">

               <FormGroup onSubmit={this.handleSubmit}>
                   {/* <FormLabel component="legend">Any current or Vanilla raiding experience? </FormLabel> */}
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='dragonstalkerLegs' checked={this.state.dragonstalkerLegs} />
                }
                label="Dragonstalkers Legguards"
                labelPlacement="end"
                />
              
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='giantstalkerShoulders' checked={this.state.giantstalkerShoulders} />
                }
                label="Giantstalker Shoulders"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='nightslayerShoulders' checked={this.state.nightslayerShoulders} />
                }
                label="Nightslayer Shoulders"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='leaf' checked={this.state.leaf} />
                }
                label="Ancient Petrified Leaf"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='sinew' checked={this.state.sinew} />
                }
                label="Mature Black Dragon Sinew"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='dragonStalkerHelm' checked={this.state.dragonStalkerHelm} />
                }
                label="Dragonstalker's Helm"
                labelPlacement="end"
                />
                    <FormLabel className="sales-labels" component="legend">Earthfury Items </FormLabel>
                    <br />
                    <TextField 
                    id="outlined-basic" 
                    label="Specific Earthfury Item" 
                    name="earthfury" 
                    variant="outlined"
                    onChange={this.onChange}
                    
                    />

                    <FormLabel className="sales-labels" component="legend">Cenarion Items </FormLabel>
                    <br />
                    <TextField 
                    id="outlined-basic" 
                    label="Specific Cenarion Item" 
                    name="cenarion" 
                    variant="outlined"
                    onChange={this.onChange}
                    
                    />
                    <br />
                    <br />
                
                </FormGroup>
                </FormControl>
                <br />
                <br />
                <h5 className="sales-h5">We need your Battle.net name so we can contact you</h5>
                <br />
                <TextField 
                    id="outlined-basic" 
                    label="Battle.net Name" 
                    name="bnet" 
                    variant="outlined"
                    onChange={this.onChange} />
                    <br />
                    <br />
                </div>
                <Button className="sales-sumbit-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                    Submit
                </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            </div>
         );
    }
}
 
export default Sales;