import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/Auth/SignUp.js';
import SignIn from './components/Auth/SignIn.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}

class Test extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TEST</h2>
        </div>
      </div>
    );
  }

}

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <NavLink exact activeClassName="active" to="/">Home</NavLink><br/>
            <NavLink to ={{pathname: '/test'}}>Test</NavLink><br/>
            <NavLink to ={{pathname: '/sign-up'}}>Sign Up</NavLink><br/>
            <NavLink to ={{pathname: '/sign-in'}}>Sign In</NavLink>
          </nav>
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

export default App;
