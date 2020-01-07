import React, { Component } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import Item from "./Item.jsx";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  renderItem = routeProps => {
    return <Item itemId={routeProps.match.params.itemId} />;
  };
  render = () => {
    return (
      <BrowserRouter>
        <Search />
        <SearchResults />
        <Route path="/items/:itemId" render={this.renderItem} />
      </BrowserRouter>
    );
  };
}
export default App;
