import React, { Component } from "react";
import Content from "./Content.jsx";
import Signup from "./Signup.jsx";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      username: undefined,
      auth: ""
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
    let response = await fetch("/login", { method: "POST", body: data });
    let body = await response.text();
    let parsed = JSON.parse(body);
    console.log(parsed.message);
    alert(parsed.message);
    if (parsed.success) {
      this.setState({ username: name });
    } else {
      this.setState({ auth: parsed.auth });
      console.log(this.state.auth);
    }
  };
  render = () => {
    if (this.state.auth === "signup") {
      return <Signup />;
    }
    if (this.state.username === undefined) {
      return (
        <div>
          <h3>Log In</h3>
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
            <input type="submit" value="login" />
          </form>
        </div>
      );
    }
    return <Content username={this.state.username} />;
  };
}
export default Login;
