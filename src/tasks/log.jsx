import React, { Component } from "react";

class Log extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    alert(`Your UserName is ${this.state.username}, 
            Your password is ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div className="container">
            <div className="co">
              <label>UserName:</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsername}
              />
            </div>
            <div className="co">
              <label>Password:</label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Login
              </button>
            </div>
            <div>
              <button className="btn" type="button" onClick={this.props.toggleForm}>
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Log;
