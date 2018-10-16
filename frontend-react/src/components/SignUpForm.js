import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //axios.post(URL);
    console.log("The form was submitted with ther following data:");
    console.log(this.state);
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="genere">
              <p>Favorite movie genere</p>
            </label>
            Action: <input type="checkbox" name="genere" value="action" />
            <br />
            Drama: <input type="checkbox" name="genere" value="drama" />
            <br />
            Thriller: <input type="checkbox" name="genere" value="thriller" />
            <br />
            Comedy: <input type="checkbox" name="genere" value="comedy" />
            <br />
            Animation: <input type="checkbox" name="genere" value="animation" />
            <br />
            SciFi: <input type="checkbox" name="genere" value="scifi" />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="decade">
              <p>Favorite movie decade</p>
            </label>
            50s: <input type="checkbox" name="decade" value="50s" />
            <br />
            60s: <input type="checkbox" name="decade" value="60s" />
            <br />
            70s: <input type="checkbox" name="decade" value="70s" />
            <br />
            80s: <input type="checkbox" name="decade" value="80s" />
            <br />
            90s: <input type="checkbox" name="decade" value="90s" />
            <br />
            2000s: <input type="checkbox" name="decade" value="2000s" />
            <br />
            2010s: <input type="checkbox" name="decade" value="2010s" />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/log-in" className="FormField__Link">
              I'm already registered
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
