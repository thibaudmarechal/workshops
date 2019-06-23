import { createStore } from "redux" 
let reducer = (state, action) => { 
    if (action.type === "login-success") { 
        return { ...state, loggedIn: true } 
    } 
    if (action.type === "set-messages") { 
        return { ...state, msgs: action.messages } 
    } 
    return state  
} 
const store = createStore( 
    reducer, 
    { msgs: [], loggedIn: false }, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
) 
export default store 