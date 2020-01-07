import { connect } from "react-redux";
import React, { Component } from "react";
import AdvancedSearch from "./AdvancedSearch.jsx";

class UnconnectedSearch extends Component {
  handleQuery = event => {
    this.props.dispatch({ type: "QUERY", payload: event.target.value });
    this.props.query = "";
  };

  clearForm = () => {
    this.props.dispatch({ type: "CLEAR" });
  };

  handleAdvancedSearch = event => {
    this.props.dispatch({ type: "ADVANCED" });
  };
  render = () => {
    return (
      <div>
        <form>
          <h3>Search</h3>
          <div>
            <button onClick={this.clearForm}>Clear Form</button>
          </div>
          <label>
            Query
            <input
              type="text"
              onChange={this.handleQuery}
              value={this.props.query}
            />
          </label>
          <button onClick={this.handleAdvancedSearch} type="button">
            Advanced Search
          </button>
          <div style={{ display: this.props.advanced }}>
            <AdvancedSearch />
          </div>
        </form>
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

let Search = connect(mapStateToProps)(UnconnectedSearch);
export default Search;
