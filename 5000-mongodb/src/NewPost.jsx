import React, { Component } from "react";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      description: "",
      audio: ""
    };
  }
  handleNewDescription = event => {
    this.setState({ description: event.target.value });
  };
  handleNewImage = event => {
    this.setState({ image: event.target.files[0] });
  };
  handleNewAudio = event => {
    this.setState({ audio: event.target.files[0] });
  };
  handleSubmit = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("img", this.state.image);
    data.append("description", this.state.description);
    data.append("username", this.props.username);
    data.append("audio", this.state.audio);
    const response = await fetch("/new-post", { method: "POST", body: data });
    const body = await response.text();
    const parsed = JSON.parse(body);
    console.log("res from server: ", parsed);
    this.setState({ image: "", description: "", audio: "" });
  };
  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            description
            <input
              type="text"
              onChange={this.handleNewDescription}
              value={this.state.description}
            />
          </label>
          <label>
            image
            <input type="file" onChange={this.handleNewImage} />
          </label>
          <label>
            audio
            <input type="file" onChange={this.handleNewAudio} />
          </label>
          <input type="submit" value="Create New" />
        </form>
      </div>
    );
  };
}
export default NewPost;
