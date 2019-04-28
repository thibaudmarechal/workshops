
import React, { Component } from 'react' // 1
import Search from './Search.jsx' // 1
import SearchResults from './SearchResults.jsx' // 1
class App extends Component { // 1
    render = () => { // 1
        return (<div> {/* 1 */}
            <Search /> {/* 1 */}
            <SearchResults /> {/* 1 */}
        </div>) // 1
    } // 1
} // 1
export default App // 1
/* meta
    ({
        text: {
            1: "In the virtual DOM, App nodes will have two children: a Search node and a SearchResults node."
        }
    })
    */