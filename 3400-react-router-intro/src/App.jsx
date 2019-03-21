import React, { Component } from 'react' // 1
import { BrowserRouter, Route, Link } from 'react-router-dom' // 1
let renderRoot = () => { // 3
    return (<div> {/* 3 */}
        Welcome to this page. Click here to view all the items: {/* 3 */}
        <Link to="/allItems">All items</Link> {/* 4 */}
    </div>) // 3
} // 3
let renderAllItems = () => { // 6
    return (<div> {/* 6 */}
        <div><Link to="/item/abc">A hat</Link></div> {/* 7 */}
        <div><Link to="/item/def">A boat</Link></div> {/* 7 */}
    </div>) // 6
} // 6
let renderItem = routerData => { // 10
    if (routerData.match.params.itemId === "abc") { // 11
        return (<div>A very nice hat. Only 300$ <img src="/hat.jpg" /></div>) // 11
    } // 11
    if (routerData.match.params.itemId === "def") { // 12
        return (<div>A boat. Only 3000$ <img src="/boat.jpg" /></div>) // 12
    } // 12
    return (<div> Unknown item </div>) // 13
} // 10
class App extends Component { // 1
    render() { // 1
        return (<BrowserRouter><div> {/* 2 */}
            <Route exact={true} path='/' render={renderRoot} /> {/* 5 */}
            <Route exact={true} path='/allItems' render={renderAllItems} /> {/* 8 */}
            <Route exact={true} path='/item/:itemId' render={renderItem} /> {/* 9 */}
        </div></BrowserRouter>) // 2
    } // 1
} // 1
export default App // 1

/* meta
    ({
        text: {
            1: `We import the libraries we need. The react-router-dom library
        will be used to deal with links.`,
            2: `If we want to se the react-router-dom library functionalities, we need
        to place  a BrowserRouter component. We will then be able to use the
        other components of the react-router-dom library if they are placed below
        the BrowserRouter component in the virtual DOM. BrowserRouter can only have one child`,
            3: `This function returns a react element that welcomes the user to the website.`,
            4: `It contains the Link component, which is the react equivalent to <a href>. By clicking
        on this link, it will send the user to the address /allItems`,
            5: `This line tells react router what to do if the path is /, which is
        the path that the user will use to get on the website. The render prop
        tells react to call renderRoot function and  display it returns.
        In other words, if the user goes to the / path, then he gets the welcome message.
        The exact prop just says not to render the welcome message for subpaths of / such as /index.html `,
            6: `The renderAllItems function returns a react element`,
            7: `The react element contains two links, clicking on each of the
        links sends the user to a different path. `,
            8: `The /allItems path will display what the renderAllItems function returns`,
            9: `This route matches any path that starts with /item, such as /item/abc and /item/def. The function
            renderItem is then called with an argument that contains information related to the path.
            For example, if the path is /item/abc, then the argument to renderItem will be
\`\`\`javascript
            {match: {params: {itemId: "abc"}}}
\`\`\`
            and if
            the path is /item/def then the argument to renderItem will be
\`\`\`javascript
           {match: {params: {itemId: "def"}}}
\`\`\`
             Notice where the itemId in /item/:itemId appears in the argument to renderItem`,
            10: `renderItem is a variable that refers to a function. That function has one parameter.
             We chose the name routerData as the name of the parameter. The parameter will refer
             to the object described in the previous step. In other words, the object will depend
             on the path in the address bar.`,
            11: `If the url in the address bar is /item/abc, then routerData will refer to
\`\`\`javascript
             {match: {params: {itemId: "abc"}}}
\`\`\`
             And so the expression
\`\`\`javascript
             routerData.match.params.itemId
\`\`\`
             will refer to \`abc\` and so the if condition evaluates to true and a picture of a hat
             is displayed to the user.`,
            12: `This if statements handles the case when the itemId is \`"def"\``,
            13: `At this point the two if conditions failed, so we know that the path is neither /item/abc nor /item/def.
            Therefore, the item the user wants more information on is unknown.`
        }
    })
    */