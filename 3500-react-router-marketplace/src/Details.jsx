import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { initialItems, initialReviews, initialReviewers } from "./Data";

class Details extends Component {
  addToCart = () => {
    this.props.addToCart(this.props.item);
  };

  render() {
    const {
      image,
      id,
      description,
      price,
      sellerId,
      inventory,
      reviewIds
    } = this.props.item;

    return (
      <div className="card center">
        <img height="300px" src={image} />
        <div>
          <h3>{description}</h3>
          <div>Cost: ${price}</div>
          <div>Remaining: {inventory}</div>
          <div>
            <Link to={"/seller/" + sellerId}>View the seller profile</Link>
          </div>
          <div>
            <Link to={"/"}>Back to results</Link>
          </div>
          <div>
            <button className="cta" onClick={this.addToCart}>
              Add to Cart
            </button>
          </div>
          <h3>Reviews ({reviewIds.length})</h3>
          <ul>
            {reviewIds.map(reviewId => {
              if (reviewIds === "") return <div>No reviews!</div>;
              const review = initialReviews.find(
                review => review.reviewId === reviewId
              );
              const reviewer = initialReviewers.find(
                reviewer => reviewer.id === review.authorId
              );
              return (
                <li key={reviewId}>
                  <div>{review.content}</div>
                  <div>
                    <Link to={"/reviewer/" + review.authorId}>
                      View reviewer profile
                    </Link>
                  </div>
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
