import React, { Component } from "react" // 1
class Signup extends Component { // 1
    constructor(props) { // 1
        super(props) // 1
        this.state = { // 1
            username: "", // 1
            password: "" // 1
        } // 1
    } // 1

    handleUsernameChange = event => { // 1
        console.log("new username", event.target.value) // 1
        this.setState({ username: event.target.value }) // 1
    } // 1

    handlePasswordChange = event => { // 1
        console.log("new password", event.target.value) // 1
        this.setState({ password: event.target.value }) // 1
    } // 1

    handleSubmit = evt => { // 2
        evt.preventDefault() // 2
        console.log("signup form submitted") // 2
        let data = new FormData() // 2
        data.append("username", this.state.username) // 2
        data.append("password", this.state.password) // 2
        fetch("http://localhost:4000/signup", /* 2 */
            { method: "POST", body: data }) // 2
    } // 2

    render = () => { // 1
        return ( // 1
            <form onSubmit={this.handleSubmit}> {/* 1 */}
                Username {/* 1 */}
                <input type="text" onChange={this.handleUsernameChange} /> {/* 1 */}
                Password {/* 1 */}
                <input type="text" onChange={this.handlePasswordChange} /> {/* 1 */}
                <input type="submit" /> {/* 1 */}
            </form> // 1
        ) // 1
    } // 1
} // 1
export default Signup // 1
/* meta
    ({
        text: {
            1: `This component is a standard signup form`,
            2: `When the form is submitted, send an HTTP request to the /signup POST endpoint with the username
            and password in the HTTP request body.
            You can look at the server code to see how req.body.username and req.body.password are used.`
        }
    })

    */