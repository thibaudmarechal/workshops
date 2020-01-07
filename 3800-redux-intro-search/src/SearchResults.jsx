import { connect } from "react-redux";
import React, { Component } from "react";
import items from "./data.js";
import { Link } from "react-router-dom";

class UnconnectedSearchResults extends Component {
  render = () => {
    let results = items.filter(item => {
      return (
        item.name.includes(this.props.query) &&
        item.price >= this.props.min &&
        item.price <= this.props.max &&
        (this.props.checked ? item.inStock : true)
      );
    });
    return (
      <div>
        {results.map(result => {
          return (
            <div>
              <Link to={"/items/" + result.id}>{result.name}</Link>
            </div>
          );
        })}
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    query: st.searchQuery,
    min: st.min,
    max: st.max,
    checked: st.checked,
    advanced: st.advanced
  };
};

export default connect(mapStateToProps)(UnconnectedSearchResults);
