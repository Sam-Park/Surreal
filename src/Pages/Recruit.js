import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Navbar from './Navbar'
import '../App.css';





class Recruit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            level: '',
            classRace: '',
            spec: '',
            ony: false,
            moltenCore: false,
            bwl: false,
            aq40: false,
            naxx: false,
            onyAttune: false,
            raidTime: '',
            referral: '',
            warcraftLogs: '',
            screenShot: '',
            reason: '',
            more: '',
            dropdownOpen: false,
         }
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
        setTimeout(() => {
            console.log(`State ${this.state}`)
        }, 500);
    }

    onClick = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
        setTimeout(() => {
            console.log(`State ${this.state.name}`)
        }, 500);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/users/recruitment',
            data: {
            name: this.state.name,
            level: this.state.level,
            classRace: this.state.classRace,
            spec: this.state.spec,
            ony: this.state.ony,
            moltenCore: this.state.moltenCore,
            bwl: this.state.bwl,
            aq40: this.state.aq40,
            naxx: this.state.naxx,
            onyAttune: this.state.onyAttune,
            raidTime: this.state.raidTime,
            referral: this.state.referral,
            warcraftLogs: this.state.warcraftLogs,
            screenShot: this.state.screenShot,
            reason: this.state.reason,
            more: this.state.more,
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
            <div className="App-recruitment">

            <div className="top-container-recruit">
            <Navbar/>
                </div>    
            <div  className="recruitment-div">
            <div className="recruitment-character-info">
                <br />
                <br />
                <br />
                <br />
                <h1>Surreal Application</h1>
                <br />
                    <br />
                    <FormGroup onSubmit={this.handleSubmit}>


                <FormLabel className="labels" component="legend">Character Information:</FormLabel>
                    <br />
                <form>
                    <TextField 
                    id="outlined-basic" 
                    label="Character Name" 
                    name="name" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="recruitment-info"
                    />
                    <br />
                    <br />
                    <TextField 
                    id="outlined-basic" 
                    label="Level" 
                    name="level" 
                    variant="outlined" 
                    className="recruitment-info"
                    onChange={this.onChange}/>
                    <br />
                    <br />
                    <TextField 
                    id="outlined-basic" 
                    label="Class/Race" 
                    name="classRace" 
                    variant="outlined"
                    className="recruitment-info"
                    onChange={this.onChange} />
                    <br />
                    <br />
                    <TextField 
                    id="outlined-basic" 
                    label="Spec" 
                    name="spec" 
                    variant="outlined"
                    className="recruitment-info"
                    onChange={this.onChange} />
                    <br />
                    <br />
                </form>
                   <br />
                <FormLabel className="labels" component="legend">Raiding Experience: </FormLabel>
                    <br />
                <div className="recruitment-checkboxes" >
                   <FormControl component="fieldset">

               <FormGroup onSubmit={this.handleSubmit}>
                   {/* <FormLabel component="legend">Any current or Vanilla raiding experience? </FormLabel> */}
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='ony' checked={this.state.ony} />
                }
                label="Onyxia(past or present)"
                className="recruit-checked"
                labelPlacement="end"
                />
              
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='moltenCore' checked={this.state.moltenCore} />
                }
                label="Molten Core(past or present)"
                className="recruit-checked"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='bwl' checked={this.state.bwl} />
                }
                label="Blackwing Lair(past)"
                className="recruit-checked"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='aq40' checked={this.state.aq40} />
                }
                label="AQ 40(past)"
                className="recruit-checked"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='naxx' checked={this.state.naxx} />
                }
                label="Naxx(past)"
                className="recruit-checked"
                labelPlacement="end"
                />
                <FormControlLabel
                control={
                    <Checkbox  onChange={this.onClick} name='onyAttune' checked={this.state.onyAttune} />
                }
                label="Onyxia Attuned(present):"
                className="recruit-checked"
                labelPlacement="end"
                />
                </FormGroup>
                </FormControl>
                
                </div>
                <FormLabel className="labels" component="legend">Additional Information:</FormLabel>
                    <br />
                <form  onSubmit={this.onChange}>
                    <h5 className="additional-h5"> We raid Tues, Wed and Thurs 9-12 EST. Is this doable?</h5>
                   
                    <TextField 
                    id="outlined-basic" 
                    label="Your Answer" 
                    name="raidTime" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="recruitment-info"
                    />
                    <br />
                    <br />
                    <h5 className="additional-h5"> Is there anyone in the raid that can give you a referral?</h5>
                    
                    <TextField 
                    id="outlined-basic" 
                    label="Your Answer" 
                    name="referral" 
                    variant="outlined" 
                    className="recruitment-info"
                    onChange={this.onChange}/>
                    <br />
                    <br />
                    <h5 className="additional-h5"> Can you provide Warcraft Logs?</h5>
                    <TextField 
                    id="outlined-basic" 
                    label="Warcraft Logs Link" 
                    name="warcraftLogs" 
                    variant="outlined"
                    className="recruitment-info"
                    onChange={this.onChange} />
                    <br />
                    <br />
                    <h5 className="additional-h5"> Link to a screen shot/video of your UI</h5>
                    <TextField 
                    id="outlined-basic" 
                    label="Link" 
                    name="screenShot" 
                    variant="outlined"
                    className="recruitment-info"
                    onChange={this.onChange} />
                    <br />
                    <br />
                    <h5 className="additional-h5"> Why do you want to join surreal?</h5>
                    <TextField 
                    id="outlined-basic" 
                    label="Your Answer" 
                    name="reason" 
                    variant="outlined"
                    multiline
                    rows="4"
                    className="recruitment-info"
                    onChange={this.onChange} />
                    <br />
                    <br />
                    <h5 className="additional-h5"> Is there anything else we should know?</h5>
                    <TextField 
                    id="outlined-basic" 
                    label="Your Answer" 
                    name="more" 
                    multiline
                    rows="4"
                    variant="outlined"
                    className="recruitment-info"
                    onChange={this.onChange} />
                    
                </form>
                    </FormGroup>
                <Button className="recruitment-sumbit-button" variant="contained" color="primary" onClick={this.handleSubmit}>
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
        </div>
         );
    }
}
 
export default Recruit;