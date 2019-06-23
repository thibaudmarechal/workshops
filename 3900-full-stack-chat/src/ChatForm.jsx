import React, { Component } from "react" 
class ChatForm extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { message: "" } 
    } 
    handleMessageChange = event => { 
        console.log("new message", event.target.value) 
        this.setState({ message: event.target.value }) 
    } 
    handleSubmit = event => { 
        event.preventDefault() 
        console.log("form submitted") 
        let data = new FormData() 
        data.append("msg", this.state.message) 
        fetch("/newmessage", { 
            method: "POST", 
            body: data, 
            credentials: "include" 
        }) 
    }
    render = () => {  
        return (  
            <div>  
                <form onSubmit={this.handleSubmit}>  
                    <input onChange={this.handleMessageChange} type="text" /> 
                    <input type="submit" /> 
                </form> 
            </div>) 
    } 
} 
export default ChatForm 