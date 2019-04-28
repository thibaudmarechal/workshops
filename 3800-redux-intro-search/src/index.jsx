import ReactDOM from "react-dom" // 1
import React from "react" // 1
import { Provider } from "react-redux" // 2
import store from './store.js' // 2
import App from './App.jsx' // 1
import "./main.css" // 1

ReactDOM.render( // 3
    <Provider store={store}> {/* 3 */}
        <App /> {/* 3 */}
    </Provider>, // 3
    document.getElementById("root") // 3
) // 3
/* meta
  ({
    text: {
      1: `We import the standard libraries`,
      2: `We're also going to import Provider from react-redux and our store from store.js`,
      3: `We place the Provider as the top level node in our
       virtual DOM so that we can use redux everywhere. The value of the store prop
       is our store. The store has two main attributes: an initial value and a reducer. See reducer.js
       for more information.`
    }
  })

  */
