import React, { Component } from "react";
import Content from "./Content.jsx";
import Login from "./Login.jsx";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      username: undefined,
      login: ""
    };
  }
  handleUsernameChange = event => {
    this.setState({ usernameInput: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ passwordInput: event.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    console.log("usernameInput", this.state.usernameInput);
    console.log("passwordInput", this.state.passwordInput);
    let name = this.state.usernameInput;
    let pwd = this.state.passwordInput;
    let data = new FormData();
    data.append("username", name);
    data.append("password", pwd);
    let response = await fetch("/signup", { method: "POST", body: data });
    let body = await response.text();
    let parsed = JSON.parse(body);
    if (parsed.success) {
      this.setState({ username: name });
    } else {
      this.setState({ login: parsed.login });
      alert(parsed.message);
      console.log(this.state.login);
    }
  };
  render = () => {
    if (this.state.username === undefined) {
      return (
        <div>
          <h3>Sign Up</h3>
          <form onSubmit={this.handleSubmit}>
            username{" "}
            <input
              type="text"
              value={this.state.usernameInput}
              onChange={this.handleUsernameChange}
            />
            password{" "}
            <input
              type="text"
              value={this.state.passwordInput}
              onChange={this.handlePasswordChange}
            />
            <input type="submit" value="signup" />
          </form>
        </div>
      );
    }
    if ((this.state.login = "login")) {
      return <Login />;
    }
    return <Content username={this.state.username} />;
  };
}
export default Signup;
