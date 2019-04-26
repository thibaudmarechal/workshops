import React, { Component } from "react" // 1
import { connect } from "react-redux" // 1
class UnconnectedLogin extends Component { // 1
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
        console.log("login form submitted") // 2
        let data = new FormData() // 3
        data.append("username", this.state.username) // 3
        data.append("password", this.state.password) // 3
        fetch("http://localhost:4000/login", { /* 3 */
            method: "POST", // 3
            body: data, // 3
            credentials: "include" // 3
        }) // 3
            .then(x => { return x.text() }) // 4
            .then(responseBody => { // 5
                console.log("responseBody from login", responseBody) // 5
                let body = JSON.parse(responseBody) // 5
                console.log("parsed body", body) // 5
                if (!body.success) { // 6
                    alert("login failed") // 6
                    return // 6
                } // 6
                this.props.dispatch({ // 7
                    type: "login-success" // 7
                }) // 7
            }) // 5
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

let Login = connect()(UnconnectedLogin) // 1
export default Login // 1
/* meta

    ({
        text: {
            1: `The UnconnectedLogin nodes will each be a child of connect(UnconnectedLogin) in the virtual DOM. The reason is that
we want to be able to dispatch actions to the reducer. This is why we use connect and this is why
it is the return value of connect that is exported. The only prop that will be passed to UnconnectedLogin is dispatch
since we're not passing a mapStateToProps function. We will call dispatch when the user
successfully logs in and we need to update the store to reflect this fact. This will happen when the form is submitted `,
            2: `The handleSubmit method starts off in the normal way`,
            3: `We make the fetch request. In the body of the fetch request we put the information needed to successfully log in the user.
Look for req.body.username and req.body.password on the backend to see how this information is used.`,
            4: `This line is needed to get access to the HTTP response body`,
            5: `This function is going to handle the HTTP response body. It's always a good idea to
console.log the response body before parsing it because you'll be able to see the error from the server`,
            6: `If the login was not a success, alert the user. `,
            7: `If the login is successful, dispatch an object with type \`"login-success"\`. Looking at the reducer
in store.js, we see that it modifies the loggedIn property of the state of the store.`,


        }
    })
    */