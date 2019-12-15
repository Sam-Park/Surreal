import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Navbar from '../Pages/Navbar'
import '../App.css';

class NewsPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img: '',
            title: '',
            author: '',
            body: '',
         }
    }

    uploadPhoto = () => {
        window.cloudinary.openUploadWidget(
        { cloud_name: 'surreal-pagle', upload_preset: 'ogbp2qff', cors: 'no-cors' },

      (error, result) => {
          console.log("result", result)
          this.setState({ img: result[0].url})
          console.log(error)
        },
    )
};

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.title)

    }
    newPost = (e) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/users/news',
            data: {
                title: this.state.title,
                author: this.state.author,
                body: this.state.body,
                img: this.state.img
            }
        })
        .then(() => {
            window.location.reload()
        })
        .catch((error) => {
            console.log('Axios post to db for new post error', error)
        })
    }
    render() { 
        return (
            <div>
                <div className="sales-top-container">
                    <Navbar></Navbar>

                </div>
                <br />
                    <br />
                    <br />

                <div  className="news-post-top-container">
            <div className="news-post-form-container">
                <FormGroup className="news-post-form-group">
                    <br />
                    <br />
                    <FormLabel className="news-post-form-label">New Post</FormLabel>
                    <br />
                    <TextField
                    id="outlined-basic" 
                    label="News Post Title" 
                    name="title" 
                    variant="outlined"
                    onChange={this.onChange}
                    ></TextField>
                    <br />
                    <TextField
                    id="outlined-basic" 
                    label="Author" 
                    name="author" 
                    variant="outlined"
                    onChange={this.onChange}
                    ></TextField>
                    <br />
                    <TextField
                    id="outlined-basic" 
                    label="Post" 
                    name="body" 
                    multiline
                    rows="4"
                    variant="outlined"
                    onChange={this.onChange}
                    ></TextField>
                    <br />
                    <Button variant="contained" color="primary" className="news-post-button" onClick={this.uploadPhoto}>Upload Photo</Button>
                    <br />
                    <Button variant="contained" color="secondary" className="news-post-button" onClick={this.newPost}> Submit</Button>
                </FormGroup>

            </div>
            </div>
        </div>
          );
    }
}
 
export default NewsPost;