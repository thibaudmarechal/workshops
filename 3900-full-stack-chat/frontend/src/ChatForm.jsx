import React, { Component } from "react" // 1

class ChatForm extends Component { // 1
    constructor(props) { // 1
        super(props) // 1
        this.state = { message: "" } // 1
    } // 1
    handleMessageChange = event => { // 1
        console.log("new message", event.target.value) // 1
        this.setState({ message: event.target.value }) // 1
    } // 1
    handleSubmit = event => { // 2
        event.preventDefault() // 2
        console.log("form submitted") // 2
        let data = new FormData() // 2
        data.append("msg", this.state.message) // 2
        fetch("http://localhost:4000/newmessage", { /* 2 */
            method: "POST", // 2
            body: data, // 2
            credentials: "include" // 2
        }) // 2
    }// 2
    render = () => {  // 1
        return (  // 1
            <div>  {/* 1 */}
                <form onSubmit={this.handleSubmit}>  {/* 1 */}
                    <input onChange={this.handleMessageChange} type="text" /> {/* 1 */}
                    <input type="submit" /> {/* 1 */}
                </form> {/* 1 */}
            </div>) // 1
    } // 1
} // 1

export default ChatForm // 1
/* meta

    ({
        text: {
            1: `Standard form component. The only state is \`message\`. The only thing that is different from
            for this component is the onSubmit function`,
            2: `The onSubmit function starts off by calling preventDefault to prevent
            the page from reloading. Then we're creating a FormData instance so that we can use it
            in the fetch request to set the HTTP request body. The credentials property with a value of \`"include"\` is important since
            it tells fetch to send the Cookie header. We're sending the HTTP request body and the cookie
            header to the POST /newmessage endpoint. In the body we have the message. The backend
            will find out who this message is from by looking up the username using the cookie.`
        }
    })
    */