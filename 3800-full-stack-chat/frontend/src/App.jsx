import React, { Component } from "react" // 1
import { connect } from "react-redux" // 1
import Login from './Login.jsx' // 1
import Signup from './Signup.jsx' // 1
import ChatMessages from './ChatMessages.jsx' // 1
import ChatForm from './ChatForm.jsx' // 1

class UnconnectedApp extends Component { // 2
    render = () => { // 2
        if (this.props.lgin) { // 3
            return (<div> {/* 3 */}
                <ChatMessages /> {/* 3 */}
                <ChatForm />{/* 3 */}
            </div>) //  3
        } // 3
        return ( // 3
            <div> {/* 3 */}
                <h1>Signup</h1>  {/* 3 */}
                <Signup /> {/* 3 */}
                <h1>Login</h1> {/* 3 */}
                <Login /> {/* 3 */}
            </div>)  // 3
    } // 2
} // 2
let mapStateToProps = state => { // 2
    return { lgin: state.loggedIn } // 2
} // 2
let App = connect(mapStateToProps)(UnconnectedApp) // 2
export default App // 2
/* meta
    ({
        text: {
            1: `We'll be importing connect from react-redux so that our
         component can access data in the store. Specifically, we'll want to know whether
         or not the user has logged in yet`,
            2: `In the virtual DOM, The UnconnectedApp nodes will be a child of
         connect(UnconnectedApp) nodes.
         Through this arragement, the connect(UnconnectedApp) component
         will give props to UnconnectedApp nodes.
         Namely, the lgin prop. The value of that prop depends
         on the store. More specifically, it depends on the loggedIn property
         of the store. Initially, state.loggedIn is false, but it
         changes to true when the user logs in
         `,
            3: `The value of this.props.lgin reflects whether or not a user has logged
            in. If the user has logged in, you want to display the chat messages and the
            form to send a message to the chat. If the user has not logged in,
            you want to display signup and login forms.
            `,

        }
    })
    */