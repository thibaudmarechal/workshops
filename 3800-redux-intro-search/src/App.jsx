import React, { Component } from 'react' 
import Search from './Search.jsx' 
import SearchResults from './SearchResults.jsx' 
class App extends Component { 
    render = () => { 
        return (<div> 
            <Search /> 
            <SearchResults /> 
        </div>) 
    } 
} 
export default App 