import React, { Component } from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Content from "./Content.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      username: undefined
    };
  }
  render = () => {
    if (!(<Signup /> && <Login />)) {
      return (
        <div>
          <Content />
        </div>
      );
    }
    return (
      <div>
        <Signup />
      </div>
    );
  };
}
export default App;
