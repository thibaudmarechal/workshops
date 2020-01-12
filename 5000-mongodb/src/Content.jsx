import React, { Component } from "react";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  reload = async () => {
    console.log("calling the /all-posts endpoint");
    let response = await fetch("/all-posts");
    let body = await response.text();
    console.log("response from server", body);
    let parsed = JSON.parse(body);
    this.setState({ posts: parsed });
  };
  removeAll = async () => {
    console.log("/remove-all endpoint");
    const response = await fetch("/remove-all");
    const body = await response.text();
    const parsed = JSON.parse(body);
    console.log(parsed);
  };
  render = () => {
    return (
      <div>
        <button onClick={this.reload}>Load</button>
        <button onClick={this.removeAll}>Remove All Posts</button>
        <div>
          {this.state.posts.map(post => (
            <Post key={post._id} contents={post} />
          ))}
          <NewPost username={this.props.username} />
        </div>
      </div>
    );
  };
}
export default Content;
