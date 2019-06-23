import React, { Component } from 'react' 
import { BrowserRouter, Route, Link } from 'react-router-dom' 
let renderRoot = () => { 
    return (<div> 
        Welcome to this page. Click here to view all the items: 
        <Link to="/allItems">All items</Link> 
    </div>) 
} 
let renderAllItems = () => { 
    return (<div> 
        <div><Link to="/item/abc">A hat</Link></div> 
        <div><Link to="/item/def">A boat</Link></div> 
    </div>) 
} 
let renderItem = routerData => { 
    if (routerData.match.params.itemId === "abc") { 
        return (<div>A very nice hat. Only 4 remaining <img src="/hat.jpg" /></div>) 
    } 
    if (routerData.match.params.itemId === "def") { 
        return (<div>A boat. Only 4 remaining <img src="/boat.jpg" /></div>) 
    } 
    return (<div> Unknown item </div>) 
} 
class App extends Component { 
    render() { 
        return (<BrowserRouter><div> 
            <Route exact={true} path='/' render={renderRoot} /> 
            <Route exact={true} path='/allItems' render={renderAllItems} /> 
            <Route exact={true} path='/item/:itemId' render={renderItem} /> 
        </div></BrowserRouter>) 
    } 
} 
export default App 