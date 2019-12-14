import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Seller from "./Seller.jsx";
import Item from "./Item.jsx";
import Details from "./Details.jsx";
import Reviewer from "./Reviewer.jsx";
import Cart from "./Cart.jsx";
import Purchases from "./Purchases.jsx";
import { Link } from "react-router-dom";
import {
  initialItems,
  initialSellers,
  initialReviews,
  initialReviewers
} from "./Data.js";

const renderSeller = routerData => {
  const sellerId = routerData.match.params.sellerId;
  const candidate = initialSellers.find(seller => {
    return seller.id === sellerId;
  });
  return <Seller seller={candidate} />;
};

const renderReviewer = routerData => {
  const reviewerId = routerData.match.params.reviewerId;
  const candidate = initialReviewers.find(reviewer => {
    return reviewer.id === reviewerId;
  });
  return <Reviewer reviewer={candidate} />;
};

const renderAllSellers = () => {
  return (
    <div>
      <h3>All Sellers</h3>
      {initialSellers.map(seller => (
        <Link to={"/seller/" + seller.id}>
          <h3>{seller.name}</h3>
        </Link>
      ))}
      <div>
        <Link to={"/"}>Back to main page</Link>
      </div>
    </div>
  );
};

const renderAllItems = () => {
  return (
    <div>
      {initialItems.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], itemsBought: [] };
  }

  renderPurchases = () => {
    return (
      <div>
        <Purchases purchases={this.state.itemsBought} />
      </div>
    );
  };

  removeItem = itemIdx => {
    const cartCopy = this.state.cart.slice();
    cartCopy.splice(itemIdx, 1);
    this.setState({ cart: cartCopy });
  };

  emptyCart = item => {
    this.setState({ cart: [] });
  };

  addItemsBought = items => {
    this.setState({ itemsBought: this.state.itemsBought.concat(items) });
  };

  addToCart = item => {
    this.setState({ cart: this.state.cart.concat(item) });
  };

  renderCart = () => {
    return (
      <Cart
        cart={this.state.cart}
        emptyCart={this.emptyCart}
        removeItem={this.removeItem}
        addItemsBought={this.addItemsBought}
      />
    );
  };

  renderDetails = routerData => {
    const itemId = routerData.match.params.itemId;
    const candidate = initialItems.find(item => {
      if (item === undefined) return <div>Item not found</div>;
      return item.id === itemId;
    });
    return <Details item={candidate} addToCart={this.addToCart} />;
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/sellers">View all sellers</Link>
            <Link to="/purchases">View all purchases</Link>
            <span className="cart-indicator">{this.state.cart.length}</span>
            <Link to="/cart">
              <img src={"/cart-icon.svg"} />{" "}
            </Link>
          </div>
          <Route exact={true} path="/" render={renderAllItems} />
          <Route exact={true} path="/seller/:sellerId" render={renderSeller} />
          <Route
            exact={true}
            path="/item/:itemId"
            render={routerData =>
              this.renderDetails(routerData, this.addToCart)
            }
          />
          <Route
            exact={true}
            path="/reviewer/:reviewerId"
            render={renderReviewer}
          />
          <Route exact={true} path="/sellers" render={renderAllSellers} />
          <Route exact={true} path="/cart" render={this.renderCart} />
          <Route exact={true} path="/purchases" render={this.renderPurchases} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
