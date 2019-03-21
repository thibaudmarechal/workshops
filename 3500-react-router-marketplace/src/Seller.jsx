import React, { Component } from 'react'; /* 1 */
import './App.css'; /* 1 */

class Seller extends Component { /* 1 */
  render() { /* 2 */
    return ( /* 3 */
      <div className="card center"> {/* 3 */}
        <div>{this.props.seller.name}</div> {/* 4 */}
        <div>{this.props.seller.rating}</div> {/* 4 */}
      </div> /* 3 */
    ); /* 3 */
  } /* 2 */
} /* 1 */

export default Seller; /* 1 */

/* meta
({
  text: {
    1: `We import the libraries, create a component and export it.
    (Quiz: does the component name matter?) `,
    2: `The component only has a render method`,
    3: `It returns a div react element. I added a className to make it look nice. The css classes
    card and center are located in App.css`,
    4: `There is a single prop, which we have called seller.
    Every time this component is used, this prop must be provided. When the prop is provided
    it must refer to an object. This object must have at least two properties
- name
- rating

You can see in App.jsx where this prop is provided.
`,

  }
})
*/