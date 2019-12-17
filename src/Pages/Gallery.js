import React, { Component } from 'react';
import axios from 'axios';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null,
            loading: true,
        };
    
        
        
      }

      componentDidMount() {
        axios
         .get(`http://localhost:5000/api/users/thenews`)
         .then(response => {
             const newz = response.data
             console.log("news from gallery: ", response.data)
           this.setState({ news: newz, loading: false });
        })
         .catch(error => {
           console.error(error);
         });
    
    };

    render() { 
        console.log("news gallery", this.state.news, "loading", this.state.loading)
        if(this.state.loading === true) {
            return(
                <div>loading</div>
            )
        } else {

            return ( 
                <div>        
                    <div >
                    {this.state.news.slice(0, 3).map((post) =>{
                        return (

                    <div key={post.date}>
                  <div>
                  <h1 >{post.title}</h1>
                    <p >{post.body}</p>
              <img alt="post image" src={post.img}></img>
                  <br />
                  <br />
                  <br />
                  <br />
                  </div>
                  </div>
                            )
  
}
  )}
  </div>
                </div>
        
        
        )
    }
    }
}

export default Gallery;