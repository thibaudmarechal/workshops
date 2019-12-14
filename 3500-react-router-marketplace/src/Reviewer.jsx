import React, { Component } from "react";
import { initialReviews, initialReviewers, initialItems } from "./Data";
import { Link } from "react-router-dom";
import "./App.css";

class Reviewer extends Component {
  render() {
    return (
      <div className="card center">
        <div>{<img src={this.props.reviewer.pic} height="100px" />}</div>
        <div>
          <h3>{this.props.reviewer.name}</h3>
        </div>
        <div>{this.props.reviewer.description}</div>
        <h3>Reviews</h3>
        <ul>
          {this.props.reviewer.reviewIds.map(reviewId => {
            const review = initialReviews.find(
              review => review.reviewId === reviewId
            );
            const item = initialItems.find(item => {
              console.log(item.id, review.itemId);
              return item.id === review.itemId;
            });

            return (
              <li key={reviewId}>
                <div>{review.content}</div>
                <Link to={"/item/" + item.id}>View the item</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Reviewer;
