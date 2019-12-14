import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Item extends Component {
  render() {
    const {
      image,
      id,
      description,
      price,
      sellerId,
      inventory
    } = this.props.item;
    return (
      <div className="card center">
        <img height="100px" src={image} />
        <div>
          <div>
            <h3>{description}</h3>
          </div>
          <div>${price}</div>
          <div>
            <Link to={"/seller/" + sellerId}>Visit the seller profile</Link>
          </div>
          <div>
            <Link to={"/item/" + id}>View more details</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Item;
