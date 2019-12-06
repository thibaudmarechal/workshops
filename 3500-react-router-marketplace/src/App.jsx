import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Seller from "./Seller.jsx";
import Item from "./Item.jsx";
import Details from "./Details.jsx";
import { initialItems, initialSellers, initialReviews } from "./Data.js";

class App extends Component {
  renderAllItems() {
    return (
      <div>
        {initialItems.map(item => (
          <Item
            cost={item.price}
            key={item.id}
            id={item.id}
            sellerId={item.sellerId}
            imgLocation={item.image}
            description={item.description}
          />
        ))}
      </div>
    );
  }
  renderSeller = routerData => {
    let sellerId = routerData.match.params.sellerId;
    let candidate = initialSellers.find(seller => {
      return seller.id === sellerId;
    });
    return <Seller seller={candidate} />;
  };

  renderDetails = routerData => {
    let itemId = routerData.match.params.itemId;
    let candidate = initialItems.find(item => {
      return item.id === itemId;
    });
    return <Details item={candidate} />;
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={this.renderAllItems} />
          <Route
            exact={true}
            path="/seller/:sellerId"
            render={this.renderSeller}
          />
          <Route
            exact={true}
            path="/item/:itemId"
            render={this.renderDetails}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
