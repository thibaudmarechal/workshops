import React, { Component } from "react";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      description: ""
    };
  }
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  handleFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };
  handleSubmit = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("img", this.state.file);
    data.append("description", this.state.description);
    data.append("username", this.props.username);
    const response = await fetch("/new-post", { method: "POST", body: data });
    const body = await response.text();
    const parsed = JSON.parse(body);
    console.log("res from server: ", parsed);
    this.setState({ file: "", description: "" });
  };
  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            description
            <input
              type="text"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
          </label>
          <label>
            image
            <input type="file" onChange={this.handleFileChange} />
          </label>
          <input type="submit" value="Create New" />
        </form>
      </div>
    );
  };
}
export default NewPost;
