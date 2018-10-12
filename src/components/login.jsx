import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" placeholder="First Name" />>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
