import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Purchases extends Component {
  render() {
    return (
      <div className="card center">
        <div>
          <h3>All your purchases</h3>
        </div>
        <ul>
          {this.props.purchases.map(purchase => {
            return <li>{purchase.description}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Purchases;
