import React, { Component } from "react" // 1
import { connect } from "react-redux" // 1

class UnconnectedChatMessages extends Component { // 1
    componentDidMount = () => {  // 2
        let updater = () => { // 3
            fetch("http://localhost:4000/messages") /* 3 */
                .then(response => { return response.text() }) // 4
                .then(responseBody => { // 5
                    console.log("response from messages", responseBody) // 5
                    let parsed = JSON.parse(responseBody) // 6
                    console.log("parsed", parsed) // 6
                    this.props.dispatch({ // 7
                        type: "set-messages", // 7
                        messages: parsed // 7
                    }) // 7
                }) // 5
        } // 3
        setInterval(updater, 500) // 8
    } // 2
    render = () => { // 9
        let msgToElement = e => <li> {e.username}:{e.message} </li> // 10
        return ( // 9
            <div> {/* 9 */}
                <ul>{this.props.messages.map(msgToElement)}</ul> {/* 10 */}
            </div>) // 9
    } // 9
} // 1
let mapStateToProps = state => { // 1
    return { // 1
        messages: state.msgs // 1
    } // 1
} // 1
let Chat = connect(mapStateToProps)(UnconnectedChatMessages) // 1
export default Chat // 1
/* meta

    ({
        text: {
            1: `This UnconnectedChatMessages component
             will display all the messages in the chat. To do so, it needs data from the store.
             To get this data, we pass it to connect, which creates a new component called connect(UnconnectedChatMessages).
             In the virtual DOM, every node of this component will have an UnconnectedChatMessages child.
             Furthermore, it will pass a \`messages\` prop to that child. The value of that prop is \`state.msgs\`, which changes
             every time the reducer receives an object with a \`type\` prop with a value of \`set-messages\`. It also
             passes a \`dispatch\` prop to the UnconnectedChatMessages child, which enables the child to send
             actions to the reducer.
             `,
            2: `We define the componentDidMount method. If a method has
            this name then it will get called after the first render. Inside
            the body of this method we will use setInterval to continuously
            get messages from the server`,
            3: `We define the function that makes a fetch request. As we will see, it will get called at regular intervals`,
            4: `This line is necessary to get the body HTTP response.`,
            5: `This is the function that's going to handle the HTTP response body. `,
            6: `The first thing to do is to parse the HTTP response. Looking at the backend, we see that
            it is the result of calling JSON.stringify on an array, so the result of JSON.parse will be an array`,
            7: `We dispatch an object with \`type\` \`"set-messages"\` and \`messages\` \`"parsed"\` so that
            we can set the messages in the store.`,
            8: `Thanks to setInterval, the whole process will happen every 500ms`,
            9: `The render method returns a div`,
            10: `Inside the div we put all the messages as li elements wrapped in a ul element`
        }
    })

    */