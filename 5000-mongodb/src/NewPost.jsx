import React, { Component } from 'react' 
class NewPost extends Component { 
    constructor() { 
        super() 
        this.state = { 
            file: "", 
            description: "" 
        } 
    } 
    descChangeHandler = e => { 
        this.setState({ description: e.target.value }) 
    } 
    fileChangeHandler = e => { 
        this.setState({ file: e.target.files[0] }) 
    } 
    submitHandler = evt => { 
        evt.preventDefault() 
        let data = new FormData() 
        data.append("img", this.state.file) 
        data.append("description", this.state.description) 
        fetch('/new-post', { method: "POST", body: data }) 
    } 
    render = () => { 
        return (<form onSubmit={this.submitHandler}> 
            <input type="file" onChange={this.fileChangeHandler} /> 
            <input type="text" value={this.state.description} onChange={this.descChangeHandler} /> 
            <input type="submit" value="create new" /> 
        </form>) 
    } 
} 
export default NewPost 