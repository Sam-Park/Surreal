import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import SurrealHeader from '../img/Surreal-Header-1440.png';
import recruit from '../img/surreal-recruitment-card.png';
import news from '../img/news4.png';
import sales from '../img/sales.png';
import gallery from '../img/sales-gallery.png';
import Navbar from './Navbar'
import '../App.css';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      loading: true,
    };

    
    
  }
  componentDidMount() {
    this.getNews()
  }
      getNews = () => {
        axios
          .get(`http://localhost:5000/api/users/thenews`)
          .then(response => {
            this.setState(() => ({ news: response.data, loading: false }));
            console.log("news: ", this.state.news)
          })
          .catch(error => {
            console.error(error);
          });
      };
  render() {
    if (!this.state.news) {
      return <div>Loading news...</div>;
    }
    const { title, author, body, date } = this.state.news;
    const newz = this.state.news
    const newsItems = newz.map((post) => <li key={post.date}>{post.title}</li>)
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScaqy9s_8Fand1PvFDMSmn0mHfObhxAk_1GOXKFHhLI0AnoCQ/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
          >
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
          </a>
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
                    src={sales}
                    >
                    </img>
                  </div>
                </Tilt> 
              </a>
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
            <div className="news-post" alt="news-post">
              
              {this.state.loading ? <div></div> : 
              <div >
              {newz.slice(0-3).map(post =>
                <div key={post.date}>
                  <div>
                  <h1 className="news-post-h">{post.title}</h1>
                    <p className="news-post-p">{post.body}</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  </div>
                  </div>
                )}
              </div>
              }
              {/* <p className="news-post-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
            </div>
          </div>
      </div>
    </div>


);
}
}

export default Home;
