import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Item extends Component {
  render() {
    return (
      <div className="card center">
        <img height="100px" src={this.props.imgLocation} />
        <div>
          <div>{this.props.description}</div>
          <div>${this.props.cost}</div>
          <div>
            <Link to={"/seller/" + this.props.sellerId}>Link to seller</Link>
          </div>
          <div>
            <Link to={"/item/" + this.props.id}>View more!</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Item;
