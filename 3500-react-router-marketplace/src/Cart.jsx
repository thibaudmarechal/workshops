import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Cart extends Component {
  handleCheckout = () => {
    this.props.addItemsBought(this.props.cart);
    this.props.emptyCart();
  };

  removeItem = itemIdx => {
    this.props.removeItem(itemIdx);
  };

  render() {
    return (
      <div className="card center">
        <div>
          <h3>Cart ({this.props.cart.length})</h3>
        </div>
        <ul>
          {this.props.cart.map((item, itemIdx) => {
            return (
              <li key={item.key}>
                <img src={item.image} height="50px" />
                {item.description} —{" "}
                <Link to={"/item/" + item.id}>View item</Link>
                <button
                  className="cta"
                  onClick={() => this.removeItem(itemIdx)}
                >
                  Remove item
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={this.handleCheckout}>Purchase items</button>
          <button onClick={"/cart/payment"}>Make a payment</button>
          <Link to={"/"}>Add more items</Link>
        </div>
      </div>
    );
  }
}
export default Cart;
