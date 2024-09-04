import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      gender: "",
      date: ""
    };
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handledate = (event) => {
    this.setState({ date: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleRegister = (event) => {
    event.preventDefault();
    alert(`Your UserName is ${this.state.username}, 
            Your password is ${this.state.password}, 
            Your Gender is ${this.state.gender}, 
            Your birthdate is ${this.state.date}`);
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
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
            <div className="co">
              <label>Gender:</label>
              <select value={this.state.gender} onChange={this.handleGender}>
                <option value="">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label>Date of Birth:</label>
              <input type="date" value={this.state.date} onChange={this.handledate} />
            </div>
            <div>
              <button className="btn" type="submit">
                Register
              </button>
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
