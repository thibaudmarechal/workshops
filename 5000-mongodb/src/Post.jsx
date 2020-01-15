import React, { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.contents.description,
      image: this.props.contents.frontEndPathImg
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
    data.append("img", this.state.image);
    const response = await fetch("/update", { method: "POST", body: data });
    const body = await response.text();
    const parsed = JSON.parse(body);
    console.log("res from /update endpoint", parsed);
  };
  handleDeletePost = async () => {
    const data = new FormData();
    data.append("id", this.props.contents._id);
    const response = await fetch("/deletepost", { method: "POST", body: data });
    const body = await response.text();
    const parsed = JSON.parse(body);
    console.log("res from /deletepost endpoint", parsed);
  };
  handleNewImage = event => {
    this.setState({ image: event.target.files[0] });
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
          <img src={this.props.contents.frontEndPathImg} />
          <input type="file" onChange={this.handleNewImage} />

          {this.props.contents.frontEndPathAudio && (
            <audio controls src={this.props.contents.frontEndPathAudio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          )}
          <input type="submit" value="Update" />
        </form>
        <button onClick={this.handleDeletePost}>Delete Post</button>
      </div>
    );
  };
}
export default Post;
