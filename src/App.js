import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Members from "./Pages/Members";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Recruit from "./Pages/Recruit";
import Sales from "./Pages/Sales";
import NewsPost from './auth/NewsPost';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    state = {  
        news: null,
        loading: true,
    }

    render() { 
        return ( 
            <MuiThemeProvider>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/members" component={Members} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/recruitment" component={Recruit} />
                <Route exact path="/sales" component={Sales} />
                <Route exact path="/newsauth" component={NewsPost} />
                <Route exact path="/news" component={Gallery}/>
                <Route exact path="/contact" component={Contact} />
            </div>
            </MuiThemeProvider>
         );
    }
}
 
export default App;