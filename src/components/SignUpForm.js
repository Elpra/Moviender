import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
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
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="genere">
              <p>Favorite movie genere</p>
            </label>
            Action: <input type="checkbox" name="sports" value="soccer" />
            <br />
            Drama: <input type="checkbox" name="sports" value="football" />
            <br />
            Thriller: <input type="checkbox" name="sports" value="baseball" />
            <br />
            Comedy: <input type="checkbox" name="sports" value="basketball" />
            <br />
            Animation:{" "}
            <input type="checkbox" name="sports" value="basketball" />
            <br />
            SciFi: <input type="checkbox" name="sports" value="basketball" />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="genere">
              <p>Favorite movie decade</p>
            </label>
            50-60: <input type="checkbox" name="sports" value="soccer" />
            <br />
            60-70: <input type="checkbox" name="sports" value="football" />
            <br />
            70-80: <input type="checkbox" name="sports" value="baseball" />
            <br />
            80-90: <input type="checkbox" name="sports" value="basketball" />
            <br />
            90-2000: <input type="checkbox" name="sports" value="basketball" />
            <br />
            2000-2010:{" "}
            <input type="checkbox" name="sports" value="basketball" />
            <br />
            2010-2020:{" "}
            <input type="checkbox" name="sports" value="basketball" />
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
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <a href="#" className="FormField__Link">
              I'm already registered
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
