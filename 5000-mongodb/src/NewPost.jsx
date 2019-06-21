import React, { Component } from 'react' // 1

class NewPost extends Component { // 1
    constructor() { // 2
        super() // 2
        this.state = { // 2
            file: "", // 2
            description: "" // 2
        } // 2
    } // 2
    descChangeHandler = e => { // 3
        this.setState({ description: e.target.value }) // 3
    } // 3
    fileChangeHandler = e => { // 4
        this.setState({ file: e.target.files[0] }) // 4
    } // 4
    submitHandler = evt => { // 5
        evt.preventDefault() // 5
        let data = new FormData() // 5
        data.append("img", this.state.file) // 5
        data.append("description", this.state.description) // 5
        fetch('/new-post', { method: "POST", body: data }) // 5
    } // 5
    render = () => { // 6
        return (<form onSubmit={this.submitHandler}> {/* 6 */}
            <input type="file" onChange={this.fileChangeHandler} /> {/* 6 */}
            <input type="text" value={this.state.description} onChange={this.descChangeHandler} /> {/* 6 */}
            <input type="submit" value="create new" /> {/* 6 */}
        </form>) // 6
    } // 6
} // 1

export default NewPost // 1


/* meta
  ({
    text:
    {
      1: `The NewPost component will allow the user
      to create a new post.`,
      2: `Each post has a file location and a description`,
      3: `This change handler is called whenever the user changes the description`,
      4: `This file change handler is called whenever the user selects a file. The user has the
      option to select many files (using the shift key), but for simplicity we're only going to process
      the first one selected`,
      5: `The user will be presented with a form. The submission of the form
      will send an HTTP request to the new-post endpoint with the file and the description in the body.`,
      6: `To submit a post, the user has to supply a file and a description.
       When they click the submit button (labeled create new), the submitHandler is called and the information
       is sent to the backend.
      `
    }
  })
  */