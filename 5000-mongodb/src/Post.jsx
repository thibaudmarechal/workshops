import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.contents.description
    };
  }
  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData();
    data.append("desc", this.state.description);
    data.append("id", this.props.contents._id);
    const response = await fetch("/update", { method: "POST", body: data });
    const body = await response.text();
    const parsed = JSON.parse(body);
    console.log("res from /update endpoint", parsed);
  };
  render = () => {
    return (
      <div>
        <div>{this.props.contents.username}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChangeDescription}
            value={this.state.description}
          />
          <img src={this.props.contents.frontEndPath} />
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  };
}
export default Post;
