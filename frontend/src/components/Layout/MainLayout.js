import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class MainLayout extends Component {
	render() {
		return (
      <div className="container">
        <header>
          <h1>Page Header</h1>
          <nav>
            <NavLink exact activeClassName="active" to="/">Home</NavLink><br />
            <NavLink to={{pathname: "/test"}}>Test</NavLink><br />
            <NavLink to={{pathname: "/sign-up"}}>Sign Up</NavLink><br />
            <NavLink to={{pathname: "/sign-in"}}>Sign In</NavLink>
          </nav>
        </header>
      </div>
		)
	}
}

export default MainLayout
