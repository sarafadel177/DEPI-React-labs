import React, { Component } from "react";
import './style.css';
import Register from './register';
import Log from './log.jsx';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showRegister: false,
    };
  }

  toggleForm = () => {
    this.setState((e) => ({
      showRegister: !e.showRegister,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showRegister ? (
          <Register toggleForm={this.toggleForm} />
        ) : (
          <Log toggleForm={this.toggleForm} />
        )}
      </div>
    );
  }
}

export default Login;
