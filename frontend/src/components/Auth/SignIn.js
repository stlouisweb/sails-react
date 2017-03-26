import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div className="App">
        <div className="signup-form">
          <h2>Sign In</h2>
          <form>
            <label for="email">Email Address: </label>
            <input type="email" id="email" placeholder="joeschmo@website.com"></input><br />
            <label for="password">Password: </label>
            <input type="password" id="password" placeholder="password"></input><br />
            <button class="form-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }

};

export default SignIn;
