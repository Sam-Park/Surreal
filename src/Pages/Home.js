import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import SurrealHeader from '../img/Surreal-Header-1440.png';
import recruit from '../img/surreal-recruitment-card.png';
import news from '../img/news4.png';
import sales from '../img/sales.png';
import gallery from '../img/sales-gallery.png';
import Navbar from './Navbar'
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import '../App.css';





class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [{}],
      loading: true,
      title: '',
      author: '',
      body: '',
      img: ''
    };

    
    
  }


  componentDidMount() {
    axios
     .get(`${process.env.REACT_APP_SERVER_URL}api/users/thenews`)
     .then(response => {
         const newz = response.data
       this.setState({ news: newz, loading: false });
       console.log("news from home: ", this.state.news, this.state.loading)
    })
     .catch(error => {
       console.error(error);
     });

};
  
  

  render() {
    console.log("render props", this.props.newz)
    console.log("loading", this.state.loading)
    if(this.state.loading === true) {
      return (
        <div>
          <div className="App">
      <div className="Top-Container" id="Home">

      <div className="Header">
      <img className="Header-Img" src={SurrealHeader} alt="Header"></img>
      </div>
      <Navbar />
      </div>
      <div className="Landing-Container">

        <div className="recruit-container">

        <div className="recruit-card">
          
          <img 
            alt="Recruitment Card"
            className="Recruitment-Image"
            src={recruit}
            >
          </img>
        </div>
        <div>
            <img 
            alt="Recruitment Card"
            className="Recruitment-Image"
            src={sales}
            >
            </img>
        </div>
        <div>
            <img 
            alt="Recruitment Card"
            className="Recruitment-Image"
            src={gallery}
            >
          </img>
        </div>
        </div>
          <div className="news-container">
            
            <div className="news-post" alt="news-post">
            </div>
          </div>
      </div>
    </div>

        </div>
      )
    } else {
      
      return (
        <div className="App">
      <div className="Top-Container" id="Home">

      <div className="Header">
      <img className="Header-Img" src={SurrealHeader} alt="Header"></img>
      </div>
      <Navbar />
      </div>
      <div className="Landing-Container">
        <div className="recruit-container">
        <div className="recruit-card">
          <Link to="/recruitment">

            <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glarePosition='all'
            scale={1.03}
            >
              <div>
                <img 
                alt="Recruitment Card"
                className="Recruitment-Image"
                src={recruit}
                >
                </img>
              </div>
            </Tilt> 
                </Link>
  
              </div>

              <div className="recruit-card">
              <Link to="/sales">

                <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glarePosition='all'
                scale={1.03}
                >
                  <div>
                    <img 
                    alt="Recruitment Card"
                    className="Recruitment-Image"
                    src={sales}
                    >
                    </img>
                  </div>
                </Tilt> 
              </Link>
                  </div> 

               <div className="recruit-card">
                <a href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glarePosition='all'
                  scale={1.03}
                  >
                    <div>
                      <img 
                      alt="Recruitment Card"
                      className="Recruitment-Image"
                      src={gallery}
                      >
                      </img>
                    </div>
                  </Tilt> 
                </a>

                    </div>  
          

        </div>
          <div className="news-container">
            <img className="news-img" alt="news image" src={news}>
            </img>
                    {this.state.news.slice(0, 3).map((post) =>{
                      return (
                        
                        <div className="news-post" key={post.date}>
    
                  <h1 className="news-post-h">{post.title}</h1>
                  <p className="news-post-a">Author: {post.author}</p>
                    <p className="news-post-p">{post.body}</p>
              <img target="_blank" className="news-post-img"src={post.img}></img>
                  <br />
                  <br />
                  <br />
                  
                  </div>
                            )
                          }
                          )}

            </div>
          </div>
      </div>
  


);
}
}
}

export default Home;
