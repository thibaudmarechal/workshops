import React, { Component } from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
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
    return <div>{<Signup /> && <Login /> ? <Signup /> : <Content />}</div>;
  };
}
export default App;
