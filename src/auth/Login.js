import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }
onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();
     //check the username are not empty
     
    // ready to sign in
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log("state", this.state.email)
    axios
      .post(`http://localhost:5000/api/users/login`, user)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMessage: 'Username or Password is Incorrect' });
      })
  };
render() {
  console.log("email", this.state.email, "password", this.state.password)
return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={this.state.errorMessage.email}
                  name="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={this.state.errorMessage.password}
                  name="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  onClick={this.onSubmit}
                  className=""
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;