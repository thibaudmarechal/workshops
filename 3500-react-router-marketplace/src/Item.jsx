import React, { Component } from 'react'; // 1
import { Link } from 'react-router-dom' // 1
import './App.css'; // 1

class Item extends Component {  // 1
  render() { // 2
    return (<div className="card center "> {/* 2 */}
      <img height="100px" src={this.props.imageLocation} /> {/* 3 */}
      <div> {/* 3 */}
        <div>{this.props.description}</div> {/* 3 */}
        <div>{this.props.cost}</div> {/* 3 */}
        <Link to={"/seller/" + this.props.sellerId}> Link to seller </Link> {/* 4 */}
      </div>{/* 3 */}
    </div>) // 2
  } // 2
} // 1

export default Item; // 1

/* meta
({
  text: {
    1: `We import the React library (why do we need to import React if we don't use it explicitly?) We create a component
    and export it`,
    2: `The component has a render method that returns a div react element`,
    3: `There are 3 props here:
- imageLocation: A string that represents a filename. The filename is relative to the public/ folder
- description: A description of the item
- cost: The price of the item

Every time we use the Item component to create a react element, we need to provide these props.
    `,
    4: `We also have a sellerId prop. We use this prop to create a link. For example if the
    sellerId prop is \`"ewio"\` then it will be a link to \`"/seller/ewio"\` which will
    display the information related to Jack Frost (see Data.js and App.jsx) . To see
    where this link leads to, please see the \`/seller\` Route in App.jsx

    Every time we create an Item react element, we need to provide the sellerId prop.`,


  }
})
*/