import React, { Component } from 'react' // 1
import Post from './Post.jsx' // 1
import NewPost from './NewPost.jsx' // 1

class Content extends Component { // 1
    constructor(props) { // 2
        super(props) // 2
        this.state = { // 2
            posts: [] // 2
        } // 2
    } // 2
    reload = async () => { // 3
        let response = await fetch('/all-posts') // 3
        let body = await response.text() // 3
        console.log("/all-posts response", body) // 3
        body = JSON.parse(body) // 3
        this.setState({ posts: body }) // 3
    } // 3
    render = () => { // 4
        return (<div> {/* 4 */}
            <button onClick={this.reload}> load </button> {/* 4 */}
            <div>{this.state.posts.map(p => <Post key={p._id} contents={p} />)}</div> {/* 4 */}
            <NewPost /> {/* 4 */}
        </div>) // 4
    } // 4
} // 1

export default Content // 1

/* meta
  ({
    text:
    {
      1: `The content component will display the posts and also
      present a component to add a new post`,
      2: `The initial state has posts as the empty array`,
      3: `The reload method fetches all the posts from the backend and
      then sets the state with the posts. (see server.js for details).
      In other words, the user has to press the button to load all the posts.`,
      4: `The render displays a button to load all the posts. Futhermore, it also
      displays the posts and the component to create a new post. The posts
      are only displayed when the user presses the load button and the
      user has to press the button every time they want to get the
      latest post.`,
    }
  })
  */