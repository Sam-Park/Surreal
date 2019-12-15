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

import Navbar from './Navbar'
import '../App.css';


  


  function createData(item, price, name) {
    return { item, price, name };
  }
  const rows = [
    createData(`Dragonstalker's Legguards`, 250, 'dragonstalkerLegs' ),
    createData(`Giantstalker's Epaulets`, 200, 'giantstalkerShoulders'),
    createData(`Nightslayer Shoulder Pads`, 200, 'nightslayerShoulders'),
    createData(`Ancient Petrified Leaf`, 300, 'leaf'),
    createData(`Most Earthfury Pieces`, 100, 'earthfury'),
    createData(`Most Cenarion Pieces`, 100, 'cenarion'),
  ];

  const rows2 = [
    createData(`Stormrage Cover `, 150, 'stormrageCover' ),
    createData(`Dragonstalker's Helm`, 200, 'dragonStalkerHelm' ),
    createData(`Mature Black Dragon Sinew`, 100, 'sinew' ),
]
  
  
  class Sales extends Component {
      state = { 
          dragonstalkerLegs: false,
          giantstalkerShoulders: false,
          nightslayerShoulders: false,
          leaf: false,
          earthfury: '',
          cenarion: '',
          stormrageCover: false,
          dragonStalkerHelm: false,
          sinew: false,
          bnet: '',
          
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
                stormrageCover: this.state.stormrageCover,
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
                        </p>
                    </div>
                    <div className="sales-select-items">
                <h5 className="sales-h5">We need your Battle.net name so we can contact you</h5>
                <br />
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
                   
                    <FormLabel className="sales-labels" component="legend">Earthfury Items </FormLabel>
                    
                    <TextField  
                    label="Specific Earthfury Item" 
                    name="earthfury" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />

                    <FormLabel className="sales-labels" component="legend">Cenarion Items </FormLabel>
                    
                    <TextField  
                    label="Specific Cenarion Item" 
                    name="cenarion" 
                    variant="outlined"
                    onChange={this.onChange}
                    className="sales-earth-cen"
                    />
                    <br />
                <br />
                <br />
            
                </div>
                
                
                <Button className="sales-sumbit-button" variant="contained" color="secondary" onClick={this.handleSubmit}>
                    Submit
                </Button>
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