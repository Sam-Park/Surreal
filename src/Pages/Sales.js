import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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

import Navbar from './Navbar'
import '../App.css';


  


  function createData(item, price, name) {
    return { item, price, name };
  }
  const rows = [
    createData(`Dragonstalker's Legguards`, 150, 'dragonstalkerLegs' ),
    createData(`Legplates of Ten Storms`, 150, 'tenStormsLegs'),
    createData(`Nightslayer Shoulder Pads`, 200, 'nightslayerShoulders'),
    createData(`Ancient Petrified Leaf`, 300, 'leaf'),
    createData(`Eye of Divinity:`, 300, 'eye'),
    createData(`Most Giantstalker's Pieces`, 100, 'giantStalkers'),
    createData(`Most Earthfury Pieces`, 100, 'earthfury'),
    createData(`Most Cenarion Pieces`, 100, 'cenarion'),
    createData(`Most Felheart Pieces`, 100, 'felheart'),
    createData(`Most BoE Set Pieces`, '', 'boe')
  ];

  const rows2 = [
    createData(`Stormrage Cover `, 150, 'stormrageCover' ),
    createData(`Dragonstalker's Helm`, 150, 'dragonStalkerHelm' ),
    createData(`Helmet of Ten Storms`, 150, 'tenStormsHelm'),
    createData(`Mature Black Dragon Sinew`, 100, 'sinew' ),
]
  
  
  class Sales extends Component {
      state = { 
          dragonstalkerLegs: false,
          nightslayerShoulders: false,
          leaf: false,
          earthfury: '',
          cenarion: '',
          stormrageCover: false,
          dragonStalkerHelm: false,
          sinew: false,
          tenStormsHelm: false,
          tenStormsLegs: false,
          eye: false,
          giantStalkers: '',
          felheart: '',
          boe: '',
          bnet: '',
          open: '',
          openFailedSubmit: '',
          openFailedMessage: '',
        }
        
        
        onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
        setTimeout(() => {
            console.log(`State ${this.state.earthfury} || `, `name ${this.state.bnet}`)
        }, 500);
    }

    onClick = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
        setTimeout(() => {
            console.log(`State molten core ${this.state.nightslayerShoulders} || `, `name ${this.state.name}`)
        }, 500);
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

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.dragonstalkerLegs === false && this.state.dragonStalkerHelm === false 
            && this.state.nightslayerShoulders === false &&
            this.state.leaf === false && this.state.earthfury === ''
            && this.state.cenarion === '' &&
            this.state.stormrageCover === false && this.state.giantstalkerShoulders === false 
            && this.state. sinew === false) {
                this.setState({ openFailedSubmit: !this.state.openFailedSubmit,
                    openFailedMessage: 'Please select an item'
                    })
                return;
            } else if (
                this.state.bnet === '') {
                    this.setState({ openFailedSubmit: !this.state.openFailedSubmit,
                        openFailedMessage: 'Please Tell us your Battle.net name' })
                        return;
                }

        console.log(this.state.email, this.state.name);
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SERVER_URL}api/users/sales`,
            data: {
                dragonStalkerHelm: this.state.dragonStalkerHelm,
                dragonstalkerLegs: this.state.dragonstalkerLegs,
                nightslayerShoulders: this.state.nightslayerShoulders,
                leaf: this.state.leaf,
                sinew: this.state.sinew,
                eye: this.state.eye,
                earthfury: this.state.earthfury,
                cenarion: this.state.cenarion,
                felheart: this.state.felheart,
                giantStalkers: this.state.giantStalkers,
                stormrageCover: this.state.stormrageCover,
                dragonstalkerLegs: this.state.dragonstalkerLegs,
                tenStormsLegs: this.state.tenStormsLegs,
                tenStormsHelm: this.state.tenStormsHelm,
                boe: this.state.boe,
                bnet: this.state.bnet,
            }
        })
        .then( this.setState({ 
                open: !this.state.open,
        })
        )
        .catch((error) => {
            console.log("ERROR", error)
        })
        // window.scrollTo(0, 0);
    }

   
    render() { 
        return ( 
            <div className="sales-arch-container">
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Navbar></Navbar>
                </div>
                <div  className="sales-container">
                <h1 className="sales-whats">What's For Sale</h1>

                <div className="sales-info-container">
                <h5 className="sales-h5">Requirements</h5>
                        <p className="sales-p">We require a 25% deposit up-front prior to the raid. 
                        This is to hold your spot. 
                        If an item DOES NOT drop, 
                        you will be refunded unless you wish to 
                        wait till the following raid. 
                        We CANNOT guarantee drops from raids. 
                        All buyers must be outside the raid when it is time. 
                        We raid on Tuesdays at 9 EST for Molten Core and Onyxia is every 5 days. 
                        Failure to show up will forfeit your deposit.
                        BoE set piece prices are based on the Auction House and will fluctuate. 
                        </p>
                    </div>
                    <div className="sales-select-items">
                <h5 className="sales-h5">We need your Battle.net name so we can contact you</h5>

                <TextField  
                    label="Battle.net Name" 
                    name="bnet" 
                    variant="outlined"
                    className="sales-earth-cen"
                    onChange={this.onChange} />
                    <br />
                    <br />
                    </div>
                <FormLabel className="sales-labels" component="legend">Select Item(s) </FormLabel>
                    <div className="sales-info-items">
                <div className="sales-info-mc">
                <TableContainer component={Paper} className="sales-mc-table">
                    <Table  size="small" aria-label="Item Prices">
                        <TableHead>
                        <TableRow>
                        <TableCell padding="checkbox">
                        
                        </TableCell>
                            <TableCell>Molten Core Items</TableCell>
                            <TableCell align="right">Price</TableCell>
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
                                {row.item}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
                <div className='sales-info-ony'>
                <TableContainer component={Paper} className="sales-mc-table">
                    <Table  size="small" aria-label="Item Prices">
                        <TableHead>
                        <TableRow>
                        <TableCell padding="checkbox">
                        
                        </TableCell>
                            <TableCell>Onyxia Items</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {rows2.map(row2 => (
                            <TableRow key={row2.item}>
                                <Checkbox
                                name={row2.name}
                                onClick={this.onClick}
                                />
                            <TableCell component="th" scope="row">
                                {row2.item}
                            </TableCell>
                            <TableCell align="right">{row2.price}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
                    </div>
                
                    <br />
                <div className="sales-select-items" >
                            {this.state.earthfury ? <div className="sales-select-items">

                    <FormLabel className="sales-labels" component="legend">Earthfury Items </FormLabel>
                    
                    <TextField  
                    label="Specific Earthfury Item(s)" 
                    name="earthfury" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />
                    
                            </div> : null}
                    
                    {this.state.cenarion ? <div className="sales-select-items"> 
                    <FormLabel className="sales-labels" component="legend">Cenarion Items </FormLabel>
                    
                    <TextField  
                    label="Specific Cenarion Item(s)" 
                    name="cenarion" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />
                    </div> : null}

                    {this.state.felheart ? <div className="sales-select-items"> 
                    <FormLabel className="sales-labels" component="legend">Felheart Items </FormLabel>
                    
                    <TextField  
                    label="Specific Felheart Item(s)" 
                    name="felheart" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />
                    </div> : null}

                    {this.state.giantStalkers ? <div className="sales-select-items"> 
                    <FormLabel className="sales-labels" component="legend">Giantstalker Items </FormLabel>
                    
                    <TextField  
                    label="Specific Giantstalker Item(s)" 
                    name="giantStalkers" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />
                    </div> : null}

                    {this.state.boe ? <div className="sales-select-items"> 
                    <FormLabel className="sales-labels" component="legend">BoE Items </FormLabel>
                    
                    <TextField  
                    label="Specific BoE Item(s)" 
                    name="boe" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />
                    </div> : null}
                    <br />
                <br />
                <br />
            
                </div>
                
                
                <Button className="sales-sumbit-button" variant="contained" color="secondary" onClick={this.handleSubmit}>
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
        message={<span id="message-id">Your Request has been recieved</span>}
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
    message={<span id="message-id">{this.state.openFailedMessage}</span>}
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
                </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
         );
    }
}
 
export default Sales;