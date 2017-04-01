import React, {Component} from "react"
import {BrowserRouter as Router, Route, browserHistory} from "react-router-dom"
import "./App.css"
import Home from "./components/Views/Home.js"
import Test from "./components/Views/Test.js"
import SignUp from "./components/Auth/SignUp.js"
import SignIn from "./components/Auth/SignIn.js"
import MainLayout from "./components/Layout/MainLayout.js"

class App extends Component {
	render() {
		return (
      <Router history={browserHistory}>
        <div>
          <MainLayout />
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </Router>
		)
	}
}
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App
