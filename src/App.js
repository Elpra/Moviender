import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside" />

          <div className="App__Form">
            <div className="PageSwitcher">
              <a href="#" className="PageSwitcher__Item">
                Sign In
              </a>
              <a
                href="#"
                className="PageSwitcher__Item PageSwitcher__Item--Active"
              >
                Sign Up
              </a>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>
              or
              <Link
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link FormTitle__Link--Active"
              >
                Sign Up
              </Link>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={LogInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
