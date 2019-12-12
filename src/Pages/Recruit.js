import React, { Component } from 'react';
import nodemailer from 'nodemailer';


class Recruit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            name: '',
         }
    }

    transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'surreal.pagle@gmail.com',
            pass: 'surreal!23'
        }
    });

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email, this.state.name)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name='name' onChange={this.onChange}>
                        </input>
                    </label>
                    <label>
                        Email:
                        <input type="text" name='email' onChange={this.onChange}>
                        </input>
                    </label>
                    <button onClick={this.handleSubmit}>Click</button>
                </form>
            </div>
         );
    }
}
 
export default Recruit;