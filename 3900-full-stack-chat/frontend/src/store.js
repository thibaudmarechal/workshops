import { createStore } from "redux" // 1
let reducer = (state, action) => { // 2
    if (action.type === "login-success") { // 3
        return { ...state, loggedIn: true } // 3
    } // 3
    if (action.type === "set-messages") { // 4
        return { ...state, msgs: action.messages } // 4
    } // 4
    return state  // 5
} // 2

const store = createStore( // 6
    reducer, // 6
    { msgs: [], loggedIn: false }, // 6
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 7
) // 6

export default store // 6
/* meta
    ({
        text: {
            1: `In this file we create and export the store. We need to use createStore to create the store.`,
            2: `The reducer is a function that takes a state and an action. An action is just an object with a \`type\` property.
            It potentially returns a new object. The state of the store will then refer to this new object.
            To activate the reducer, a component needs to call this.props.dispatch and pass the action.
            The reducer then gets called with the current state of the store and the action. The reducer
            is referenced when the store is created (in later slides)

            `,
            3: `If the \`type\` of the action is \`"login-success"\` then we create and return a new object with
            the same properties as state with the loggedIn property set to true. Looking at Login.jsx, we see that
            this happens when the user successfully logs in.
            `,
            4: `If the \`type\` of the action is \`"set-messages"\`, then we create a new object
            with the msgs property referring to action.messages. Looking at ChatMessages.jsx, we see
            that this will be an array.
            `,
            5: `If the type is unrecognized, return the state as is. This is useful since
            redux sends an action with type \`"@@INIT"\` when the store is created.

            `,
            6: `We create the store. We need to provide the initial state of the store and the reducer`,
            7: `This argument lets you use redux developer tools, which is very, very useful. You can just
            copy paste it.`
        }
    })
    */