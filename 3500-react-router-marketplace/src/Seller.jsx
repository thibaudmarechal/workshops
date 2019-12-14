import React, { Component } from "react";
import { initialReviews, initialReviewers, initialItems } from "./Data";
import { Link } from "react-router-dom";
import "./App.css";

class Seller extends Component {
  render() {
    const { id, name, pic, rating, itemIds } = this.props.seller;
    return (
      <div className="card center">
        <ul>
          <div>{<img src={pic} height="100px" />}</div>
          <div>
            <h3>
              {name} | <Link to="/">Back to results</Link>
            </h3>
          </div>
          <div>
            <h4>{rating}</h4>
          </div>
          <div>
            <h3>Items for sale</h3>
          </div>
          {itemIds.map(itemId => {
            const item = initialItems.find(item => {
              return item.id === itemId;
            });
            return (
              <li key={itemId}>
                {item.description}
                <div>
                  <Link to={"/item/" + item.id}>View item</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Seller;
