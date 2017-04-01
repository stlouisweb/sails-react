import React, {Component} from "react"

class SignUp extends Component {
	render() {
		return (
      <div className="App">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" placeholder="joeschmo@website.com" />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" placeholder="password" /><br />
            <button className="form-btn">Submit</button>
          </form>
        </div>
      </div>
		)
	}
}

export default SignUp
