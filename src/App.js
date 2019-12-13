import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Members from "./Pages/Members";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Recruit from "./Pages/Recruit"
import Sales from "./Pages/Sales"
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/members" component={Members} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/recruitment" component={Recruit} />
                <Route exact path="/sales" component={Sales} />
            </div>
         );
    }
}
 
export default App;