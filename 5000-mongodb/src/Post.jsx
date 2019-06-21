import React, { Component } from 'react' // 1

class Post extends Component { // 1
    constructor(props) { // 2
        super(props) // 2
        this.state = { // 2
            description: this.props.contents.description // 2
        } // 2
    } // 2
    changeHandler = e => { // 3
        this.setState({ description: e.target.value }) // 3
    } // 3
    submitHandler = evt => { // 4
        evt.preventDefault() // 4
        let data = new FormData() // 4
        data.append("description", this.state.description) // 4
        data.append("id", this.props.contents._id) // 4
        fetch('/update', { method: "POST", body: data }) // 4
    } // 4
    render = () => { // 5
        return (<form onSubmit={this.submitHandler}> {/* 5 */}
            <input type="text" value={this.state.description} onChange={this.changeHandler} /> {/* 5 */}
            <img src={this.props.contents.frontendPath} /> {/* 5 */}
            <input type="submit" value="update" /> {/* 5 */}
        </form>) // 5
    } // 5
} // 1

export default Post // 1


/* meta
  ({
    text:
    {
      1: `The Post endpoint displays a post to the user. The user has the ability to modify the post if they want.`,
      2: `We will keep track of the description. Initially, the description is passed as a prop (see the Content component). However,
      the user will have the ability to change it and submit the change to the backend.`,
      3: `This method modifies the description in the state`,
      4: `When the new description is submitted, an HTTP request is sent to the server. The response is ignored. The id of the post
      is located in the contents prop. Looking at Content.jsx, this prop corresponds to a document in our MongoDB database.
      All documents in the MongoDB database have an _id property that is set by MongoDB.`,
      5: `We display the description, an image and a button to change the description.`
    }
  })
  */