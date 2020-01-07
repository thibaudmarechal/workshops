import { connect } from "react-redux";
import React, { Component } from "react";

class AdvancedSearch extends Component {
  handleMinPrice = event => {
    let price = parseInt(event.target.value) || 0;
    this.props.dispatch({ type: "MIN_PRICE", payload: price });
  };

  handleMaxPrice = event => {
    let price = parseInt(event.target.value) || 0;
    this.props.dispatch({ type: "MAX_PRICE", payload: price });
  };

  handleChecked = event => {
    this.props.dispatch({
      type: "CHECKED",
      payload: event.target.checked ? "checked" : ""
    });
  };
  handleTag = event => {
    let tag = this.props.tags.filter(tag => tag === event.target.value);
  };

  render = () => {
    return (
      <div>
        <h3>Advanced Search</h3>
        <label>
          Min Price
          <input
            type="text"
            onChange={this.handleMinPrice}
            value={this.props.min}
          />
        </label>
        <label>
          Max Price
          <input
            type="text"
            onChange={this.handleMaxPrice}
            value={this.props.max}
          />
        </label>
        <label>
          Tags
          <input
            type="text"
            onChange={this.handleTag}
            value={this.props.tags}
          />
        </label>
        <input
          type="checkbox"
          onChange={this.handleChecked}
          checked={this.props.checked}
        ></input>
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

export default connect(mapStateToProps)(AdvancedSearch);
