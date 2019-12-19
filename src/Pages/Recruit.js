import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import '../App.css';

function createData(raid, name) {
    return {raid, name};
  }

  const rows = [
    createData(`Onyxia(past or present)`, 'ony'),
    createData(`Molten Core(past or present)`, 'moltenCore'),
    createData(`Blackwing Lair(past)`, 'bwl'),
    createData(`AQ 40(past)`, 'aq40'),
    createData(`Naxx(past)`, 'naxx'),
    createData(`Onyxia Attuned(present)`, 'onyAttune'),
]



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
            open: false,
            openFailedSubmit: false,
         }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
      };
    handleCloseFailedSubmit = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ openFailedSubmit: false });
      };

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
        if (this.state.name === '' || this.state.level === ''
            || this.state.classRace === '' || this.state.classRace === ''
            || this.state.raidTime === ''
            ) {
            this.setState({ openFailedSubmit: !this.openFailedSubmit })
            return;
        }
        console.log(this.state);
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SERVER_URL}api/users/recruitment`,
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
        .then( this.setState({ open: !this.state.open }))
        .catch((error) => {
            console.log("ERROR", error)
        })
        // window.location.reload();
        // window.scrollTo(0, 0);
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
                   <br />
                <FormLabel className="labels" component="legend">Raiding Experience: </FormLabel>
                    <br />
                <div className="recruitment-checkboxes" >
                <TableContainer component={Paper} className="recruitment-raid-table">
                    <Table  size="small" aria-label="Raids">
                        <TableHead>
                        <TableRow>
                        <TableCell padding="checkbox">
                        
                        </TableCell>
                            <TableCell className="recruit-tablecell-head"> &nbsp;</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.item}>
                                <Checkbox
                                name={row.name}
                                onClick={this.onClick}
                                />
                            <TableCell component="th" scope="row">
                                {row.raid}
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                </div>
                        </form>
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
                <Button className="recruitment-sumbit-button" variant="contained" color="secondary" onClick={this.handleSubmit}>
                    Submit
                </Button>
                <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message={<span id="message-id">Your Application has been recieved</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
       <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.openFailedSubmit}
        autoHideDuration={6000}
        onClose={this.handleCloseFailedSubmit}
        message={<span id="message-id">Please complete the Application</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            
            onClick={this.handleCloseFailedSubmit}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
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