import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Members from "./Pages/Members";
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/members" component={Members} />
            </div>
         );
    }
}
 
export default App;