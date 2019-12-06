import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { initialReviews } from "./Data";

class Details extends Component {
  render() {
    return (
      <div className="card center">
        <img height="300px" src={this.props.item.image} />
        <div>
          <h3>About</h3>
          <p>{this.props.item.description}</p>
          <div>Cost: ${this.props.item.price}</div>
          <div>Remaining: {this.props.item.inventory}</div>
          <div>
            <Link to={"/seller/" + this.props.item.sellerId}>
              Link to seller
            </Link>
          </div>
          <div>
            <Link to={"/"}>Back</Link>
          </div>
          <h3>Reviews</h3>
          <ul>
            {this.props.item.reviewIds.map(reviewId => {
              let review = initialReviews.find(
                review => review.id === reviewId
              );
              return (
                <li>
                  Content: {review.content}
                  Author: {review.author}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Details;
